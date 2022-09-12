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
import {useNavigate} from 'react-router-dom'
const Projects = () => {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <div className="Project">
        <div className="charity">
            <NavTabs tabs={navData} tabIndex={2} color='white' />          
          <div className="charity--container">
            <h1 className="title">{charity.title}</h1>
            <p className="caption">{charity.caption}</p>
            <p className="donate">{charity.donaate}</p>
            <div className="w-[16.375rem] pb-[2rem] button ">
              <Button
                title={"Support Project"}
                customStyle={"!bg-white !text-gray900 !rounded-[5px]"} onClick={()=>navigate('/dashboard/support-project')}/>
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
          <div className="button--wrapper">
            <div className="w-[16.375rem] mr-4 lg:mr-0">
              <Button
                title={"See all"}
                customStyle={"!bg-[#1D2319] rounded-[5px] text-white"}
                onClick={()=>{}}
              />
            </div>
          </div>
        </div>


        
        <div className="completed--project">
          <h1 className="title">
            Some of our Ongoing projects
          </h1>

          <div className="project--wrapper">
            {completedProject.map((project, index) => (
              <CompletedProject {...project} key={index} />
            ))}
          </div>
          <div className="button--container">
            <div className="w-[16.375rem] mr-4 lg:mr-0">
              <Button
                title={"See all"}
                customStyle={"!bg-[#1D2319] rounded-[5px] text-white"}
                onClick={()=>{}}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
