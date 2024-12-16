/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button, Input, Table, Form, Space, Tag, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import ReusableModal from "@/components/ui/ReusableModal";
import DeleteModal from "@/components/ui/DeleteModal";
import { FaPen, FaTrash } from "react-icons/fa6";
import { Option } from "antd/es/mentions";

const UserManagement = () => {
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "SUPER_ADMIN",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "ADMIN",
    },
    {
      key: "3",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      role: "USER",
    },
    {
      key: "4",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "SUPER_ADMIN",
    },
    {
      key: "5",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "ADMIN",
    },
    {
      key: "6",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      role: "USER",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [form] = Form.useForm();

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddUser = (values: any) => {
    const newUser = {
      key: Date.now().toString(),
      ...values,
    };
    setData([...data, newUser]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEdit = (key: string, updatedUser: any) => {
    setData(
      data.map((item) =>
        item.key === key ? { ...item, ...updatedUser } : item
      )
    );
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleDelete = () => {
    setData(data.filter((item) => item.key !== selectedKey));
    setDeleteModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setDeleteModalOpen(false);
  };

  const columns: ColumnsType<AnyObject> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
      render: (_, record) => {
        const colorMap: Record<string, string> = {
          ADMIN: "red",
          SUPER_ADMIN: "geekblue",
          USER: "green",
        };
        return <Tag color={colorMap[record.role]}>{record.role}</Tag>;
      },
      align: "center",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      fixed: "right",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<FaPen className="size-5 hover:text-blue-800" />}
            onClick={() => {
              setCurrentUser(record);
              form.setFieldsValue(record);
              setIsModalVisible(true);
            }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<FaTrash className="size-5 hover:text-red-800" />}
            onClick={() => {
              setSelectedKey(record.key);
              setDeleteModalOpen(true);
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-center text-primary">
        User Management
      </h1>

      <div className="flex justify-between gap-5 items-center mb-5">
        <Button
          type="primary"
          className="bg-primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setCurrentUser(null);
            form.resetFields();
            setIsModalVisible(true);
          }}
        >
          Add User
        </Button>
        <Input
          placeholder="Search by name or email"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>

      <Table
        rowKey="key"
        columns={columns}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "25"],
          onChange: (page, pageSize) => {
            console.log(`Page: ${page}, PageSize: ${pageSize}`);
          },
        }}
        scroll={{ x: "max-content" }}
        dataSource={filteredData}
        className="custom-table"
        bordered={true}
      />

      <ReusableModal
        className="lg:w-4xl md:w-3xl w-[90%]"
        title={currentUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        showCancelButton
        showConfirmButton
        onConfirm={() => {
          form
            .validateFields()
            .then((values) => {
              if (currentUser) {
                handleEdit(currentUser.key, values);
              } else {
                handleAddUser(values);
              }
            })
            .catch(() => {});
        }}
        content={
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Please enter the user's name" },
              ]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter the user's email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              name="role"
              label="Role"
              rules={[
                { required: true, message: "Please enter the user's role" },
              ]}
            >
              <Select placeholder="Select Role">
                <Option value="USER">User</Option>
                <Option value="ADMIN">Admin</Option>
                <Option value="SUPER_ADMIN">Super Admin</Option>
              </Select>
            </Form.Item>
          </Form>
        }
      />

      <DeleteModal
        isOpen={isDeleteModalVisible}
        onConfirm={() => handleDelete()}
        onClose={handleModalCancel}
        message="Are you sure you want to delete this User?"
      />
    </div>
  );
};

export default UserManagement;
