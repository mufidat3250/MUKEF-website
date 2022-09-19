import "./PopForm.scss";
import Input from "../../attoms/Input";
import Button from "../../attoms/Button";
import Select from "../../attoms/Select";
import { useNavigate } from "react-router-dom";
function PopForm({ signUp }: { signUp: Function }) {
  const navigate = useNavigate();
  return (
    <form>
      <div className="flex justify-center items-center">
        <div className="w-full items-center justify-center ">
          <Select
            initial="Sheikh"
            options={["Sheikh", "Alhaji", "Alhaja", "Prof."]}
          />
        </div>
        <Input
          placeholder="Other title"
          customStyle=" h-[2.59rem] w-[13.90rem] rounded-[4.24px] text-textbutton ml-[1.01rem]"
        />
      </div>
      <div className="grid--input">
        <Input
          placeholder="Full name"
          customStyle="h-[2.59rem]   rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Email"
          customStyle="!bg-greybutton h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Phone number"
          customStyle=" h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Password"
          customStyle=" h-[2.59rem] mt-[1.55rem]  rounded-[4.24px] text-textbutton"
        />
        <Input
          placeholder="Confirm Password"
          customStyle=" h-[2.59rem]  mt-[1.55rem] rounded-[4.24px] text-textbutton"
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
        <p className="text-black font-normal ml-[0.78rem]">
          Receive update form us
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/dashboard/profile")}
          title="Subscribe"
          customStyle="bg-black mt-[1.48rem] w-[13.95rem] h-[2.6rem] rounded-[4.16px] font-bold text-white"
        />
      </div>
      <div className=" flex mt-[1.36rem] justify-center">
        <p className="text-haveaccount w-auto font-bold">Have account ?</p>
        <Button
          title="Login"
          customStyle="text-bluebuttontext font-medium h-[25px] w-[43px] ml-[1.29rem]"
          onClick={() => signUp()}
        />
      </div>
    </form>
  );
}

export default PopForm;
