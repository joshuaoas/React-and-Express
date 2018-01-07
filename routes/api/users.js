const express = require('express');
const router = express.Router();

//mongoose model automatically tied to plural post = posts fish = fishs
const User = require('../../models/User');

router.get('/list', (req, res, next) => {
  //findOne will only bring back first if multiple
  User.find((err, users) => {
    if(err) {
      res.send(err);
    }
    res.json(users);
  });
});

/* GET home page. */
/*
router.get('/', (req, res, next) => {
  res.json({ text: 'MusicList API Test' });
});

const testJSON = [
  {
    name: 'John Smith',
    username: 'CaptainCode'
  },
  {
    name: 'Jane Doe',
    username: 'JaneyCakes'
  }
];

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON)
});
*/



module.exports = router;