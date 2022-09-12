import NavTabs from "../../attoms/NavTabs";
import { navData, prospects, partners } from "../../data";
import PageLayout from "../../Layouts";
import "./AboutUs.scss";

import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <PageLayout>
      <div className="About--us ">
      <NavTabs tabs={navData} tabIndex={1} color="white" />
      

        <h1 className="title">About Mukef</h1>
      </div>;
      <div className="prospect">
        {prospects.map(({ img, title, subtext }, index) => {
          return (
            <div className="space-y-[1.5rem]" key={index}>
              <div className="title--img">
                <img src={img} alt="image" />
                <p>{title}</p>
              </div>
              <p className="desc">
                {subtext}
              </p>
            </div>
          );
        })}
      </div>
      <div className="partners--container">
        <div className="partners">
          {partners.map((c:any, index:number) => (
            <div key={index}>
              <img src={c.img} alt="" />
              <div className="info">
                <p className="title">{c.title}</p>
                <span className="desc">
                  {c.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
