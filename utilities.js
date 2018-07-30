// (function(window){

var utilities = {};

// For all solutions you write for this assignment, include a comment above each line of code explaining what the line of code does.
utilities.isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

// Write a function that operates similarly to .forEach. Your function should iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter. It should not call callback on values greater than the list’s number of elements.
utilities.by = function(list, n, callback) {
  try {
    if (!list || !n || !callback) {
      throw "Missing necessary parameter(s): (array, interval, function)";  
    } else if (Array.isArray(list)) {
      for (var i=n-1; i<list.length; i+=n) {
        callback(list[i]);
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    
  }
};

// Write a function that will create an array of all the keys of an object. Remember that a key is the name of an object’s property. You can observe the syntax below:
utilities.keys = function(obj) {
  var keys = [];
  try {
    if (!obj || typeof obj !== "object") {
      throw "Missing necessary parameter(s): (object)";  
    } else {
      for (var props in obj) {
        keys.push(props);
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return keys;
  }
};

// Write a function that will create an array of all the values of an object.
utilities.values = function(obj) {
  var values = [];
  try {
    if (!obj || typeof obj !== "object") {
      throw "Missing necessary parameter(s): (object)";  
    } else {
      for (var vals in obj) {
        values.push(obj[vals]);
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return values;
  }
};

// Write a function that will create an array of all the keys and values of an object in the order of [key, value, key, value] for as many key/value pairs as exist in the object.
utilities.pairs = function(obj) {
  var keys = [];
  var values = [];
  var pairs = [];
  try {
    if (!obj || typeof obj !== "object") {
      throw "Missing necessary parameter(s): (object)";  
    } else {
      for (var props in obj) {
        keys.push(props);
      }
      for (var vals in obj) {
        values.push(obj[vals]);
      }
      for (var i=0; i<keys.length; i++) {
        pairs.push(keys[i]);
        pairs.push(values[i]);
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return pairs;
  }
};

// Write a function that returns a randomly re-arranged copy of the elements in its parameter array.
utilities.shuffle = function(arr) {
  try {
    if (!arr) {
      throw "Missing necessary parameter(s): (array)";  
    } else {
      arr = arr.sort(function(a, b){return 0.5 - Math.random()});
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return arr;
  }
};

// Write a function that will return the plural of a word depending on the value of the n parameter. If n is 1, return the non-plural word (parameter word); otherwise, add an “s” to the plural word. If the pluralWord parameter is provided, instead of adding an “s,” return the pluralWord.
utilities.pluralize = function(n, word, pluralWord) {
  var result;
  try {
    if (n.toString() === "0") {
      result = word;
    } else if (n === 1) {
      result = word;
    } else if (pluralWord) {
      result = pluralWord;
    } else if (n !== 1) {
      result = word + "s";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};

// Write a function for converting a camelCase string to a dashed string. Camel case presents words with no spaces separating them and with each word’s first letter capitalized except the first word, which is lower case.
utilities.toDash = function(str) {
  try {
    if (!str || typeof str !== "string") {
      throw "Missing necessary parameter(s): (string)";  
    } else {
      for (var i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
          str = str.replace(str[i], "-" + str[i].toLowerCase());
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return str;
  }
};

// Write a function for converting a dashed string to a camelCase string.
utilities.toCamel = function(str) {
  try {
    if (!str || typeof str !== "string") {
      throw "Missing necessary parameter(s): (string)";  
    } else {
      str = str.split('');
      for (var i=0; i<str.length; i++) {
        if (str[i] === "-") {
          str[i+1] = str[i+1].toUpperCase();
        }
      }
      str = str.join("");
      for (var j=0; j<str.length; j++) {
        if (str[j] === "-") {
          str = str.replace(str[j], "");
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return str;
  }
};

// Write a function that searches all values of the parameter obj and returns “true” if any are equal to the search parameter. Otherwise has should return “false.”
utilities.has = function(obj, search) {
  var valid = false;
  try {
    if (!obj || !search) {
      throw "Missing necessary parameter(s): (object, search)";  
    } else {
      for (var keys in obj) {
        if (obj[keys] === search) {
          valid = true;
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};

// Write a function that returns a new object by picking all key/value pairs from the parameter obj. The keys that are picked will be determined by the array parameter keys.
utilities.pick = function(obj, keys) {
  var newObj = {};
  try {
    if (!obj || !keys) {
      throw "Missing necessary parameter(s): (object, keys)";  
    } else {
      for (var i=0; i<keys.length; i++) {
        if (obj[keys[i]]) {
          newObj[keys[i]] = obj[keys[i]];
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return newObj;
  }
};

// })(window);

/*
var log = function(val, index, list) {
  console.log(val);
};
utilities.by([1,2,3,4,5,6], 2, log); // will output: 2, 4, 6
utilities.keys({count: 5, length: 10, total: 16}); // will output: ["count", "length", "total"]
utilities.values({count: 5, length: 10, total: 16}); // will output: [5, 10, 16]
utilities.pairs({count: 5, length: 10, total: 16}); // will output: ["count", 5, "length", 10, "total", 16]
utilities.shuffle([1,2,3,4,5]);
utilities.pluralize(2, "lioness", "lionesses"); // "lionesses"
utilities.toDash("spaceStationComplex");
utilities.toCamel("hot-dog");
utilities.has({driver: "Andre", vehicle: "Corvette", location: "Californa"}, "Corvette");
var data = {
 type: "transformer",
 index: 19,
 siblings: 19,
 access: "full"
};
utilities.pick(data, ["type", "index"]);      // returns {type: "transformer", index: 19};
*/

/*
utilities.method = function(input) {
  var valid;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (input)";  
    } else {
      
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};
*/
