import React from 'react'
import Employee from './Employee'

const EmployeeListItem = ({letter, employees}) => {

    const employeesArr = employees.filter(employee => employee.lastName[0] === letter.letter)

    if (!employeesArr.length) {
        return <div>------</div>
    }

    return (
        <>    
            {employeesArr.map(el => <Employee key={el.id} person={el}/>)}
        </>
    )
}

export default EmployeeListItem
