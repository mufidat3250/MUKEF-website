import './Select.scss'
const Select = ({
  options,
  title,
  initial,
}: {
  options: Array<String>;
  title?: string;
  initial?: string;
}) => {
  return (
    <div className="select--container">
      <p className="select--title">{title}</p>
      <div className="select--wrapper">
        <select
          name=""
          id=""
          className="select"
        >
          <option value="" selected>
            {initial}
          </option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <img
          src="/public/vectors/angle-down.svg"
          alt=""
          className="dropDown--img"
        />
      </div>
    </div>
  );
};

export default Select;
