import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Typography, IconButton, Modal, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Import DeleteIcon
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deleteOrder } from "../redux/store/slices/order-slice";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const [showAllOrders, setShowAllOrders] = React.useState(false);
  const [deleteOrderId, setDeleteOrderId] = React.useState(null); // State to store the ID of the order to delete
  const [open, setOpen] = React.useState(false); // State to control the visibility of the modal dialog

  React.useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const displayedOrders = showAllOrders ? orders : orders.slice(0, 4);
  const pillContainerStyle = {
    backgroundColor: "#24d278",
    color: "white",
    display: "inline-block",
    padding: "8px 30px",
    borderRadius: "20px",
    marginBottom: "5px",
  };

  const handleDeleteOrder = (orderId) => {
    // Set the ID of the order to delete and open the modal dialog
    setDeleteOrderId(orderId);
    setOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    // Dispatch an action to delete the order
    await dispatch(deleteOrder(deleteOrderId));
    // Close the modal dialog
    setOpen(false);
    // Update the orders by fetching them again
    dispatch(getAllOrders());
  };

  const handleCancelDelete = () => {
    // Clear the deleteOrderId state and close the modal dialog
    setDeleteOrderId(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="title-container">
        <div style={pillContainerStyle}>Orders</div>
      </div>

      <Table size="small" className="custom-table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
            <TableCell style={{ minWidth: "40px" }}>Delete</TableCell>{" "}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedOrders.map((o) => (
            <TableRow key={o.id}>
              <TableCell>{o.date}</TableCell>
              <TableCell>{o.name}</TableCell>
              <TableCell style={{ color: "green" }}>{`$${o.price}`}</TableCell>
              <TableCell style={{ padding: "10px", width: "40px" }}>
                <IconButton
                  onClick={() => handleDeleteOrder(o.id)}
                  aria-label="delete">
                  <DeleteIcon style={{ color: "black" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!showAllOrders && (
        <button
          color="primary"
          href="#"
          onClick={() => setShowAllOrders(true)}
          sx={{ mt: 3 }}
          style={{
            width: 200,
            height: 40,
            padding: 10,
            fontSize: 14,
          }}>
          See more orders
        </button>
      )}
      {/* Modal Dialog */}
      <Modal
        open={open}
        onClose={handleCancelDelete}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}>
          <Typography id="modal-title" variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this order?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleCancelDelete}
              color="primary"
              sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button
              onClick={handleDeleteConfirmed}
              variant="contained"
              color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
      <style jsx>{`
        .title-container {
          margin-bottom: 20px;
        }

        .custom-table {
          border-collapse: collapse;
          width: 100%;
        }

        .custom-table th,
        .custom-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .custom-table th {
          background-color: #f2f2f2;
          font-weight: bold;
          text-align: left;
        }

        .custom-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .custom-table tr:hover {
          background-color: #ddd;
        }
      `}</style>
    </React.Fragment>
  );
}
