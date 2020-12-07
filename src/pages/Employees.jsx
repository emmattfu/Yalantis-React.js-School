import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeesBrithday from "../components/EmployeesBirthday";
import EmployeesList from "../components/EmployeesList";
import { getEmployees } from "../redux/actions";
import { alphabetArr } from "../utils/utils"

import "../styles/employees.css";

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const alphabet = [...alphabetArr]

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="employees page">
      <div className="employees__list">
        <h2>Employees</h2>
        <EmployeesList alphabet={alphabet} employees={employees} />
      </div>

      <div className="employees__birthday"> 
        <h2>Employees birthday</h2>
        <EmployeesBrithday />
      </div>
    </div>
  );
};

export default Employees;
