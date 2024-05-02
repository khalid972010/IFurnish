import React, { useState } from "react";
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
import { getAllPrds, deleteProduct } from "../redux/store/slices/product-slice";

function preventDefault(event) {
  event.preventDefault();
}

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null); // State to store the ID of the product to delete
  const [open, setOpen] = useState(false); // State to control the visibility of the modal dialog

  React.useEffect(() => {
    dispatch(getAllPrds());
  }, [dispatch]);

  const displayedProducts = showAllProducts ? products : products.slice(0, 5);

  const handleDeleteProduct = (productId) => {
    // Set the ID of the product to delete and open the modal dialog
    setDeleteProductId(productId);
    setOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    // Dispatch an action to delete the product
    await dispatch(deleteProduct(deleteProductId));
    // Close the modal dialog
    setOpen(false);
    // Fetch all products again to update the list
    dispatch(getAllPrds());
  };

  const handleCancelDelete = () => {
    // Clear the deleteProductId state and close the modal dialog
    setDeleteProductId(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Title>
        <div>
          <div style={pillContainerStyle}>Products</div>
        </div>
      </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Image</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Product name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Price
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedProducts.map((p) => (
            <TableRow key={p.id}>
              <TableCell>
                <img src={p.image} alt="Product" height="60px" width="60px" />
              </TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.category}</TableCell>
              <TableCell align="right" style={{ color: "green" }}>
                {`$${p.price.toFixed(2)}`}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => handleDeleteProduct(p.id)}
                  aria-label="delete">
                  <DeleteIcon style={{ color: "black" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!showAllProducts && (
        <button
          color="primary"
          onClick={() => setShowAllProducts(true)}
          style={{
            width: 200,
            height: 40,
            padding: 10,
            fontSize: 14,
          }}>
          See more products
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
            Warning
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this product?
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
    </React.Fragment>
  );
}

const pillContainerStyle = {
  backgroundColor: "#24d278",
  color: "white",
  display: "inline-block",
  padding: "4px 20px",
  borderRadius: "30px",
  marginBottom: "20px",
  fontSize: 19,
};
