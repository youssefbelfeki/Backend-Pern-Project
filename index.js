// const express = require('express');
import express from 'express';
import bookRouter from './app/routes/book.routes.js';
import db from './app/config/database.js';

import jsonparser from 'body-parser'
const app = express();

app.use(jsonparser.json())

app.get('/',(req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world from new second branch!\n');
})
app.use(bookRouter)

db.checkCon()
// starts a simple http server locally on port 3000
app.listen(3005, () => {
  console.log('Listening on 3005');
});