import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AccountCard from "../Components/AccountCard";
import Sidebar from "../Components/Sidebar";
import Summary from "../Components/Summary";
import TopBar from "./Topbar";

const Dashboard=() =>{
  const { data: accounts = [], isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await axios.get("https://6810b5e927f2fdac24127ce7.mockapi.io/accounts");
      return res.data;
    },
  });

  if (isLoading) return <div className="ml-64 p-6">Loading...</div>;

  return (
    <div className="flex">
      <Sidebar />
      {/* <TopBar /> */}
      <main className="ml-64 p-6 bg-[#F9FAFB] min-h-screen w-full">
        <h1 className="text-3xl  text-[#0F5F9C] font-bold  mb-4">Dashboard</h1>
        <Summary accounts={accounts} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Dashboard
