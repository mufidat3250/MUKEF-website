import React from 'react'
import Button from '../../attoms/Button'
import Input from '../../attoms/Input'
import NavTabs from '../../attoms/NavTabs'
import PageLayout from '../../Layouts'
import {navData} from '../../data'

const HomePage = () => {
  return (
    <PageLayout>
{/* <Button title='See all' customStyle={'!bg-[#070903]'} /> */}
<NavTabs tabs={navData} />
<Input placeholder={'Name'} />
    </PageLayout>
  )
}

export default HomePage