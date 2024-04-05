//import express
const express = require('express');
const postRouter = require('./routers/postRouter');
const videoRouter = require('./routers/videoRouter');
//const userRouter =  require('./routers/userRouter')
const cors = require('cors')

// initialize express
const app = express();
const port = 5000;

//middleware (data goes through app.use(sequence is also important))
app.use(cors(
    {origin:['http://localhost:3000']}
));
app.use(express.json())

app.use('/post', postRouter);
app.use('/video', videoRouter);
app.use('/user', postRouter);


// app.use('/video', videoRouter)
app.get('/', (req, res) => {
    res.send('response from express');
})
app.get('/add', (req, res) => {
    res.send('add response from express');
})

app.listen(port, () => {console.log('server started'); } );