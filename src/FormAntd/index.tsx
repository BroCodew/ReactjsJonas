import { Button, Form, Input } from 'antd'
import React from 'react'
import "./index.scss"
import FormSimple from './FormSimple'
import TableAntd from './TableAntd'
import PaginationSimple from './PaginationSimple'
const FormAntd = () => {


  return (
    <div className='container'>
      {/* <FormSimple /> */}
      {/* <TableAntd /> */}
      <PaginationSimple />
    </div>
  )
}

export default FormAntd
