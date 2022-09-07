import React from 'react'
import Button from '../../attoms/Button'

const NotificationChange = () => {
  return (
  <div>
        <div className='flex'>
        <NotificationChange/>
        <p className='max-w-[17.6956rem] space-x-[1.415rem]'>You’ve just made changes to your profile.Do you want to keep the changes ?</p>
    </div>
    <div>
        <div className='flex justify-between'>
            <Button title={'Discard changes'} customStyle={'text-[#1D2319] font-[500] bg-white'} onClick={()=>{}}/>
        </div>
        <div className='w-[2.125rem]'>
            <Button title={'Save'} customStyle={'text-white bg-black  font-[500]'} onClick={()=>{}}/>
        </div>
    </div>
  </div>
  )
}

export default NotificationChange