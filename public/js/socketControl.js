;(function ($) {
'use strict';

var socket = io.connect('/');
var button = $('#signalButton');
var sky = $('a-sky');
var remoteButtons = $('#remoteButtons');

// Emit commands
remoteButtons.on('click', function(event) {

  var clickedButton = $(event.target);
  var color = clickedButton.data('color');

  // Send color to server
  socket.emit('buttonTap', color);
});


// Coming from server +++++++++++++++++++++++++++++++++++++++++++++++++++


// On commands
socket.on('serverMessage', function(msg) {

  var colorFromButton = String(msg);
  sky.attr('color', colorFromButton);

});

})(jQuery);
