import { Pressable, StyleSheet, View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";
import Text from "../Text";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import Icon from "../Icon";
export type DataItem = {
  title: string;
  description?: string;
  left?: (size: number) => ReactNode;
  right?: ReactNode;
  onPress?: () => void;
};
type Props = {
  theme?: themeProp;
  size?: "large" | "medium";
  data: DataItem[];
  listItemStyle?: ViewStyle;
  style?: ViewStyle;
  className?: string;
};
const Cell = ({
  data,
  theme: initialTheme,
  size = "medium",
  style,
  listItemStyle,
  ...props
}: Props) => {
  const theme = useAppTheme(initialTheme);
  const getItemStyle = () => {
    if (size === "large") {
      return {
        paddingTop: 18,
        paddingBottom: 17,
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
        style,
      ]}
      {...props}
    >
      {data.map((item, index) => {
        return (
          <Pressable
            style={StyleSheet.flatten([
              styles.item,
              getItemStyle(),
              {
                borderBottomWidth: index === data.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.primary,
              },
              listItemStyle,
            ])}
            onPress={item.onPress}
            key={index}
          >
            <View style={styles.leftContainer}>
              {item.left?.(size === "large" ? 36 : 20)}
              <View style={styles.textContainer}>
                <Text
                  variant="bodyStrong"
                  style={[
                    styles.title,
                    {
                      color: theme.colors.neutral.title,
                    },
                  ]}
                >
                  {item.title}
                </Text>
                {item.description && (
                  <Text
                    variant="caption"
                    style={[
                      styles.description,
                      {
                        color: theme.colors.neutral.secondaryTitle,
                      },
                    ]}
                  >
                    {item.description}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.rightContainer}>
              {item.right ? (
                item.right
              ) : (
                <Icon
                  size={10}
                  defaultName="right"
                  color={theme.colors.neutral.primary}
                />
              )}
            </View>
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
    flex: 1,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    flexShrink: 1,
  },
  description: {
    flexShrink: 1,
  },
  rightContainer: {
    flexShrink: 0,
  },
});
export default Cell;
