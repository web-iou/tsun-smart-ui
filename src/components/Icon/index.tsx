import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";
const glyphs = [
  {
    icon_id: "44582611",
    name: "error",
    font_class: "a-error1",
    unicode: "e694",
    unicode_decimal: 59028,
  },
  {
    icon_id: "44582606",
    name: "success",
    font_class: "a-success1",
    unicode: "e695",
    unicode_decimal: 59029,
  },
  {
    icon_id: "44545521",
    name: "Safety",
    font_class: "yanzhengma",
    unicode: "e693",
    unicode_decimal: 59027,
  },
  {
    icon_id: "44543246",
    name: "more",
    font_class: "gengduo",
    unicode: "e603",
    unicode_decimal: 58883,
  },
  {
    icon_id: "44532750",
    name: "back",
    font_class: "back",
    unicode: "e690",
    unicode_decimal: 59024,
  },
  {
    icon_id: "44531749",
    name: "close",
    font_class: "close",
    unicode: "e684",
    unicode_decimal: 59012,
  },
  {
    icon_id: "44531667",
    name: "flashlight",
    font_class: "flashlight",
    unicode: "e68a",
    unicode_decimal: 59018,
  },
  {
    icon_id: "44531662",
    name: "flashlight-off",
    font_class: "flashlight-off",
    unicode: "e68e",
    unicode_decimal: 59022,
  },
  {
    icon_id: "44531661",
    name: "edit",
    font_class: "edit",
    unicode: "e68f",
    unicode_decimal: 59023,
  },
  {
    icon_id: "44531663",
    name: "image",
    font_class: "image",
    unicode: "e688",
    unicode_decimal: 59016,
  },
  {
    icon_id: "44531498",
    name: "camera",
    font_class: "Camera",
    unicode: "e687",
    unicode_decimal: 59015,
  },
  {
    icon_id: "44498270",
    name: "add",
    font_class: "zengjia",
    unicode: "e67d",
    unicode_decimal: 59005,
  },
  {
    icon_id: "44498183",
    name: "network",
    font_class: "wangluopeizhi1",
    unicode: "e692",
    unicode_decimal: 59026,
  },
  {
    icon_id: "44497573",
    name: "email",
    font_class: "youxiang1",
    unicode: "e691",
    unicode_decimal: 59025,
  },
  {
    icon_id: "44497522",
    name: "repassword",
    font_class: "zaicishurumima1",
    unicode: "e68c",
    unicode_decimal: 59020,
  },
  {
    icon_id: "44497518",
    name: "nickname",
    font_class: "nicheng1",
    unicode: "e68d",
    unicode_decimal: 59021,
  },
  {
    icon_id: "44497244",
    name: "password",
    font_class: "mima1",
    unicode: "e68b",
    unicode_decimal: 59019,
  },
  {
    icon_id: "44497123",
    name: "right",
    font_class: "fanhui1",
    unicode: "e686",
    unicode_decimal: 59014,
  },
  {
    icon_id: "44497119",
    name: "pull",
    font_class: "a-huaban24",
    unicode: "e689",
    unicode_decimal: 59017,
  },
  {
    icon_id: "44496210",
    name: "search",
    font_class: "search-2",
    unicode: "e681",
    unicode_decimal: 59009,
  },
  {
    icon_id: "44496211",
    name: "owner",
    font_class: "yezhu",
    unicode: "e682",
    unicode_decimal: 59010,
  },
  {
    icon_id: "44496212",
    name: "timezone",
    font_class: "shiqu",
    unicode: "e683",
    unicode_decimal: 59011,
  },
  {
    icon_id: "44496214",
    name: "warning",
    font_class: "zhuyi",
    unicode: "e685",
    unicode_decimal: 59013,
  },
  {
    icon_id: "44496193",
    name: "company",
    font_class: "gongsimingcheng",
    unicode: "e675",
    unicode_decimal: 58997,
  },
  {
    icon_id: "44496196",
    name: "instanller-review",
    font_class: "renzheng-yunyingshangrenzheng",
    unicode: "e678",
    unicode_decimal: 59000,
  },
  {
    icon_id: "44496197",
    name: "earth",
    font_class: "dangqianzhandian",
    unicode: "e679",
    unicode_decimal: 59001,
  },
  {
    icon_id: "44496198",
    name: "code",
    font_class: "bianma",
    unicode: "e67a",
    unicode_decimal: 59002,
  },
  {
    icon_id: "44496199",
    name: "area",
    font_class: "diqu",
    unicode: "e67b",
    unicode_decimal: 59003,
  },
  {
    icon_id: "44496201",
    name: "check-circle",
    font_class: "xuanzhong-1",
    unicode: "e67c",
    unicode_decimal: 59004,
  },
  {
    icon_id: "44496203",
    name: "eye",
    font_class: "yanjing1",
    unicode: "e67e",
    unicode_decimal: 59006,
  },
  {
    icon_id: "44496205",
    name: "check",
    font_class: "xuanzhong",
    unicode: "e67f",
    unicode_decimal: 59007,
  },
  {
    icon_id: "44496209",
    name: "refresh",
    font_class: "shuaxin",
    unicode: "e680",
    unicode_decimal: 59008,
  },
  {
    icon_id: "44494515",
    name: "eye-off",
    font_class: "biyan1",
    unicode: "e671",
    unicode_decimal: 58993,
  },
  {
    icon_id: "44493679",
    name: "installer",
    font_class: "anzhuangshang",
    unicode: "e66d",
    unicode_decimal: 58989,
  },
  {
    icon_id: "44493680",
    name: "device-manage",
    font_class: "shebeiguanli",
    unicode: "e66e",
    unicode_decimal: 58990,
  },
] as const;
export type IconName = (typeof glyphs)[number]["name"];

const Icon = ({
  name,
  size = 24,
  color,
  style,
  ...props
}: {
  name: IconName;
  size?: number;
  color?: string;
  className?:string;
  style?: Omit<StyleProp<TextStyle>, "size" | "color">;
} & TextProps) => {
  const glyph = glyphs.find((item) => item.name === name);
  return (
    <Text
      style={[{ fontSize: size, color, fontFamily: "iconfont" }, style]}
      {...props}
    >
      {String.fromCodePoint(glyph?.unicode_decimal!)}
    </Text>
  );
};
export default Icon;
