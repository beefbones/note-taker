const router = require('express').Router();
// const {v4: uuidv4} = require('uuid')
const {readFromFile, readAndAppend} = require('../../helpers/fsUtils.js')
const {notes} = require('../../db/db.json')

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/', (req, res) => {
    console.info(`${req.method} request has been received!`)
    const {title, text} = req.body
    if (req.body) {
        const note = {
            title,
            text,
            // id: uuidv4(),
        }
        readAndAppend(note, './db/db.json')
        res.json('New Note Added Succesfully!')
    } else {
        res.error('Error occured!')
    }
})

module.exports = router;