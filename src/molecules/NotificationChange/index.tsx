import React from 'react'
import Button from '../../attoms/Button'
import Notification from '../../attoms/Vectors/Notification'

const NotificationChange = () => {
  return (
  <div className='space-y-[2.8537rem]'>
        <div className=' space-x-[1.6568rem] flex items-center'>
            <Notification/>
        <p className='max-w-[17.3956rem] space-x-[1.415rem] text-sm text-[#5c5c5c]'>You’ve just made changes to your profile.Do you want to keep the changes ?</p>
    </div>
    <div className='flex'>
        <div className='flex justify-between'>
            <Button title={'Discard changes'} customStyle={'text-[#1D2319] font-[500] bg-white'} onClick={()=>{}}/>
        </div>
        <div className='w-[6.115rem]'>
            <Button title={'Save'} customStyle={'text-white bg-black  font-[500]'} onClick={()=>{}}/>
        </div>
    </div>
  </div>
  )
}

export default NotificationChange