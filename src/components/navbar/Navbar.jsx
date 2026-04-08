import React from "react";
import Layout from "../Layout/Layout";
import { CgProfile } from "react-icons/cg";
import { FaPlus, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-base-100 sticky top-0 z-20 ">
      <Layout>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <FaPlus className="text-xl" />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <CgProfile className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Navbar;
