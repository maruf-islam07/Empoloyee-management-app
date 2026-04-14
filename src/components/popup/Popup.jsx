import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/Features/popup/popupSlice";
import {
  editEmployees,
  postEmployees,
} from "../../store/Features/empolyee/employee.thunk";

const Popup = () => {
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });
  const popup = useSelector((state) => state.popup.employeePopup);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlight: false,
      });
    } else if (popup.id) {
      setFormDetails({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlight: false,
      });
    }
  }, [popup]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (popup.id) {
      await dispatch(
        editEmployees({
          id: popup.id,
          details: formDetails,
        }),
      );
    } else {
      await dispatch(postEmployees(formDetails));
    }
    dispatch(closeEmployeePopup());
  };

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Detais</legend>

        <label className="label">Profile Url</label>
        <input
          name="profileUrl"
          type="text"
          className="input"
          placeholder="Profile Url"
          value={formDetails.profileUrl}
          onChange={handleInputChange}
        />

        <label className="label">Name</label>
        <input
          name="name"
          type="email"
          className="input"
          placeholder="Name"
          value={formDetails.name}
          onChange={handleInputChange}
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          value={formDetails.email}
          onChange={handleInputChange}
        />

        <label className="label">bio</label>
        <textarea
          name="bio"
          className="textarea h-24"
          placeholder="Bio"
          value={formDetails.bio}
          onChange={handleInputChange}
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default Popup;
