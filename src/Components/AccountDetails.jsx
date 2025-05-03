import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TransactionTable from "../Components/TransactionalTable";

export default function AccountDetails() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["transactions", id], async () => {
    const res = await axios.get(
      `https://6810b5e927f2fdac24127ce7.mockapi.io/transactions?accountid=${id}`
    );
    return res.data;
  });

  if (isLoading) return <div className="text-center p-8">Loading Transactions...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <TransactionTable transactions={data} />
    </div>
  );
}
