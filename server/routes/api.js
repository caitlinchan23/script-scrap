const express = require('express');

const scriptsController = require('../controllers/scriptsController');

const router = express.Router();

router.get('/', 
  scriptsController.getScripts,
  (req, res) => {
    res.status(200).json(res.locals.scripts)
  });

router.post('/add',
  scriptsController.addScript,
  (req, res) => {
  res.status(200).json(res.locals.scripts);
  }
);

router.delete('/delete/:title',
  scriptsController.deleteScript,
  (req, res) => {
  res.send({type: 'DELETE'});
});



module.exports = router;