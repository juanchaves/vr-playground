var io = require('socket.io')();
var socketApi = {};

socketApi.io = io;

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('User connected to Room');

    // Socket.io listen directives
    socket.on('buttonTap', function(msg) {
        io.emit('serverMessage', msg);
    });

    socket.on('clientEvent', function(data){
	       console.log(data);
    });
});


//Whenever someone disconnects this piece of code executed
// socket.on('disconnect', function () {
//   console.log('A user disconnected from the Room');
// });

module.exports = socketApi;
