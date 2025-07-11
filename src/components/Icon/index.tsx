import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import { useAppTheme } from "../Provider";
import { themeProp } from "../../theme";

export const defaultGlyphs = {
  "4G": {
    unicode: 57345,
    hex: "\\E001",
    codePoint: "U+E001",
  },
  DCU: {
    unicode: 57346,
    hex: "\\E002",
    codePoint: "U+E002",
  },
  Safety: {
    unicode: 57347,
    hex: "\\E003",
    codePoint: "U+E003",
  },
  "Wi-Fi": {
    unicode: 57348,
    hex: "\\E004",
    codePoint: "U+E004",
  },
  add: {
    unicode: 57349,
    hex: "\\E005",
    codePoint: "U+E005",
  },
  add1: {
    unicode: 57350,
    hex: "\\E006",
    codePoint: "U+E006",
  },
  area: {
    unicode: 57351,
    hex: "\\E007",
    codePoint: "U+E007",
  },
  back: {
    unicode: 57352,
    hex: "\\E008",
    codePoint: "U+E008",
  },
  camera: {
    unicode: 57353,
    hex: "\\E009",
    codePoint: "U+E009",
  },
  check: {
    unicode: 57354,
    hex: "\\E00A",
    codePoint: "U+E00A",
  },
  "check-circle": {
    unicode: 57355,
    hex: "\\E00B",
    codePoint: "U+E00B",
  },
  close: {
    unicode: 57356,
    hex: "\\E00C",
    codePoint: "U+E00C",
  },
  code: {
    unicode: 57357,
    hex: "\\E00D",
    codePoint: "U+E00D",
  },
  company: {
    unicode: 57358,
    hex: "\\E00E",
    codePoint: "U+E00E",
  },
  control: {
    unicode: 57359,
    hex: "\\E00F",
    codePoint: "U+E00F",
  },
  "device-manage": {
    unicode: 57360,
    hex: "\\E010",
    codePoint: "U+E010",
  },
  earth: {
    unicode: 57361,
    hex: "\\E011",
    codePoint: "U+E011",
  },
  edit: {
    unicode: 57362,
    hex: "\\E012",
    codePoint: "U+E012",
  },
  email: {
    unicode: 57363,
    hex: "\\E013",
    codePoint: "U+E013",
  },
  equipment: {
    unicode: 57364,
    hex: "\\E014",
    codePoint: "U+E014",
  },
  error: {
    unicode: 57365,
    hex: "\\E015",
    codePoint: "U+E015",
  },
  eye: {
    unicode: 57366,
    hex: "\\E016",
    codePoint: "U+E016",
  },
  "eye-off": {
    unicode: 57367,
    hex: "\\E017",
    codePoint: "U+E017",
  },
  flashlight: {
    unicode: 57368,
    hex: "\\E018",
    codePoint: "U+E018",
  },
  "flashlight-off": {
    unicode: 57369,
    hex: "\\E019",
    codePoint: "U+E019",
  },
  image: {
    unicode: 57370,
    hex: "\\E01A",
    codePoint: "U+E01A",
  },
  installer: {
    unicode: 57371,
    hex: "\\E01B",
    codePoint: "U+E01B",
  },
  "instanller-review": {
    unicode: 57372,
    hex: "\\E01C",
    codePoint: "U+E01C",
  },
  more: {
    unicode: 57373,
    hex: "\\E01D",
    codePoint: "U+E01D",
  },
  network: {
    unicode: 57374,
    hex: "\\E01E",
    codePoint: "U+E01E",
  },
  nickname: {
    unicode: 57375,
    hex: "\\E01F",
    codePoint: "U+E01F",
  },
  owner: {
    unicode: 57376,
    hex: "\\E020",
    codePoint: "U+E020",
  },
  password: {
    unicode: 57377,
    hex: "\\E021",
    codePoint: "U+E021",
  },
  position: {
    unicode: 57378,
    hex: "\\E022",
    codePoint: "U+E022",
  },
  pull: {
    unicode: 57379,
    hex: "\\E023",
    codePoint: "U+E023",
  },
  refresh: {
    unicode: 57380,
    hex: "\\E024",
    codePoint: "U+E024",
  },
  repassword: {
    unicode: 57381,
    hex: "\\E025",
    codePoint: "U+E025",
  },
  right: {
    unicode: 57382,
    hex: "\\E026",
    codePoint: "U+E026",
  },
  scan: {
    unicode: 57383,
    hex: "\\E027",
    codePoint: "U+E027",
  },
  search: {
    unicode: 57384,
    hex: "\\E028",
    codePoint: "U+E028",
  },
  state: {
    unicode: 57385,
    hex: "\\E029",
    codePoint: "U+E029",
  },
  success: {
    unicode: 57386,
    hex: "\\E02A",
    codePoint: "U+E02A",
  },
  timezone: {
    unicode: 57387,
    hex: "\\E02B",
    codePoint: "U+E02B",
  },
  "to-left": {
    unicode: 57388,
    hex: "\\E02C",
    codePoint: "U+E02C",
  },
  "to-right": {
    unicode: 57389,
    hex: "\\E02D",
    codePoint: "U+E02D",
  },
  warning: {
    unicode: 57390,
    hex: "\\E02E",
    codePoint: "U+E02E",
  },
};

export type DefaultIconName = keyof typeof defaultGlyphs;
type glyphsType=Record<string, (typeof defaultGlyphs)["add"]>
interface IconProps<T extends glyphsType>
  extends TextProps {
  name: DefaultIconName;
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
