import React from "react";
import Typography from "@mui/material/Typography";

const Unauthorized = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src="https://i.ibb.co/7kKYgKQ/Lock-icon.png"
        alt="lock"
        height="30%"
        style={{ marginBottom: "4rem" }}
      />
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Access to this page is restricted!
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", color: "gray" }}>
        Please check with the site admin if you believe this is a mistake.
      </Typography>
    </div>
  );
};

export default Unauthorized;
