"use client";

import React, { useState } from "react";
import { Button, Input, Modal, Table, Form, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";

const UserManagement = () => {
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
    },
    {
      key: "3",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      role: "Moderator",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [addUserModalVisible, setAddUserModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddUser = (values: any) => {
    const newUser = {
      key: Date.now().toString(),
      ...values,
    };
    setData([...data, newUser]);
    setAddUserModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (key: string) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleEdit = (key: string, updatedUser: any) => {
    setData(
      data.map((item) =>
        item.key === key ? { ...item, ...updatedUser } : item
      )
    );
  };

  const columns: ColumnsType<AnyObject> = [
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
      width: 150,
      fixed: "right",

      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() =>
              form.setFieldsValue(record) || setAddUserModalVisible(true)
            }
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-primary">
        User Management
      </h1>

      <div className="flex justify-between gap-5 items-center mb-5">
        <Input
          placeholder="Search by name or email"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "300px" }}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setAddUserModalVisible(true)}
        >
          Add User
        </Button>
      </div>

      <Table
        rowKey={"peolloid"}
        columns={columns}
        pagination={{
          current: 1,
          pageSize: 5,
          total: 0,

          showSizeChanger: true,
          pageSizeOptions: ["10", "25", "50"],
        }}
        scroll={{ x: "max-content", y: 50 * 8 }}
        dataSource={data || []}
        className="custom-table-header"
        rowClassName="table-row"
        bordered={true}
      />

      <Modal
        title={form.getFieldValue("key") ? "Edit User" : "Add User"}
        visible={addUserModalVisible}
        onCancel={() => {
          setAddUserModalVisible(false);
          form.resetFields();
        }}
        onOk={() =>
          form
            .validateFields()
            .then((values) => {
              if (form.getFieldValue("key")) {
                handleEdit(form.getFieldValue("key"), values);
              } else {
                handleAddUser(values);
              }
            })
            .catch(() => {})
        }
      >
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
            <Input placeholder="Enter role (e.g., Admin, User)" />
          </Form.Item>
          <Form.Item name="key" hidden>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
