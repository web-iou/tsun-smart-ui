/**
 * 品牌色配置 - Brand Colors
 */
export interface BrandColors {
  /** 主色 - 橙色 @color #FF891F */
  primary: string;
  /** 辅助色 - 深橙色 @color #EB7E1D */
  onPrimary: string;
  /** 浅色 - 浅橙色 @color #FFF4EB */
  primaryLight: string;
  /** 禁用色 - 淡橙色 @color #FFD0A5 */
  primaryDisabled: string;
}

/**
 * 浅色主题品牌色值 - 让VSCode直接显示颜色值
 */
export type LightBrandColors = {
  readonly primary: "#FF891F"; // 主色 - 橙色
  readonly onPrimary: "#EB7E1D"; // 辅助色 - 深橙色
  readonly primaryLight: "#FFF4EB"; // 浅色 - 浅橙色
  readonly primaryDisabled: "#FFD0A5"; // 禁用色 - 淡橙色
};

/**
 * 深色主题品牌色值 - 让VSCode直接显示颜色值
 */
export type DarkBrandColors = {
  readonly primary: "#FF891F"; // 主色 - 橙色
  readonly onPrimary: "#EB7E1D"; // 辅助色 - 深橙色
  readonly primaryLight: "#332414"; // 深色主题浅色 - 深橙棕
  readonly primaryDisabled: "#4D3521"; // 深色主题禁用色 - 深棕色
};

/**
 * 按钮色彩配置 - Button Colors
 */
export interface ButtonColors {
  primary: {
    /** 主要按钮背景色 @color #FF891F */
    background: string;
    /** 主要按钮按压状态 @color #EB7E1D */
    pressed: string;
    /** 主要按钮禁用状态 @color #FFD0A5 */
    disabled: string;
    /** 主要按钮文本色 @color #FFFFFF */
    text: string;
    /** 主要按钮禁用文本色 @color #FFFFFF */
    textDisabled: string;
  };
  outline: {
    /** 线框按钮背景色 @color transparent */
    background: string;
    /** 线框按钮按压状态 @color #FFF5E6 */
    pressed: string;
    /** 线框按钮禁用背景 @color transparent */
    disabled: string;
    /** 线框按钮边框色 @color #FF891F */
    border: string;
    /** 线框按钮禁用边框色 @color #FFD0A5 */
    borderDisabled: string;
    /** 线框按钮文本色 @color #FF891F */
    text: string;
    /** 线框按钮禁用文本色 @color #FFD0A5 */
    textDisabled: string;
  };
}

/**
 * 边框色配置 - Border Colors
 */
export interface BorderColors {
  /** 主要边框色 @color #E6E6E6 */
  primary: string;
}

/**
 * 背景色配置 - Background Colors
 */
export interface BackgroundColors {
  /** 禁用背景色 @color #F0F0F0 */
  disabled: string;
  /** 主要背景色 @color #F7F7F7 */
  primary: string;
}

/**
 * 中性色配置 - Neutral Colors
 */
export interface NeutralColors {
  /** 标题色 - 纯黑 @color #262626 */
  title: string;
  /** 副标题色 - 深灰 @color #595959 */
  secondaryTitle: string;
  /** 主要文本色 - 中灰 @color #8C8C8C */
  primary: string;
  /** 提示文本色 - 浅灰 @color #BFBFBF */
  tip: string;
  /** 禁用色 @color #D9D9D9 */
  disabled: string;
  /** 纯白色 @color #FFFFFF */
  white: string;
}

/**
 * 辅助色配置 - Functional Colors
 */
export interface FunctionalColors {
  /** 主色 @color #338BFF, #1FC16B, #F75455, #FF9500 */
  primary: string;
  /** 浅色 @color #EAF3FF, #E8F9F0, #FFF0F0, #FFF7E6 */
  light: string;
}

/**
 * 完整的色彩系统类型定义
 */
export interface ColorSystem {
  brand: BrandColors;
  button: ButtonColors;
  border: BorderColors;
  background: BackgroundColors;
  neutral: NeutralColors;
  info: FunctionalColors;
  success: FunctionalColors;
  error: FunctionalColors;
  warning: FunctionalColors;
}

// 主题色彩配置
export const colors: ColorSystem = {
  // 品牌色
  brand: {
    primary: "#FF891F", // 主色
    onPrimary: "#EB7E1D", // 辅助色
    primaryLight: "#FFF4EB", // 浅色
    primaryDisabled: "#FFD0A5", // 禁用色
  },

  // 按钮颜色
  button: {
    primary: {
      background: "#FF891F", // 主要按钮背景色
      pressed: "#EB7E1D", // 主要按钮按压状态
      disabled: "#FFD0A5", // 主要按钮禁用状态
      text: "#FFFFFF", // 主要按钮文本色
      textDisabled: "#FFFFFF", // 主要按钮禁用文本色
    },
    outline: {
      background: "transparent", // 线框按钮背景色
      pressed: "#FFF5E6", // 线框按钮按压状态
      disabled: "transparent", // 线框按钮禁用背景
      border: "#FF891F", // 线框按钮边框色
      borderDisabled: "#FFD0A5", // 线框按钮禁用边框色
      text: "#FF891F", // 线框按钮文本色
      textDisabled: "#FFD0A5", // 线框按钮禁用文本色
    },
  },
  border: {
    primary: "#E6E6E6", // 边框色
  },
  background: {
    disabled: "#F0F0F0",
    primary: "#F7F7F7",
  },
  // 中性色
  neutral: {
    title: "#262626", // 纯黑
    secondaryTitle: "#595959", // 深灰
    primary: "#8C8C8C", // 中灰
    tip: "#BFBFBF", // 浅灰
    disabled: "#D9D9D9", // 禁用色
    white: "#FFFFFF", // 纯白
  },

  // 辅助色
  info: {
    primary: "#338BFF", // 蓝色
    light: "#EAF3FF", // 浅蓝
  },

  success: {
    primary: "#1FC16B", // 绿色
    light: "#E8F9F0", // 浅绿
  },

  error: {
    primary: "#F75455", // 红色
    light: "#FFF0F0", // 浅红
  },

  warning: {
    primary: "#FF9500", // 警告色
    light: "#FFF7E6", // 浅黄
  },
};

/**
 * 深色主题颜色配置 - Dark Theme Colors
 */
export const darkColors: ColorSystem = {
  // 品牌色
  brand: {
    primary: "#FF891F", // 主色
    onPrimary: "#EB7E1D", // 辅助色
    primaryLight: "#332414", // 深色主题下的浅色
    primaryDisabled: "#4D3521", // 深色主题下的禁用色
  },

  // 按钮颜色 - 深色主题
  button: {
    primary: {
      background: "#FF7A00", // 主要按钮背景色
      pressed: "#E66A00", // 主要按钮按压状态
      disabled: "#4D3521", // 深色主题下的禁用状态
      text: "#FFFFFF", // 主要按钮文本色
      textDisabled: "#999999", // 深色主题下的禁用文本色
    },
    outline: {
      background: "transparent", // 线框按钮背景色
      pressed: "#332414", // 深色主题下的按压状态
      disabled: "transparent", // 线框按钮禁用背景
      border: "#FF7A00", // 线框按钮边框色
      borderDisabled: "#4D3521", // 深色主题下的禁用边框色
      text: "#FF7A00", // 线框按钮文本色
      textDisabled: "#666666", // 深色主题下的禁用文本色
    },
  },

  border: {
    primary: "#333333", // 深色主题边框色
  },
  background: {
    disabled: "#2A2A2A",
    primary: "#1A1A1A",
  },
  // 中性色 - 深色主题
  neutral: {
    title: "#FFFFFF", // 深色主题标题色
    secondaryTitle: "#CCCCCC", // 深色主题副标题
    primary: "#999999", // 深色主题主要文本
    tip: "#666666", // 深色主题提示文本
    disabled: "#444444", // 深色主题禁用色
    white: "#000000", // 深色主题"白色"实际为黑色
  },
  info: {
    primary: "#338BFF", // 蓝色
    light: "#EAF3FF", // 浅蓝
  },

  success: {
    primary: "#1FC16B", // 绿色
    light: "#E8F9F0", // 浅绿
  },

  error: {
    primary: "#F75455", // 红色
    light: "#FFF0F0", // 浅红
  },

  warning: {
    primary: "#FF9500", // 警告色
    light: "#FFF7E6", // 浅黄
  },
};

export default colors;
