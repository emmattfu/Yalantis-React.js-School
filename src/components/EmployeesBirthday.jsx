import React from 'react'
import { useSelector } from 'react-redux'
import EmployeesBrithdayItem from './EmployeesBrithdayItem'
import { monthsArr } from '../utils/utils'

const EmployeesBrithday = () => {
    const selectedEmployees  = useSelector(state => state.selectedEmployees)
    const months = [...monthsArr]
    

    if (!selectedEmployees.length) {
        return <h2>No selected employees</h2>
    }

    return (
       <>
        {months.map(month => <EmployeesBrithdayItem key={month.id} month={month} months={months} employees={selectedEmployees}/>)}
       </>
    )
}

export default EmployeesBrithday