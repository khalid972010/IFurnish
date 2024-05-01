import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile, getProfile } from "../redux/store/slices/profile-slice";

const Profile = () => {
  const [userID, setID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setID(userID);
  }, []);

  useEffect(() => {
    if (userID) {
      dispatch(getProfile(userID));
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber ?? "");
    }
  }, [
    dispatch,
    user.email,
    user.firstName,
    user.lastName,
    user.phoneNumber,
    userID,
  ]);

  const validateName = (name) => {
    return /^[A-Za-z]+$/.test(name);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const re = /^01[0-2]\d{8}$/;
    return re.test(phone);
  };

  const handleSaveProfile = () => {
    if (!validateName(firstName)) {
      setFirstNameError("Please enter a valid first name");
      return;
    }
    setFirstNameError("");

    if (!validateName(lastName)) {
      setLastNameError("Please enter a valid last name");
      return;
    }
    setLastNameError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    setPhoneError("");

    dispatch(
      UpdateProfile({
        id: userID,
        firstName,
        lastName,
        email,
        phoneNumber,
      })
    );

    alert("Profile updated successfully!");
  };

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
                  className={`form-control ${firstNameError && "is-invalid"}`}
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError("");
                  }}
                />
                {firstNameError && (
                  <div className="invalid-feedback">{firstNameError}</div>
                )}
              </div>
              <div className="col-md-6 mt-3">
                <label className="labels">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${lastNameError && "is-invalid"}`}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameError("");
                  }}
                />
                {lastNameError && (
                  <div className="invalid-feedback">{lastNameError}</div>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 mt-2">
                <label className="labels">Email Address</label>
                <input
                  type="text"
                  className={`form-control ${emailError && "is-invalid"}`}
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
              </div>
              <div className="col-md-12 mt-2">
                <label className="labels">Phone Number</label>
                <input
                  type="text"
                  className={`form-control ${phoneError && "is-invalid"}`}
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setPhoneError("");
                  }}
                />
                {phoneError && (
                  <div className="invalid-feedback">{phoneError}</div>
                )}
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
                onClick={handleSaveProfile}
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
