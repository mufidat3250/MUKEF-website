
const Select = ({options, title, initial}:{options:Array<String>, title?:string, initial:string})=> {
  return (
   <div className=" flex flex-col">
       <p className="mb-2 text-[#858585] text-sm">{title}</p>
         <div className='w-full flex h-[2.7125rem] relative'>
   <select name="" id="" className="flex-grow pl-4 outline-none border-none cursor-pointer bg-gray600 text-[#222222] ">
        <option value="" selected>{initial}</option>
        {options.map((option, index)=><option key={index}>{option}</option>)}
    </select>
    <img src="/public/vectors/angle-down.svg" alt=""  className="absolute right-2 top-[12px]"/>

   
    </div>
   </div>
  )
}

export default Select