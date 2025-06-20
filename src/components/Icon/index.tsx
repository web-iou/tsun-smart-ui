import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import { useAppTheme } from "../Provider";
import { themeProp } from "../../theme";

export const defaultGlyphs = {
  Safety: {
    unicode: 57345,
    hex: "\\E001",
    codePoint: "U+E001",
  },
  add: {
    unicode: 57346,
    hex: "\\E002",
    codePoint: "U+E002",
  },
  add1: {
    unicode: 57347,
    hex: "\\E003",
    codePoint: "U+E003",
  },
  area: {
    unicode: 57348,
    hex: "\\E004",
    codePoint: "U+E004",
  },
  avatar: {
    unicode: 57349,
    hex: "\\E005",
    codePoint: "U+E005",
  },
  back: {
    unicode: 57350,
    hex: "\\E006",
    codePoint: "U+E006",
  },
  camera: {
    unicode: 57351,
    hex: "\\E007",
    codePoint: "U+E007",
  },
  check: {
    unicode: 57352,
    hex: "\\E008",
    codePoint: "U+E008",
  },
  "check-circle": {
    unicode: 57353,
    hex: "\\E009",
    codePoint: "U+E009",
  },
  close: {
    unicode: 57354,
    hex: "\\E00A",
    codePoint: "U+E00A",
  },
  code: {
    unicode: 57355,
    hex: "\\E00B",
    codePoint: "U+E00B",
  },
  company: {
    unicode: 57356,
    hex: "\\E00C",
    codePoint: "U+E00C",
  },
  "device-manage": {
    unicode: 57357,
    hex: "\\E00D",
    codePoint: "U+E00D",
  },
  earth: {
    unicode: 57358,
    hex: "\\E00E",
    codePoint: "U+E00E",
  },
  edit: {
    unicode: 57359,
    hex: "\\E00F",
    codePoint: "U+E00F",
  },
  email: {
    unicode: 57360,
    hex: "\\E010",
    codePoint: "U+E010",
  },
  error: {
    unicode: 57361,
    hex: "\\E011",
    codePoint: "U+E011",
  },
  eye: {
    unicode: 57362,
    hex: "\\E012",
    codePoint: "U+E012",
  },
  "eye-off": {
    unicode: 57363,
    hex: "\\E013",
    codePoint: "U+E013",
  },
  flashlight: {
    unicode: 57364,
    hex: "\\E014",
    codePoint: "U+E014",
  },
  "flashlight-off": {
    unicode: 57365,
    hex: "\\E015",
    codePoint: "U+E015",
  },
  image: {
    unicode: 57366,
    hex: "\\E016",
    codePoint: "U+E016",
  },
  installer: {
    unicode: 57367,
    hex: "\\E017",
    codePoint: "U+E017",
  },
  "instanller-review": {
    unicode: 57368,
    hex: "\\E018",
    codePoint: "U+E018",
  },
  more: {
    unicode: 57369,
    hex: "\\E019",
    codePoint: "U+E019",
  },
  network: {
    unicode: 57370,
    hex: "\\E01A",
    codePoint: "U+E01A",
  },
  nickname: {
    unicode: 57371,
    hex: "\\E01B",
    codePoint: "U+E01B",
  },
  owner: {
    unicode: 57372,
    hex: "\\E01C",
    codePoint: "U+E01C",
  },
  password: {
    unicode: 57373,
    hex: "\\E01D",
    codePoint: "U+E01D",
  },
  pull: {
    unicode: 57374,
    hex: "\\E01E",
    codePoint: "U+E01E",
  },
  refresh: {
    unicode: 57375,
    hex: "\\E01F",
    codePoint: "U+E01F",
  },
  repassword: {
    unicode: 57376,
    hex: "\\E020",
    codePoint: "U+E020",
  },
  right: {
    unicode: 57377,
    hex: "\\E021",
    codePoint: "U+E021",
  },
  search: {
    unicode: 57378,
    hex: "\\E022",
    codePoint: "U+E022",
  },
  success: {
    unicode: 57379,
    hex: "\\E023",
    codePoint: "U+E023",
  },
  timezone: {
    unicode: 57380,
    hex: "\\E024",
    codePoint: "U+E024",
  },
  warning: {
    unicode: 57381,
    hex: "\\E025",
    codePoint: "U+E025",
  },
};

export type DefaultIconName = keyof typeof defaultGlyphs;
type glyphsType=Record<string, (typeof defaultGlyphs)["add"]>
interface IconProps<T extends glyphsType>
  extends TextProps {
  name: DefaultIconName | keyof T;
  size?: number;
  color?: string;
  className?: string;
  customGlyphs?: T;
  theme?: themeProp;
  style?: Omit<StyleProp<TextStyle>, "size" | "color">;
}

const Icon = <T extends glyphsType>({
  name,
  size = 24,
  color,
  style,
  theme: initialTheme,
  customGlyphs,
  ...props
}: IconProps<T>) => {
  const allGlyphs = {
    ...defaultGlyphs,
    ...customGlyphs,
  };
  const theme = useAppTheme(initialTheme);
  const unicode = allGlyphs[name as unknown as keyof typeof allGlyphs]?.unicode;
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
      {String.fromCodePoint(unicode)}
    </Text>
  );
};

export default Icon;
