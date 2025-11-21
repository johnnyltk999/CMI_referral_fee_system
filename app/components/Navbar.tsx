"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import NotificationModal from "../ui/NotificationModal";
import { useRouter } from "next/navigation";

// import { LogOut, User as UserIcon } from "lucide-react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";

const cancel: PopconfirmProps["onCancel"] = (e) => {
  console.log(e);
  message.error("Click on No");
};

// const confirm: PopconfirmProps["onConfirm"] = (e) => {
//   console.log(e);
//   message.success("Click on Yes");
// };

const user = {
  fullname: "Santisouk Latikoun",
  role: "Administrator",
};

export default function DashboardPage() {
  // const { user, logout, loading } = useAuth();

  const router = useRouter();

  //   if (loading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center">
  //         <div>Loading...</div>
  //       </div>
  //     );
  //   }

  const handleLogout = async () => {
    // await logout();

    router.push("/login");
  };

  return (
    <div>
      <nav className="bg-white m-1  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                ລະບົບຄຸ້ມຄອງຄ່າແນະນຳ
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NotificationModal />

                <Avatar size="large" icon={<UserOutlined />} />
                {/* <UserIcon className="w-5 h-5 text-gray-600" /> */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {user?.fullname}
                  </p>

                  <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
              </div>

              <Popconfirm
                title="ອອກຈາກລະບົບ?"
                description="ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື ບໍ?"
                onConfirm={handleLogout}
                onCancel={cancel}
                okText="ແມ່ນ"
                cancelText="ບໍ່ແມ່ນ"
                placement="topRight"
              >
                <Button type="primary" danger>
                  ອອກຈາກລະບົບ
                </Button>
              </Popconfirm>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
