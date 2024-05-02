const { sum } = require("./helper");
const http = require('http');
const express = require('express');
const fs = require('fs');

console.log("Hello from Node.js!")
// console.log('Process: ', process);

// Simple function for summing two numbers
const total = sum(5, 6);
console.log('Total from the function sum is:', total);

// Creating a server
const server = http.createServer((req, res) => {
    res.end('Hello World! This is the response from the server.');
});

server.listen(3000);

const app = express();

app.get('/', (req, res) => {
    res.send("Hey! This is the first API from express!");
})

app.listen(3001);

const fileName= "target.txt";

// fs.watch(fileName, () => console.log('File System!'));

// asynchronous call
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Data of file: ', data.toString());
});

// synchronous call
// const data = fs.readFileSync(fileName);
// console.log('Data: ', data.toString())

console.log('async call!')
