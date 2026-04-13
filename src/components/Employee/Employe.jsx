import { useEffect } from "react";
import Layout from "../Layout/Layout";
import EmpolyeeCard from "./EmpolyeeCard";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../store/Features/empolyee/employee.thunk";

function Employe() {
  const employeeDetails = useSelector((s) => s.employee.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div>
      <Layout>
        <ul className="list bg-base-100 rounded-box shadow-md">
          {employeeDetails.map((details) => (
            <EmpolyeeCard details={details} key={details.id} />
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export default Employe;
