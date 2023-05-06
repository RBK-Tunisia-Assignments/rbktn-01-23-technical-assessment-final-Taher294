const mysql = require("mysql2");
const mysqlConfig = require("./config.js");


const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Root",
  database:"Recipie"
  })
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db conected !!");
  }
});

const getAllRecipies = (callback) => {
  const sql = `SELECT * FROM recepie`
  connection.query(sql, (error, result) => {
    callback(error, result)
  })
}
const getOneRecipie = (username, callback) => {
  const sql = `SELECT * FROM recepie WHERE username='${username}'`
  connection.query(sql, (error, result) => {
    callback(error, result)
  })
}

const Delete = (username) =>{
  const sql = `SELECT * from recepie WHERE username ='${username}'`
}
module.exports = connection;getAllRecipies,getOneRecipie
