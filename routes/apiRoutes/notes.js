const router = require('express').Router();
const {
    findById,
    createNotes,
    validateNotes
} = require('../../lib/notes')
const { notesArray } = require('../../data/db');

router.get('/notes', (req, res) => {
    res.json(notesArray);
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArray);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();

    if(!validateNotes(req.body)) {
        res.status(400).send('This notes is note not properly formatted.')
    } else {
        const note = createNotes(req.body, notesArray)
        res.json(note);
    }
})

module.exports = router;