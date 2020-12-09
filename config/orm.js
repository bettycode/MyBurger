const connection = require("../config/connection.js");

// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
       
        arr.push(key + "=" + value);
      }
    }
    
    return arr.toString();
  }
  

const orm = {

    selectAll: function (table ,cb){
        let queryS = "SELECT * FROM " + table +";";
        connection.query(queryS, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },

    insertOne: function(table, cols, vals, cb){
        let queryS = "INSERT  INTO" + table;

        queryS += "(";
        queryS += cols.toString();
        queryS += ")";
        queryS +="VALUES (";
        queryS += printQuestionMarks(vals.length);
        queryS += ")";

        console.log(queryS);

        connection.query(queryS, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });

    },

    updateOne: function(table, objcolvals, condition, cd){
        let queryS = "UPDATE" + table;

        queryS += "SET";
        queryS +=  objToSql(objcolvals);
        queryS +=  "WHERE";
        queryS += condition;

        console.log(queryS);

        connection.query(queryS, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },

    deleteOne: function(table, condition, cb){
        let queryS = "DELETE FROM" + table;

        queryS += "WHERE";
        queryS += condition;

        connection.query(queryS, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    }

}



// export the orm object 

module.exports = orm;
