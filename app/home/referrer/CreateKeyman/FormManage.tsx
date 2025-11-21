import React from "react";
import { Button, Form, Input, Select, Row, Col, DatePicker } from "antd";

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
          <Form.Item
            label="ວັນທີອັບເດດ"
            name="updateDate"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ເລກ customerCode"
            name="customerCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນເລກໂຄດ" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ຊື່ແລະນາມສະກຸນ Keyman"
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
            label="ບົດບາດ Keyman"
            name="KeymanRole"
            rules={[{ required: true }]}
          >
            <Select style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Agent/ຄູ່ຄ້າ"
            name="KeymanRole"
            rules={[{ required: true }]}
          >
            <Select style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="ເພດ" name="gender" rules={[{ required: true }]}>
            <Select style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ປະເພດ Keyman"
            name="KeymanType"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ເບີໂທລະສັບ"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Select product" />
          </Form.Item>
        </Col>
      </Row>

      {/* แถวที่ 3 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="ສາຂາ" name="branch" rules={[{ required: true }]}>
            <Select style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ລະຫັດກອງສູນ"
            name="centerCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນລະຫັດກອງສູນ" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ຊື່ລະຫັດກອງສູນ"
            name="centerName"
            rules={[{ required: true }]}
          >
            <Input placeholder="ຊື່ລະຫັດກອງສູນ" />
          </Form.Item>
        </Col>
      </Row>

      {/* แถวที่ 4 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="ເລກບັນຊີຮັບເງິນຂອງ ສກຈຮ ຈຳປາສັກ"
            name="accountNumber"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "100%" }} />
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
