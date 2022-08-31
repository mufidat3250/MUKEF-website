import React from 'react'
import ArrowDown from '../../attoms/Vectors/ArrowDown'
import { paymentMode, transactiondata } from '../../data'
import DashboardLayout from '../../Layouts/DashboardLayout'
import RadialBar from '../../molecules/Charts/ProgressBar'
import './TransacttionStyle.scss'

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <div className='transaction--container'>
        <h1 className='title'>Transaction History</h1>
        <div className='grid grid-rows-[auto,1fr] gap-y-[4.375rem]'>
          <div className='grid grid-cols-[1fr,1fr] gap-x-[3.625rem]'>
            {transactiondata.map((transaction, index) => <div key={`transaction${index}`} className='bg-gray600 pt-6 pl-10 space-y-6 pb-10 rounded-[0.625rem] '>
              <p className='bg-[rgba(7,_6,_13,_0.08)] py-2 px-3 w-fit rounded-[5px] font-[500] '>{transaction.payment}</p>
              <p className='text-[#100C2A] text-2xl font-[700]'>{transaction.amount}</p>
            </div>)}
          </div>
          <div className=' bg-gray600 px-10 pt-[1.375rem] mb-[4.375rem]'>
           
            <div className=' flex justify-between mb-[1.875rem] '>
              <div className='space-y-2'>
                  <h1 className='font-[500] text-2xl'>Target Payment Information</h1>
               <div className='flex items-center'>
               <p className=' text-lg font-normal text-[#2E2E2E]'>Year  2021</p> <ArrowDown/>
               </div>
              </div>
              <div className='flex  flex-col items-end'>
                  <h1 className='text-gray1600 text-2xl font-[500]'>Target payment</h1>
                  <p className=' font-[500] text-5xl text-mainblack leading-[2.5rem] mt-2'>₦1,200,000</p>
              </div>
            </div>
            <div className=' flex space-x-[3.125rem] items-end '>
            <div className='w-[250px]'>
            <RadialBar/>
            </div>
            <div className='flex mb-12 space-x-[7.375rem]'>
              {
                paymentMode.map(({title, amount,color}, index)=> <div key={index} className='flex space-x-2'>
                  <div>
                  <span className={`w-2 h-2 flex mt-2`} style={{backgroundColor:color}}></span>
                  </div>
                  <div className='space-y-4'>
                  <p className='text-gray1600'>{title}</p>
                  <p className='text-[#100C2A] font-medium text-xl'>{amount}</p>
                  </div>
                </div>)
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TransactionPage