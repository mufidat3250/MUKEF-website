import "./PopForm.scss";
import Input from "../../attoms/Input";
import Button from "../../attoms/Button";

function PopForm({ signUp }: { signUp: Function }) {
  return (
    <form>
      <div className="flex">
        <Input
          placeholder="title"
          customStyle="!bg-greybutton h-[2.59rem]  w-[7.25rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Other title"
          customStyle="!bg-greybutton h-[2.59rem] w-[13.90rem] rounded-[4.24px] text-textbutton ml-[1.01rem]"
        />
      </div>
      <div className="grid--input">
        <Input
          placeholder="Full name"
          customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Email"
          customStyle="!bg-greybutton h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Phone number"
          customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Password"
          customStyle="!bg-greybutton h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Confirm Password"
          customStyle="!bg-greybutton h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
      </div>
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
        <p className="text-black font-nromal ml-[0.78rem]">
          Receive update form us
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {}}
          title="Subscribe"
          customStyle="bg-black mt-[1.48rem] w-[13.95rem] h-[2.6rem] rounded-[4.16px] font-bold text-white"
        />
      </div>
      <div className=" flex mt-[1.36rem] justify-center">
        <p className="text-haveaccount w-auto font-bold">Have account ?</p>
        <button
          className="text-bluebuttontext font-medium h-[25px] w-[43px] ml-[1.29rem]"
          onClick={() => signUp()}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default PopForm;
