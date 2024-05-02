const fs = require('fs');

const fileName = "target.txt";

const errorHandler = err => console.error(err);

const dataHandler = data => console.log('Data from file: ', data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errorHandler(err)
    dataHandler(data);
});
