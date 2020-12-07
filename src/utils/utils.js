export const getEmployeeDate = (employee) => {
  const date = new Date(employee.dob).getDate();
  const monthIndex = new Date(employee.dob).getMonth();
  const year = new Date(employee.dob).getFullYear();

  return { date, monthIndex, year };
};

export const monthsArr = [
  { month: "January", id: 0 },
  { month: "February", id: 1 },
  { month: "March", id: 2 },
  { month: "April", id: 3 },
  { month: "May", id: 4 },
  { month: "June", id: 5 },
  { month: "July", id: 6 },
  { month: "August", id: 7 },
  { month: "September", id: 8 },
  { month: "October", id: 9 },
  { month: "November", id: 10 },
  { month: "December", id: 11 },
];

export const alphabetArr = [
    { letter: "A", id: 0 },
    { letter: "B", id: 1 },
    { letter: "C", id: 2 },
    { letter: "D", id: 3 },
    { letter: "E", id: 4 },
    { letter: "F", id: 5 },
    { letter: "G", id: 6 },
    { letter: "H", id: 7 },
    { letter: "I", id: 8 },
    { letter: "J", id: 9 },
    { letter: "K", id: 10 },
    { letter: "L", id: 11 },
    { letter: "M", id: 12 },
    { letter: "N", id: 13 },
    { letter: "O", id: 14 },
    { letter: "P", id: 15 },
    { letter: "Q", id: 16 },
    { letter: "R", id: 17 },
    { letter: "S", id: 18 },
    { letter: "T", id: 19 },
    { letter: "U", id: 20 },
    { letter: "V", id: 21 },
    { letter: "W", id: 22 },
    { letter: "X", id: 23 },
    { letter: "Y", id: 24 },
    { letter: "Z", id: 25 },
  ]