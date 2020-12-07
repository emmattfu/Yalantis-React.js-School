import React from 'react'

const EmployeesBrithdayItem = ({month, months, employees}) => {

    const employeesThisMonth = employees.filter(emp => {
        const monthIndex = new Date(emp.dob).getMonth()
        return months[monthIndex].month === month.month
    })
    
    if (!employeesThisMonth.length) {
        return null
    }

    return (
      <h1>{month.month}</h1>
    )
}

export default EmployeesBrithdayItem