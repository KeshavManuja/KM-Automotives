import { Spin } from 'antd'
import React from 'react'

function Loader() {
  return (
    <div className='spinner'>
        <Spin size='large'/>
    </div>
  )
}

export default Loader