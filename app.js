const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    //confirmation or feedback to user, note will be object if note created, else undefined
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note not created');
        console.log('Title already taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'remove') {
    //created variable is the return result, true or false.
    var removed = notes.removeNote(argv.title);
    var message = removed ? "Note was removed" : "Note not found";
    console.log(message);
} else if (command === 'read') {
    var note = notes.getNote(argv.title); 
    if (note) {
        console.log("Your note is below");
        notes.logNote(note);
    } else {
        console.log("note not found");
    }
} else {
    console.log('command not recognized');
}
