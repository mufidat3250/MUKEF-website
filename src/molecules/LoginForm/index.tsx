import React from "react";
import Button from "../../attoms/Button";
import Input from "../../attoms/Input";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid--input">
        <Input
          placeholder="Payment method"
          customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Card number"
          customStyle="!bg-greybutton h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
      </div>
      <div className="flex mt-[2.24rem]  items-center ml-[10px]">
        <div className="h-[1rem] w-[1rem]">
          <input
            className="h-[1rem] w-[1rem]"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
        </div>

        <p className="text-black font-bold ml-[0.78rem]   text-[15.1px]">
          Remeber Me
        </p>
        <p className="text-black font-bold ml-[4.78rem]   text-[15.1px] ">
          Forget password ?
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("dashboard/profile")}
          title="Login"
          customStyle="bg-black mt-[1.48rem] w-[20.39rem] h-[2.6rem] rounded-[4.16px] font-bold text-white"
        />
      </div>
      <div className="flex   items-center mt-[2.66rem] w-[19rem] ml-6 ">
        <p className="bg-[#CACACA] flex-grow h-[1px] "></p>
        <span className="text-[#CACACA] m-[0.5rem]">or</span>
        <p className="flex-grow bg-[#CACACA] h-[1px] "></p>
      </div>
      <div className="flex mt-[1.85rem]  justify-around">
        <p className="text-black">Don’t have account ?</p>
        <p className="text-[#0B8EC2] font-bold">Subscribe now</p>
      </div>
    </>
  );
}

export default LoginForm;
