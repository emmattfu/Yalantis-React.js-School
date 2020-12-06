import React from 'react'
import EmployeeListItem from './EmployeeListItem'

import "../styles/employeesList.css"

const EmployeesList = ({alphabet, employees}) => {

    if(!alphabet) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div className="employeesList">
            {alphabet.map(elem => {

                return (
                    <div className="employeesList__item" key={elem.id}>
                        {elem.letter}
                        <EmployeeListItem letter={elem} employees={employees}/>
                    </div>
                )
            })}
        </div>
    )
}

export default EmployeesList