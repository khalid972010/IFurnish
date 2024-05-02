import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Typography } from "@mui/material";

// Generate Order Data
function createData(id, firstName, lastName, email, phoneNumber) {
  return { id, firstName, lastName, email, phoneNumber };
}

const rows = [
  createData(0, "Mazen", "Ayman", "mazenaymanmo22@gmail.com", "01022936472"),
  createData(1, "Khalid", "El-Ssayed", "khalid@gmail.com", "01022936472"),
  createData(2, "Salah", "Zaher", "snageh@gmail.com", "01022936472"),
  createData(3, "Mahmoud", "El-Wensh", "mahmoud@gmail.com", "01022936472"),
  createData(4, "Rana", "Essam", "rana@gmail.com", "01022936472"),
  createData(4, "Shima", "Atef", "shima@gmail.com", "01022936472"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Customers() {
  return (
    <React.Fragment>
      <Typography variant="h6" color="#24d278">
        Customers
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName + " " + row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more customers
      </Link>
    </React.Fragment>
  );
}
