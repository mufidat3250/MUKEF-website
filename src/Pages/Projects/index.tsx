import React from 'react'
import NavTabs from '../../attoms/NavTabs'
import { navData } from '../../data'

const Projects = () => {
  return (
    <div className='text-black'>
    <NavTabs tabs={navData} tabIndex={2} />

    </div>
  )
}

export default Projects