import React from 'react'
import Button from '../../attoms/Button'
import Input from '../../attoms/Input'
import PageLayout from '../../Layouts'

const HomePage = () => {
  return (
    <PageLayout>
{/* <Button title='See all' customStyle={'!bg-[#070903]'} /> */}
<Input placeholder={'Name'} />
    </PageLayout>
  )
}

export default HomePage