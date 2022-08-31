import React, { ReactNode, useState } from 'react'
import './Dashboard.scss'
import {navData, sideNav} from '../../data'
import NavTabs from '../../attoms/NavTabs'
import PageLayout from '../../Layouts'
import { useNavigate,} from 'react-router-dom'

const DashboardLayout = ({children, title}:{children:ReactNode, title?:string}) => {
  const navigate = useNavigate()
  const [currentPath] = useState(window.location.pathname)
  
  return (
  <PageLayout >
      <div className='DashboardLayout' >
            <div className='nav--container'>             
             <NavTabs tabs={navData} logout={true} otherStyle={'!text-[#1D2319]'} color='#1D2319' tabIndex={10}/>
            </div>
            <section className=''>
             <aside className='side--nav--container'> 
                   {
                     sideNav.map(({Icon, title, link}, index)=>{
                       let isActive = currentPath===link
                       console.log(isActive, 'isActive')
                       return (
                        <div key={`sideNav${index}`} className={`single--tab ${isActive && 'bg-[rgba(119,_119,_119,_0.16)] '}`} onClick={()=> navigate(link)}>
                        <Icon/>
                        <p>{title}</p>
                      </div> 
                       )
                     })
                   }
             </aside>
             <main className='text-black'>
                  <div className='mt-[1.375rem] border-[#E7E7E7] border-[1px] rounded-[0.625rem] ml-[4.1875rem] mr-[5.5rem] mb-[3.0625rem]'>
                        <div className='flex space-x-4 items-center py-[1.125rem] pl-[1.75rem]'>
                          <img src="/public/images/AbdulgannyOladosu.png" alt="" />
                          <div className='text-center'>
                            <h1 className='text-sm text-black font-[500]'>Prof. Abdul-Ganiyy Oladosu (AGAS) OON</h1>
                            <p className='text-black text-xs font-[600] opacity-[0.5] tracking-[-0.444375px]'>Chief Imam of University of Ilorin</p>
                          </div>
                        </div>
                  </div>
                {title && <p className=' padding-b-[0.5862rem] text-xl font-normal text-[#111111] border-b-[1px] border-[#f5f5f5] mr-[7.6875rem]'>{title}</p>}
             {children}
             </main>
            </section>
    </div>
  </PageLayout>
  )
}

export default DashboardLayout