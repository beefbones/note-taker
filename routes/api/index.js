const router = require('express').Router();
const path = require('path');
const api = require('./api');

router.use('/api', api);

// GET Route for homepage
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for note taker page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;