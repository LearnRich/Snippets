let customers = [
    {id: 0, nqame: 'Ben'},
    {id: 1, name: 'Charlotte'},
    {id: 2, name: 'Abigail'},
    {id: 3, name: 'Caitlin'}
];

let customer = customers.find(cust => cust.name === 'Ben');

console.log(customer)