//import express
const express = require('express');
const postRouter = require('./routers/postRouter');
const videoRouter = require('./routers/videoRouter');


// initialize express
const app = express();
const port = 5000;

//middleware
app.use('/post', postRouter);
app.use('/video', videoRouter);

app.use('/video', videoRouter)
app.get('/', (req, res) => {
    res.send('response from express');
})
app.get('/add', (req, res) => {
    res.send('add response from express');
})

app.listen(port, () => {console.log('server started'); } );