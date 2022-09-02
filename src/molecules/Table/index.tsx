import ArrowDown from '../../attoms/Vectors/ArrowDown'
import { paymentHistorydata } from '../../data'
import './Table.scss'
interface PropTypes{
  name?:string;
  tableData?:Array<Object>;
  clickRow?:Function;
  ClickRowAction?:Function;
  headings?:Array<{name:any; key:string}>;

}

const Table = ({headings = [{
  name:<div className='arrow--style'>DATE <ArrowDown/></div>, key:'date'
}, {name:<div className='arrow--style'>PAYMENT TYPE <ArrowDown/></div>, key:'paymentType'}, {name:<div className='arrow--style'>AMOUNT <ArrowDown/></div>, key:'amount'}, {name: <div className='arrow--style'>STATUS <ArrowDown/></div>, key:'status'}],  tableData = paymentHistorydata
.map((payment, index) => ({
  date: payment.date,
  paymentType: payment.paymentType,
  amount: payment.amount,
  status: <div className={`${payment.status.includes('Success')?'success':'failed'}`}>{payment.status}</div>,
})),
clickRow =()=>{},
ClickRowAction=()=>{}
}:PropTypes) => {
  return (
    <div className='tableContainer'>
      <div className='tableWrapper'>
          <table className='table'>
              <thead className=''>
                <tr>
                  {headings.map((heading, headingIndex)=><th key={`-heading${headingIndex}`}>
                    <div className='flex items-center'>
                      <span>{heading.name}</span>
                    </div>
                  </th>)}
                </tr>
              </thead>
              <tbody>
                {
                  tableData.map((row:any, rowIndex)=>(<tr className='h-5 relative' key={rowIndex}>
                      {headings.map((col, colIndex)=>(
                        <td className='' key={`col-index ${colIndex}`}>
                          <div className='flex items-center '>{row[col.key]}</div>
                        </td>
                      ))}
                  </tr>))
                }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Table