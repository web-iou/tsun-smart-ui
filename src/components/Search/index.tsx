import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import TextInput from "../TextInput";
import Text from "../Text";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import { useRef, useState } from "react";
type Props = {
  theme?: themeProp;
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

const Search = ({ theme: initialTheme }: Props) => {
  const theme = useAppTheme(initialTheme);
  const [onFocus, setOnFocus] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);
  return (
    <View style={styles.container}>
      <TextInput
        left="search"
        placeholder="请输入要查询的内容"
        showClearButton
        ref={textInputRef}
        onBlur={() => {
          setOnFocus(false);
          LayoutAnimation.configureNext(searchAnimation);
        }}
        onFocus={() => {
          setOnFocus(true);
          LayoutAnimation.configureNext(searchAnimation);
        }}
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
    flex: 1,
    marginTop: 20,
  },
  text: {
    marginLeft: 16,
  },
});
export default Search;
