import { Text as RNText, type TextProps } from "react-native";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import { RefObject, useRef } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
export type TextVariantType =
  | "titleLarge" /** 18px/26px/600 大标题样式 */
  | "navTitle" /** 17px/24px/600 导航标题样式 */
  | "cardTitle" /** 16px/22px/500 卡片标题样式 */
  | "bodyStrong" /** 15px/21px/500 正文加粗样式 */
  | "bodyMedium" /** 15px/21px/400 正文中等样式 */
  | "body" /** 14px/20px/400 正文样式 */
  | "caption" /** 12px/16px/400 说明文字样式 */
  | "footer"; /** 11px/15px/400 页脚样式 */
/**
 * 动画配置类型
 */
export interface AnimationConfig {
  /** 动画类型 */
  type?: 'opacity' | 'scale' | 'both' | 'none';
  /** 动画持续时间 */
  duration?: number;
  /** 按压时的透明度值 (0-1) */
  pressOpacity?: number;
  /** 按压时的缩放比例 (0-2) */
  pressScale?: number;
  /** 是否使用弹簧动画 */
  useSpring?: boolean;
}

/**
 * Text组件属性接口
 */
export interface TextComponentProps extends TextProps {
  /**
   * 字体变体 - 可选值及对应样式：
   *
   * - titleLarge → 18px/26px/600 大标题样式
   * - navTitle → 17px/24px/600 导航标题样式
   * - cardTitle → 16px/22px/500 卡片标题样式
   * - bodyStrong → 15px/21px/500 正文加粗样式
   * - bodyMedium → 15px/21px/400 正文中等样式
   * - body → 14px/20px/400 正文样式
   * - caption → 12px/16px/400 说明文字样式
   * - footer → 11px/15px/400 页脚样式
   */
  variant?: TextVariantType;
  className?: string;
  ref?: RefObject<RNText>;
  /** 主题配置 */
  theme?: themeProp;
  /** 动画配置 */
  animationConfig?: AnimationConfig;
}

const Text = ({
  variant = "body",
  style,
  theme: initialTheme,
  ref,
  animationConfig,
  ...props
}: TextComponentProps) => {
  const theme = useAppTheme(initialTheme);
  const variantStyle = theme.fonts?.[variant];
  const textRef = useRef<RNText>(null);
  
  // 动画值
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  
  // 默认动画配置
  const config = {
    type: 'both' as const,
    duration: 150,
    pressOpacity: 0.7,
    pressScale: 0.95,
    useSpring: true,
    ...animationConfig,
  };

  // 动画样式
  const animatedStyle = useAnimatedStyle(() => {
    const baseStyle: any = {};
    
    if (config.type === 'opacity' || config.type === 'both') {
      baseStyle.opacity = opacity.value;
    }
    
    if (config.type === 'scale' || config.type === 'both') {
      baseStyle.transform = [{ scale: scale.value }];
    }
    
    return baseStyle;
  }, [config.type]);

  // 动画函数
  const animateIn = () => {
    'worklet';
    if (config.type === 'opacity' || config.type === 'both') {
      opacity.value = config.useSpring 
        ? withSpring(config.pressOpacity, { damping: 15, stiffness: 300 })
        : withTiming(config.pressOpacity, { duration: config.duration });
    }
    
    if (config.type === 'scale' || config.type === 'both') {
      scale.value = config.useSpring
        ? withSpring(config.pressScale, { damping: 15, stiffness: 300 })
        : withTiming(config.pressScale, { duration: config.duration });
    }
  };

  const animateOut = () => {
    'worklet';
    if (config.type === 'opacity' || config.type === 'both') {
      opacity.value = config.useSpring
        ? withSpring(1, { damping: 15, stiffness: 300 })
        : withTiming(1, { duration: config.duration });
    }
    
    if (config.type === 'scale' || config.type === 'both') {
      scale.value = config.useSpring
        ? withSpring(1, { damping: 15, stiffness: 300 })
        : withTiming(1, { duration: config.duration });
    }
  };

  // 如果禁用动画，返回普通Text
  if (config.type === 'none') {
    return (
      <RNText
        style={[
          {
            color: theme.colors?.neutral.title,
          },
          variantStyle,
          style,
        ]}
        ref={ref ?? textRef}
        {...props}
      />
    );
  }

  return (
    <Animated.Text
      style={[
        {
          color: theme.colors?.neutral.title,
        },
        variantStyle,
        animatedStyle,
        style,
      ]}
      onPressIn={animateIn}
      onPressOut={animateOut}
      ref={ref ?? textRef}
      suppressHighlighting
      {...props}
    />
  );
};
export default Text;
