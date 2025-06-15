import Button from "../Button";
import TextInput from "../TextInput";
import { useCountdown } from "../../hooks";
import { useState } from "react";
import { StyleSheet } from "react-native";

// 国际化文本配置接口
export interface CodeTextInputI18n {
  /** 发送验证码按钮文本 */
  sendText?: string;
  /** 重新发送按钮文本模板，{seconds}会被替换为秒数 */
  resendTemplate?: string;
}

// 默认中文文本
const defaultI18n: Required<CodeTextInputI18n> = {
  sendText: "发送验证码",
  resendTemplate: "重新发送({seconds})",
};

interface CodeButtonProps {
  onPress: () => void;
  i18n: Required<CodeTextInputI18n>;
}

const CodeButton = ({ onPress, i18n }: CodeButtonProps) => {
  const [targetDate, setTargetDate] = useState<number>();
  const { formattedRes, timeLeft } = useCountdown({
    targetDate,
    onEnd: () => {
      setTargetDate(undefined);
    },
  });

  // 获取按钮文本
  const getButtonText = () => {
    if (timeLeft > 0) {
      return i18n.resendTemplate.replace(
        "{seconds}",
        formattedRes.seconds.toString()
      );
    }
    return i18n.sendText;
  };

  return (
    <Button
      style={styles.button}
      title={getButtonText()}
      onPress={() => {
        setTargetDate(new Date().getTime() + 60 * 1000);
        onPress?.();
      }}
      disabled={timeLeft > 0}
    />
  );
};

export interface CodeTextInputProps {
  /** 发送验证码回调 */
  onPress: () => void;
  /** 国际化文本配置 */
  i18n?: CodeTextInputI18n;
  /** 其他TextInput属性 */
  [key: string]: any;
}

const CodeTextInput = ({
  onPress,
  i18n = {},
  ...textInputProps
}: CodeTextInputProps) => {
  // 合并默认文本和用户自定义文本
  const mergedI18n = { ...defaultI18n, ...i18n };

  return (
    <TextInput
      placeholder="请输入验证码"
      right={<CodeButton onPress={onPress} i18n={mergedI18n} />}
      {...textInputProps}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: "auto",
    paddingHorizontal: 8,
    minWidth: 99,
  },
});

export default CodeTextInput;
