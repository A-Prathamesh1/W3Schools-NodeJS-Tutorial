var fs = require('fs');

fs.rename('mynewfile2.txt', 'mynewfile.txt', function (err) {
        if (err) {
                console.log(err);
                throw err;
        }
        console.log('renamed');
});
