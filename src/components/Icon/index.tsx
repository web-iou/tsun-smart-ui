import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
import { useAppTheme } from "../Provider";
import { themeProp } from "../../theme";
export const setDefaultGlyphs = <T extends typeof defaultGlyphs>(obj: T) => {
  return (defaultGlyphs = obj);
};
let defaultGlyphs = {
  "4G": {
    unicode: ["", "4G"],
  },
  DCU: {
    unicode: ["", "DCU"],
  },
  SN: {
    unicode: ["", "SN"],
  },
  Safety: {
    unicode: ["", "Safety"],
  },
  "Wi-Fi": {
    unicode: ["", "Wi_Fi"],
  },
  add: {
    unicode: ["", "add"],
  },
  add1: {
    unicode: ["", "add1"],
  },
  area: {
    unicode: ["", "area"],
  },
  back: {
    unicode: ["", "back"],
  },
  camera: {
    unicode: ["", "camera"],
  },
  check: {
    unicode: ["", "check"],
  },
  "check-circle": {
    unicode: ["", "check_circle"],
  },
  circle: {
    unicode: ["", "circle"],
  },
  close: {
    unicode: ["", "close"],
  },
  code: {
    unicode: ["", "code"],
  },
  company: {
    unicode: ["", "company"],
  },
  control: {
    unicode: ["", "control"],
  },
  "device-manage": {
    unicode: ["", "device_manage"],
  },
  earth: {
    unicode: ["", "earth"],
  },
  edit: {
    unicode: ["", "edit"],
  },
  email: {
    unicode: ["", "email"],
  },
  equipment: {
    unicode: ["", "equipment"],
  },
  error: {
    unicode: ["", "error"],
  },
  eye: {
    unicode: ["", "eye"],
  },
  "eye-off": {
    unicode: ["", "eye_off"],
  },
  flashlight: {
    unicode: ["", "flashlight"],
  },
  "flashlight-off": {
    unicode: ["", "flashlight_off"],
  },
  image: {
    unicode: ["", "image"],
  },
  installer: {
    unicode: ["", "installer"],
  },
  "instanller-review": {
    unicode: ["", "instanller_review"],
  },
  more: {
    unicode: ["", "more"],
  },
  network: {
    unicode: ["", "network"],
  },
  nickname: {
    unicode: ["", "nickname"],
  },
  owner: {
    unicode: ["", "owner"],
  },
  password: {
    unicode: ["", "password"],
  },
  position: {
    unicode: ["", "position"],
  },
  pull: {
    unicode: ["", "pull"],
  },
  "real-time": {
    unicode: ["", "real_time"],
  },
  refresh: {
    unicode: ["", "refresh"],
  },
  repassword: {
    unicode: ["", "repassword"],
  },
  right: {
    unicode: ["", "right"],
  },
  scan: {
    unicode: ["", "scan"],
  },
  search: {
    unicode: ["", "search"],
  },
  state: {
    unicode: ["", "state"],
  },
  success: {
    unicode: ["", "success"],
  },
  timezone: {
    unicode: ["", "timezone"],
  },
  "to-left": {
    unicode: ["", "to_left"],
  },
  "to-right": {
    unicode: ["", "to_right"],
  },
  warning: {
    unicode: ["", "warning"],
  },
};
export type DefaultIconName = keyof typeof defaultGlyphs;
export interface IconProps extends TextProps {
  size?: number;
  color?: string;
  className?: string;
  theme?: themeProp;
  style?: Omit<StyleProp<TextStyle>, "size" | "color">;
  name: DefaultIconName;
}

const Icon = ({
  name,
  size = 24,
  color,
  style,
  theme: initialTheme,
  ...props
}: IconProps) => {
  const theme = useAppTheme(initialTheme);
  const unicode = defaultGlyphs[name]?.unicode;
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
