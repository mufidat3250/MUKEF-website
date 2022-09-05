import SearchIcon from "../Vectors/SearchIcon";
import "./Input.scss";
type inputProp = {
  placeholder: string;
  customStyle?: string;
  icon?:boolean;
  value?:string;
  onChange?:(value:any)=>void;
  title?:string;
};
const Input = ({ placeholder, onChange,customStyle, icon, value, title}: inputProp) => {
  console.log(icon)
  return (
    <div className={`flex  flex-col h-fit`}>
    {title && <span className="text-[#858585] text-sm mb-2">{title}</span>}
    <div className={`Input--container ${customStyle}`}>
    <div className="flex">       
     {icon ? <span className="pl-[0.888rem] pr-[0.6226rem]"><SearchIcon/></span>:''}     
     </div>
      <input type="text"  className={`${!icon && 'pl-5'} text-[#222222]`} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
    
    </div>
  );
};

export default Input;
