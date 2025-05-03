import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function AccountCard({ account }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/account/${account.id}`)}
      className="cursor-pointer hover:shadow-lg transition-all"
    >
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{account.name}</h3>
        <p className="text-sm text-gray-500">{account.type}</p>
        <p className="text-xl font-bold mt-2">${account.balance}</p>
      </CardContent>
    </Card>
  );
}