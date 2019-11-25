// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  .post(controller.post);

router
  .route('/products/:_id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

router
  .route('/products/:name')
  .get()
// router
//   .route('/name')
//   .get()
//   .post()
//   .put()
//   .delete();

module.exports = router