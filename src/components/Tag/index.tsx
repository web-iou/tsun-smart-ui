import { View, StyleSheet, type ViewProps } from "react-native";
import Text from "../Text";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import { getTagColors, type TagType } from "./utils";
type Props = {
  type: TagType;
  theme?: themeProp;
  children: React.ReactNode;
  className?:string
} & ViewProps;

const Tag = ({
  type,
  theme: initialTheme,
  children,
  style,
  ...props
}: Props) => {
  const theme = useAppTheme(initialTheme);

  // 获取Tag类型对应的颜色配置
  const tagColors = getTagColors(type, theme.colors);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: tagColors.backgroundColor,
        },
        style,
      ]}
      {...props}
    >
      <Text
        variant="caption"
        style={{
          color: tagColors.textColor,
        }}
      >
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tag;
