// "use client";

// import React from "react";
// import { Table } from "antd";
// import type { TableProps } from "antd";
// import { Pagination } from "antd";

// interface CustomTableProps<T> {
//   columns: TableProps<T>["columns"];
//   data: T[];
//   loading?: boolean;
// }

// function CustomTable<T extends { key: React.Key }>({
//   columns,
//   data,
//   loading,
// }: CustomTableProps<T>) {
//   return (
//     <div>
//       <Table<T>
//         columns={columns}
//         dataSource={data}
//         loading={loading}
//         rowKey="key"
//       />
//       <Pagination defaultCurrent={6} total={500} />
//     </div>
//   );
// }

// export default CustomTable;

"use client";

import React, { useState } from "react";
import { Table } from "antd";
import type { TableProps, PaginationProps } from "antd";

interface CustomTableProps<T> {
  columns: TableProps<T>["columns"];
  data: T[];
  loading?: boolean;
  defaultPageSize?: number;
  onRow?: TableProps<T>["onRow"]; // Optional onRow prop
}

function CustomTable<T extends { key: React.Key }>({
  columns,
  data,
  loading,
  onRow, // New onRow prop
  defaultPageSize = 10,
}: CustomTableProps<T>) {
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const handlePageChange: PaginationProps["onChange"] = (_, size) => {
    if (size) setPageSize(size);
  };

  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="key"
      onRow={onRow} // Use onRow prop
      pagination={{
        defaultPageSize,
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100"],
        showQuickJumper: true,
        onChange: handlePageChange,
      }}
    />
  );
}

export default CustomTable;
