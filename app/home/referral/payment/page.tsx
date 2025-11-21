// "use client";

// import React, { useState } from "react";
// import Table from "../../../components/DataTable";
// import { Select, DatePicker, Form, Button, Tag } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import Modal from "../../../components/Modal";

// interface CustomModalProps {
//   open: boolean;
//   title?: string;
//   loading?: boolean;
//   width?: number | string;
//   children?: React.ReactNode;
//   onOk?: () => void;
//   onCancel?: () => void;
// }

// const columns = [
//   {
//     title: "ຊື່ ແລະ ນາມສະກຸນ ຜູ້ແນະນຳ (ຫ້າມໃສ່ຄຳນຳຫນ້າ)",
//     dataIndex: "name",
//     key: "name",
//   },
//   { title: "ລະຫັດ", dataIndex: "product", key: "product" },
//   { title: "ຜະລິດຕະພັນ", dataIndex: "referrer", key: "referrer" },
//   {
//     title: "ຊື່ ແລະ ນາມສະກຸນ ລູກຄ້າ (ຫ້າມໃສ່ຄຳນຳຫນ້າ)",
//     dataIndex: "refType",
//     key: "refType",
//   },
//   {
//     title: "ສະຖານະ",
//     dataIndex: "status",
//     key: "status",
//     render: (status: string) => {
//       let color = "";
//       if (status === "ອະນຸມັດ") color = "green";
//       else if (status === "ບໍ່ອະນຸມັດ") color = "red";
//       else if (status === "ລໍຖ້າການອະນຸມັດ") color = "blue";

//       return <Tag color={color}>{status}</Tag>;
//     },
//   },
// ];

// const data = [
//   {
//     key: 1,
//     name: "ທ້າວ ແສງທອງ",
//     product: "P001",
//     referrer: "A",
//     refType: "ນາງ ດາວພອນ",
//     status: "ບໍ່ອະນຸມັດ",
//   },
//   {
//     key: 2,
//     name: "ນາງ ສຸພາພອນ",
//     product: "P014",
//     referrer: "B",
//     refType: "ທ້າວ ອະນຸວົງ",
//     status: "ອະນຸມັດ",
//   },
//   {
//     key: 3,
//     name: "ທ້າວ ປະສົງ",
//     product: "P020",
//     referrer: "C",
//     refType: "ນາງ ທອງສີ",
//     status: "ລໍຖ້າການອະນຸມັດ",
//   },
// ];

// interface PaymentItem {
//   key: number;
//   name: string;
//   product: string;
//   referrer: string;
//   refType: string;
//   status: string;
// }

// const PaymentPage: React.FC<CustomModalProps> = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<PaymentItem | null>(null);

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">ກວດສອບການຈ່າຍ</h1>

//       {/* Search Section */}
//       <div className="p-4 w-full bg-white rounded-md shadow-md mb-4">
//         <Form layout="vertical">
//           <div className="flex flex-wrap items-end gap-6">
//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">ເລືອກວັນທີ</label>
//               <DatePicker className="w-[230px]" placeholder="ເລືອກວັນທີ" />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">ປະເພດ</label>
//               <Select
//                 showSearch
//                 className="w-[200px]"
//                 placeholder="Search to Select"
//                 optionFilterProp="label"
//                 options={[
//                   { value: "ລາຍການຄ່າແນະນຳ", label: "ລາຍການຄ່າແນະນຳ" },
//                   { value: "ຂໍ້ມູນຜູ້ແນະນຳ", label: "ຂໍ້ມູນຜູ້ແນະນຳ" },
//                 ]}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">ສະຖານະ</label>
//               <Select
//                 showSearch
//                 className="w-[180px]"
//                 placeholder="Search to Select"
//                 optionFilterProp="label"
//                 options={[
//                   { value: "ອະນຸມັດ", label: "ອະນຸມັດ" },
//                   { value: "ບໍ່ອະນຸມັດ", label: "ບໍ່ອະນຸມັດ" },
//                   { value: "ລໍຖ້າການອະນຸມັດ", label: "ລໍຖ້າການອະນຸມັດ" },
//                 ]}
//               />
//             </div>

//             <Button type="primary" className="w-[120px]">
//               <SearchOutlined /> ຄົ້ນຫາ
//             </Button>
//           </div>
//         </Form>
//       </div>

//       {/* Table */}
//       <Table
//         columns={columns}
//         data={data}
//         onRow={(record) => ({
//           onClick: () => {
//             setSelectedItem(record);
//             setIsModalOpen(true);
//           },
//         })}
//       />

//       {/* Modal */}
//       <Modal
//         open={isModalOpen}
//         title="ລາຍລະອຽດ"
//         width={800}
//         onCancel={() => setIsModalOpen(false)}
//         onOk={() => setIsModalOpen(false)}
//       >
//         {selectedItem && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[16px] py-2">
//             <div>
//               <p className="text-gray-500 text-sm">ຜູ້ແນະນຳ</p>
//               <p className="font-semibold">{selectedItem.name}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">ລະຫັດ</p>
//               <p className="font-semibold">{selectedItem.product}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">ຜະລິດຕະພັນ</p>
//               <p className="font-semibold">{selectedItem.referrer}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">ລູກຄ້າ</p>
//               <p className="font-semibold">{selectedItem.refType}</p>
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">ສະຖານະ</p>
//               <Tag
//                 color={
//                   selectedItem.status === "ອະນຸມັດ"
//                     ? "green"
//                     : selectedItem.status === "ບໍ່ອະນຸມັດ"
//                     ? "red"
//                     : "blue"
//                 }
//               >
//                 {selectedItem.status}
//               </Tag>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default PaymentPage;

"use client";

import React, { useState } from "react";
import Table from "../../../components/DataTable";
import { Select, DatePicker, Form, Button, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "../../../components/Modal";

interface PaymentItem {
  key: number;
  name: string;
  product: string;
  referrer: string;
  refType: string;
  status: string;
  date?: string; // ถ้าต้องการกรองวันที่
}

const columns = [
  {
    title: "ຊື່ ແລະ ນາມສະກຸນ ຜູ້ແນະນຳ (ຫ້າມໃສ່ຄຳນຳຫນ້າ)",
    dataIndex: "name",
    key: "name",
  },
  { title: "ລະຫັດ", dataIndex: "product", key: "product" },
  { title: "ຜະລິດຕະພັນ", dataIndex: "referrer", key: "referrer" },
  {
    title: "ຊື່ ແລະ ນາມສະກຸນ ລູກຄ້າ (ຫ້າມໃສ່ຄຳນຳຫນ້າ)",
    dataIndex: "refType",
    key: "refType",
  },
  {
    title: "ສະຖານະ",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = "";
      if (status === "ອະນຸມັດ") color = "green";
      else if (status === "ບໍ່ອະນຸມັດ") color = "red";
      else color = "blue";

      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const mockData: PaymentItem[] = [
  {
    key: 1,
    name: "ທ້າວ ແສງທອງ",
    product: "P001",
    referrer: "A",
    refType: "ນາງ ດາວພອນ",
    status: "ບໍ່ອະນຸມັດ",
    date: "2025-11-01",
  },
  {
    key: 2,
    name: "ນາງ ສຸພາພອນ",
    product: "P014",
    referrer: "B",
    refType: "ທ້າວ ອະນຸວົງ",
    status: "ອະນຸມັດ",
    date: "2025-11-05",
  },
  {
    key: 3,
    name: "ທ້າວ ປະສົງ",
    product: "P020",
    referrer: "C",
    refType: "ນາງ ທອງສີ",
    status: "ລໍຖ້າການອະນຸມັດ",
    date: "2025-11-10",
  },
];

const PaymentPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PaymentItem | null>(null);

  const [filteredData, setFilteredData] = useState<PaymentItem[]>(mockData);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<[Date, Date] | null>(null);

  const handleSearch = () => {
    let data = [...mockData];

    // Filter by Date
    if (selectedDate) {
      const [start, end] = selectedDate;

      data = data.filter((item) => {
        if (!item.date) return false;
        const d = new Date(item.date);
        return d >= start && d <= end;
      });
    }

    // Filter by Status
    if (selectedStatus) {
      data = data.filter((item) => item.status === selectedStatus);
    }

    // Filter by Type
    if (selectedType) {
      data = data.filter((item) =>
        item.referrer.toLowerCase().includes(selectedType.toLowerCase())
      );
    }

    setFilteredData(data);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">ກວດສອບການຈ່າຍ</h1>

      {/* Search Section */}
      <div className="p-4 w-full bg-white rounded-md shadow-md mb-4">
        <Form layout="vertical">
          <div className="flex flex-wrap items-end gap-6">
            {/* Date Picker */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ເລືອກວັນທີ</label>
              <DatePicker
                className="w-[230px]"
                onChange={(date) => {
                  if (!date) {
                    setSelectedDate(null);
                    return;
                  }
                  setSelectedDate([date.toDate(), date.toDate()]);
                }}
              />
            </div>

            {/* Type */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ປະເພດ</label>
              <Select
                showSearch
                className="w-[200px]"
                placeholder="Search to Select"
                optionFilterProp="label"
                onChange={setSelectedType}
                options={[
                  { value: "A", label: "A" },
                  { value: "B", label: "B" },
                  { value: "C", label: "C" },
                ]}
              />
            </div>

            {/* Status */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ສະຖານະ</label>
              <Select
                showSearch
                className="w-[180px]"
                placeholder="Search to Select"
                optionFilterProp="label"
                onChange={setSelectedStatus}
                options={[
                  { value: "ອະນຸມັດ", label: "ອະນຸມັດ" },
                  { value: "ບໍ່ອະນຸມັດ", label: "ບໍ່ອະນຸມັດ" },
                  { value: "ລໍຖ້າການອະນຸມັດ", label: "ລໍຖ້າການອະນຸມັດ" },
                ]}
              />
            </div>

            <Button type="primary" className="w-[120px]" onClick={handleSearch}>
              <SearchOutlined /> ຄົ້ນຫາ
            </Button>
          </div>
        </Form>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={filteredData}
        onRow={(record: PaymentItem) => ({
          onClick: () => {
            setSelectedItem(record);
            setIsModalOpen(true);
          },
        })}
      />

      {/* Modal */}
      <Modal
        open={isModalOpen}
        title="ລາຍລະອຽດ"
        width={800}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      >
        {selectedItem && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[16px] py-2">
            <div>
              <p className="text-gray-500 text-sm">ຜູ້ແນະນຳ</p>
              <p className="font-semibold">{selectedItem.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">ລະຫັດ</p>
              <p className="font-semibold">{selectedItem.product}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">ຜະລິດຕະພັນ</p>
              <p className="font-semibold">{selectedItem.referrer}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">ລູກຄ້າ</p>
              <p className="font-semibold">{selectedItem.refType}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">ສະຖານະ</p>
              <Tag
                color={
                  selectedItem.status === "ອະນຸມັດ"
                    ? "green"
                    : selectedItem.status === "ບໍ່ອະນຸມັດ"
                    ? "red"
                    : "blue"
                }
              >
                {selectedItem.status}
              </Tag>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PaymentPage;
