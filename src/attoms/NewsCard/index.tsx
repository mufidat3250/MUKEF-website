import "./NewsCard.scss";
type newsCardProp = {
  img: string;
  desc: string;
  title: string;
  about: string;
};

const NewsCard = ({ img, desc, title, about }: newsCardProp) => {
  return (
    <div className="news--card">
      <div className="">
        <img src={img} alt="" className="news--card--img" />
      </div>
      <p className="recent--news--container ">
        <span className="recent--news">Recent news</span>
        <span className="dot">.</span>
        <span className="date capitalize">May 17 2022</span>
      </p>
      <h1 className="project--title">{title}</h1>
      <p className="need--to--know">{about}</p>
      <p className="desc">{desc}</p>
      <div className="co-founder--widget">
        <div className="co-founder-img">
          <img
            src="/public/images/co-founder.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="founder--name">Marvin McKinney</p>
          <span className="co-founder--title">
            Co-founder
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
