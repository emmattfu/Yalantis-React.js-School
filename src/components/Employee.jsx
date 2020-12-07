import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { chooseEmployee, removeEmployee } from '../redux/actions'

const Employee = ({person}) => {
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()
    
    const onChangeHandler = (e) =>{
        if (isChecked === false) {
            dispatch(chooseEmployee(person))
        } else {
            dispatch(removeEmployee(e.target.id))
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