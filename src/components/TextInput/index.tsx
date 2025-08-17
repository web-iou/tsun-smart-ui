import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  type ViewStyle,
  type TextInputProps,
  Pressable,
} from "react-native";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import Text from "../Text";
import type { DefaultIconName } from "../Icon";
import Icon from "../Icon";
import type { ReactNode, RefObject } from "react";
export type Props = TextInputProps & {
  theme?: themeProp;
  label?: string;
  left?: DefaultIconName;
  showClearButton?: boolean;
  right?: ReactNode;
  ref?: RefObject<RNTextInput | null>;
  className?: string;
  inputStyle?: TextInputProps["style"];
  inputWrapperStyle?: ViewStyle;
};

const TextInput = ({
  label,
  theme: initialTheme,
  left,
  readOnly,
  right,
  ref,
  showClearButton = false,
  className,
  inputWrapperStyle,
  inputStyle,
  onPress,
  maxLength = 25,
  ...props
}: Omit<Props, "clearButtonMode">) => {
  const theme = useAppTheme(initialTheme);
  const hostTextInputStyle: Props["inputStyle"] = {
    color: theme.colors.neutral.title,
  };
  return (
    <View className={className}>
      {label && (
        <Text
          variant="bodyMedium"
          style={[
            {
              color: theme.colors.neutral.secondaryTitle,
            },
            styles.label,
          ]}
        >
          {label}
        </Text>
      )}
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: readOnly
              ? theme.colors.background.disabled
              : theme.colors.neutral.white,
          },
          inputWrapperStyle,
        ]}
      >
        {left && (
          <Icon
            defaultName={left}
            size={16}
            style={[styles.leftIcon, hostTextInputStyle]}
          />
        )}
        <RNTextInput
          readOnly={readOnly}
          pointerEvents={
            readOnly || !(props.editable ?? true) ? "none" : "auto"
          }
          maxLength={maxLength}
          {...props}
          ref={ref}
          style={[styles.textInput, hostTextInputStyle, inputStyle]}
          placeholderTextColor={theme.colors.neutral.tip}
          clearButtonMode={showClearButton ? "while-editing" : "never"}
        />
        {right}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 100,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  leftIcon: {
    marginRight: 16,
  },
  textInput: {
    flex: 1,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  right: {
    marginRight: 12,
  },
});
export default TextInput;
