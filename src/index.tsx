/// <reference types="nativewind/types" />

// 导出主题相关
export { default as colors, darkColors } from "./theme/color";
export { lightTheme, darkTheme } from "./theme";
export { default as typographyStyles } from "./theme/font";

// 导出主题类型定义
export type {
  ColorSystem,
  BrandColors,
  ButtonColors,
  BorderColors,
  BackgroundColors,
  NeutralColors,
  FunctionalColors,
} from "./theme/color";
export type { TypographyStyleConfig } from "./theme/font";

// 导出Provider组件及其相关hooks
export {
  default as ThemeProvider,
  useAppTheme,
  withTheme,
} from "./components/Provider";

// 导出Text组件及其类型
export { default as Text } from "./components/Text";
export type { TextComponentProps } from "./components/Text";

// 导出Button组件
export { default as Button } from "./components/Button";
export type { ButtonVariant, ButtonSize } from "./components/Button";

// 导出Icon组件
export { default as Icon } from "./components/Icon";

// 导出Tag组件
export { default as Tag } from "./components/Tag";
export type { TagType } from "./components/Tag/utils";

// 导出Switch组件
export { default as Switch } from "./components/Switch";
export type { SwitchProps } from "./components/Switch";

// 导出Search组件
export { default as Search } from "./components/Search";

// 导出TextInput组件
export { default as TextInput } from "./components/TextInput";

// 导出Cell组件
export { default as Cell } from "./components/Cell";
export type { DataItem as CellDataType } from "./components/Cell";

// 导出Radio组件
export { default as Radio } from "./components/Radio";

// 导出CodeTextInput组件
export { default as CodeTextInput } from "./components/CodeTextInput";
export type {
  CodeTextInputProps,
  CodeTextInputI18n,
} from "./components/CodeTextInput";

// 导出Card组件
export { default as Card } from "./components/Card";

// 导出hooks
export { useCountdown } from "./hooks";
export type { CountdownOptions, CountdownResult } from "./hooks";
