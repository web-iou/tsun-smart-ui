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
import { ReactNode, RefObject, useRef } from "react";
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
  rounded?: boolean;
  showArrow?: boolean;
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
  placeholder,
  rounded,
  maxLength,
  showArrow = false,
  ...props
}: Omit<Props, "clearButtonMode">) => {
  const textInputRef = useRef<RNTextInput>(null);
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
            borderRadius:
              (rounded ?? TextInput.prototype.defaultProps.rounded) ? 100 : 8,
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
          maxLength={maxLength ?? TextInput.prototype.defaultProps.maxLength}
          {...props}
          placeholder={placeholder}
          ref={ref ?? textInputRef}
          multiline={false}
          numberOfLines={1}
          style={[
            styles.textInput,
            hostTextInputStyle,
            inputStyle,
            {
              fontFamily:
                //@ts-ignore
                inputStyle?.fontWeight === "bold"
                  ? "Roboto-Bold"
                  : "Roboto-Regular",
            },
          ]}
          placeholderTextColor={theme.colors.neutral.tip}
          clearButtonMode={showClearButton ? "while-editing" : "never"}
        />
        {right ??
          (showArrow && (
            <Icon
              defaultName="right"
              size={10}
              color={theme.colors.neutral.primary}
            />
          ))}
      </Pressable>
    </View>
  );
};
TextInput.prototype.defaultProps = {
  rounded: true,
  maxLength: 50,
};
const styles = StyleSheet.create({
  container: {
    height: 48,
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
    fontSize: 15,
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
