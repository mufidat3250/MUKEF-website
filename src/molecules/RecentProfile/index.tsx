import "./RecentProfile.scss";
import HeadIcon from "../../attoms/Vectors/Head";
import EyeIcon from "../../attoms/Vectors/EyeIcon";
import MessageIcon from "../../attoms/Vectors/MsgIcon";

function RecentProfile({
  img,
  name,
  desc,
  viewers,
  comments,
}: {
  img: string;
  name: string;
  desc: string;
  viewers: string;
  comments: string;
}) {
  return (
    <div className="profile--container">
      <div className="image--container">
        <img src={img} className="w-[100%] h-[100%]" />
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <p className="profile--name">{name}</p>
        <p className="profile--desc">{desc}</p>
        <div className="flex mt-[1.03rem] sm:justify-start justify-center">
          <div className="icons-container">
            <p className="text-black font-bold text-[0.86rem]">Read More</p>
            <span className="ml-[0.71rem]">
              <HeadIcon />
            </span>
          </div>
          <div className=" flex justify-center items-center ml-[1.73rem]">
            <EyeIcon />
            <p
              className="text-black text-[0.65rem] ml-[0.27rem]
"
            >
              {viewers}
            </p>
          </div>
          <div className=" flex justify-center items-center ml-[1.73rem]">
            <MessageIcon />
            <p
              className="text-black text-[0.65rem] ml-[0.27rem]
"
            >
              {comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProfile;
