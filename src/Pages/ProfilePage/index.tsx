import React from 'react'
import Button from '../../attoms/Button'
import { personalInfo } from '../../data'
import DashboardLayout from '../../Layouts/DashboardLayout'
import './ProfilePage.scss'
const ProfilePage = () => {
  return (
    <DashboardLayout title='Personal Information'>
      <div className='ProfilePage'>
          {personalInfo.map(({name, desc}, index)=> {
            return <div className='flex space-x-[3rem] pl-10' key={index}>
                <p className='w-[8.25rem] text-gray1400 text-[1.0204rem] font-normal'>{name}</p>
                <p className='text-[gray1500] text-lg font-normal tracking-[-0.311981px]'>{desc}</p>
            </div>
          })}
            <div className='w-[13.5575rem] self-end'>
              <Button title={'Edit'} customStyle={'!bg-[#1D2319] text-white rounded-[5px] !h-[2.7418rem]'} />
            </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage