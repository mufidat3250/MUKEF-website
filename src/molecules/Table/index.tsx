import ArrowDown from "../../attoms/Vectors/ArrowDown";
import { paymentHistorydata } from "../../data";
import "./Table.scss";
interface PropTypes {
  name?: string;
  tableData?: Array<Object>;
  clickRow?: Function;
  ClickRowAction?: Function;
  headings?: Array<{ name: any; key: string; width?: string }>;
  tableHeadstyle?: string;
  tableDatastyle?: string;
  tdBg?: boolean;
  dropDown?:boolean
}
const tableHeading = [
  {
    name: (
      <div className="arrow--style">
        DATE <ArrowDown />
      </div>
    ),
    key: "date",
  },
  {
    name: (
      <div className="arrow--style">
        PAYMENT TYPE <ArrowDown />
      </div>
    ),
    key: "paymentType",
  },
  {
    name: (
      <div className="arrow--style">
        AMOUNT <ArrowDown />
      </div>
    ),
    key: "amount",
  },
  {
    name: (
      <div className="arrow--style">
        STATUS <ArrowDown />
      </div>
    ),
    key: "status",
    width: "10rem",
  },
];

const tData = paymentHistorydata.map((payment, index) => ({
  date: payment.date,
  paymentType: payment.paymentType,
  amount: payment.amount,
  status: (
    <div
      className={`${payment.status.includes("Success") ? "success" : "failed"}`}
    >
      {payment.status}
    </div>
  ),
}));
const Table = ({
  headings = tableHeading,
  tableData = tData,
  clickRow = () => {},
  ClickRowAction = () => {},
  tableDatastyle,
  tableHeadstyle,
  tdBg,
  dropDown,
  rowActions 
}: PropTypes) => {
  return (
    <div className="tableContainer">
      <div className="tableWrapper">
        <table className="table">
          <thead className={`${tableHeadstyle}`}>
            <tr>
              {headings.map((heading, headingIndex) => (
                <th
                  key={`-heading${headingIndex}`}
                  style={{ width: heading.width }}
                >
                  <div className="flex items-center mx-4">
                    <span>{heading.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, rowIndex) => (
             <>
              <tr className={`h-5 relative ${ClickRowAction && 'cursor-pointer' }`} key={`rowIndex--${rowIndex}`}>
                {headings.map((col, colIndex) => (
                  <td
                    style={{ width: col.width }}
                    className={`${tableDatastyle} ${
                      tdBg && rowIndex % 2 === 1 ? "bg-[#f9f9f9]" : ""
                    }`}
                    key={`col-index${colIndex}`}
                  >
                    {ClickRowAction ? (
                      <div className="flex items-center mx-4" onClick={()=>{
                        ClickRowAction(rowIndex)
                      }}>
                        {row[col.key]}                      
                      </div>
                    ) : (
                      <div className="flex items-center mx-4">
                       {row[col.key]}                      
                      </div>
                    )}
                  </td>
                ))}
              </tr>
              {<div className="test bg-red-500">i am the test</div>}
            </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
