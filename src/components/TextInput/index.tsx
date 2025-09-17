import {
  StyleSheet,
  View,
  type ViewStyle,
  Pressable,
  TextInput as RNTextInput,
} from "react-native";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import CustomTextInput, {
  type TextInputProps,
} from "@see_you/react-native-textinput";
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

        <CustomTextInput
          readOnly
          maxLength={maxLength ?? TextInput.prototype.defaultProps.maxLength}
          placeholder={placeholder}
          //@ts-ignore
          ref={ref ?? textInputRef}
          style={StyleSheet.flatten([
            styles.textInput,
            hostTextInputStyle,
            inputStyle,
          ])}
          placeholderTextColor={theme.colors.neutral.tip}
          clearButtonMode={showClearButton ? "while-editing" : "never"}
          pointerEvents={
            readOnly || !(props.editable ?? true) ? "none" : "auto"
          }
          {...props}
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
    fontSize: 15,
    height: "100%",
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
