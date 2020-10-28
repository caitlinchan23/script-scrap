const models = require('../models/scriptModels.js');

const scriptsController = {};

scriptsController.getScripts = (req, res, next) => {
  models.Script.find({}, (err, results) => {
    if (err) {
      return next({
        log: 'scriptsController.getScripts: ERROR: Error getting scripts data from database',
        message: { err: 'Error occurred in scriptsController.getScripts. Check server logs for more details.'}
      });
    }
    res.locals.scripts = results;
    return next();
  })
}

scriptsController.addScript = (req, res, next) => {
  console.log(req.body);
  const { title, writer, feature, score } = req.body;
  models.Script.create({title, writer, feature, score})
  .then(result => {
    res.locals.scripts.push(result);
    return next();
  })
  .catch(err => {
    return next({
      log: 'scriptsController.addScript: ERROR: Error adding writer data from database',
      message: { err: 'Error occurred in scriptsController.addScript. Check server logs for more details.'}
    });
  })
}

module.exports = scriptsController;