import { CHOOSE_EMPLOYEE, GET_EMPLOYEES, REMOVE_EMPLOYEE } from "./types";

const initialState = {
  employees: [],
  selectedEmployees: JSON.parse(localStorage.getItem('selectedEmployees')) || [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === GET_EMPLOYEES) {
    return { ...state, employees: [...action.payload] };
  } else if (action.type === CHOOSE_EMPLOYEE){
      return {...state, selectedEmployees: [...state.selectedEmployees, action.payload]}
  } else if (action.type === REMOVE_EMPLOYEE) {
      const filteredEmployees = state.selectedEmployees.filter(el => el.id !== action.payload)
      return {...state, selectedEmployees: filteredEmployees}
  }

  return state;
};

export default rootReducer;
