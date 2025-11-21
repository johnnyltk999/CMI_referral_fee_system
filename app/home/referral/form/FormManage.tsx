import React from "react";
import { Button, Form, Input, InputNumber, Select, Row, Col } from "antd";

const App: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ padding: "20px", maxWidth: 1000, margin: "0 auto" }}
    >
      {/* แถวที่ 1 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="ແຂວງ" name="province" rules={[{ required: true }]}>
            <Input placeholder="Enter province" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ປະເພດຜູ້ແນະນຳ"
            name="agentType"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select type" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="ເລືອກປະເພດຄ່າແນະນຳ/BI"
            name="referralType"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select type"
              options={[
                { value: "type1", label: "ຄ່າແນະນຳ" },
                { value: "type2", label: "ຄະແນນ BI" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ຊື່ແລະນາມສະກຸນຜູ້ແນະນຳ"
            name="agentName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
        </Col>
      </Row>

      {/* แถวที่ 2 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="ລະຫັດ"
            name="agentCode"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ເບີໂທຜູ້ແນະນຳ"
            name="agentPhone"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ຜະລິດຕະພັນ"
            name="product"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select product" />
          </Form.Item>
        </Col>
      </Row>

      {/* แถวที่ 3 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="ລະຫັດລູກຄ້າ"
            name="customerCode"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ຊື່ແລະນາມສະກຸນລູກຄ້າ"
            name="customerName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ປະເພດລູກຄ້າ"
            name="customerType"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select type" />
          </Form.Item>
        </Col>
      </Row>

      {/* แถวที่ 4 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="ຈຳນວນເງິນທີ່ເບີກຈ່າຍ/ຝາກ"
            name="amount"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* ปุ่ม Submit */}
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default App;
