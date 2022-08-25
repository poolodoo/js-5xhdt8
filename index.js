// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function ShowOutput(some) {
  appDiv.innerHTML = some;
}	
ShowOutput('OK');

const student = `{
  "name": "Ray Vincent",
  "age": 35,
  "city": "Bangalore"
}`;

const MyStudent = JSON.parse(student);
console.log(MyStudent);
ShowOutput(student);