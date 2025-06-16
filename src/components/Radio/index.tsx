import { Pressable, StyleSheet, View } from "react-native";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import Text from "../Text";
import Icon from "../Icon";
type DataItem = {
  label: string;
  value: string;
};
type Props<T extends readonly DataItem[]> = {
  theme?: themeProp;
  onChange: (value: T[number]["value"]) => void;
  value: T[number]["value"];
  data: T;
  size?: "large" | "medium";
};
const Radio = <T extends readonly DataItem[]>({
  value,
  theme: initialTheme,
  data,
  onChange,
  size = "large",
}: Props<T>) => {
  const theme = useAppTheme(initialTheme);
  const getItemStyle = () => {
    if (size === "large") {
      return {
        paddingTop: 26,
        paddingBottom: 25,
      };
    }
    return {
      paddingTop: 14,
      paddingBottom: 13,
    };
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.neutral.white,
        },
      ]}
    >
      {data.map((item, index) => {
        return (
          <Pressable
            style={[
              styles.item,
              getItemStyle(),
              {
                borderBottomWidth: index === data.length - 1 ? 0 : 1,
                borderColor: theme.colors.border.primary,
              },
            ]}
            key={item.value}
            onPress={() => {
              onChange?.(item.value);
            }}
          >
            <Text
              variant={item.value === value ? "bodyStrong" : "bodyMedium"}
              style={{
                color: theme.colors.neutral.title,
              }}
            >
              {item.label}
            </Text>
            {value === item.value && (
              <Icon
                name="check"
                size={20}
                color={theme.colors?.brand?.primary}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
});
export default Radio;
