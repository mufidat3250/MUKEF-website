import React from "react";
import "./CompletedProject.scss";

const CompletedProject = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="completed--project--container">
      <div>
        <img src={img} alt="" className="img" />
      </div>
      <p className="completed--project--wrapper">
        <strong className="completed--project--title">{title}</strong>{" "}
        <span className="completed--project--desc">{desc}</span>
      </p>
    </div>
  );
};

export default CompletedProject;
