import { useRef, useState } from "react";
import Button from "../../attoms/Button";
import AddIcon from "../../attoms/Vectors/AddIcon";
import BookIcon from "../../attoms/Vectors/Book";
import SubtractIcon from "../../attoms/Vectors/SubtractIcon";
import { personalInfo, projectSupportData } from "../../data";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Table from "../../molecules/Table";
import "./ProfilePage.scss";
import { useClickAway } from "react-use";
import DropDown from "../../molecules/Dropdowns/TableDropDown";
import Modal from "../../molecules/Modal";
import EditProfile from "../../molecules/EditProfileForm";
import { useNavigate } from "react-router-dom";
import NotificationChange from "../../molecules/NotificationChange";

const ProfilePage = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [value, setValue] = useState(0);
  const [changeNotification, setChangeNotification] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setToggleIcon(false));
  const navigate = useNavigate();
  const [stage, setStage] = useState("edit" );
  const projectSupportHeading = [
    {
      name: "Project",
      key: "project",
    },
    {
      name: "Supporting Amount",
      key: "supportAmount",
    },
    {
      name: "Paid Amount",
      key: "paidAmount",
    },
    {
      name: "Remaining Amount",
      key: "remainingAmount",
    },
    {
      name: "Date",
      key: "date",
    },
    {
      name: "",
      key: "action",
      width: "5rem",
    },
  ];
  const donationTableHead = [
    {
      name: "Project",
      key: "project",
    },
    {
      name: "Supporting Amount",
      key: "supportAmount",
    },
    {
      name: "Paid Amount",
      key: "paidAmount",
    },
    {
      name: "Remaining Amount",
      key: "remainingAmount",
    },
    {
      name: "Date",
      key: "date",
    },
    {
      name: "",
      key: "action",
      width: "5rem",
    },
  ];
  const projectTableData = projectSupportData.map((data, index) => ({
    project: data.project,
    supportAmount: data.supportAccount,
    paidAmount: data.paidAmount,
    remainingAmount: data.remainingAmount,
    date: data.date,
    action: <BookIcon />,
  }));

  const donationTableData = projectSupportData.map((data, index) => ({
    project: data.project,
    supportAmount: data.supportAccount,
    paidAmount: data.paidAmount,
    remainingAmount: data.remainingAmount,
    date: data.date,
    action: (
      <div
        className=" flex flex-col"
        onClick={() => {
          setValue(index);
          setToggleIcon(!toggleIcon);
        }}
      >
        {toggleIcon && index == value ? <SubtractIcon /> : <AddIcon />}

        <div ref={ref}>
          {toggleIcon && index == value ? (
            <div className=" z-50  shadow-2xl w-[50rem] absolute right-0">
              {<DropDown />}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    ),
  }));

  return (
    <DashboardLayout title="">
      <div className="">
        <div className="ProfilePage h-screen overflow-auto pb-80">
          <p className=" padding-b-[0.5862rem] text-xl font-normal text-[#111111] border-b-[1px] border-[#f5f5f5]">
            Personal Information
          </p>
          {personalInfo.map(({ name, desc }, index) => {
            return (
              <div
                className="grid grid-cols-[7rem,1fr] gap-x-3 lg:space-x-[3rem]"
                key={index}
              >
                <p className="lg:w-[8.25rem] text-gray1400 text-[1.0204rem] font-normal">
                  {name}
                </p>
                <p className="text-[gray1500] text-lg font-normal tracking-[-0.311981px] text-black">
                  {desc}
                </p>
              </div>
            );
          })}
          <div className="w-[13.5575rem] self-end mb-[3.5706rem]">
            <Button
              title={"Edit"}
              customStyle={
                "!bg-[#1D2319] text-white rounded-[5px] !h-[2.7418rem]"
              }
              onClick={() => setEditModal(true)}
            />
          </div>
          <div className="flex flex-col pb-[2.3206rem]">
            <div className="mb-[5rem]">
              <h1 className="pb-[0.5862rem] border-b-[1px] border-[#F5F5F5] font-normal mb-[2rem] text-[#111111]">
                Project support history
              </h1>
              <Table
                headings={projectSupportHeading}
                tableData={projectTableData}
                tdBg={true}
                tableHeadstyle="bg-red-500"
              />
            </div>
            <div className="w-[13.5575rem] self-end">
              <Button
                title={"Support a project"}
                customStyle={
                  "!bg-[#1D2319] text-white rounded-[5px] !h-[2.7418rem]"
                }
                onClick={() => navigate("/dashboard/support-project")}
              />
            </div>
          </div>
          <div className="flex flex-col pb-[1.6331rem]">
            <div className="mb-[5rem]">
              <h1 className="pb-[0.5862rem] border-b-[1px] border-[#F5F5F5] font-normal mb-[2rem] text-[#111111]">
                Donation history
              </h1>
              <Table
                headings={donationTableHead}
                tableData={donationTableData}
                tdBg={true}
                ClickRowAction={(index: any) => setValue(index)}
                tableHeadstyle="bg-green-500"
              />
            </div>

            <div className="w-[13.5575rem] self-end">
              <Button
                title={"Add donation"}
                customStyle={
                  "!bg-[#1D2319] text-white rounded-[5px] !h-[2.7418rem]"
                }
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <Modal
          HeaderText={"Cancel Notification"}
          openModal={editModal}
          closeModal={setEditModal}
          width="32.75rem"
        >
          {/* <EditProfile /> */}
          {/* <p className="text-black">ldkdjd</p> */}
          <NotificationChange/>
        </Modal>
        {/* <Modal HeaderText={"Cancel Change"} openModal={changeNotification} closeModal={setChangeNotification}>
        <NotificationChange/>
      </Modal> */}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
