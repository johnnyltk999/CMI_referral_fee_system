"use client";

import { useState } from "react";
import Table from "../../components/DataTable";
import { Button } from "antd";
import Modal from "../../components/Modal";
import Form from "./form/FormManage";

const columns = [
  { title: "ຊື່ລູກຄ້າ", dataIndex: "name", key: "name" },
  { title: "ຜະລິດຕະພັນ", dataIndex: "product", key: "product" },
  { title: "ຜູ້ແນະນຳ", dataIndex: "referrer", key: "referrer" },
  { title: "ປະເພດຜູ້ແນະນຳ", dataIndex: "refType", key: "refType" },
  { title: "ຈຳນວນເງິນ (LAK)", dataIndex: "amount", key: "amount" },
  { title: "ສະຖານະ", dataIndex: "status", key: "status" },
];

const data = [
  { key: 1, name: "John", amount: 120 },
  { key: 2, name: "Sara", amount: 90 },
];

const ReferralPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">ລາຍການຄ່າແນະນຳ</h1>

      <div className="flex justify-end p-3">
        <Button type="primary" onClick={openModal}>
          + ສ້າງລາຍການໃໝ່
        </Button>
      </div>

      <Table columns={columns} data={data} />

      <Modal
        open={open}
        title="ສ້າງລາຍການແນະນຳໃໝ່"
        loading={loading}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Form />
      </Modal>
    </div>
  );
};

export default ReferralPage;
