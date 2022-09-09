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
    <div className=" flex flex-col">
      <p className=" text-[#858585] text-sm">{title}</p>
      <div className="w-full flex h-[2.59rem] relative">
        <select
          name=""
          id=""
          className="flex-grow pl-4 h-full outline-none border-none cursor-pointer bg-gray600 rounded-[5px] font-bold text-[#222222]"
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
          className="absolute right-2 top-[8px]"
        />
      </div>
    </div>
  );
};

export default Select;
