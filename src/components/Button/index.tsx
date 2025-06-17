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
import Icon, { type IconName } from "../Icon";
import {
  getButtonStyles,
  getTextStyles,
  getIconStyles,
  getPressedStyle,
} from "./utils";
import { type RefObject } from "react";
import { View } from "react-native";
export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "large" | "medium";

type Props = PressableProps & {
  title: string;
  theme?: themeProp;
  style?: ViewStyle;
  icon?: IconName;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  textStyle?: TextStyle;
  ref?: RefObject<View>;
  className?: string;
};

const Button = ({
  title,
  theme: _initialTheme,
  style,
  icon,
  variant = "primary",
  size = "large",
  loading = false,
  textStyle,
  ref,
  className,
  ...props
}: Props) => {
  const theme = useAppTheme(_initialTheme);

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

  return (
    <Pressable
      ref={ref}
      disabled={props.disabled || loading}
      className={className}
      style={({ pressed }) => [
        styles.container,
        getButtonStyles({ ...commonParams, size }),
        pressed && !loading && getPressedStyle(commonParams),
        style,
      ]}
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
            name={icon}
            style={[styles.leftIcon, getIconStyles({ ...commonParams, size })]}
          />
        )
      )}

      <Text
        variant="bodyStrong"
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
    width: "100%",
    justifyContent: "center",
    borderRadius: 100,
    flexDirection: "row",
    paddingHorizontal: 32,
  },
  leftIcon: {
    marginRight: 8,
  },
  loadingIndicator: {
    marginRight: 8,
  },
});
export default Button;
