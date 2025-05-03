import React from "react";
const  Summary=({ accounts }) =>{
    const totalBalance = accounts.reduce((acc, curr) => acc + parseFloat(curr.balance), 0).toFixed(2);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="smallText mb-2">Total Accounts</p>
          <h2 className="text-2xl font-bold">{accounts.length}</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="smallText mb-2">Total Balance</p>
          <h2 className="text-2xl font-bold">${totalBalance}</h2>
        </div>
      </div>
    );
  }
  export default Summary
  