const Checkbox = ({
    text,
    onClick,
    customStyle
  }: {
    text: string;
    onClick?: () => void;
    customStyle?:string
  }) => {
    return (
      <label onClick={onClick}>
        <input type="checkbox" /> <span className={`${customStyle}`}>{text}</span>
        <span className="checkmark"></span>
      </label>
    );
  };
  
  export default Checkbox;