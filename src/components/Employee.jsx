import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { chooseEmployee, removeEmployee } from '../redux/actions'

const Employee = ({person}) => {
    const selectedEmployees = useSelector(state => state.selectedEmployees)
    const [isChecked, setIsChecked] = useState(selectedEmployees.some((el) => el.id === person.id))
    const dispatch = useDispatch()
    
    const onChangeHandler = (e) =>{
        if (isChecked === false) {
            dispatch(chooseEmployee(person))
            localStorage.setItem("selectedEmployees", JSON.stringify([...selectedEmployees, person]));
        } else {
            const updatedSelectedEmployees = selectedEmployees.filter(el => el.id !== e.target.id )
            dispatch(removeEmployee(e.target.id))
            localStorage.setItem("selectedEmployees", JSON.stringify(updatedSelectedEmployees))
        }
        
        setIsChecked(prev => !prev)
    }

    return (
        <div className="employee" style={{display: "flex"}}>
            <div>{person.lastName} {person.firstName}</div>
            <input type="checkbox" id={person.id} onChange={onChangeHandler} checked={isChecked} />
        </div>
    )
}

export default Employee