const { GET_EMPLOYEES, CHOOSE_EMPLOYEE, REMOVE_EMPLOYEE } = require("./types")

export const getEmployees = () => {
    return async dispatch => {
        try {
            const data = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            const employees = await data.json()
            dispatch({type: GET_EMPLOYEES, payload: employees})
        } catch(error) {
            console.log(error)
        }
    }
}

export const chooseEmployee = employee => {
    return {type: CHOOSE_EMPLOYEE, payload: employee}
}

export const removeEmployee = id => {
    return {type: REMOVE_EMPLOYEE, payload: id}
}