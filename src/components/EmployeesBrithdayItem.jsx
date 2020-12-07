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
        <>
         <h1>{month.month}</h1>
            <ul>
                {employeesThisMonth.map(employee => {
                    const date = new Date(employee.dob).getDate()
                    const monthIndex = new Date(employee.dob).getMonth()
                    const year = new Date(employee.dob).getFullYear()
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