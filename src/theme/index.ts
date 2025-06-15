import colors, { darkColors } from "./color";
import fonts from "./font";
import type { $DeepPartial } from "@callstack/react-theme-provider";

export const lightTheme = {
  colors,
  fonts,
  isDark: false,
};
export const darkTheme = {
  colors: darkColors,
  fonts,
  isDark: true,
};
export type themeProp = $DeepPartial<typeof lightTheme>;
