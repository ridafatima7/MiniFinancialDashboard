import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TransactionTable from "../Components/TransactionalTable";
import Sidebar from "./Sidebar";

const AccountDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["transactions", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://6810b5e927f2fdac24127ce7.mockapi.io/transactions?accountid=${id}`
      );
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center p-8">Loading Transactions...</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full h-screen overflow-x-auto p-6">
        <div className="min-w-[700px]">
          {/* Set a min-width if your table gets cut off */}
          <h2 className="text-3xl text-[#0F5F9C] font-bold mb-4">Transactions</h2>
          <TransactionTable transactions={data} />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
