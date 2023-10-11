const employee = {
  name: 'John Doe',
  streetAddress: '123 Main St',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
console.log(employeeWithoutName);
console.log(employee);


function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);
