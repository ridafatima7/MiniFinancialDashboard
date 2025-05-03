import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AccountCard from "../Components/AccountCard";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await axios.get("https://6810b5e927f2fdac24127ce7.mockapi.io/accounts");
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((account) => (
        <AccountCard key={account.id} account={account} />
      ))}
    </div>
  );
}
