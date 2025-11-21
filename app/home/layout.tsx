"use client";

import React, { useState, useMemo } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
  FileTextOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Image from "next/image";
import LOGO from "@/public/cmi_logo.png";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

// Breadcrumb Mapping
export const breadcrumbNameMap: Record<string, string> = {
  "/home": "ໜ້າຫຼັກ",
  "/home/referral": "ລາຍການຄ່າແນະນຳ",
  "/home/referral/payment": "ກວດສອບການຈ່າຍ",
  "/home/referrer": "ລາຍການຂໍ້ມູນຜູ້ແນະນຳ",
  "/home/report_data": "ລາຍງານ",
  "/home/admin": "Admin Setting",
  "/home/admin/user": "User Management",
  "/home/admin/cal": "Calculate Condition",
};

// Menu Key Mapping
export const menuKeyMap: Record<string, string> = {
  "/home": "1",
  "/home/referral": "2",
  "/home/referral/payment": "3",
  "/home/referrer": "4",
  "/home/report_data": "5",
  "/home/admin": "sub1",
  "/home/admin/user": "6",
  "/home/admin/cal": "7",
};

// Menu Items
export const items: MenuItem[] = [
  getItem(<Link href="/home">ໜ້າຫຼັກ</Link>, "1", <HomeOutlined />),
  getItem("ຄ່າແນະນຳ", "sub2", <FileTextOutlined />, [
    getItem(<Link href="/home/referral">ລາຍການຄ່າແນະນຳ</Link>, "2"),
    getItem(<Link href="/home/referral/payment">ກວດສອບການຈ່າຍ</Link>, "3"),
  ]),
  getItem(
    <Link href="/home/referrer">ລາຍການຂໍ້ມູນຜູ້ແນະນຳ</Link>,
    "4",
    <DesktopOutlined />
  ),
  getItem(<Link href="/home/report_data">ລາຍງານ</Link>, "5", <FileOutlined />),
  getItem("Admin Setting", "sub1", <UserOutlined />, [
    getItem(<Link href="/home/admin/user">User Manage</Link>, "6"),
    getItem(<Link href="/home/admin/cal">Calculate Condition</Link>, "7"),
  ]),
];

// Generate breadcrumb items from pathname
const getBreadcrumbItems = (pathname: string) => {
  const pathSnippets = pathname.split("/").filter(Boolean);
  return pathSnippets.map((_, index) => {
    const fullPath = "/" + pathSnippets.slice(0, index + 1).join("/");
    const name = breadcrumbNameMap[fullPath] || fullPath;
    return { title: <Link href={fullPath}>{name}</Link> };
  });
};

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbItems = useMemo(
    () => getBreadcrumbItems(pathname),
    [pathname]
  );
  // const selectedKey = menuKeyMap[pathname] || "1";
  const selectedKey = menuKeyMap[pathname];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
      >
        <div className="flex items-center gap-3 px-4 py-4">
          <Image
            src={LOGO}
            height={40}
            width={40}
            alt="Logo"
            className="rounded-md"
          />
          <div
            className={`text-xl font-semibold text-gray-900 tracking-wide transition-all duration-300
            ${
              collapsed
                ? "opacity-0 -translate-x-2.5 w-0 overflow-hidden"
                : "opacity-100 translate-x-0"
            }`}
          >
            CMIMFI
          </div>
        </div>

        <Menu
          theme="light"
          selectedKeys={[selectedKey]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        <Navbar />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
