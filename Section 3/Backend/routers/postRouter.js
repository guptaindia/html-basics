const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add post response');
});

// /getall
router.get('/getall', (req, res) => {
    res.send('get all post response')
})

// /update
router.get('/update', (req, res) => {
    res.send('get updates')
})

// /delete
router.get('/delete', (req, res) => {
    res.send('delete updates')
})
//video router
//user router

module.exports = router;