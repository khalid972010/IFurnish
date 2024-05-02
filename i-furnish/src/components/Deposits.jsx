import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useSelector } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
}

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};

export default function Deposits() {
  const orders = useSelector((state) => state.orders.orders);

  const totalRevenue = orders
    .reduce((acc, order) => acc + parseFloat(order.price), 0)
    .toFixed(2);

  return (
    <React.Fragment>
      <Title>
        <Typography variant="h6" sx={{ color: "black" }}>
          Revenue
        </Typography>
      </Title>
      <Typography
        component="p"
        variant="h4"
        sx={{ color: "#24d278", fontWeight: "bold" }}>
        ${totalRevenue}
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ flex: 1, fontSize: "14px", marginTop: "8px" }}>
        Date: {formatDate(new Date())}
      </Typography>
    </React.Fragment>
  );
}
