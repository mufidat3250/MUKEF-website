import SearchIcon from "../Vectors/SearchIcon";
import "./Input.scss";
type inputProp = {
  placeholder: string;
  customStyle?: string;
  icon?:boolean;
  value?:string;
  onChange?:(value:any)=>void;
};
const Input = ({ placeholder, onChange,  customStyle, icon, value }: inputProp) => {
  console.log(icon)
  return (
    <div className={`Input--container ${customStyle}`}>
     <div className="flex">
       
     {icon ? <span className="pl-[0.888rem] pr-[0.6226rem]"><SearchIcon/></span>:''}
     </div>
      <input type="text"  className={`${!icon && 'pl-5'}`} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  );
};

export default Input;
