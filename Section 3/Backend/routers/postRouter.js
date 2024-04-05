const express = require('express');
const Model = require('../models/postModel');
const { model } = require('mongoose');
const signModel = require('../models/signupmodel');
const router = express.Router();//why



router.post('/add', (req, res) => {
    /*res.send('add post response');*/
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});

// /getall
router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

// /update
router.put('/update/:id', (req, res) => {
    //res.send('get updates')
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// /delete
router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id) //req.params.id use to fetch data from url - GET
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
})
//video router
//user router
router.post('/data', (req, res) =>{
    //res.send('user router response')
     console.log(req.body);
     new signModel(req.body).save()
     .then((result) => {
         res.status(200).json(result); 
     }).catch((err) => {
         console.log(err);
         res.status(500).json(err)
     });
 });

module.exports = router;