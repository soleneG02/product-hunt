const express = require("express");
const apiFcts = require('./app');
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.get('/api', async (req, res) => {
    apiFcts.getTodayPosts()
        .then((data) => {
            res.send({data : data});
        })    
})

app.get('/api/:day', async (req, res) => {
    const day = req.params.day
    apiFcts.getPostsByDay(day)
        .then((data) => {
            res.send(data);
        })    
})

app.get('/api/post/:id', async (req, res) => {
    const id = req.params.id
    apiFcts.getPostsById(id)
        .then((data) => {
            res.send(data);
        })    
})

app.listen(port, () => console.log("Backend server live on " + port));