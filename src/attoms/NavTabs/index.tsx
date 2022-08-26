import React, { useState } from 'react'
import './Nav.scss'
import {useNavigate} from 'react-router-dom'
import Button from '../Button'

type navbarProp = {
  tabs:Array<object>
  tabIndex?:number;
  activetab?:number;
  setActiveTab?:Function
}
const NavTabs = ({tabs, tabIndex}:navbarProp) => {
  const navigate = useNavigate()
  const [active, setActivetab] = useState(tabIndex || 0)
  const handleNav = (tab:string, value:number)=>{
    setActivetab(value)
    navigate(tab)
  }
  return (
    <div className=' NavBar'>
        <div className='flex items-center'>
          <div className=''>
            <img src='/public/images/MukefLogo1.png' alt="" />         
          </div>
          <h1>MUKEF</h1>
        </div>
   <div className='flex space-x-[7.4375rem]'>
   <div className='tabs'>
     {tabs.map((tab:any, index:number)=><p  className={`tab ${active==index ? ' text-green-700':''}`} key={`nav${index} `} onClick={()=>handleNav(tab.link, index)}>{tab.title}</p>)}
     </div>
      <div className='w-[8.0625rem]'>
      <Button title={'Login'} customStyle={'!font-[600] !text-[#0B8EC2] bg-white !rounded-[5px]'}/>
      </div>
   </div>
    </div>
  )
}

export default NavTabs