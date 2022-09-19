import "./TwoInput.scss";
import Input from "../Input";
import Stroke from "../../attoms/Vectors/stroke";

const TwoInput = ({ text }: { text: string }) => {
  return (
    <div className="expiry--input--container">
      <p className="text-textbutton">{text}</p>
      <div className="flex justify-between items-center w-[8rem]">
        <Input
          placeholder="M"
          customStyle="!bg-grey1800  h-[1.63rem] w-[2.68rem] rounded-[4.2px] flex  items-center !pl-0"
        />
        <Stroke />
        <Input
          placeholder="Y"
          customStyle="!bg-grey1800 h-[1.63rem] w-[2.68rem] rounded-[4.2px]  items-center"
        />
      </div>
    </div>
  );
};

export default TwoInput;
