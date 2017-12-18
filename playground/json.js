//var obj = {name: "Mark", age: 45};
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj)
//
//var person = '{"name":"Mark", "age": 45}';
//var newPerson = JSON.parse(person);
//console.log(typeof newPerson);
//console.log(newPerson);


const fs  = require('fs');

var originalNote = {
    title:'Crime and Punishment',
    body: 'you are guilty'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
console.log(note.body);