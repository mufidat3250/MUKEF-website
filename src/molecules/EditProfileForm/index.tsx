
import Button from "../../attoms/Button";
import Input from "../../attoms/Input";
import Select from "../../attoms/Select";
import "./EditProfile.scss";

const EditProfile = () => {
  return (
    <div className="flex flex-col space-y-[1.25rem]">
      <div className="flex space-x-4 ">
        <div className="w-[30%]">
          <Select
            initial="Select Title"
            options={["Mr", "Mrs", "Miss", "Prof"]}
            title="Title"
          />
        </div>
        <div className=" w-[70%]">
          <Input
            placeholder={"Abdul"}
            title="Title"
            customStyle="bg-gray600 h-[2.7418rem]"
          />
        </div>
      </div>
      <div>
        <Input
          title="Email"
          placeholder={"wahabmufidat@gmail.com"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div className="grid grid-cols-2 space-x-4">
        <Input
          title="Phone Number"
          placeholder={"080123456789"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
        <Input
          title="Phone Number"
          placeholder={"080123456789"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div>
        <Input
          title="Address"
          placeholder={"wahabmufidat@gmail.com"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div className="grid grid-cols-2 space-x-4 ">
        <Select
          initial="Select State"
          options={["Osun", "Ogun", "Kwara"]}
          title="State"
        />
        <Input
          title="Nationality"
          placeholder={"Nigeria"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div>
        <Input
          title="Favourite quote"
          placeholder={"إِنَّ سَعْيَكُمْ لَشَتَّىٰ"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div className="h-[1px] w-full bg-[#DFDFDF] mt-[2.5rem] mb-[1.8125rem] flex">
      </div>
      <div>
      <div className="grid grid-cols-2 space-x-4">
        <Input
          title="Password"
          placeholder={"Password"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
        <Input
          title="Confirm Password"
          placeholder={"Confirm Password"}
          customStyle="bg-gray600 h-[2.7418rem]"
        />
      </div>
      <div className="mt-[2.9375rem] flex justify-between space-x-[0.84625rem]">
      <p>check</p>
      <Button
          onClick={() => {}}
          title="Receive update form us"
          customStyle="bg-transparent text-black w-[13.5575rem] h-[2.7418rem] rounded-[4.16px] font-bold"
        />
      <Button
          onClick={() => {}}
          title="Save"
          customStyle="bg-black w-[13.5575rem] h-[2.7418rem] rounded-[4.16px] font-bold text-white"
        />
        
      </div>
      </div>
    </div>
  );
};

export default EditProfile;
