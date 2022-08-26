import React from 'react'
import NavTabs from '../../attoms/NavTabs'
import { navData } from '../../data'

const Projects = () => {
  return (
    <div className='bg-red-400'>
    <NavTabs tabs={navData} tabIndex={2} />

    </div>
  )
}

export default Projects