var fs = require('fs');

fs.unlink('mynewfile1.txt', function (err) {
        if (err) {
                console.log('err');
                throw err;
        }
});
