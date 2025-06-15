import { createTheming } from "@callstack/react-theme-provider";
import { lightTheme, type themeProp } from "../../theme";

const {
  ThemeProvider,
  useTheme: useAppTheme,
  withTheme,
} = createTheming<themeProp>(lightTheme);

export { useAppTheme, withTheme };
export default ThemeProvider;
