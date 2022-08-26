import React from 'react'
import NavTabs from '../../attoms/NavTabs'
import { navData } from '../../data'

const News = () => {
  return (
    
    <div className=' bg-blue-500'>
<NavTabs tabs={navData} tabIndex={1}/>

    </div>
  )
}

export default News