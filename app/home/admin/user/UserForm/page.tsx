"use client";
import React from "react";
import { Button, Form, Input, Select } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || "outlined"}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: "outlined" }}
    >
      {/* <Form.Item label="Form variant" name="variant">
        <Segmented
          options={["outlined", "filled", "borderless", "underlined"]}
        />
      </Form.Item> */}

      <Form.Item
        label="ຊື່"
        name="name"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ຊື່ຜູ້ໃຊ້"
        name="username"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select
          options={[
            { value: "1", label: "Admin" },
            { value: "2", label: "Administrator" },
            { value: "3", label: "User" },
          ]}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
