const x = '{"id": "AB0000000", "name": "John", "age": 21}';  // x is string
var person = JSON.parse(x);  // person is a JSON object

console.log(`${person.name} is aged ${person.age}`);