import React, { ReactNode } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

type props = {
    children:ReactNode
}

const Calender = () => {
  return (
    <div>
      <DatePicker style={{width:'100%', height:'100%', border:'none', outline:'none', backgroundColor:'#f5f5f5', borderRadius:'5px'}} 
       format={'DD MMM, YYYY'}
       autoFocus={false}
       placeholder='Year'
      />
    </div>
  )
}

export default Calender