import React from 'react'
import { getEmployeeDate } from '../utils/utils'

const EmployeesBrithdayItem = ({month, months, employees}) => {

    const employeesThisMonth = employees.filter(emp => {
        const {monthIndex} = getEmployeeDate(emp)
        return months[monthIndex].month === month.month
    })
    
    if (!employeesThisMonth.length) {
        return null
    }

    return (
        <>
         <h3>{month.month}</h3>
            <ul>
                {employeesThisMonth.map(employee => {
                    const {date, monthIndex, year} = getEmployeeDate(employee)

                    return (
                    <li key={employee.id}>
                        {`${employee.lastName} ${employee.firstName} - ${date} ${months[monthIndex].month} ${year} year`}
                    </li>)
                })}
            </ul>
        </>
    )
}

export default EmployeesBrithdayItem