
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
    </div>
  );
};

export default EditProfile;
