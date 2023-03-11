var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Hello world', function (err) {
        if (err) {
                throw err;
        }
        console.log('Replaced!');
});
