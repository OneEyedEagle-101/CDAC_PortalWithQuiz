import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "16 Mar, 2022", "Vishal ", "Java", "88", "A"),
  createData(1, "16 Mar, 2022", "Saurabh", "OOPJ", "90", "A"),
  createData(2, "16 Mar, 2022", "Sai Santosh", ".Net", "85", "A"),
  createData(
    3,
    "16 Mar, 2022",
    "Sagar Devkate",
    "Database Technology",
    "86",
    "A"
  ),
  createData(4, "15 Mar, 2022", "Ganesh Palve", "Core Java", "80", "A"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Quiz</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quiz Name</TableCell>
            <TableCell>Marks Obtained</TableCell>
            <TableCell align="right">Grade </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more students records
      </Link>
    </React.Fragment>
  );
}
