import React, { ReactNode } from 'react'
import Footer from '../molecules/Footer'

const PageLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='PageLayout h-screen '>
            <main>
                {children}
            </main>
            <Footer/>
    </div>
  )
}

export default PageLayout