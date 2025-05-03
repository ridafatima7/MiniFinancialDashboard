import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

const AccountCard = ({ account }) => {
  const navigate = useNavigate();

  //----------- Function to handle card click
  const handleCardClick = () => {
    navigate(`/account/${account.id}`);  // ---------Navigate to the account details route
  };

  return (
    <Card
      className="transition border border-lg border-gray-300 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick} 
    >
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{account.name}</h3>
        <p className="smallText my-3">Type : {account.accounttype}</p>
        <p className="text-xl font-bold mt-2">
          <span className="smallText">Balance </span>: $ {account.balance}
        </p>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
