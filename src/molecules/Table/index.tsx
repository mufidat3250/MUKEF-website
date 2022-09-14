import { useState } from "react";
import ArrowDown from "../../attoms/Vectors/ArrowDown";
import { paymentHistorydata } from "../../data";
import { useContent } from "../../utils/Context/Context";
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
  select?: number;
  rowAction?:Boolean;
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
  ClickRowAction = () => {},
  tableDatastyle,
  tableHeadstyle,
  tdBg,
  rowAction
}: PropTypes) => {
  const [selected, setSelected] = useState(0);

  const { state, dispatch } = useContent();
  const handlerowClick = () => {
    dispatch("show");
  };
  return (
    <div className="tableContainer">
      <div className="tableWrapper">
        <div className="overflow-auto w-full">
          <table className="table">
            <thead className={`${tableHeadstyle} text-xs`}>
              <tr className="text-base">
                {headings.map((heading, headingIndex) => (
                  <th
                    key={`-heading${headingIndex}`}
                    style={{ width: heading.width }}
                  >
                    <div className="flex items-center mx-4">
                      <span className=" text-xs lg:text-base">
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
                      ClickRowAction && "cursor-pointer"
                    }`}
                    key={`rowIndex--${rowIndex}`}
                    onClick={() => {
                      setSelected(rowIndex);
                      handlerowClick();
                    }}
                  >
                    {headings.map((col, colIndex) => (
                      <td
                        style={{ width: col.width }}
                        className={`${tableDatastyle} ${
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
                  {
                    rowAction && <tr>
                    {state.dropDown && rowIndex == 2 ? (
                      <div className="text-red-500"> thinking table</div>
                    ) : (
                      ""
                    )}
                  </tr>
                  }
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
