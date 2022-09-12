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
  return (
    <div className={`Input--wrapper`}>
    {title && <span className="input--title">{title}</span>}
    <div className={`Input--container ${customStyle}`}>
    <div className="flex">       
     {icon ? <span className="search--icon"><SearchIcon/></span>:''}     
     </div>
      <input type="text"  className={`${!icon && 'pl-5'} text-[#222222]`} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
    
    </div>
  );
};

export default Input;
