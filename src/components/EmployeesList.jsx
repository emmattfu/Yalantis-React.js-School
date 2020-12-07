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
                        <div className="employeesList__item-letter">{elem.letter}</div>
                        <EmployeeListItem letter={elem} employees={employees}/>
                    </div>
                )
            })}
        </div>
    )
}

export default EmployeesList