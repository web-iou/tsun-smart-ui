import { Text as RNText, type TextProps } from "react-native";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
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

  /** 主题配置 */
  theme?: themeProp;
}

const Text = ({
  variant = "body",
  style,
  theme: initialTheme,
  ...props
}: TextComponentProps) => {
  const theme = useAppTheme(initialTheme);
  const variantStyle = theme.fonts?.[variant];

  return (
    <RNText
      {...props}
      style={[
        {
          color: theme.colors?.neutral.disabled,
        },
        variantStyle,
        style,
      ]}
    />
  );
};

export default Text;
