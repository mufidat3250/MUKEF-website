import React, { ReactNode } from 'react'
import Footer from '../molecules/Footer'
import './PageLayout.scss'

const PageLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='PageLayout h-screen  w-screen'>
            <main className=''>
                {children}
            </main>
            <Footer/>
    </div>
  )
}

export default PageLayout