import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeesList from "../components/EmployeesList";
import { getEmployees } from "../redux/actions";

import "../styles/employees.css";

const Employees = () => {
  const dispatch = useDispatch();
  const { alphabet, employees } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="employees">
      <div className="employees__list">
        <h2>Employees</h2>
        <EmployeesList alphabet={alphabet} employees={employees} />
      </div>

      <div className="employees__birthday"> 
        <h2>Employees birthday</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Employees;
