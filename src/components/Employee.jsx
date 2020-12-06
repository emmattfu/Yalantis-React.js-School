import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { chooseEmployee } from '../redux/actions'

const Employee = ({person}) => {
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()

    const onChangeHandler = (e) =>{
        if (isChecked === false) {
            dispatch(chooseEmployee(person))
        } else {
            console.log('dispatch remove')
        }
        
        setIsChecked(prev => !prev)
    }

    return (
        <div className="employee" style={{display: "flex"}}>
            <div>{person.lastName} {person.firstName}</div>
            <input type="checkbox" onChange={onChangeHandler} checked={isChecked}/>
        </div>
    )
}

export default Employee