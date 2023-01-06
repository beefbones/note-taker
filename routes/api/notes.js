const router = require('express').Router();
const {v4: uuidv4} = require('uuid')
const {readFromFile, readAndAppend} = require('./helpers/fsUtils.js')
const {notes} = require('./db/db.json')

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/', (req, res) => {
    
})

module.exports = router;