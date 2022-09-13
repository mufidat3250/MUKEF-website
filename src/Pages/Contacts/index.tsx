import Button from '../../attoms/Button'
import Input from '../../attoms/Input'
import NavTabs from '../../attoms/NavTabs'
import { navData, contactUs, contacts } from '../../data'
import PageLayout from '../../Layouts'
import './Contact.scss'


const Contacts = () => {
  return (
 <PageLayout>
 <div className='Contacts'>
    <NavTabs tabs={navData} tabIndex={4} color='white' />
    <div className='contact--us'>
      <h1 className='contact--title'>{contactUs.title}</h1>
      <div className='contact-desc'>
       <div className='img'>
       <img src="/vectors/Icon.svg" alt="" className=' md:w-full md:h-full' />
       </div>
        <div className=''>
          <p className='location'>{contactUs.location}</p>
          <span className='name'>{contactUs.name}</span>          
        </div>       
      </div>
      <div className='button--wrapper'>
          <Button title={'Donate now'} customStyle={'!bg-white text-gray900 font-[500] rounded-[5px]'} onClick={()=>{}}/>
        </div>
    </div>
 </div>

<div className='contact--form--wrapper'>
  <div className='contact--form--container'>
   <h1 className='contact--form--title'>Feel free to drop message for us </h1>
   <div className='contact--form'>
      <form action='' className='form'>
        <Input placeholder={'Name'}  customStyle={'rounded-[10px]'}/>        
        <Input placeholder={'Email'} customStyle={'rounded-[10px]'}/>
        <Input placeholder={'Subject'} customStyle={'rounded-[10px]'} />
        <textarea name="Input Text"  id="" cols={30} rows={10} placeholder='Input Text' className='textarea'></textarea>
      </form>
      <div className=' flex flex-col gap-5 justify-between'>
        <div className='contact--list'>
          {
            contacts.map(({Icon, title, desc}, index)=> <div className='single--contact--container'>            
                <div className='single--contact'>
                  <Icon/>                
                </div>
                <div className='single--contact--details'>
                    <p>{title}</p>
                    <p>{desc}</p>
                  </div>
            </div>)
          }
        </div>
        <div className='rounded-[0.625rem]'>
          <Button title={'Send'} customStyle={'!bg-[#152018] rounded-[10px] text-white font-[500] '} onClick={function (): void {
                  throw new Error('Function not implemented.')
                } }/>
        </div>
      </div>
   </div>
  </div>
</div>
 <div>
 </div>
 </PageLayout>
  )
}

export default Contacts