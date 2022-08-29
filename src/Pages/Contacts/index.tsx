import React from 'react'
import NavTabs from '../../attoms/NavTabs'
import { navData } from '../../data'

const Contacts = () => {
  return (
 <div>
    <NavTabs tabs={navData} tabIndex={4} />

 </div>
  )
}

export default Contacts