import React, { ReactNode, useState } from 'react'
import './TableDropdown.scss'
import {useClickAway} from 'react-use'
import Table from '../../Table'
type dropDownProps={
    openDropDown? : boolean;
    setDropDown?:(value:any)=>{}
    children?:ReactNode
}

const DropDown = ({openDropDown,setDropDown , children}:dropDownProps) => {      
  

  return (
    <div>
      <Table/>
    </div>
  )
}

export default DropDown