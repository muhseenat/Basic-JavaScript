const calculatePay =(yearSalary,bonus={
    teamBonus:0,
    employeeBonus:0

}) =>{
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay(20000,{teamBonus:25000,employeeBonus:500}));