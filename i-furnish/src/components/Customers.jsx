import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../redux/store/slices/user-slice";
import { IconButton, Modal, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function preventDefault(event) {
  event.preventDefault();
}

export default function Customers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showAllUsers, setShowAllUsers] = React.useState(false);
  const [deleteUserId, setDeleteUserId] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const displayedUsers = showAllUsers ? users : users.slice(0, 6);

  const handleDeleteUser = (userId) => {
    setDeleteUserId(userId);
    setOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    await dispatch(deleteUser(deleteUserId));
    setOpen(false);
    dispatch(getAllUsers());
  };

  const handleCancelDelete = () => {
    setDeleteUserId(null);
    setOpen(false);
  };

  const pillContainerStyle = {
    backgroundColor: "#24d278",
    color: "white",
    display: "inline-block",
    padding: "8px 20px",
    borderRadius: "20px",
    marginBottom: "5px",
  };

  return (
    <React.Fragment>
      <div className="title-container">
        <div style={pillContainerStyle}>Customers</div>
      </div>
      <Table size="small" className="custom-table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedUsers.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName + " " + row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell style={{ width: 20 }}>
                <IconButton
                  onClick={() => handleDeleteUser(row.id)}
                  aria-label="delete">
                  <DeleteIcon style={{ color: "black" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!showAllUsers && (
        <button
          color="primary"
          onClick={() => setShowAllUsers(true)}
          style={{
            width: 200,
            height: 40,
            padding: 10,
            fontSize: 14,
          }}>
          See more customers
        </button>
      )}
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
          <Typography variant="h6" id="modal-title">
            Confirm Delete
          </Typography>
          <Typography variant="body1" id="modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this customer?
          </Typography>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleCancelDelete}
              color="primary"
              sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button
              onClick={handleDeleteConfirmed}
              color="error"
              variant="contained">
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
