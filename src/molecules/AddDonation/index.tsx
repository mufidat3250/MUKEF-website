import React from 'react'
import Button from '../../attoms/Button'
import Checkbox from '../../attoms/CheckBox'
import Input from '../../attoms/Input'
import Select from '../../attoms/Select'
import CalenderIcon from '../../attoms/Vectors/CalenderIcon'
import ExcludeIcon from '../../attoms/Vectors/ExcludeIcon'
import './AddDonation.scss'

const AddDonation = () => {
  return (
    <div className='AddDonation'>
        <div className='Amount-year'>
            <Input placeholder={'Amount'} customStyle='h-[2.7362rem]' prefixIcon={<span className='amount'>₦</span>}/>
            <Input placeholder='Date picker' customStyle='h-[2.7362rem]'/>
        </div>
        <div className='checkbox'>
            <Checkbox text={'Remind me to make payment every Month or'} customStyle='text-[#222222] text-sm]'/> <CalenderIcon/>
        </div>
        <div className='line'>
        </div>
        <div className='Amount-year'>
           <Select options={['Master Card', 'Visa', 'PayPal']} initial='Payment Methods'/>
            <Input placeholder='Card Holder'/>
        </div>
        <div className='Amount-year'>
            <Input placeholder={'Card number'}/>
            <div className='flex items-center'>
            <Input placeholder='CVC'/>
            <ExcludeIcon/>
            </div>
        </div>
        <div className='Amount-year'>
            <Input placeholder={'Amount'} prefixIcon={<span className='amount'>₦</span>}/>
           <div>
           <Button title={'Add Donation'} customStyle={''} onClick={()=>{}} />
           </div>
        </div>
        <div className=''>
            <Checkbox text={'Save my details for donations'}/>
        </div>
        <div className='line !MB-[1.5rem]'>
        </div>
        <div className='space-x-[0.8456rem] flex justify-center items-center'>
            <ExcludeIcon/>
            <p>Donation may be made at convenient time, but must be completed before or at the end of the year.</p>
        </div>
    </div>
  )
}

export default AddDonation