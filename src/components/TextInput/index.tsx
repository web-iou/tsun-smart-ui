import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  type ViewStyle,
  type TextInputProps,
} from "react-native";
import { useAppTheme } from "../Provider";
import type { themeProp } from "../../theme";
import Text from "../Text";
import type { IconName } from "../Icon";
import Icon from "../Icon";
import type { ReactNode, RefObject } from "react";
export type Props = TextInputProps & {
  theme?: themeProp;
  label?: string;
  left?: IconName;
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
  ...props
}: Omit<Props, "clearButtonMode">) => {
  const theme = useAppTheme(initialTheme);
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
      <View
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
        {left && <Icon name={left} size={16} style={styles.leftIcon} />}
        <RNTextInput
          readOnly={readOnly}
          {...props}
          ref={ref}
          style={[styles.textInput, inputStyle]}
          placeholderTextColor={theme.colors.neutral.tip}
          clearButtonMode={showClearButton ? "while-editing" : "never"}
        />
        {right}
      </View>
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
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 8.5,
  },
  right: {
    marginRight: 12,
  },
});
export default TextInput;
