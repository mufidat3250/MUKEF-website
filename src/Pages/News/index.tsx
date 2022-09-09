import NavTabs from "../../attoms/NavTabs";
import { navData } from "../../data";
import PageLayout from "../../Layouts";
import "./News.scss";
import { newsData } from "../../data";
import NewsCard from "../../attoms/NewsCard";
import Button from "../../attoms/Button";
import ProjectNews from "../../attoms/ProjectNews";

const News = () => {
  return (
    <PageLayout>
      <div className="News">
        <div className="">
          <div className="NewsWrapper">
            <NavTabs tabs={navData} tabIndex={1} color="white" />
          </div>
          <div className="student">
            <div className="">
              <img
                src="/public/images/image14.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className=" ml-5 md:mt-[7rem] mt-[6.5625rem]  ">
              <ProjectNews />
              <div className="mb-[4.5625rem] flex justify-between mt-[4.5625rem] flex-col md:gap-10 md:flex-row">
                {newsData.map((data, index) => (
                  <NewsCard {...data} key={` news${index}`} />
                ))}
              </div>
            </div>
            <div className="mt-[3.75rem] mb-[3.0625rem] flex justify-end">
              <div className="w-[16.375rem]">
                <Button
                  title={"See more news"}
                  customStyle={"!bg-[#2D2D2D] !text-white !rounded-[5px]"}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="student--news">
          <div className="w-[88%] mx-auto">
            <div className="">
              <img
                src="/public/images/image14.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className=" ml-auto md:ml-[7.375rem] lg:p-0 mt-[2.5625rem]">
              <ProjectNews />
              <div className="news--card-wrapper flex-col md:flex-row md:gap-10">
                {newsData.map((data, index) => (
                  <NewsCard {...data} key={` news${index}`} />
                ))}
              </div>
              <div className="button--container">
                <div className="w-[16.375rem]">
                  <Button
                    title={"See more news"}
                    customStyle={"!bg-gray900 !rounded-[5px] text-white"}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default News;
