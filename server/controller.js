// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers');

const controller = {
  get: (req, res) => {
    dbHelpers.getProductsHelper((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post: (req, res) => {
    let obj = {};
    obj.item = req.body.name;
    obj.min_cost = req.body.min_cost;
    obj.curr_bid = req.body.curr_bid;
    obj.ends_in = req.body.ends_in;
    obj.image = req.body.image;

    dbHelpers.postProductsHelper(obj, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },

  getOneByName: (req, res) => {
    dbHelper
  },

  getOne: (req, res) => {
    dbHelpers.getOneProductHelper(req.params._id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  put: (req, res) => {
    if (req.body.curr_bid <= req.body.old_bid) {
      res.status(404).send('The new bid must be higher than current bid');
    } else {
      dbHelpers.updateProductHelper(req.params._id, req.body.curr_bid, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          
          res.status(200).send(results);
        }
      });
    }
  },
  delete: (req, res) => {
    dbHelpers.deleteProductHelper(req.params.id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
}

module.exports = controller