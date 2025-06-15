import type { ButtonVariant, ButtonSize } from "./index";

// 按钮颜色类型定义
interface ButtonColors {
  primary: {
    background: string;
    pressed: string;
    disabled: string;
    text: string;
    textDisabled: string;
  };
  outline: {
    background: string;
    pressed: string;
    disabled: string;
    border: string;
    borderDisabled: string;
    text: string;
    textDisabled: string;
  };
}

// 获取按钮样式参数类型
interface GetButtonStylesParams {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  colors: ButtonColors;
}

// 获取文本样式参数类型
interface GetTextStylesParams {
  variant: ButtonVariant;
  disabled: boolean;
  colors: ButtonColors;
}

// 获取图标样式参数类型
interface GetIconStylesParams {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  colors: ButtonColors;
}

// 获取按压状态样式参数类型
interface GetPressedStyleParams {
  variant: ButtonVariant;
  disabled: boolean;
  colors: ButtonColors;
}

/**
 * 获取按钮容器样式
 */
export const getButtonStyles = ({
  variant,
  size,
  disabled,
  colors,
}: GetButtonStylesParams) => {
  const baseStyle = {
    height: size === "large" ? 48 : 40,
  };

  if (variant === "outline") {
    return {
      ...baseStyle,
      backgroundColor: disabled
        ? colors.outline.disabled
        : colors.outline.background,
      borderWidth: 2,
      borderColor: disabled
        ? colors.outline.borderDisabled
        : colors.outline.border,
    };
  }

  // primary variant
  return {
    ...baseStyle,
    backgroundColor: disabled
      ? colors.primary.disabled
      : colors.primary.background,
  };
};

/**
 * 获取文本样式
 */
export const getTextStyles = ({
  variant,
  disabled,
  colors,
}: GetTextStylesParams) => {
  if (variant === "outline") {
    return {
      color: disabled ? colors.outline.textDisabled : colors.outline.text,
    };
  }

  return {
    color: disabled ? colors.primary.textDisabled : colors.primary.text,
  };
};

/**
 * 获取图标样式
 */
export const getIconStyles = ({
  variant,
  size,
  disabled,
  colors,
}: GetIconStylesParams) => {
  const baseIconSize = size === "large" ? 24 : 16;

  if (variant === "outline") {
    return {
      color: disabled ? colors.outline.textDisabled : colors.outline.text,
      fontSize: baseIconSize,
    };
  }

  return {
    color: disabled ? colors.primary.textDisabled : colors.primary.text,
    fontSize: baseIconSize,
  };
};

/**
 * 获取按压状态样式
 */
export const getPressedStyle = ({
  variant,
  disabled,
  colors,
}: GetPressedStyleParams) => {
  if (disabled) return {};

  if (variant === "outline") {
    return { backgroundColor: colors.outline.pressed };
  }

  return { backgroundColor: colors.primary.pressed };
};
