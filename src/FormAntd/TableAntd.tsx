import { Button, Select, Space, Table } from 'antd';
import React, { useEffect } from 'react'

const TableAntd = () => {
  const onChange: any = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '15 Downing Street',
    },
    {
      key: '3',
      name: 'Adam',
      age: 12,
      address: '12 Downing Street',
    },
  ];


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.key - b.key,

      render: (text) => <Button value="sample">{text}</Button>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: "Graduated",
      key: "graduated",
      render: (payload) => {
        console.log("payload", payload);
        return <p>{payload.age > 20 ? "true" : "false"}</p>
      }
    }
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default TableAntd
