import Button from '../../attoms/Button'
import NotificationIcon from '../../attoms/Vectors/Notification'
import './NotificationChange.scss'

const NotificationChange = ({closeModal}:{closeModal:()=>{}}) => {
  return (
  <div className='NotificationChange'>
        <div className='notificattion--container'>
            <NotificationIcon/>
        <p className='notification-desc'>You’ve just made changes to your profile.Do you want to keep the changes ?</p>
    </div>
    <div className='button--wrapper'>
        <div className='flex justify-between'>
            <Button title={'Discard changes'} customStyle={'text-[#1D2319] font-[700] bg-white text-[1rem]'} onClick={()=>{}}/>
        </div>
        <div className='w-[6.115rem]'>
            <Button title={'Save'} customStyle={'text-white bg-black  font-[700] rounded-[5px]'} onClick={closeModal}/>
        </div>
    </div>
  </div>
  )
}

export default NotificationChange