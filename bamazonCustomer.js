// Required packages
var inquirer   = require('inquirer');
var mysql      = require('mysql');
var Table      = require("cli-table2");

// MySQL 
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'bamazon'
});

// Connects to MySQL server and database
connection.connect(function (err) {
  if (err) throw err;
  start();
});

// Customer prompts 
function shopBamazon() {
  inquirer
    .prompt({
      name:    'itemSelection',
      type:    'list',
      message: 'Select an item for purchase?',

    })
    .then(function (answer1) {
      switch (answer1.action) {
        case 'holographic stickers':
          quantity();
          break;

        case 'heart pens':
          quantity();
          break;

        case 'charcoal grill':
          quantity();
          break;

        case 'gas grill':
          quantity();
          break;

        case 'indoor security system':
          quantity();
          break;

        case 'nike shoes':
          quantity();
          break;

        case 'dumbbell set':
          quantity();
          break;

        case 'jenga':
          quantity();
          break;

        case 'chinese checkers':
          quantity();
          break;

        case 'uno':
          quantity();
          break;

        case 'exit':
          connection.end();
          break;
      }
  });
}

function quantity() {
  inquirer
    .prompt({
      name: 'quantity',
      type: 'input',
      message: 'How many?'
    })

    .then(function (answer2) {
      var query = 'SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?';
      connection.query(query, { Remaining: answer2.quantity }, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log('Item: ' + res[i].product_name + ' || Dept: ' + res[i].department_name + ' || Price: ' + res[i].price + ' || Insufficient quantity! In Stock: ' + res[i].stock_quantity);

          shopBamazon();
        } 
        else {
          console.log('');
          console.log(res[0].product_name + ' purchased');
          console.log(quantity + ' qty @ $' + res[0].price);
        }

      var newQuantity = res[0].stock_quantity - quantity;
      connection.query(
        'UPDATE products SET stock_quantity = ' +
        newQuantity +
        ' WHERE id = ' +
        res[0].id,
        function (err, resUpdate) {
          if (err) throw err;
          console.log('');
          console.log('Thank you! Your Order has been Processed.');
          console.log('Thank you for Shopping Bamazon!');
          console.log('');
          connection.end();
        }
      );
    }
  )
}

)}