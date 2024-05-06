const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app); // Create an HTTP server and pass the Express app
const io = require('socket.io')(server); // Attach Socket.IO to the HTTP server

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

// Middleware:
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Your user array and routes:
let users = [];
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    users.push(userData);
    res.sendStatus(200);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
});

// Start the server on PORT:
const PORT = 4000;
server.listen(PORT, () => {
    console.log("Server has started on port:", PORT);
});
