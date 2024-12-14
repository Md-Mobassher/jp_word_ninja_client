"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Table, Form, Space, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import axios from "axios";

interface User {
  key: string;
  name: string;
  email: string;
  role: string;
}

const UserManagement = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchText, setSearchText] = useState("");
  const [form] = Form.useForm();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users`
      );
      setData(response.data.map((user: any) => ({ ...user, key: user.id })));
      setLoading(false);
    } catch (error) {
      message.error("Failed to fetch user data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (values: any) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${selectedUser?.key}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        message.success("User updated successfully!");
        fetchData();
        setIsEditModalOpen(false);
        form.resetFields();
      }
    } catch (error) {
      message.error("Failed to update user.");
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filteredValue: [searchText],
      onFilter: (value: string, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()) ||
        record.email.toLowerCase().includes(value.toLowerCase()) ||
        record.role.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedUser(record);
              form.setFieldsValue(record);
              setIsEditModalOpen(true);
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between gap-5 items-center mb-5">
        <h1 className="text-2xl font-bold text-center text-primary">
          User Management
        </h1>
        <Input
          placeholder="Search by name, email, or role"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "300px", border: "1px solid lightgray" }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={data.filter((item) =>
          searchText
            ? item.name.toLowerCase().includes(searchText.toLowerCase()) ||
              item.email.toLowerCase().includes(searchText.toLowerCase()) ||
              item.role.toLowerCase().includes(searchText.toLowerCase())
            : true
        )}
        loading={loading}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
        rowKey="key"
      />

      <Modal
        title="Edit User"
        visible={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
          form.resetFields();
        }}
        onOk={() => {
          form.validateFields().then((values) => handleEdit(values));
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please enter the role" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
