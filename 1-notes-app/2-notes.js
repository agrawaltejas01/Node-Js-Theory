const chalk = require('chalk');
const fs = require('fs');

var err = chalk.red.bold;
var succ = chalk.green;
var warn = chalk.yellow;

var getNotes = () => {

    // This is not possible if existing file is empty
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }

    catch (e) {
        return [];
    }
}

const addNote = (title, body) => {

    var notes = getNotes();

    // Check for duplicates
    const duplicateNotes = notes.find((note) => note.title === title);

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });

        console.log(succ("New Note Added"));
        saveNotes(notes);

    }

    else
        console.log(warn("Note Already exists"));
}

const removeNote = (title) => {

    var notes = getNotes();

    const notesToKeep = notes.filter((note) => {
        return note.title != title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(warn("Note is removed"));
        saveNotes(notesToKeep);
    }

    else
        console.log(err("No note was found with given title"));
}

var listNotes = () => {

    const notes = getNotes();

    console.log(succ.inverse("YOUR NOTES"));
    notes.forEach(note => {
        console.log(succ(note.title))
    });
}

var readNote = (title) => {

    const notes = getNotes();

    const noteFound = notes.find( (note) => note.title === title );

    if(!noteFound)
    {
        console.log(err("No note was found"));
        return;
    }

    console.log(succ.inverse("NOTE"));
    console.log(succ( "Title : " + noteFound.title));
    console.log(succ( "Body : " + noteFound.body));


}

var saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote,
};