var io = require('socket.io')(http);

//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected to the Room');
};

//Whenever someone disconnects this piece of code executed
socket.on('disconnect', function () {
  console.log('A user disconnected from the Room');
};

module.exports = socketApi;
