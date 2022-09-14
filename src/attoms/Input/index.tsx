import { ReactNode } from "react";
import SearchIcon from "../Vectors/SearchIcon";
import "./Input.scss";
type Prop = {
  placeholder: string;
  customStyle?: string;
  sufixIcon?:boolean;
  value?:string;
  onChange?:(value:any)=>void;
  title?:string;
  prefixIcon?:ReactNode
  
}& React.InputHTMLAttributes<HTMLInputElement>;
const Input = ({ placeholder, onChange,customStyle, sufixIcon, value, title , prefixIcon}: Prop) => {
  return (
    <div className={`Input--wrapper`}>
    {title && <span className="input--title">{title}</span>}
    <div className={`Input--container ${customStyle}`}>
    <div className="flex">       
     {sufixIcon ? <span className="search--icon"><SearchIcon/></span>:''}     
     </div>
      <input type="text"  className={`${!sufixIcon && 'pl-5'} text-[#222222]`} placeholder={placeholder} value={value} onChange={onChange}/>
    {prefixIcon && <span className="mr-4">{prefixIcon}</span>}
    </div>
    </div>
  );
};

export default Input;
