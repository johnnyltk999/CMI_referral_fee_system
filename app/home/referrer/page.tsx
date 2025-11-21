// "use client";
// import { useState } from "react";
// import { Button } from "antd";
// import Table from "../../components/DataTable";
// import Modal from "../../components/Modal";
// import FormKeyman from "./CreateKeyman/FormManage";
// import FormImportAgent from "./ImportAgent/FormManage";

// const columns = [
//   { title: "ລະຫັດ", dataIndex: "id", key: "id" },
//   { title: "ຊື່ແລະນາມສະກຸນ", dataIndex: "name", key: "name" },
//   { title: "ປະເພດ", dataIndex: "type", key: "type" },
//   { title: "ສາຂາ", dataIndex: "branch", key: "branch" },
//   { title: "ສະຖານະ", dataIndex: "status", key: "status" },
//   { title: "ເຄື່ອງມື" },
// ];

// const data = [
//   {
//     key: 1,
//     id: "R001",
//     name: "John Doe",
//     type: "ຜູ້ແນະນຳ",
//     branch: "ສາຂາ 1",
//     status: "ອະນຸມັດ",
//   },
//   {
//     key: 2,
//     id: "R002",
//     name: "Sara Smith",
//     type: "ຜູ້ຖືກແນະນຳ",
//     branch: "ສາຂາ 2",
//     status: "ບໍ່ອະນຸມັດ",
//   },
// ];

// const ReferrerPage = () => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formType, setFormType] = useState<"keyman" | "agent" | null>(null); // ← เก็บว่ากำลังเปิดฟอร์มอะไร

//   const openKeyman = () => {
//     setFormType("keyman");
//     setOpen(true);
//   };

//   const openImportAgent = () => {
//     setFormType("agent");
//     setOpen(true);
//   };

//   const handleOk = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setOpen(false);
//     }, 1500);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">ລາຍການຂໍ້ມູນຜູ້ແນະນຳ</h1>

//       <div className="flex justify-end p-3 gap-2">
//         <Button type="primary" onClick={openKeyman}>
//           + ສ້າງຄີແມນ
//         </Button>

//         <Button type="primary" onClick={openImportAgent}>
//           + Import Agent
//         </Button>
//       </div>

//       <Table columns={columns} data={data} />

//       <Modal
//         open={open}
//         title={formType === "keyman" ? "ສ້າງຄີແມນໃໝ່" : "Import Agent"}
//         loading={loading}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         width={1000}
//       >
//         {formType === "keyman" && <FormKeyman />}
//         {formType === "agent" && <FormImportAgent />}
//       </Modal>
//     </div>
//   );
// };

// export default ReferrerPage;
"use client";

import { useState } from "react";
import { Button } from "antd";
import Table from "../../components/DataTable";
import Modal from "../../components/Modal";
import FormKeyman from "./CreateKeyman/FormManage";
import FormImportAgent from "./ImportAgent/FormManage";

import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

type Referrer = {
  key: number;
  id: string;
  name: string;
  type: string;
  branch: string;
  status: string;
};

const columns = [
  { title: "ລະຫັດ", dataIndex: "id", key: "id" },
  { title: "ຊື່ແລະນາມສະກຸນ", dataIndex: "name", key: "name" },
  { title: "ປະເພດ", dataIndex: "type", key: "type" },
  { title: "ສາຂາ", dataIndex: "branch", key: "branch" },
  { title: "ສະຖານະ", dataIndex: "status", key: "status" },
  {
    title: "ເຄື່ອງມື",
    key: "actions",
    render: (_: unknown, record: Referrer) => (
      <div className="flex gap-3 text-lg">
        <EyeOutlined
          style={{ color: "gray" }}
          className=" cursor-pointer hover:scale-110 transition"
          onClick={() => console.log("View →", record)}
        />

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
    id: "R001",
    name: "John Doe",
    type: "ຜູ້ແນະນຳ",
    branch: "ສາຂາ 1",
    status: "ອະນຸມັດ",
  },
  {
    key: 2,
    id: "R002",
    name: "Sara Smith",
    type: "ຜູ້ຖືກແນະນຳ",
    branch: "ສາຂາ 2",
    status: "ບໍ່ອະນຸມັດ",
  },
  {
    key: 2,
    id: "R002",
    name: "Sara Smith",
    type: "ຜູ້ຖືກແນະນຳ",
    branch: "ສາຂາ 2",
    status: "ບໍ່ອະນຸມັດ",
  },
];

const ReferrerPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState<"keyman" | "agent" | null>(null);

  const openKeyman = () => {
    setFormType("keyman");
    setOpen(true);
  };

  const openImportAgent = () => {
    setFormType("agent");
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
      <h1 className="text-xl font-bold mb-4">ລາຍການຂໍ້ມູນຜູ້ແນະນຳ</h1>

      <div className="flex justify-end p-3 gap-2">
        <Button type="primary" onClick={openKeyman}>
          + ສ້າງຄີແມນ
        </Button>

        <Button type="primary" onClick={openImportAgent}>
          + Import Agent
        </Button>
      </div>

      <Table columns={columns} data={data} />

      <Modal
        open={open}
        title={formType === "keyman" ? "ສ້າງຄີແມນໃໝ່" : "Import Agent"}
        loading={loading}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        {formType === "keyman" && <FormKeyman />}
        {formType === "agent" && <FormImportAgent />}
      </Modal>
    </div>
  );
};

export default ReferrerPage;
