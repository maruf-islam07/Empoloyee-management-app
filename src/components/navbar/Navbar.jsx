import React from "react";
import Layout from "../Layout/Layout";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../store/Features/popup/popupSlice";

function Navbar() {

  const dispatch = useDispatch()

  return (
    <div className="bg-base-200 sticky top-0 z-20 ">
      <Layout>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Employees</a>
          </div>
          <div className="navbar-end">
            <button
            onClick={()=>dispatch(openEmployeePopup())}
            className="btn btn-ghost btn-circle"
            >
              <FaPlus className="text-xl" />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaHeart className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Navbar;
