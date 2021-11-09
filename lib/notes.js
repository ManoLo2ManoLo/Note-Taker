const fs = require('fs');
const path = require('path');

function findToDelete(id, notesArray) {
    const result = notesArray.findIndex(note => note.id === id);
    notesArray.splice(result, 1)
    return notesArray;
}

function createNotes (body, notesArray) {
    notesArray.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return body;
}

function validateNotes (note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text != 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findToDelete,
    createNotes,
    validateNotes
}