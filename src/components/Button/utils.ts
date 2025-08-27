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
  text: {
    text: string;
    pressed: string;
    disabled: string;
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
  reverse: boolean;
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
    height: size === "large" ? 48 : size === "medium" ? 40 : 32,
    paddingHorizontal: variant === "text" ? 0 : size === "small" ? 24 : 32,
  };

  if (variant === "text") {
    return {
      ...baseStyle,
      backgroundColor: "transparent",
      alignSelf: "flex-start",
    };
  }

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
  if (variant === "text") {
    return {
      color: disabled ? colors.text.textDisabled : colors.text.text,
    };
  }

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
  reverse = false,
}: GetIconStylesParams) => {
  const baseIconSize = size === "large" ? 24 : size === "medium" ? 16 : 12;
  if (variant === "text") {
    return {
      color: disabled ? colors.text.textDisabled : colors.text.text,
      fontSize: baseIconSize,
      marginLeft: reverse ? 8 : 0,
      marginRight: reverse ? 0 : 8,
    };
  }

  if (variant === "outline") {
    return {
      color: disabled ? colors.outline.textDisabled : colors.outline.text,
      fontSize: baseIconSize,
      marginRight: reverse ? 0 : 8,
    };
  }

  return {
    color: disabled ? colors.primary.textDisabled : colors.primary.text,
    fontSize: baseIconSize,
    marginRight: reverse ? 0 : 8,
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

  if (variant === "text") {
    return { backgroundColor: colors.text.pressed };
  }

  if (variant === "outline") {
    return { backgroundColor: colors.outline.pressed };
  }

  return { backgroundColor: colors.primary.pressed };
};
