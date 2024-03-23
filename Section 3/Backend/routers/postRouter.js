const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add post response');
});

router.get('/getall', (req, res) => {
    res.send('get all post response')
})

// /getall
// /update
// /delete

//video router
//user router

module.exports = router;