"use client";
import React, { useState } from "react";
import { Modal, List } from "antd";
import { BellOutlined } from "@ant-design/icons";

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  read?: boolean;
}

const notifications: NotificationItem[] = [
  { id: 1, message: "ການອະນຸມັດ", time: "10:30 AM" },
  { id: 2, message: "ອະນຸມັດເອເຈ້ນ", time: "09:00 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
  { id: 3, message: "ປະຕິເສດການອະນຸມັດ", time: "08:45 AM" },
];

const NotificationModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative mr-5 cursor-pointer" onClick={showModal}>
        <BellOutlined style={{ fontSize: 28, color: "orange" }} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
          {notifications.length}
        </span>
      </div>

      <Modal
        title="ການແຈ້ງເຕືອນ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ maxHeight: 300, overflowX: "auto" }}>
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item) => (
              <List.Item className="hover:bg-gray-100 rounded p-2">
                <List.Item.Meta
                  title={<span>{item.message}</span>}
                  description={
                    <span className="text-gray-400 text-xs">{item.time}</span>
                  }
                />
                {/* {!item.read && <Badge status="processing" />} */}
              </List.Item>
            )}
          />
        </div>
      </Modal>
    </>
  );
};

export default NotificationModal;
