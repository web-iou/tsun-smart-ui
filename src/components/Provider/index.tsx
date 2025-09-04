import { createTheming } from "@callstack/react-theme-provider";
import { lightTheme } from "../../theme";

const {
  ThemeProvider,
  useTheme: useAppTheme,
  withTheme,
} = createTheming(lightTheme);

export { useAppTheme, withTheme };
export default ThemeProvider;
