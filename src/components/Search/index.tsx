import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  ViewStyle,
} from "react-native";
import TextInput, { type Props as TextInputProps } from "../TextInput";
import Text from "../Text";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import { useRef, useState, useCallback } from "react";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";

type Props = TextInputProps & {
  theme?: themeProp;
  style?: ViewStyle;
  className?: string;
  cancelText?: string;
};

const Search = ({
  theme: initialTheme,
  style,
  className,
  cancelText,
  ...props
}: Props) => {
  const theme = useAppTheme(initialTheme);
  const [onFocus, setOnFocus] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);

  const handleFocus = useCallback(() => {
    setOnFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setOnFocus(false);
  }, []);

  const handleCancel = useCallback(() => {
    textInputRef.current?.blur();
  }, []);

  // 监听焦点状态变化，执行动画

  return (
    <View style={[styles.container, style]} className={className}>
      <View style={[styles.inputContainer, { flex: 1 }]}>
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
        <Animated.View
          style={[styles.cancelContainer]}
          entering={FadeInRight.duration(200).springify().damping(15)}
          exiting={FadeOutRight.duration(150)}
          pointerEvents={onFocus ? "auto" : "none"}
        >
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
            {cancelText}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // 确保容器能够适应内容变化
    minHeight: 44,
  },
  inputContainer: {
    minWidth: 0, // 防止 flex 收缩问题
  },
  textInput: {
    flex: 1,
  },
  cancelContainer: {
    paddingHorizontal: 4, // 增加点击区域
    paddingVertical: 4,
    justifyContent: "center",
    marginLeft: 12,
    alignItems: "center",
    // 确保取消按钮有最小宽度
    minWidth: 0,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Search;
