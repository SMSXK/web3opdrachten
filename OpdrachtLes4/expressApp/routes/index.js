const express = require('express');
const  app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`Home Page`);
});
router.get('/test', (req, res, next) => {
  res.send(`Test Page`);
});
router.get('/test/:id([0-9]{3})', (req, res, next) =>{
  res.send(`ID: ${req.params.id}`);
});
router.get('/search', (req, res, next) => {
  res.send(`SEARCHED: ${req.query.q}`);
});
router.get('/time', (req, res, next) =>{
  res.send(`Time: ${req.time}`);
});
router.get('*', ( req, res, next) => {
  res.status(404).send(`Niet gevonden: 404 error`);
});
router.post('/test', (req, res, next) => {
  console.log(req.body);
  req.body.server = true;
  res.json(req.body);
});
module.exports = router;
