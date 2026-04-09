import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/Features/popup/popupSlice";

const Popup = () => {
  const popup = useSelector((state) => state.popup.employeePopup);
  const dispatch = useDispatch();

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80"
    >
      <fieldset 
        onClick={(e)=> e.stopPropagation()}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Detais</legend>

        <label className="label">Profile Url</label>
        <input type="text" className="input" placeholder="Profile Url" />

        <label className="label">Name</label>
        <input type="email" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">bio</label>
        <textarea className="textarea h-24" placeholder="Bio"></textarea>

        <button className="btn btn-neutral mt-4">Submit</button>
      </fieldset>
    </div>
  );
};

export default Popup;
