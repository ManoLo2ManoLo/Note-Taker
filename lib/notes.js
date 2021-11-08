const fs = require('fs');
const path = require('path');

function findById(id, animalsArray) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
    return result;
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
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNotes,
    validateNotes
}