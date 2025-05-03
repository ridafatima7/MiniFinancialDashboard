import { Table, TableHeader, TableRow, TableCell, TableBody, TableHead } from "@/components/ui/table";

export default function TransactionTable({ transactions }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn.id}>
            <TableCell>{txn.date}</TableCell>
            <TableCell>{txn.description}</TableCell>
            <TableCell>${txn.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}