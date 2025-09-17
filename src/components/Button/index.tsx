import {
  Pressable,
  StyleSheet,
  type PressableProps,
  type ViewStyle,
  ActivityIndicator,
  type TextStyle,
} from "react-native";
import Text from "../Text";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import Icon, { type DefaultIconName } from "../Icon";
import {
  getButtonStyles,
  getTextStyles,
  getIconStyles,
  getPressedStyle,
} from "./utils";
import { useCallback, useState, useMemo, type RefObject } from "react";
import { View } from "react-native";
import useDebounce from "../../hooks/useDebounce";
export type ButtonVariant = "primary" | "outline" | "text";
export type ButtonSize = "large" | "medium" | "small";
type Props = PressableProps & {
  title: string;
  theme?: themeProp;
  style?: ViewStyle;
  icon?: DefaultIconName;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  textStyle?: TextStyle;
  ref?: RefObject<View>;
  className?: string;
  delay?: number | boolean;
};
const Button = ({
  title,
  theme: _initialTheme,
  style,
  icon,
  delay,
  variant = "primary",
  size = "large",
  loading = false,
  textStyle,
  ref,
  className,
  onPress,
  ...props
}: Props) => {
  const theme = useAppTheme(_initialTheme);
  const [isPressed, setIsPressed] = useState(false);
  
  // 处理delay属性的不同类型
  const debounceDelay = useMemo(() => {
    if (typeof delay === 'boolean') {
      return delay ? 300 : 0; // 如果是true，使用默认300ms；如果是false，不防抖
    }
    return typeof delay === 'number' ? delay : 0; // 如果是数字，使用该数字；否则不防抖
  }, [delay]);

  // 创建防抖的onPress函数
  const { run: debouncedOnPress } = useDebounce(
    useCallback((event: any) => {
      onPress?.(event);
    }, [onPress]),
    { delay: debounceDelay }
  );

  // 根据是否需要防抖来决定使用哪个onPress函数
  const handlePress = useMemo(() => {
    return debounceDelay > 0 ? debouncedOnPress : onPress;
  }, [debounceDelay, debouncedOnPress, onPress]);
  // 从主题中获取按钮颜色
  const colors = theme.colors.button;

  // 通用样式参数
  const commonParams = {
    variant,
    disabled: !!props.disabled || loading,
    colors,
  };
  // 获取loading状态下的指示器颜色
  const getLoadingColor = () => {
    if (variant === "outline") {
      return colors.outline.text;
    }
    return colors.primary.text;
  };

  const containerStyle = StyleSheet.flatten([
    styles.container,
    getButtonStyles({ ...commonParams, size }),
    isPressed &&
      !loading &&
      variant !== "text" &&
      getPressedStyle(commonParams),
    // text类型按钮按压时使用透明度
    isPressed && !loading && variant === "text" && { opacity: 0.7 },
    style,
  ]);
  return (
    <Pressable
      ref={ref}
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      onPress={handlePress}
      disabled={props.disabled || loading}
      style={containerStyle}
      className={className}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={getLoadingColor()}
          style={styles.loadingIndicator}
        />
      ) : (
        icon && (
          <Icon
            defaultName={icon}
            style={[
              getIconStyles({
                ...commonParams,
                size,
                //@ts-ignore
                reverse: containerStyle?.flexDirection === "row-reverse",
              }),
            ]}
          />
        )
      )}

      <Text
        variant={size === "small" ? "body" : "bodyStrong"}
        style={[getTextStyles(commonParams), textStyle]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    flexDirection: "row",
  },
  loadingIndicator: {
    marginRight: 8,
  },
});
export default Button;
