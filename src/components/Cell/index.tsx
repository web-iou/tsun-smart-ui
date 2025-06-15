import { Pressable, StyleSheet, View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";
import Text from "../Text";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import Icon from "../Icon";
type Props = {
  theme?: themeProp;
  size?: "large" | "medium";
  arrow?: boolean;
  data: {
    title: string;
    description?: string;
    left?: (size: number) => ReactNode;
    right?: ReactNode;
    onPress?: () => void;
  }[];
  listItemStyle?: ViewStyle;
};
const Cell = ({
  data,
  theme: initialTheme,
  size = "medium",
  listItemStyle,
}: Props) => {
  const theme = useAppTheme(initialTheme);
  const getItemStyle = () => {
    if (size === "large") {
      return {
        paddingTop: 17,
        paddingBottom: 18,
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
            style={StyleSheet.flatten([
              styles.item,
              getItemStyle(),
              {
                borderBottomWidth: index === data.length - 1 ? 0 : 1,
                borderColor: theme.colors.border.primary,
              },
              listItemStyle,
            ])}
            onPress={item.onPress}
            key={index}
          >
            <View style={styles.leftContainer}>
              {item.left?.(size === "large" ? 36 : 20)}
              <View>
                <Text
                  variant="bodyStrong"
                  style={{
                    color: theme.colors.neutral.title,
                  }}
                >
                  {item.title}
                </Text>
                {item.description && (
                  <Text
                    variant="caption"
                    style={{
                      color: theme.colors.neutral.secondaryTitle,
                    }}
                  >
                    {item.description}
                  </Text>
                )}
              </View>
            </View>
            {item.right ? (
              item.right
            ) : (
              <Icon
                size={10}
                name="right"
                color={theme.colors.neutral.primary}
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
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
});
export default Cell;
