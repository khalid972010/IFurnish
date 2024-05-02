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
function createData(id, name, image, category, price) {
  return { id, name, image, category, price };
}

const rows = [
  createData(
    0,
    "Sofa 1",
    "https://i.pinimg.com/originals/29/61/55/296155d5943ce8830023e5ee33ab09ae.png",
    "Sofa",
    312.44
  ),
  createData(
    1,
    "Chair 1",
    "https://i.pinimg.com/originals/29/61/55/296155d5943ce8830023e5ee33ab09ae.png",
    "Chair",
    866.99
  ),
  createData(
    2,
    "Sofa 2",
    "https://i.pinimg.com/originals/29/61/55/296155d5943ce8830023e5ee33ab09ae.png",
    "Sofa",
    100.81
  ),
  createData(
    3,
    "Rug 1",
    "https://i.pinimg.com/originals/29/61/55/296155d5943ce8830023e5ee33ab09ae.png",
    "Rug",
    654.39
  ),
  createData(
    4,
    "Sofa 3",
    "https://i.pinimg.com/originals/29/61/55/296155d5943ce8830023e5ee33ab09ae.png",
    "Sofa",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Products() {
  return (
    <React.Fragment>
      <Title>
        <Typography variant="h6" color="#24d278">
          Products
        </Typography>
      </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <img
                  src={row.image}
                  alt="Product"
                  height="60px"
                  width="60px"
                ></img>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell
                align="right"
                style={{ color: "green" }}
              >{`$${row.price.toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more products
      </Link>
    </React.Fragment>
  );
}
