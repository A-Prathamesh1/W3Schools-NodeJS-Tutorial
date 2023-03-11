var events = require('events');
var eventemitter = new events.EventEmitter();

var myEventHandler = function () {
        console.log('Scream ssssss!!');
};

eventemitter.on('scream', myEventHandler);
eventemitter.emit('scream');
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//         console.log('file is open');
// });
