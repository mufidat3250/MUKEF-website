import "./Support.scss";
import DashboardLayout from "../../Layouts/DashboardLayout";
import OnProject from "../../molecules/OnProjects";
import { onProjectData } from "../../data";
import Modal from "../../molecules/Modal";
import { useState } from "react";
import PopForm from "../../molecules/PopForm/PopForm";
import PopAddDonation from "../../molecules/PopAddDonation";

const Support = () => {
  const [supportModal, setSupportModal] = useState(false);
  return (
    <>
      <DashboardLayout title="Ongoing projects">
        <div className="projects--con pr-16">
          {onProjectData.map((data, dataIndex) => (
            <OnProject
              key={dataIndex}
              {...data}
              onClick={() => {
                setSupportModal(true);
              }}
            />
          ))}
        </div>
      </DashboardLayout>
      <Modal
        width="706px"
        openModal={supportModal}
        closeModal={() => setSupportModal(false)}
      >
        <PopAddDonation />
      </Modal>
    </>
  );
};

export default Support;
