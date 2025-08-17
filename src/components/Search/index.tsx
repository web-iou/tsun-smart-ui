import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  ViewStyle,
  Animated,
} from "react-native";
import TextInput, { type Props as TextInputProps } from "../TextInput";
import Text from "../Text";
import type { themeProp } from "../../theme";
import { useAppTheme } from "../Provider";
import { useRef, useState, useCallback, useEffect } from "react";

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

  // 动画值
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-20)).current;

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
  useEffect(() => {
    if (onFocus) {
      // 显示动画：淡入 + 滑入
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // 隐藏动画：淡出 + 滑出
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -20,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [onFocus, fadeAnim, slideAnim]);

  return (
    <View style={[styles.container, style]} className={className}>
      <View style={[styles.inputContainer, { flex: onFocus ? 0.85 : 1 }]}>
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
      <Animated.View
        style={[
          styles.cancelContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }],
            flex: onFocus ? 0.15 : 0,
            overflow: "hidden",
          },
        ]}
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
          {onFocus ? cancelText || "取消" : ""}
        </Text>
      </Animated.View>
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
