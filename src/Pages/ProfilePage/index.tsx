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
import AddDonation from "../../molecules/AddDonation";
import { useContent } from "../../utils/Context/Context";


const ProfilePage = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [value, setValue] = useState(0);
  const [addDonation, setAddDonation] = useState(false)
  const ref = useRef(null);
  useClickAway(ref, () => setToggleIcon(false));
  const navigate = useNavigate();
  const [stage, setStage] = useState("edit");
  const [selected, setselected] = useState(0)

  const {state, dispatch} = useContent()
        console.log(state)
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
  const projectTableData = projectSupportData.map((data, index) => {
    return {
      project: data.project,
      supportAmount: data.supportAccount,
      paidAmount: data.paidAmount,
      remainingAmount: data.remainingAmount,
      date: data.date,
      action: <BookIcon />,
    }
  });

  const donationTableData = projectSupportData.map((data, index) => {
    // setselected(index)
    return {
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
         <span onClick={()=>dispatch('toggle')}> {state.dropDown  && index === selected ? <SubtractIcon /> : <AddIcon />}</span>
  
          {/* <div ref={ref}> */}
            {/* {toggleIcon && index == value ? (
              <div className=" z-50  shadow-2xl w-[50rem] absolute right-0">
                {<DropDown />}
              </div>
            ) : (
              ""
            )} */}
          {/* </div> */}
        </div>
      ),
    }
  });

  return (
    <DashboardLayout title="">
      <div className="">
        <div className="ProfilePage">
          <p className="personal--info">
            Personal Information
          </p>
          {personalInfo.map(({ name, desc }, index) => {
            return (
              <div
                className="info"
                key={index}
              >
                <p className="info--title">
                  {name}
                </p>
                <p className="info--desc">
                  {desc}
                </p>
              </div>
            );
          })}
          <div className="edit--button">
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
              <h1 className="project--support">
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
              <h1 className="donatation--history">
                Donation history
              </h1>
              <Table
                headings={donationTableHead}
                tableData={donationTableData}
                tdBg={true}
                ClickRowAction={(index: any) => setValue(index)}
                tableHeadstyle={true}
                rowAction={true}
                selected={selected}
                setSelected={setselected}
              />
            </div>

            <div className="w-[13.5575rem] self-end">
              <Button
                title={"Add donation"}
                customStyle={
                  "!bg-[#1D2319] text-white rounded-[5px] !h-[2.7418rem]"
                }
                onClick={() => setAddDonation(true)}
              />
            </div>
          </div>
        </div>
        <Modal
          HeaderText={`${stage == 'edit' ?'Edit Profile':'Cancel Changes' }`}
          openModal={editModal}
          closeModal={setEditModal}
          width="32.75rem"
        >
         {
           stage === 'edit'?  <EditProfile editForm={()=>setStage('notification')} />: <NotificationChange/>
         }
         
       
        </Modal>
       <Modal HeaderText="Add donation" openModal={addDonation} closeModal={()=>setAddDonation(false)} 
       width='auto'>
         <AddDonation/>
       </Modal>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
