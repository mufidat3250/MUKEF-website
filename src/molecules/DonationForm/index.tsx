import React from "react";
import Button from "../../attoms/Button";
import Input from "../../attoms/Input";
import Select from "../../attoms/Select";
import Stroke from "../../attoms/Vectors/stroke";

function index() {
  return (
    <div className="grid--input">
      {/* <Input
        placeholder="Payment method"
        customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
      /> */}
      <Select initial="Matercard" options={["Mastercard", "Visa", "PayPal"]} />
      <Input
        placeholder="Card number"
        customStyle="!bg-greybutton h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
      />
      <Input
        placeholder="Cardholder"
        customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
      />
      <div className="h-[2.63rem] mt-[1.55rem] rounded-[4.24px] bg-greybutton flex justify-between items-center pl-5 pr-5">
        <p className="text-textbutton">Expiry</p>
        <div className="flex justify-between items-center w-[8rem]">
          <Input
            placeholder="M"
            customStyle="!bg-textbutton  h-[1.63rem] w-[2.68rem] rounded-[4.2px] flex  items-center !pl-0"
          />
          <Stroke />
          <Input
            placeholder="Y"
            customStyle="!bg-textbutton h-[1.63rem] w-[2.68rem] rounded-[4.2px]  items-center"
          />
        </div>
      </div>
      <Input
        placeholder="CVC"
        customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
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
      <p className="text-greybutton text-[11.06px] font-bold">Mukef projects</p>
      <div className="flex  ">
        <p className="text-black text-[11.06px] ">0134567890</p>
        <p className="text-black text-[11.06px] ml-[0.4rem]">GT Bank (GTB)</p>
      </div>
    </div>
  );
}

export default index;
