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
        <div className="  grid grid-rows-[auto,1fr] gap-y-[4.375rem]">
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr,1fr] gap-x-[3.625rem]">
            {transactiondata.map((transaction, index) => (
              <div
                key={`transaction${index}`}
                className="bg-gray600 pt-6 pl-4 lg:pl-10 space-y-6 pb-10 rounded-[0.625rem] "
              >
                <p className="bg-[rgba(7,_6,_13,_0.08)] py-2 px-3 w-fit rounded-[5px] font-[500] ">
                  {transaction.payment}
                </p>
                <p className="text-[#100C2A] text-2xl font-[700]">
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
          <div className=" bg-gray600 px-4 lg:px-10 pt-[1.375rem] mb-[4.375rem]">
            <div className=" flex flex-col lg:flex-row lg:justify-between mb-[1.875rem] ">
              <div className="space-y-2">
                <h1 className="font-[500] text-2xl text-gray1200">
                  Target Payment Information
                </h1>
                <div className="flex items-center">
                  <p className=" text-lg font-normal text-[#2E2E2E]">
                    Year 2021
                  </p>{" "}
                  <ArrowDown />
                </div>
              </div>
              <div className="flex  flex-col items-end">
                <h1 className="text-gray1600 text-2xl font-[500]">
                  Target payment
                </h1>
                <p className=" font-[500] text-5xl text-mainblack leading-[2.5rem] mt-2">
                  ₦1,200,000
                </p>
              </div>
            </div>
            <div className=" flex lg:space-x-[3.125rem] flex-col lg:flex-row items-center lg:items-end ">
              <div className="w-[250px]">
                <RadialBar />
              </div>
             <div className="flex mb-12 space-x-[7.375rem] self-center lg:self-end ">
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
        <div className="flex justify-between px-4 lg:px-0 pb-[2.8125rem] items-center">
          <h1 className=" text-xl font-semibold text-[#100C2A]">
            Payment history
          </h1>
          <div className="lg:w-[18.75rem]">
            <Input
              customStyle="bg-gray600 rounded-[5px]"
              icon={true}
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
