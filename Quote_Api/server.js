const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.get("/api/quotes/random",(req, res, next) => {
  const quote = getRandomElement(quotes);
  const result = {quote: quote};
  res.send(result)
});

app.get("/api/quotes", (req, res, next) => {
  if(Object.keys(req.query).length == 0) {
    const result = {quotes: quotes};
    res.send(result)
  } else {
    const result = []
    for(i = 0; i< quotes.length;i++) {
      if(quotes[i].person == req.query.person) {
        result.push(quotes[i])
      }
    }
    res.send({quotes: result})
  }
});

app.post("/api/quotes", (req, res, next) => {
  console.log(req.query.quote , req.query.person)
    if(req.query.quote && req.query.person) {
      quotes.push({quote:req.query.quote, person:req.query.person })
      res.status(201).send({quote: {quote:req.query.quote, person:req.query.person }})
    } else {
      res.status(400).send()
    }
});

app.use(express.static('public'));

app.listen(4001, () => {
    console.log("Listening at 4001")
});
