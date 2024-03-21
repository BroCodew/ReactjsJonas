import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

const PaginationSimple = () => {

  const [dataSource, setDataSource] = useState([])
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15)

  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: '1',
      filters: [
        {
          text: 'Chẵn',
          value: 'even',
        },
        {
          text: 'Lẻ',
          value: 'odd',
        },
      ],
      onFilter: (value, record) => {
        console.log("value", value);
        console.log("record", record);

        if (value === 'even') {
          return record.id % 2 === 0; // Kiểm tra nếu là số chẵn
        }
        return record.id % 2 !== 0; // Nếu không phải chẵn, thì là lẻ
      },
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: '2',
    },
    {
      title: 'Status',
      dataIndex: 'completed',
      key: '3',
      filters: [
        {
          text: 'Completed',
          value: true,
        },
        {
          text: 'Inprogress',
          value: false,
        },
      ],
      // onFilter: (value: string, record) => record.completed.indexOf(value) === 0,
      onFilter: (value: string, record) => {
        return record.completed === value
      },
      render: (payload) => {
        return <div>{payload === true ? "Completed" : "Inprogress"}</div>
      }
    },
    {
      title: 'Status',
      key: '3',
      render: (payload) => {
        return <></>
      }
    },
  ];

  const getData = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json()
    setDataSource(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{
        current: page,
        pageSize: pageSize,
        onChange: (page, pageSize) => {
          console.log("page", page);
          setPage(page)
          setPageSize(pageSize)
        }
      }} />
    </div>
  )
}

export default PaginationSimple
