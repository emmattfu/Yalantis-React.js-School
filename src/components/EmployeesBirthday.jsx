import React from 'react'
import { useSelector } from 'react-redux'
import EmployeesBrithdayItem from './EmployeesBrithdayItem'

const EmployeesBrithday = () => {
    const {selectedEmployees, months} = useSelector(state => state)

    if (!selectedEmployees.length) {
        return <h2>No selected employees</h2>
    }

    return (
       <>
        {months.map(month => <EmployeesBrithdayItem month={month} months={months} employees={selectedEmployees}/>)}
       </>
    )
}

export default EmployeesBrithday