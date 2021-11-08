const router = require('express').Router();
const {
    createNotes,
    validateNotes
} = require('../../lib/notes')
const { notes } = require('../../data/db');

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNotes(req.body)) {
        res.status(400).send('This notes is note not properly formatted.')
    } else {
        const note = createNotes(req.body, notes)
        res.json(note);
    }
})

module.exports = router;