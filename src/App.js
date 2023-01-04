import "./App.css";

import { Form, FormItem, DatePicker,Button, Checkbox, Col, ConfigProvider, Progress, Radio, Row, Space, Spin } from "antd";

import { SearchOutlined } from '@ant-design/icons';
function App() {
  const onChange = (date, dateString) => {
    console.log( dateString);
  };
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#ff9999',
      },
      components: {
        Radio: {
          colorPrimary: '#00b96b',
        },
      },
    }}
  >
    <Radio>Radio</Radio>
    <Checkbox>Checkbox</Checkbox>
    <Button type="primary">Hello</Button>
    <Space wrap>
    <Progress type="circle" percent={75} />
   
    <Spin size="large" />
    <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Form>
      <Form.Item label="Date">
        <DatePicker onChange={onChange}/>
      </Form.Item>
    </Form>
  </Space>
  </ConfigProvider>
  );
}

export default App;
