const express = require('express');
const users = require("./example.json");

const app = express();
const port = 3000;

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id); 
    return res.json(user);
});

app.patch('/api/users/:id', (req, res) => {
    return res.end({status : "pending"})
});

app.listen(port, () => {
    console.log(`Check your first project at http://localhost:${port}`);
});
