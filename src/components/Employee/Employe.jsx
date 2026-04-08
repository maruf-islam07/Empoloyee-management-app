import React from "react";
import Layout from "../Layout/Layout";
import EmpolyeeCard from "./EmpolyeeCard";

function Employe() {
  return (
    <div>
      <Layout>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
          <EmpolyeeCard/>
         
        </ul>
      </Layout>
    </div>
  );
}

export default Employe;
 