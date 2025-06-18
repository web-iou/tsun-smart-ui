import  { useRef, useEffect } from "react";
import {
  Pressable,
  Animated,
  ActivityIndicator,
  StyleSheet,
  View,
  type ViewProps,
  ViewStyle,
} from "react-native";
import Text from "../Text";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
export interface SwitchProps extends Omit<ViewProps, "children"> {
  /** 开关状态 */
  value: boolean;
  /** 状态改变回调 */
  onValueChange?: (value: boolean) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 是否显示内嵌文字 */
  showText?: boolean;
  /** 开启状态文字 */
  onText?: string;
  /** 关闭状态文字 */
  offText?: string;
  /** 主题 */
  theme?: themeProp;
  style?: ViewStyle;
  className?: string;
}

const Switch= ({
  value,
  onValueChange,
  disabled = false,
  loading = false,
  showText = false,
  onText = "开",
  offText = "关",
  theme: initialTheme,
  style,
  ...props
}:SwitchProps) => {
  const theme = useAppTheme(initialTheme);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const handlePress = () => {
    if (disabled || loading) return;
    onValueChange?.(!value);
  };

  // 获取背景颜色
  const getBackgroundColor = () => {
    if (disabled) {
      return value
        ? theme.colors.brand.primaryDisabled
        : theme.colors.neutral.disabled;
    }
    return value ? theme.colors.brand.primary : theme.colors.neutral.tip;
  };

  // 获取滑块颜色
  const getThumbColor = () => {
    return theme.colors.neutral.white;
  };

  // 获取文字颜色
  const getTextColor = () => {
    return value ? theme.colors.neutral.white : theme.colors.neutral.primary;
  };

  // 计算滑块位置
  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 24], // 有文字时需要更多空间
  });

  const switchWidth = 50;
  const switchHeight = 28;
  const thumbSize = 24;

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={[
        styles.container,
        {
          width: switchWidth,
          height: switchHeight,
          backgroundColor: getBackgroundColor(),
        },
        style,
      ]}
      {...props}
    >
      {/* 内嵌文字 */}
      {showText && (
        <View style={styles.textContainer}>
          <Text
            style={[
              {
                color: getTextColor(),
                opacity: value ? 1 : 0,
              },
            ]}
          >
            {onText}
          </Text>
          <Text
            style={[
              {
                color: getTextColor(),
                opacity: value ? 0 : 1,
              },
            ]}
          >
            {offText}
          </Text>
        </View>
      )}

      {/* 滑块 */}
      <Animated.View
        style={[
          styles.thumb,
          {
            width: thumbSize,
            height: thumbSize,
            backgroundColor: getThumbColor(),
            transform: [{ translateX: thumbTranslateX }],
          },
        ]}
      >
        {/* 加载状态 */}
        {loading && (
          <ActivityIndicator
            size="small"
            color={theme.colors.brand.primary}
            style={styles.loading}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    justifyContent: "center",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  thumb: {
    borderRadius: 30,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
  },
});

export default Switch;
