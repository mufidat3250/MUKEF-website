import React, { useState } from "react";
import Input from "../../attoms/Input";
import ArrowDown from "../../attoms/Vectors/ArrowDown";
import { paymentMode, transactiondata, paymentHistorydata } from "../../data";
import DashboardLayout from "../../Layouts/DashboardLayout";
import RadialBar from "../../molecules/Charts/ProgressBar";
import Table from "../../molecules/Table";
import "./TransacttionStyle.scss";

export let filteredResult: any[];
const TransactionPage = () => {
  const [filtered, setFiltered] = useState("");
  filteredResult = paymentHistorydata.filter(
    (data) =>
      data.paymentType
        .toLocaleLowerCase()
        .includes(filtered.toLocaleLowerCase()) ||
      data.amount.toLocaleLowerCase().includes(filtered.toLocaleLowerCase()) ||
      data.status.toLocaleLowerCase().includes(filtered.toLocaleLowerCase())
  );

  const tableData = filteredResult.map((payment, index) => ({
    date: payment.date,
    paymentType: payment.paymentType,
    amount: payment.amount,
    status: (
      <div
        className={`${
          payment.status.includes("Success") ? "success" : "failed"
        }`}
      >
        {payment.status}
      </div>
    ),
  }));
  return (
    <DashboardLayout>
      <div className="transaction--container">
        <h1 className="title">Transaction History</h1>
        <div className="Transaction--widget--wrapper">
          <div className="transaction-card">
            {transactiondata.map((transaction, index) => (
              <div
                key={`transaction${index}`}
                className={`card-wrapper `}
              >
                <p className={`transaction--payment ${index == 1?' text-[#219653] bg-[#219653]':'bg-[rgba(7,_6,_13,_0.08)] text-[#07060D]'} `}>
                  {transaction.payment}
                </p>
                <p className="transaction--amount">
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
          <div className="transaction--chart--wrapper">
            <div className=" payment--mode ">
              <div className="space-y-2">
                <h1 className="payment--info">
                  Target Payment Information
                </h1>
                <div className="flex items-center">
                  <p className=" year">
                    Year 2021
                  </p>{" "}
                  <ArrowDown />
                </div>
              </div>
              <div className="target-payment--container">
                <h1 className="payment">
                  Target payment
                </h1>
                <p className="amount">
                  ₦1,200,000
                </p>
              </div>
            </div>
            <div className="chart">
              <div className="w-[250px]">
                <RadialBar />
              </div>
             <div className="transaction--detail">
                {paymentMode.map(({ title, amount, color }, index) => (
                  <div key={index} className="flex space-x-2">
                    <div>
                      <span
                        className={`w-2 h-2 flex mt-2`}
                        style={{ backgroundColor: color }}
                      ></span>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray1600">{title}</p>
                      <p className="text-[#100C2A] font-medium text-xl">
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
        <div className="payment--history">
          <h1 className="title">
            Payment history
          </h1>
          <div className="lg:w-[18.75rem]">
            <Input
              customStyle="bg-gray600 rounded-[5px]"
              sufixIcon={true}
              placeholder={"Search for anything..."}
              onChange={(e: any) => setFiltered(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-[9.5625rem]">
        <Table tableData={tableData} tableDatastyle='border-[#C5C5C5] border-b-[1px]' />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default TransactionPage;
