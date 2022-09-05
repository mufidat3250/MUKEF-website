import Button from '../../attoms/Button'
import LogoutIcon from '../../attoms/Vectors/LogOutIcon'

const LogOutMessage = () => {
  return (
    <div>
        <div className='flex'>
        <LogoutIcon/>
        <p className='max-w-[17.6956rem] space-x-[1.415rem]'>Are you sure you want to log out from your profile?</p>
    </div>
    <div>
        <div className='flex justify-between'>
            <Button title={'No'} customStyle={'text-[#1D2319] font-[500] bg-white'} onClick={()=>{}}/>
        </div>
        <div className='w-[2.125rem]'>
            <Button title={'Yes'} customStyle={'text-white bg-black  font-[500]'} onClick={()=>{}}/>
        </div>
    </div>
  </div>
  )
}

export default LogOutMessage