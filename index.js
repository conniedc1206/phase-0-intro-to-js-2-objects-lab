//assign an employee variable to an object containing name and streetAddress keys
const employee = {
    name: 'Bob',
    streetAddress: '123 Park St.' 
};

//console.log(employee)

//define a function called updateEmployeeWithKeyAndValue()
//take in three arguments: an employee Object, a key and a value
//should not mutate the employee; 
//should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object};
    newEmployee[key] = value;
    return newEmployee;
}

//define a function called destructivelyUpdateEmployeeWithKeyAndValue()
//this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

//define a function called deleteFromEmployeeByKey()
//arguments: a employee Object and a key
//should delete the property with that key from the employee Object
//This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {...object}
    delete newEmployee[key];
    return newEmployee;
}

//define a function called destructivelyDeleteFromEmployeeByKey()
//this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}