import ArrowDown from "./attoms/Vectors/ArrowDown";
import { filteredResult } from "./Pages/TransactionPage"
export const a = 'hh'
export const tableData = filteredResult
.map((payment, index) => ({
  date: payment.date,
  paymentType: payment.paymentType,
  amount: payment.amount,
  status: <div className={`${payment.status.includes('Success') ? 'success' : 'failed'}`}>{payment.status}</div>,
}))

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
    width:"10rem"
  },
];
