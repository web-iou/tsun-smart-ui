import type { TextStyle } from "react-native";

/**
 * 字体样式配置接口 - Typography Style Configuration
 */
export interface TypographyStyleConfig {
  /** 大标题样式 - 18px/26px/600 @style fontSize:18 lineHeight:26 fontWeight:600 */
  titleLarge: TextStyle;
  /** 导航标题样式 - 17px/24px/600 @style fontSize:17 lineHeight:24 fontWeight:600 */
  navTitle: TextStyle;
  /** 卡片标题样式 - 15px/21px/500 @style fontSize:15 lineHeight:21 fontWeight:500 */
  cardTitle: TextStyle;
  /** 正文加粗样式 - 15px/21px/500 @style fontSize:15 lineHeight:21 fontWeight:500 */
  bodyStrong: TextStyle;
  /** 正文中等样式 - 15px/21px/400 @style fontSize:15 lineHeight:21 fontWeight:400 */
  bodyMedium: TextStyle;
  /** 正文样式 - 14px/20px/400 @style fontSize:14 lineHeight:20 fontWeight:400 */
  body: TextStyle;
  /** 说明文字样式 - 12px/16px/400 @style fontSize:12 lineHeight:16 fontWeight:400 */
  caption: TextStyle;
  /** 页脚样式 - 11px/15px/400 @style fontSize:11 lineHeight:15 fontWeight:400 */
  footer: TextStyle;
}

/**
 * 字体样式配置 - Typography Styles
 *
 * 提供一套完整的字体排版系统，包含不同级别的标题、正文、说明文字等样式
 * 所有样式都遵循设计系统的字体大小、行高和字重规范
 */
const typographyStyles: TypographyStyleConfig = {
  /** 大标题样式 - 用于页面主标题 */
  titleLarge: {
    fontSize: 18, // 字体大小: 18px
    lineHeight: 26, // 行高: 26px
    fontWeight: "600", // 字重: 粗体
  },
  /** 导航标题样式 - 用于导航栏标题 */
  navTitle: {
    fontSize: 17, // 字体大小: 17px
    lineHeight: 24, // 行高: 24px
    fontWeight: "600", // 字重: 粗体
  },
  /** 卡片标题样式 - 用于卡片组件标题 */
  cardTitle: {
    fontSize: 15, // 字体大小: 15px
    lineHeight: 21, // 行高: 21px
    fontWeight: "500", // 字重: 中粗
  },
  /** 正文加粗样式 - 用于重要正文内容 */
  bodyStrong: {
    fontSize: 15, // 字体大小: 15px
    lineHeight: 21, // 行高: 21px
    fontWeight: "500", // 字重: 中粗
  },
  /** 正文中等样式 - 用于一般正文内容 */
  bodyMedium: {
    fontSize: 15, // 字体大小: 15px
    lineHeight: 21, // 行高: 21px
    fontWeight: "400", // 字重: 常规
  },
  /** 正文样式 - 用于标准正文内容 */
  body: {
    fontSize: 14, // 字体大小: 14px
    lineHeight: 20, // 行高: 20px
    fontWeight: "400", // 字重: 常规
  },
  /** 说明文字样式 - 用于辅助说明文字 */
  caption: {
    fontSize: 12, // 字体大小: 12px
    lineHeight: 16, // 行高: 16px
    fontWeight: "400", // 字重: 常规
  },
  /** 页脚样式 - 用于页脚文字 */
  footer: {
    fontSize: 11, // 字体大小: 11px
    lineHeight: 15, // 行高: 15px
    fontWeight: "400", // 字重: 常规
  },
} as const;
export default typographyStyles;
