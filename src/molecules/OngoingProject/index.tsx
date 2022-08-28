import React from 'react'
import Button from '../../attoms/Button'

type Props = {
    title:string;
    desc:string;
    img:string;
    index:number
}

const OngoingProject = ({title, desc, img, index}:Props) => {
    console.log(index)
  return (
    <div className='flex justify-between items-center space-x-[2rem] '>
       <div className={`max-w-[36.5625rem] ${index==0?'-order-2':'order-1'}`}>
       <img src={img} alt={`ongoing project`}/>
       </div>
       <div className='space-y-[1.25rem]'>
           <h1 className='font-[500] text-black text-[2rem]'>{title}</h1>
           <p className='max-w-[36rem] text-lg font-normal text-[#777777] '>{desc}</p>
          <div className='w-[16.375rem]'>
          <Button title={'Support this project'} customStyle={'!bg-transparent  border-[1px] border-gray900 text-gray900 rounded-[5px]'}/>
          </div>
       </div>
    </div>
  )
}

export default OngoingProject