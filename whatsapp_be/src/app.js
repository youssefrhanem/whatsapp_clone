import express from "express"



// create express app
const app = express();


app.get('/', (req,res) => {
    res.send('hello from server');
});




export default app;