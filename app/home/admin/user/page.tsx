"use client";
import { useState } from "react";
import { Button } from "antd";
import Table from "../../../components/DataTable";
import Modal from "../../../components/Modal";
import UserForm from "../../admin/user/UserForm/page";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

type user = {
  key: number;
  name: string;
  userName: string;
  role: string;
};

const columns = [
  { title: "ຊື່", dataIndex: "name", key: "name" },
  { title: "ຊື່ຜູ້ໃຊ້", dataIndex: "userName", key: "userName" },
  { title: "Role", dataIndex: "role", key: "role" },
  {
    title: "ເຄື່ອງມື",
    render: (_: unknown, record: user) => (
      <div className="flex gap-3 text-lg">
        <EditOutlined
          style={{ color: "orange" }}
          className="text-green-500 cursor-pointer hover:scale-110 transition"
          onClick={() => console.log("Edit →", record)}
        />

        <DeleteOutlined
          style={{ color: "red" }}
          className=" cursor-pointer hover:scale-110 transition"
          onClick={() => console.log("Delete →", record)}
        />
      </div>
    ),
  },
];

const data = [
  {
    key: 1,
    name: "John",
    userName: "john_doe",
    role: "Admin",
  },
  { key: 2, name: "Sara", userName: "sara_smith", role: "Administrator" },
  { key: 3, name: "Mike", userName: "mike_jones", role: "User" },
  { key: 4, name: "Emily", userName: "emily_davis", role: "User" },
];
function User() {
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
      <h1 className="text-xl font-bold mb-4">ຈັດການຜູ້ໃຊ້ງານ</h1>
      <div className="flex justify-end p-3">
        <Button type="primary" onClick={openModal}>
          + ສ້າງຜູ້ໃຊ້ງານໃໝ່
        </Button>
      </div>
      <Table columns={columns} data={data}></Table>
      <Modal
        open={open}
        title="ສ້າງຜູ້ໃຊ້ໃໝ່"
        loading={loading}
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
      >
        <UserForm />
      </Modal>
    </div>
  );
}

export default User;
