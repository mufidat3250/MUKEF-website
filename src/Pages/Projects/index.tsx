import React from "react";
import Button from "../../attoms/Button";
import CompletedProject from "../../attoms/CompletedProject";
import NavTabs from "../../attoms/NavTabs";
import {
  navData,
  charity,
  ongoingProjects,
  completedProject,
} from "../../data";
import PageLayout from "../../Layouts";
import OngoingProject from "../../molecules/OngoingProject";
import "./Projects.scss";
const Projects = () => {
  return (
    <PageLayout>
      <div className="Project">
        <div className="charity">
          <div className="nav--container">
            <NavTabs tabs={navData} tabIndex={2} />
          </div>
          <div className="max-w-[75%] mx-auto mt-[2.375rem]">
            <h1 className="title">{charity.title}</h1>
            <p className="caption">{charity.caption}</p>
            <p className="donate">{charity.donaate}</p>

            <div className="w-[16.375rem] pb-[2rem]">
              <Button
                title={"Donate now"}
                customStyle={"!bg-white !text-gray900 !rounded-[5px]"}
              />
            </div>
          </div>
        </div>
        <div className="ongoing--project">
          <h1 className="ongoing--project--title">
            Some of our Ongoing projects
          </h1>
          <div className="project--container">
            {ongoingProjects.map((project, index) => (
              <OngoingProject
                {...project}
                key={`ongoingProject${index}`}
                index={index}
              />
            ))}
          </div>
          <div className="grid place-items-end mt-[4.25rem] pb-[5.8125rem]">
            <div className="w-[16.375rem]">
              <Button
                title={"See all"}
                customStyle={"!bg-[#1D2319] rounded-[5px] text-white"}
              />
            </div>
          </div>
        </div>
        <div className="pt-[8.875rem] px-[7.8125rem]">
          <h1 className="text-gray1200 text-5xl font-[400] text-center tracking-wider mb-20">
            Some of our Ongoing projects
          </h1>

          <div className="grid grid-cols-3  gap-[4.8562rem] pb-[4.2418rem]">
            {completedProject.map((project, index) => (
              <CompletedProject {...project} key={index} />
            ))}
          </div>
          <div className="grid place-items-end pb-[5.75rem]">
            <div className="w-[16.375rem]">
              <Button
                title={"See all"}
                customStyle={"!bg-[#1D2319] rounded-[5px] text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
