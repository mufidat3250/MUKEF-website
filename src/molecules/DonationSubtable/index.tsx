import {donationData, subDonationData} from '../../data'
import './DodationTable.scss'

type DonationTableProp = {
    headings?: Array<{name:any; key:string}>;
    tableData?: Array<object>;
    tableHeadstyle: string;
    tdBg: boolean;

}

const tableHeading = [
    {
      name: 'Date',
      key: "date",
    },
    {
      name:'Amount Paid',
      key: "amountPaid",
    },
    {
      name: 'Status',
      key: "status",
    },
    {
      name:'Total Paid',
      key: "totalPaid",
    },
  ];

  const tData = subDonationData.map((donation, index) => ({
    date: donation.date,
    amountPaid: donation.amountPaid,
    status: (
      <div
        className={`${donation.status.includes("Success") ? "success" : "failed"}`}
      >
        {donation.status}
      </div>),
    totalPaid:donation.totalPaid
  }));

const DonationSubTable = ({headings=tableHeading, tableData=tData, tableHeadstyle, tdBg}:DonationTableProp) => {


    return (
        <div className="tableContainer">
          <div className="tableWrapper">
            <div className="overflow-auto w-full">
              <table className="table">
                <thead className={`${tableHeadstyle} text-xs bg-red-500`}>
                  <tr className="text-base">
                    {headings.map((heading, headingIndex) => (
                      <th
                        key={`-heading${headingIndex}`}
                        style={{}}
                      >
                        <div className="flex items-center mx-4">
                          <span className=" text-xs lg:text-base text-white">
                            {heading.name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row: any, rowIndex) => (
                    <>
                      <tr
                        className={`h-5 relative ${
                          "cursor-pointer"
                        }`}
                        key={`rowIndex--${rowIndex}`}
                      >
                        {headings.map((col, colIndex) => (
                          <td
                            style={{}}
                            className={`${
                              tdBg && rowIndex % 2 === 1 ? "bg-[#f9f9f9]" : ""
                            }`}
                            key={`col-index${colIndex}`}
                          >
                            <div className="flex items-center lg:mx-4">
                              {row[col.key]}
                            </div>
                          </td>
                        ))}
                      </tr>                      
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

export default DonationSubTable