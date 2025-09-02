import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Text from "../Text";
import { useAppTheme } from "../Provider";
import type { ColorSystem } from "../../theme/color";

export interface CardProps {
  /**
   * 卡片标题
   */
  title?: string | React.ReactNode;
  /**
   * 标题右侧内容
   */
  right?: React.ReactNode;
  /**
   * 标题样式
   */
  titleStyle?: TextStyle;
  /**
   * 标题容器样式
   */
  titleContainerStyle?: ViewStyle;
  /**
   * 卡片内容
   */
  children?: React.ReactNode;
  /**
   * 内容容器样式
   */
  contentStyle?: ViewStyle;
  /**
   * 卡片容器样式
   */
  style?: ViewStyle;
  className?: string;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 12,
  },
});

const Card = ({
  title,
  right,
  titleStyle,
  titleContainerStyle,
  children,
  contentStyle,
  style,
  className,
}:CardProps) => {
  const theme = useAppTheme();
  const colors = theme.colors as ColorSystem;

  const containerStyle = [
    styles.container,
    {
      backgroundColor: colors.neutral.white,
    },
    style,
  ];

  const headerStyle = [
    styles.titleContainer,
    {
      borderBottomColor: colors.border.primary,
    },
    titleContainerStyle,
  ];

  const titleTextStyle = [
    {
      color: colors.neutral.title,
    },
    titleStyle,
  ];

  const renderTitle = () => {
    if (!title && !right) return null;

    return (
      <View style={headerStyle}>
        <View style={styles.titleContent}>
          {typeof title === "string" ? (
            <Text variant='cardTitle' style={titleTextStyle}>{title}</Text>
          ) : (
            title
          )}
        </View>
        {right && <View style={styles.rightContent}>{right}</View>}
      </View>
    );
  };

  return (
    <View style={containerStyle} className={className}>
      {renderTitle()}
      <View style={contentStyle}>{children}</View>
    </View>
  );
};

export default Card;
