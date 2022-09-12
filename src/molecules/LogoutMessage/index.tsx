import Button from '../../attoms/Button'
import LogoutIcon from '../../attoms/Vectors/LogOutIcon'
import './LogoutMessage.scss'
import  {useNavigate} from 'react-router-dom'
const LogOutMessage = () => {
  const navigate = useNavigate()
  return (
    <div className='log--out'>
        <div className='log-out--message'>
        <LogoutIcon wd='1.5rem' ht='1.5rem'/>
        <p className='log-out-desc'>Are you sure you want to log out from your profile?</p>
    </div>
    <div className='button--wrapper'>
        <div className='flex justify-between '>
            <Button title={'No'} customStyle={'text-[#1D2319] font-[500] bg-white'} onClick={()=>navigate('/dashboard/profile')}/>
        </div>
        <div className='w-[6.125rem]'>
            <Button title={'Yes'} customStyle={'text-white bg-black  font-[500] rounded-[5px]'} onClick={()=>navigate('/')}/>
        </div>
    </div>
  </div>
  )
}

export default LogOutMessage