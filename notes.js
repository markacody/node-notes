console.log('Starting notes.js...');
const fs = require('fs');

var fetchNotes = () => {
     //try..catch ensures the app doesn't crash if notes-data.json doesn't exist or if it has corrupted data
    try {    
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };    
    var duplicateNotes = notes.filter((note) => {
       return note.title === title;  
    });
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes); 
        return note;
    };
    
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    //fetch notes, then filter to find the one, then display the first and only item in the array.
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    //fetch notes, then filter removing the dupe, then resave the resulting new array.
    var notes = fetchNotes();
    //populate a new array with all notes that do not match
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    //if the function returns true, note was removed
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log("--");
    console.log(note.title);
    console.log(note.body);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

