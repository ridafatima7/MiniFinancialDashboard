import React from "react";
import { FaUsers, FaDollarSign } from "react-icons/fa";

const Summary = ({ accounts }) => {
  const totalBalance = accounts
    .reduce((acc, curr) => acc + parseFloat(curr.balance), 0)
    .toFixed(2);

    // dummy analytics
  const accountGrowth = "+5%";
  const balanceGrowth = "+2.3%";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <FaUsers size={24} color="#608DB5" />
        </div>
        <div>
          <p className="smallText mb-1">Total Accounts</p>
          <h2 className="text-2xl font-semibold">{accounts.length}</h2>
          <p className="text-sm text-green-500">{accountGrowth} this month</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
        <div className="p-3 bg-green-100 text-green-600 rounded-full">
          <FaDollarSign size={24} />
        </div>
        <div>
          <p className="smallText mb-1">Total Balance</p>
          <h2 className="text-2xl font-semibold">$ {totalBalance}</h2>
          <p className="text-sm text-green-500">{balanceGrowth} growth</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
