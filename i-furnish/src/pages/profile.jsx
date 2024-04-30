import { green } from "@mui/material/colors";
import React from "react";

const Profile = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div
        className="row g-0 "
        style={{
          backgroundColor: "ghostwhite",
          borderRadius: "25px",
          border: "none",
        }}
      >
        <div
          className="col-md-6"
          style={{
            backgroundImage: "url('/images/profile.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
          }}
        ></div>
        <div className="col-md-6">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 mt-3">
                <label className="labels">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6 mt-3">
                <label className="labels">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 mt-2">
                <label className="labels">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="col-md-12 mt-4">
                <label className="labels">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your mail"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                type="button"
                style={{
                  backgroundColor: "#24d278",
                  border: "none",
                  padding: "10px 20px",
                }}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
