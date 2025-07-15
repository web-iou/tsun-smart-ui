import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import { useAppTheme } from "../Provider";
import { themeProp } from "../../theme";
let defaultGlyphs: ReturnType<typeof getGlyph> = {};
export const getGlyph = <T extends object>(obj: T) => {
  defaultGlyphs = obj;
  return obj;
};
export type DefaultIconName = keyof ReturnType<typeof getGlyph>;
export interface IconProps extends TextProps {
  size?: number;
  color?: string;
  className?: string;
  theme?: themeProp;
  style?: Omit<StyleProp<TextStyle>, "size" | "color">;
}

const Icon = ({
  //@ts-ignore
  name,
  size = 24,
  color,
  style,
  theme: initialTheme,
  ...props
}: IconProps) => {
  const theme = useAppTheme(initialTheme);
  //@ts-ignore
  const unicode = defaultGlyphs[name as DefaultIconName]?.unicode;
  if (!unicode) {
    return null;
  }

  return (
    <Text
      style={[
        {
          fontSize: size,
          color: color ?? theme.colors.neutral.title,
          fontFamily: "iconfont",
        },
        style,
      ]}
      {...props}
    >
      {unicode[0]}
    </Text>
  );
};

export default Icon;
