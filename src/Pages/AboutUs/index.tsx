import React from 'react'
import NavTabs from '../../attoms/NavTabs'
import { navData } from '../../data'

const AboutUs = () => {
  return (
    <div>
    <NavTabs tabs={navData} tabIndex={2} />

    </div>
  )
}

export default AboutUs