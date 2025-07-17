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
import { useRef, useState, useCallback } from "react";

type Props = TextInputProps & {
  theme?: themeProp;
  style?: ViewStyle;
  className?: string;
};

// 确保 Android 启用布局动画
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// 优化动画配置 - 使用更兼容的配置
const searchAnimation = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  delete: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7,
  },
};

const Search = ({ theme: initialTheme, style, className, ...props }: Props) => {
  const theme = useAppTheme(initialTheme);
  const [onFocus, setOnFocus] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);

  const handleFocus = useCallback(() => {
    // 先配置动画，再改变状态
    LayoutAnimation.configureNext(searchAnimation);
    setOnFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    // 先配置动画，再改变状态
    LayoutAnimation.configureNext(searchAnimation);
    setOnFocus(false);
  }, []);

  const handleCancel = useCallback(() => {
    textInputRef.current?.blur();
  }, []);

  return (
    <View style={[styles.container, style]} className={className}>
      <View style={styles.inputContainer}>
        <TextInput
          left="search"
          showClearButton
          style={styles.textInput}
          ref={textInputRef}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        />
      </View>
      {onFocus && (
        <View style={styles.cancelContainer}>
          <Text
            onPress={handleCancel}
            variant="bodyStrong"
            style={[
              {
                color: theme.colors.brand.primary,
              },
              styles.cancelText,
            ]}
          >
            取消
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden", // 确保动画不会溢出
  },
  inputContainer: {
    flex: 1,
    minWidth: 0, // 防止 flex 收缩问题
  },
  textInput: {
    flex: 1,
  },
  cancelContainer: {
    marginLeft: 12,
    paddingHorizontal: 4, // 增加点击区域
    paddingVertical: 4,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Search;
