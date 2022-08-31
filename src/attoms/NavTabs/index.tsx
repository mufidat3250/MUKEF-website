import React, { useState } from 'react'
import './Nav.scss'
import {useNavigate} from 'react-router-dom'
import Button from '../Button'
import MunkefLogo from '../Vectors/MunkefLogo'
import LoginForm from '../../molecules/LoginForm/index'
import Modal from '../../molecules/Modal'

type navbarProp = {
  tabs:Array<object>
  tabIndex?:number;
  activetab?:number;
  setActiveTab?:Function;
  logout?:boolean;
  otherStyle?:string;
  color?:string
}
const NavTabs = ({tabs,logout, tabIndex, otherStyle, color}:navbarProp) => {
  const navigate = useNavigate()
  const [active, setActivetab] = useState(tabIndex || 0)
  const [loginModal, setLoginModal] = useState(false);
  const handleNav = (tab:string, value:number)=>{
    setActivetab(value)
    navigate(tab)
  }
  return (
  <>
        <div className=' NavBar'>
        <div className='flex items-center space-x-[2.0625rem]'>
          <MunkefLogo color={color}/>
          <h1 className={`font-[500] text-[#FFFFFF] text-[2.1255rem] cursor-pointer ${otherStyle}`}>MUKEF</h1>
        </div>
   <div className='flex space-x-[7.4375rem]'>
   <div className='tabs'>
     {tabs.map((tab:any, index:number)=><p  className={`tab ${active==index ? 'opacity-[0.5]':'text-white '} ${otherStyle}`} key={`nav${index} `} onClick={()=>handleNav(tab.link, index)}>{tab.title}</p>)}
     </div>
      <div className='w-[8.0625rem]'>
     {
       !logout? <Button title={'Login'} customStyle={'!font-[600] !text-[#0B8EC2] bg-white !rounded-[5px]'}   onClick={() => setLoginModal(true)}/>
       :  <Button title={'Login Out'} customStyle={`!font-[600] !text-white !bg-[#1D2319] !rounded-[5px]`} onClick={()=>{}}/>
     }
     </div>
   </div>
    </div>

<Modal
HeaderText="Login"
openModal={loginModal}
closeModal={() => setLoginModal(false)}
width="403.04px"
>
<LoginForm />
</Modal>
  </>
  )
}


export default NavTabs;
