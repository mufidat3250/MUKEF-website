import Button from "../../attoms/Button";
import Checkbox from "../../attoms/CheckBox";
import Calender from "../../attoms/DatePicker";
import Input from "../../attoms/Input";
import Select from "../../attoms/Select";
import CalenderIcon from "../../attoms/Vectors/CalenderIcon";
import ExcludeIcon from "../../attoms/Vectors/ExcludeIcon";
import "./AddDonation.scss";

const AddDonation = () => {
  return (
    <div className="AddDonation">
      <div className="Amount-year">
        <Input
          placeholder={"Amount"}
          customStyle="h-[2.7362rem]"
          prefixIcon={<span className="amount">₦</span>}
        />
       <Calender/>
      </div>
      <div className="checkbox">
        <Checkbox
          text={"Remind me to make payment every Month or"}
          customStyle="text-[#222222] text-sm]"
        />{" "}
        <CalenderIcon />
      </div>
      <div className="line"></div>
      <div className="Amount-year">
        <Select
          options={["Master Card", "Visa", "PayPal"]}
          initial="Payment Methods"
        />
        <Input placeholder="Card Holder" customStyle="h-[2.7362rem]" />
      </div>
      <div className="Amount-year my-[1.875rem]">
        <Input placeholder={"Card number"} customStyle="h-[2.7362rem]" />
        <div className="flex items-center space-x-[1.1256rem]">
          <Input placeholder="CVC" customStyle="h-[2.7362rem] " />
          <ExcludeIcon/>
        </div>
      </div>
      <div className="Amount-year mb-[1.875rem]">
        <Input placeholder={"Amount"} customStyle="h-[2.7362rem]" />
        <div>
          <Button
            title={"Add Donation"}
            customStyle={"h-[2.7362rem] bg-[#1D2319] rounded-[5px] text-white"}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className=" mb-6">
        <Checkbox text={"Save my details for donations"} />
      </div>
      <div className="line !MB-[1.5rem]"></div>
      <div className="space-x-[0.8456rem] flex justify-center items-center ">
        <ExcludeIcon />
        <p className="max-w-[25rem] md:max-w-[28rem] text-center text-[#858585]">
          Donation may be made at convenient time, but must be completed before
          or at the end of the year.
        </p>
      </div>
    </div>
  );
};

export default AddDonation;
