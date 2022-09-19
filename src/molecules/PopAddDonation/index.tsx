import "./PopAddDonation.scss";
import Button from "../../attoms/Button";
import Input from "../../attoms/Input";
import Stroke from "../../attoms/Vectors/stroke";
import TwoInput from "../../attoms/TwoInput";

function PopAddDonation() {
  return (
    <div className="flex flex-col place-items-center mt-[-43px]  mr-[23px]  sm:flex-row ">
      <div className="first--pagee">
        <p className="text-xl text-black font-bold">Support this project</p>
        <p className="mt-[3.37rem] text-black text-[1.12rem]">
          Project title goes here
        </p>
        <div className="h-[14.12rem] rounded-[10px] mt-[12px]">
          <img
            className=" h-full w-full"
            src="/public/images/ongoingProject1.png"
            alt="ongoingProject"
          />
        </div>
        <p className="mt-[24px] text-black text-[14px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature Contrary to popular
          belief, Lorem Ipsum is not simply random .
        </p>
      </div>
      <div className="w-[20.39rem] h-[35.37rem] pl-0 md:pl-[40px]  ">
        <p className="text-black text-[13.62px] mb-2">Payment information</p>

        <Input
          placeholder="Amount"
          customStyle="!bg-greybutton h-[2.75rem]   rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Payment method"
          customStyle="!bg-greybutton h-[2.75rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Cardholder"
          customStyle=" h-[2.75rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Card number"
          customStyle=" h-[2.75rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="CVC"
          customStyle=" h-[2.75rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <TwoInput text="Expiry Data" />
        <div className="flex mt-[1.24rem]  items-center border-t-2 border-bordergrey pt-6">
          <div className="h-[1rem] w-[1rem]">
            <label className="">
              <input type="checkbox" />
            </label>
          </div>
          <p className="text-black text-[14.18px] font-medium ml-[0.78rem]">
            Save my details for donation
          </p>
        </div>
        <div className="flex justify-center ">
          <Button
            onClick={() => {}}
            title="Add donation"
            customStyle="bg-black mt-[1.48rem] w-[13.95rem] h-[2.6rem] rounded-[4.16px] font-bold text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default PopAddDonation;
