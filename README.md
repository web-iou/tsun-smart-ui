# tsun-smart-ui

UI Library

## Installation

```sh
npm install tsun-smart-ui
```

## Usage

```js
import {
  ThemeProvider,
  Text,
  Button,
  Icon,
  TextInput,
  CodeTextInput,
  Tag,
  Radio,
  Cell,
  Switch,
  Search,
} from "tsun-smart-ui";
// ...

            <Search />
            <Text variant="titleLarge">大标题样式</Text>
            <Text variant="body">普通文本样式</Text>
            <Text variant="caption">说明文字样式</Text>

            <View style={styles.iconContainer}>
              <Text variant="body">图标示例：</Text>
              <Icon name="search" size={24} color="#333" />
              <Icon name="email" size={24} color="#007AFF" />
              <Icon name="warning" size={24} color="#FF3B30" />
            </View>
            <View style={styles.iconContainer}>
              <Tag type="success">成功</Tag>
              <Tag type="error">错误</Tag>
              <Tag type="info">信息</Tag>
              <Tag type="warning">警告</Tag>
            </View>
            <Cell
              data={[
                {
                  title: "标题",
                  left: (size) => {
                    return <Icon name="add" size={size} />;
                  },
                  description: "描述",
                },
                {
                  title: "标题",
                  left: (size) => {
                    return <Icon name="add" size={size} />;
                  },
                },
              ]}
            />
            <Cell
              size="large"
              data={[
                {
                  title: "标题",
                  left: (size) => {
                    return <Icon name="add" size={size} />;
                  },
                  description: "描述",
                },
                {
                  title: "标题",
                  left: (size) => {
                    return <Icon name="add" size={size} />;
                  },
                },
              ]}
            />
            <Cell
              size="medium"
              listItemStyle={{
                paddingBottom: 10,
                paddingTop: 10,
              }}
              data={[
                {
                  title: "标题",
                  left: (size) => {
                    return <Icon name="add" size={size} />;
                  },
                  right: (
                    <Switch
                      value={switchValue1}
                      onValueChange={setSwitchValue1}
                    />
                  ),
                },
              ]}
            />
            <Radio
              onChange={setValue}
              value={value}
              data={["选项内容一", "选项内容二"] as const}
            />
            <Radio
              size="medium"
              onChange={setValue}
              value={value}
              data={["选项内容一", "选项内容二"] as const}
            />
            <Text variant="body">按钮组件示例：</Text>

            {/* 大按钮 - 主要样式 */}
            <Button variant="primary" title="主要按钮" />
            <Button
              variant="primary"
              icon="area"
              title="有图标的按钮"
              onPress={() => console.log("有图标的按钮")}
            />
            <Button
              variant="primary"
              loading={loading}
              title="Loading 按钮"
              onPress={() => {
                setLoading(true);
                // 模拟异步操作
                setTimeout(() => setLoading(false), 3000);
              }}
            />
            <Button variant="primary" disabled title="主要按钮禁用" />

            {/* 大按钮 - 线框样式 */}
            <Button
              variant="outline"
              title="线框按钮"
              onPress={() => console.log("线框按钮")}
            />
            <Button
              variant="outline"
              icon="area"
              title="线框按钮"
              onPress={() => console.log("线框按钮带图标")}
            />
            <Button variant="outline" loading={true} title="线框 Loading" />
            <Button
              variant="outline"
              icon="area"
              disabled
              title="线框按钮禁用"
            />

            {/* 中按钮 */}
            <Button
              size="medium"
              variant="primary"
              title="标准按钮"
              onPress={() => console.log("中号按钮")}
            />
            <Button
              size="medium"
              variant="outline"
              loading={true}
              title="中号 Loading"
            />
            <TextInput
              label="标题"
              showClearButton
              left="Safety"
              placeholder="请输入"
            />
            <TextInput placeholder="请输入" readOnly />

            {/* 默认中文 */}
            <CodeTextInput onPress={() => console.log("验证码输入")} />

            {/* 英文国际化 */}
            <CodeTextInput
              placeholder="Enter verification code"
              onPress={() => console.log("Send code")}
              i18n={{
                sendText: "Send Code",
                resendTemplate: "Resend ({seconds}s)",
              }}
            />

            {/* 自定义文本 */}
            <CodeTextInput
              placeholder="请输入短信验证码"
              onPress={() => console.log("发送短信验证码")}
              i18n={{
                sendText: "获取验证码",
                resendTemplate: "({seconds}秒)后重新获取",
              }}
            />

            <Text variant="body">Switch 开关组件示例：</Text>

            {/* 基本用法 */}
            <View style={styles.switchRow}>
              <Text variant="body">开</Text>
              <Switch value={switchValue1} onValueChange={setSwitchValue1} />
            </View>

            {/* 禁用状态 */}
            <View style={styles.switchRow}>
              <Text variant="body">开/禁用</Text>
              <Switch
                value={switchValue3}
                onValueChange={setSwitchValue3}
                disabled
              />
            </View>

            <View style={styles.switchRow}>
              <Text variant="body">关/禁用</Text>
              <Switch
                value={switchValue4}
                onValueChange={setSwitchValue4}
                disabled
              />
            </View>

            {/* 加载状态 */}
            <View style={styles.switchRow}>
              <Text variant="body">加载状态</Text>
              <Switch
                value={switchValue5}
                onValueChange={(value) => {
                  setLoading(true);
                  setTimeout(() => {
                    setSwitchValue5(value);
                    setLoading(false);
                  }, 3000);
                }}
                loading={loading}
              />
            </View>

            {/* 内嵌文字 */}
            <View style={styles.switchRow}>
              <Text variant="body">内嵌文字</Text>
              <Switch
                value={switchValue6}
                onValueChange={setSwitchValue6}
                showText
                onText="开"
                offText="关"
              />
            </View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
