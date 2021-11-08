const { findById, createNotes, validateNotes } = require('../lib/notes.js');
const { notesArray } = require('../data/db');

jest.mock('fs');

test('finding notes from id', () => {
    const notes = [
        {
            "title": "Call Doctors",
            "text": "I need to get my knees checked out.",
            "id": "4"
        },
        {
            "title": "Doggy Day Plans",
            "text": "Take Bella to dog park.",
            "id": "5"
        },
        {
            "title": "This is an added Note",
            "text": "We are just testing to make sure the application is fully fuctional",
            "id": "6"
        },
    ]

    const result = findById('5', notes);

    expect(result.title).toBe('Doggy Day Plans');
    expect(result.text).toBe('Take Bella to dog park.');
});

test('creating a not', () => {
    const notes = createNotes({title: 'Doggy Day Plans', text: "Take Bella to dog park.", id: "100"}, notesArray)

    expect(notes.title).toBe('Doggy Day Plans');
    expect(notes.text).toBe('Take Bella to dog park.');
    expect(notes.id).toBe('100');
})

test('validating notes', () => {
    const validNotes = {
        "title": "Doggy Day Plans",
        "text": "Take Bella to dog park.",
        "id": "5"
    };

    const invalidNotes = {
        "title": "Doggy Day Plans",
        "id": "5"
    };

    const validResult = validateNotes(validNotes);
    const invalidResult = validateNotes(invalidNotes);

    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
})