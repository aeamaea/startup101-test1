#!/usr/bin/env node

var fs = require('fs');
var outfile = "hello.txt";
var outty = "A startup is a business built to grow rapidly.\n";


fs.writeFileSync(outfile, outty);
console.log("Script: " + __filename + "\nWrote: " + outty + "To: " + outfile);
