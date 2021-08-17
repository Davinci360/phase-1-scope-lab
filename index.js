/*`customerName`: Declare a variable in global scope called `customerName` using
  the `var` keyword.*/
var customerName = 'bob';
var bestCustomer;
function returnCustomerName() {
return customerName;
}
function upperCaseCustomerName() {
        customerName = customerName.toUpperCase();
   /* 'modifies the customerName variable'*/

}

function setBestCustomer() {
  bestCustomer = 'not bob'
}