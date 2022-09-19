import "./DonationForm.scss";
import Button from "../../attoms/Button";
import Input from "../../attoms/Input";
import Select from "../../attoms/Select";
import Stroke from "../../attoms/Vectors/stroke";
import TwoInput from "../../attoms/TwoInput";

function index() {
  return (
    <div className="grid--input">
      <Select initial="Matercard" options={["Mastercard", "Visa", "PayPal"]} />
      <Input
        placeholder="Card number"
        customStyle=" h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
      />
      <Input
        placeholder="Cardholder"
        customStyle=" h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
      />
      <TwoInput text="Expiry" />
      <Input
        placeholder="CVC"
        customStyle=" h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
      />
      <div className="flex mt-[2.24rem]  items-center">
        <div className="h-[1rem] w-[1rem]">
          <input
            className="h-[1rem] w-[1rem]"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
        </div>
        <p className="text-black font-nromal ml-[0.78rem]  text-[12.44px]">
          Save my details for donations
        </p>
      </div>
      <div className="flex justify-center">
        {/* <button className="bg-black mt-[1.48rem] w-[13.95rem] h-[2.6rem] rounded-[4.16px] font-bold">
          Donate
        </button> */}
        <Button
          onClick={() => {}}
          title="Donate"
          customStyle="bg-black mt-[1.48rem] w-[13.95rem] h-[2.6rem] rounded-[4.16px] font-bold text-white"
        />
      </div>
      <p className="text-[11.06px] mt-[2.01rem] text-black">
        You can also pay directly to the platform bank account
      </p>
      <p className="text-grey1800 text-[11.06px] font-bold">Mukef projects</p>
      <div className="flex  ">
        <p className="text-black text-[11.06px] ">0134567890</p>
        <p className="text-black text-[11.06px] ml-[0.4rem]">GT Bank (GTB)</p>
      </div>
    </div>
  );
}

export default index;
