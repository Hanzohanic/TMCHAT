const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
    console.log('Client connected');
    socket.on('message', message => {
        console.log('received message: ' + message);
        io.emit('message', message);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
