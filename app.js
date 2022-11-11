
// Importera moduler
import express from "express";

// Skapa en referens till denna express-app.
const app = express();

// Importera chalk som kan färga saker i console.log.
const chalk = require('chalk'); // <-- Funkar inte.
/** FELMEDDELANDE:
 * ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/Volumes/Deadpool/Users/ola/Documents/Lexicon - Frontendutvecklare/Frontend-Laborationer/2022-11-03 tors Laboration 15-Webbserver/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
 */
// Så jag bytte till import istället:
//import chalk from "chalk";

// Debug-grejen
// Referens: https://www.npmjs.com/package/debug 
//const debug = require('debug')('app'); <-- fungerar inte.
import debug from "debug";
const debugApp = debug()("app"); // <-- fungerar inte, rad 38 skrivs inte ut.
// Starta sedan detta me: DEBUG=app node app.js / Inte DEBUG=* node app.js

// Detta är ett expresskommando, en router
app.get("/", (req, res) => {
  res.send("Hello from my app");
});

// Detta skrivs inte ut? Varför?
app.listen(3000, () => {
  debug(
    `Listening on port 3000. \nLook at me on: + ${chalk.green(
      "http://localhost:3000/"
    )}\nQuit this process with ctrl+c in terminal.`
  );
});
