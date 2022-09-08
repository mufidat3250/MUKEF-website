import React from 'react'

const CompletedProject = ({img, title, desc}:{img:string, title:string, desc:string}) => {
  return (
    <div className='w-[100%] flex flex-col'>
        <div>
            <img src={img} alt="" className='w-full'/>
        </div>
        <p className=' max-w-[21.7556rem] mt-4 self-center md:self-start md:text-left text-center lg:text-left'><strong className='text-[#1D2319]  text-xl'>{title}</strong> <span className='text-[#5F5F5F] font-normal text-base'>{desc}</span></p>
    </div>
  )
}

export default CompletedProject