import "./Footer.scss";
import { activities, socialIcon } from "../../data";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <div className="footer--content">
          <div className="footer--logo">
            <img src="/images/Mukef Logo.png" alt=""/>
          </div>
          <div className="activities">
            <div>
              <h1 className="title">{activities.events.title}</h1>
              <div className="subtext">
                {activities.events.data.map((d, index) => (
                  <p className="" key={index}>
                    {d}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h1 className="title">{activities.news.title}</h1>
              <div className="subtext">
                {activities.news.data.map((d, index) => (
                  <p className="" key={index}>
                    {d}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h1 className="title">{activities.completedProjects.title}</h1>
              <div className="subtext">
                {activities.completedProjects.data.map((d, index) => (
                  <p className="" key={index}>
                    {d}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h1 className="title">{activities.ongoingProjects.title}</h1>
              <div className="subtext">
                {activities.ongoingProjects.data.map((d, index) => (
                  <p className="" key={index}>
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto h-[1px] bg-lighgray2 my-[1.875rem]"></div>
        <div className="copywrite--social--links">
          <p className="copywrite">Copyright © 2020</p>
          <div className="social--icon--wrapper">
            {socialIcon.map(({ icon: Icon }, index) => (
              <div
                className="social--icon"
                key={index}
              >
                {<Icon />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
