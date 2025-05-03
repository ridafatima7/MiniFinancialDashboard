import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "../components/ui/table";

const TransactionTable = ({ transactions }) => {
  // ---Helper to format date-------
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border border-gray-200">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="p-3 text-left font-semibold text-gray-700">Date</TableHead>
            <TableHead className="p-3 text-left font-semibold text-gray-700">Amount</TableHead>
            <TableHead className="p-3 text-left font-semibold text-gray-700">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((txn) => (
            <TableRow key={txn.id} className="hover:bg-gray-50 border-b">
              <TableCell className="p-3">{formatDate(txn.date)}</TableCell>
              <TableCell className="p-3 font-medium text-green-700">$ {txn.amount}</TableCell>
              <TableCell className="p-3 text-gray-600">{txn.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
