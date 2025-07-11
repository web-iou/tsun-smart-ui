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
 * 
 * @description
 * 定义了三种类型按钮的颜色配置：
 * 1. primary - 主要按钮：实心背景的按钮
 * 2. outline - 线框按钮：带边框的透明背景按钮
 * 3. text - 文本按钮：无边框无背景的纯文本按钮
 * 
 * 每种按钮都包含以下状态的颜色定义：
 * - 正常状态
 * - 按压状态 (pressed)
 * - 禁用状态 (disabled)
 * - 文本颜色
 * - 禁用状态文本颜色
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
  text: {
    /** 
     * 文本按钮文本颜色
     * @default #FF891F - 品牌橙色
     * @description 按钮处于正常状态时的文本颜色
     */
    text: string;
    /** 
     * 文本按钮按压状态的背景色
     * @default rgba(255, 137, 31, 0.12) - 半透明橙色
     * @description 按钮被点击时的背景色，使用低透明度提供轻微的视觉反馈
     */
    pressed: string;
    /** 
     * 文本按钮禁用状态的背景色
     * @default transparent - 透明
     * @description 按钮处于禁用状态时的背景色，保持透明
     */
    disabled: string;
    /** 
     * 文本按钮禁用状态的文本颜色
     * @default #FFE4CC - 浅橙色
     * @description 按钮处于禁用状态时的文本颜色，使用较浅的颜色表示不可用
     */
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
  disabled: FunctionalColors;
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
    text: {
      text: "#FF891F",
      pressed: "rgba(255, 137, 31, 0.12)",
      disabled: "transparent",
      textDisabled: "#FFE4CC",
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
  disabled: {
    primary: "#BFBFBF", // 禁用色
    light: "#F0F0F0", // 浅禁用色
  },
};

/**
 * 深色主题颜色配置 - Dark Theme Colors
 */
export const darkColors: ColorSystem = {
  // 品牌色
  brand: {
    primary: "#EB882F", // 主色
    onPrimary: "#D67C2B", // 辅助色
    primaryLight: "#49321F", // 深色主题下的浅色
    primaryDisabled: "#69411F", // 深色主题下的禁用色
  },

  // 按钮颜色 - 深色主题
  button: {
    primary: {
      background: "#EB882F", // 主要按钮背景色 - 深色主题橙色
      pressed: "#D67C2B", // 主要按钮按压状态 - 深橙色
      disabled: "#69411F", // 主要按钮禁用状态 - 暗褐色
      text: "#FFFFFF", // 主要按钮文本色 - 白色
      textDisabled: "#999999", // 主要按钮禁用文本色 - 灰色
    },
    outline: {
      background: "transparent", // 线框按钮背景色 - 透明
      pressed: "#332414", // 线框按钮按压状态 - 深褐色
      disabled: "transparent", // 线框按钮禁用背景 - 透明
      border: "#FF7A00", // 线框按钮边框色 - 亮橙色
      borderDisabled: "#4D3521", // 线框按钮禁用边框色 - 暗褐色
      text: "#FF7A00", // 线框按钮文本色 - 亮橙色
      textDisabled: "#666666", // 线框按钮禁用文本色 - 深灰色
    },
    text: {
      text: "#FF7A00", // 文本按钮文本色 - 亮橙色
      pressed: "rgba(255, 122, 0, 0.12)", // 文本按钮按压背景色 - 半透明橙色
      disabled: "transparent", // 文本按钮禁用背景色 - 透明
      textDisabled: "#4D3521", // 文本按钮禁用文本色 - 暗褐色
    },
  },

  border: {
    primary: "#3D3D3D", // 深色主题边框色
  },
  background: {
    disabled: "#292929",
    primary: "#121314",
  },
  // 中性色 - 深色主题
  neutral: {
    title: "#E0E0E0", // 深色主题标题色
    secondaryTitle: "#B8B8B8", // 深色主题副标题
    primary: "#8F8F8F", // 深色主题主要文本
    tip: "#595959", // 深色主题提示文本
    disabled: "#525252", // 深色主题禁用色
    white: "#1C1D1F", // 深色主题"白色"实际为黑色
  },
  info: {
    primary: "#4797FF", // 蓝色
    light: "#233E63", // 浅蓝
  },

  success: {
    primary: "#2EC173", // 绿色
    light: "#1D4632", // 浅绿
  },

  error: {
    primary: "#F76869", // 红色
    light: "#532B2C", // 浅红
  },

  warning: {
    primary: "#EB882F", // 警告色
    light: "#FFF7E6", // 浅黄
  },
  disabled: {
    primary: "#BFBFBF", // 禁用色
    light: "#F0F0F0", // 浅禁用色
  },
};

export default colors;
