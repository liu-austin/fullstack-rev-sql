// jshint esversion:6
// complete and fix the dbhelpers
const db = require('./index');

getProductsHelper = (cb) => {
    let query = `select * from products;`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    }); 
};

getOneProductHelper = (id, cb) => {
    let query = `select * from products where id = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    });
};

getOneProductByNameHelper = (name, cb) => {
    let query = `select * from products where name = ${name}`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    });
};

postProductsHelper = (obj, cb) => {
    let query = `insert into products (item, min_cost, curr_bid, ends_in, image) values ("${obj.item}", ${obj.min_cost}, ${obj.curr_bid}, ${obj.ends_in}, "${obj.image}");`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    });
}; 

updateProductHelper = (id, bid, cb) => {
    let query = `update products set curr_bid = ${bid} where id = ${id};`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    });
};

deleteProductHelper = (id, cb) => {
    let query = `delete from products where id = ${id};`;
    db.query(query, (err, results) => {
        if (err) {
            cb(err);
        } else {
            cb(null, results);
        }
    });
};

module.exports.postProductsHelper = postProductsHelper;
module.exports.getProductsHelper = getProductsHelper;
module.exports.updateProductHelper = updateProductHelper;
module.exports.deleteProductHelper = deleteProductHelper;
module.exports.getOneProductHelper = getOneProductHelper;
module.exports.getOneProductByNameHelper = getOneProductByNameHelper;