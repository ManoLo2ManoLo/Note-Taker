const fs = require('fs');
const path = require('path');

function createNotes (body, notesArray) {
    notesArray.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return body;
}

function validateNotes (note) {
    if (!note.title || typeof note.name !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    createNotes,
    validateNotes
}