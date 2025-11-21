"use client";

import { useState } from "react";
import { Select, DatePicker, Form, Button } from "antd";
import { SearchOutlined, FileExcelOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Table from "../../components/DataTable";

const { RangePicker } = DatePicker;

interface ReportData {
  key: string;
  date: string;
  reportType: string;
  status: string;
  description: string;
}

// Mock data
const mockData: ReportData[] = [
  {
    key: "1",
    date: "2025-11-01",
    reportType: "ລາຍການຄ່າແນະນຳ",
    status: "ອະນຸມັດ",
    description: "ລາຍງານ 1",
  },
  {
    key: "2",
    date: "2025-11-05",
    reportType: "ຂໍ້ມູນຜູ້ແນະນຳ",
    status: "ບໍ່ອະນຸມັດ",
    description: "ລາຍງານ 2",
  },
  {
    key: "3",
    date: "2025-11-10",
    reportType: "ລາຍການຄ່າແນະນຳ",
    status: "ອະນຸມັດ",
    description: "ລາຍງານ 3",
  },
];

const Report = () => {
  const [filteredData, setFilteredData] = useState<ReportData[]>(mockData);
  const [selectedDate, setSelectedDate] = useState<[Date, Date] | null>(null);
  const [selectedReportType, setSelectedReportType] = useState<string | null>(
    null
  );
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const columns: ColumnsType<ReportData> = [
    { title: "ວັນທີ", dataIndex: "date", key: "date" },
    { title: "ປະເພດລາຍງານ", dataIndex: "reportType", key: "reportType" },
    { title: "ສະຖານະ", dataIndex: "status", key: "status" },
    { title: "ລາຍລະອຽດ", dataIndex: "description", key: "description" },
  ];

  const handleSearch = () => {
    let data = [...mockData];
    if (selectedDate) {
      const [start, end] = selectedDate;
      data = data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= start && itemDate <= end;
      });
    }
    if (selectedReportType)
      data = data.filter((item) => item.reportType === selectedReportType);
    if (selectedStatus)
      data = data.filter((item) => item.status === selectedStatus);
    setFilteredData(data);
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredData.map(({ key, ...rest }) => rest)
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "report.xlsx");
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">ລາຍງານ</h1>
      <div className="p-4 w-full bg-white rounded-md shadow-md">
        <Form layout="vertical">
          <div className="flex flex-wrap items-end gap-6">
            {/* ວັນທີ */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ເລືອກວັນທີ</label>
              <RangePicker
                className="w-[230px]"
                onChange={(dates) => {
                  if (!dates || !dates[0] || !dates[1]) {
                    setSelectedDate(null);
                    return;
                  }
                  setSelectedDate([dates[0].toDate(), dates[1].toDate()]);
                }}
              />
            </div>

            {/* ປະເພດລາຍງານ */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ເລືອກປະເພດລາຍງານ</label>
              <Select
                showSearch
                className="w-[200px]"
                placeholder="Search to Select"
                optionFilterProp="label"
                onChange={setSelectedReportType}
                options={[
                  { value: "ລາຍການຄ່າແນະນຳ", label: "ລາຍການຄ່າແນະນຳ" },
                  { value: "ຂໍ້ມູນຜູ້ແນະນຳ", label: "ຂໍ້ມູນຜູ້ແນະນຳ" },
                ]}
              />
            </div>

            {/* ສະຖານະ */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ສະຖານະ</label>
              <Select
                showSearch
                className="w-[180px]"
                placeholder="Search to Select"
                optionFilterProp="label"
                onChange={(value) => {
                  if (value === "ALL") {
                    setSelectedStatus(null);
                  } else {
                    setSelectedStatus(value);
                  }
                }}
                options={[
                  { value: "ALL", label: "ທັງໝົດ" },
                  { value: "ອະນຸມັດ", label: "ອະນຸມັດ" },
                  { value: "ບໍ່ອະນຸມັດ", label: "ບໍ່ອະນຸມັດ" },
                ]}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button
                type="primary"
                className="w-[120px]"
                onClick={handleSearch}
              >
                <SearchOutlined /> ຄົ້ນຫາ
              </Button>
            </div>
          </div>
        </Form>
      </div>

      <div className="mt-5">
        <div className="flex justify-end p-3">
          <Button
            type="default"
            className="w-[120px]"
            onClick={exportExcel}
            color="cyan"
            variant="solid"
          >
            <FileExcelOutlined /> Excel
          </Button>
        </div>
        <Table columns={columns} data={filteredData} />
        {/* <Table columns={columns} dataSource={filteredData} /> */}
      </div>
    </>
  );
};

export default Report;
