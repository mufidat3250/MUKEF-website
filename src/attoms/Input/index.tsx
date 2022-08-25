
import './Input.scss'
type inputProp = {
    placeholder: string;
    customStyle?:string
}
const Input = ({placeholder, customStyle}:inputProp) => {
  return (
    <div className={`Input--container ${customStyle}`}>
        <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input