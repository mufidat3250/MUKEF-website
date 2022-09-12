import Button from '../../attoms/Button'
import LogoutIcon from '../../attoms/Vectors/LogOutIcon'
import HomePage from '../../Pages/Home'
import './LogoutMessage.scss'
const LogOutMessage = () => {
  return (
    <div className='log--out'>
        <div className='log-out--message'>
        <LogoutIcon wd='1.5rem' ht='1.5rem'/>
        <p className='log-out--desc'>Are you sure you want to log out from your profile?</p>
    </div>
    <div className='button--wrapper'>
        <div className='flex justify-between '>
            <Button title={'No'} customStyle={'text-[#1D2319] font-[500] bg-white'} onClick={()=>{}}/>
        </div>
        <div className='w-[6.125rem]'>
            <Button title={'Yes'} customStyle={'text-white bg-black  font-[500]'} onClick={()=>{}}/>
        </div>
    </div>
  </div>
  )
}

export default LogOutMessage