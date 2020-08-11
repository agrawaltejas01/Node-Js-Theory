var notes = require("./2-notes");
const chalk = require('chalk');
const yargs = require('yargs')

var err = chalk.red.bold;
var succ = chalk.green;
var warn = chalk.yellow;

// We will take the command from command line itself.
// node 1-app.js add --title = "Sample Title"
// node 1-app.js remove --title = "Sample Title", etc.

// Customize yargs vesion
yargs.version('1.1.0');

// Create add command
yargs.command( {
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        },

        body : {
            describe : "Note Body",
            demandOption : true,
            type : String
        }
    },
    handler : (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
});

// Remove Command
yargs.command( { 
    command : 'remove',
    describe : 'Delete a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : String
        }
    },
    handler :  (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.command( { 
    command : 'read',
    describe : 'Read a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : String
        } 
    },
    handler :  (argv) => {
        notes.readNote(argv.title);
    }
});

yargs.command( { 
    command : 'list',
    describe : 'Listing all note',
    handler :  () => {
        notes.listNotes();
    }
});

// Try node 1-app.js --help

// Necessary to run
yargs.parse();