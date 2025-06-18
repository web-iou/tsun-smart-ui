import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  ViewStyle,
} from "react-native";
import TextInput, { type Props as TextInputProps } from "../TextInput";
import Text from "../Text";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import { useRef, useState } from "react";
type Props = TextInputProps & {
  theme?: themeProp;
  style?: ViewStyle;
  className?: string;
};
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// 搜索组件专用的动画配置
const searchAnimation = {
  duration: 250,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

const Search = ({ theme: initialTheme, style, className, ...props }: Props) => {
  const theme = useAppTheme(initialTheme);
  const [onFocus, setOnFocus] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);
  return (
    <View style={[styles.container, style]} className={className}>
      <TextInput
        left="search"
        showClearButton
        className=" flex-1"
        ref={textInputRef}
        onBlur={() => {
          setOnFocus(false);
          LayoutAnimation.configureNext(searchAnimation);
        }}
        onFocus={() => {
          setOnFocus(true);
          LayoutAnimation.configureNext(searchAnimation);
        }}
        {...props}
      />
      {onFocus && (
        <Text
          onPress={() => {
            textInputRef.current?.blur();
          }}
          variant="bodyStrong"
          style={[
            {
              color: theme.colors.brand.primary,
            },
            styles.text,
          ]}
        >
          取消
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 16,
  },
});
export default Search;
