(function(window){

var validator = {};
  
// Checks if the 'input' parameter is an email address, consisting of three parts: An email address consists of two strings combined by an '@' symbol
validator.isEmailAddress = function(input) { 
  var atPos;
  var numOfCharBehindAtPos;
  var result = false;
  // Check for a parameter
  try {
    if (input) {
      // Get the position of the '@' symbol
      atPos = input.indexOf("@");
      // Get the number of charactors behind the '@' symbol
      numOfCharBehindAtPos = (input.length - 1) - atPos;
      // If there are charactors in front of '@' AND if the number of charactors behind the '@' equal 5 or more return true else throw and error
      if (atPos > 0 && numOfCharBehindAtPos > 4) {
        result = true;
      } else {
        throw "Please enter a valid email address.";
      }
    } else {
      throw "Please enter a valid email address.";
    }
  }
  catch(err) {
    console.log(err);
  } 
  finally {
    return result;
  }
};
  
// Checks if the input parameter is a valid phone number for the United States
validator.isPhoneNumber = function(input) {
  var er = "Please enter a valid 10-digit phone number.";
  var digits;
  var result = false;
  try {
    // If there is a parameter and it is a number, check the length. If it's 10 digits the result is true. Else throw an error
    if (input && !Number.isNaN(input)) {
      digits = input.toString().length;
      if (digits === 10) {
        result = true;
      } else {
        throw er;
      }
    } else {
      throw er;
    }
  }
  catch(err) {
    console.log(err);
  } 
  finally {
    return result;
  }
};
  
// Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character. A character is considered alphanumeric if it matches one of the following: a—z, A—Z, or 0—9. Ignore whitespace.
validator.withoutSymbols = function(input) {
  // [48-57: 0-9], [65-90: A-Z], [97-122: a-z] 
  var noSymbols = "";
  try {
    // Check for a parameter, if there is none throw and error
    if (input) {
      // Check each charactor in the string, if it's an alphanumeric charactor, concat it to 'noSymbols'
      for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) === 32) {
          noSymbols += input.charAt(i);
        } else if (input.charCodeAt(i) === 45) {
          noSymbols += " ";
        } else if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
          noSymbols += input.charAt(i);
        } else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
          noSymbols += input.charAt(i);
        } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
          noSymbols += input.charAt(i);
        }
      }
    } else {
      throw "Please enter a valid string.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return noSymbols;
  }
};
  
// Checks if the input parameter text is a valid date
validator.isDate = function(input) {
  var result = false;
  try {
    // Parse the input to check if the date is valid
    if (Date.parse(input)) {
      result = true;
    } else {
      throw "Please enter a valid date.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
validator.isBeforeDate = function(input, reference) {
  var result = false;
  try {
    // Check to see if there are two date parameters else throw an error
    if (Date.parse(input) && Date.parse(reference)) {
      // Parse the 'input' and 'reference' parameters
      input = Date.parse(input);
      reference = Date.parse(reference);
      // Check if the input date comes before the reference date and record the result
      result = input < reference;
    } else {
      throw "Please enter two valid dates.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks if the input parameter is a date that comes before the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.  
validator.isAfterDate = function(input, reference) {
  var result = false;
  try {
    // Check to see if there are two date parameters else throw an error
    if (Date.parse(input) && Date.parse(reference)) {
      // Parse the 'input' and 'reference' parameters
      input = Date.parse(input);
      reference = Date.parse(reference);
      // Check if the input date comes before the reference date and record the result
      result = input > reference;
    } else {
      throw "Please enter two valid dates.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks if the input parameter is a date that comes before today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
validator.isBeforeToday = function(input) {
  var result;
  var today = new Date();
  try {
    if (input && Date.parse(input)) {
      input = new Date(Date.parse(input));
      result = input < today;
    } else {
      throw "Please enter a valid date.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks if the input parameter is a date that comes after today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
validator.isAfterToday = function(input) {
  var result;
  var today = new Date();
  try {
    if (input && Date.parse(input)) {
      input = new Date(Date.parse(input));
      result = input > today;
    } else {
      throw "Please enter a valid date.";
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
validator.isEmpty = function(input) {
  var result = true;
  var type = typeof input;
  try {
    if (input === undefined || input === null) {
      result = false;
      throw "Please enter a valid string.";
    } else if (input.length !== 0 && type !== "string") {
      result = true;
    } else if (input.length > 0 && type === "string") {
      for(var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) !== 32) {
          result = false;
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks if the input text parameter contains one or more of the words within the words array. A word is defined as the following: having undefined, whitespace, or punctuation before and after it. The function should be case-insensitive.
validator.contains = function(input, words) {
  var result = false;
  try {
    if (!input || !words) {
      throw "Missing necessary parameter(s): (string, array)";
    } else {
      input = this.withoutSymbols(input).toLowerCase();
      words.filter(function(el) {
        input.split(" ").filter(function(item) {
          if (el === item) result = true;
        })
      })
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};

// Checks if the input text parameter does not contain any of the words within the words array. Use the “word” definition used in the above .contains description. The function should be case-insensitive. A function like this could be used for checking blacklisted words.  
validator.lacks = function(input, words) {
  var result = true;
  try {
    if (!input || !words) {
      throw "Missing necessary parameter(s): (string, array)";
    } else {
      input = this.withoutSymbols(input).toLowerCase();
      words.filter(function(el) {
        input.split(" ").filter(function(item) {
          if (el === item) result = false;
        })
      })
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return result;
  }
};
  
// Checks that the input text parameter contains only strings found within the strings array. Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.
validator.isComposedOf = function(input, strings) {
  var compose = "";
  var inputCharCount;
  var composedCharCount;
  try {
    if (!input || !strings) {
      throw "Missing necessary parameter(s): (string, array)";
    } else {
      input = this.withoutSymbols(input).split(" ").join(""); // remove symbols, capitol letters and spaces
      inputCharCount = input.length;
      for (var i=0; i<strings.length;) {
        if (input.includes(strings[i])) {
          compose += strings[i];
          input = input.replace(strings[i], "");
        } else {
          i++;
        }
      }
      composedCharCount = compose.length;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return inputCharCount === composedCharCount;
  }
};

// Checks if the input parameter’s character count is less than or equal to the n parameter.
validator.isLength = function(input, n) {
  var valid = false;
  try {
    if (!input || !n) {
        throw "Missing necessary parameter(s): (string, number)";
    } else if (input.length <= n) {
      valid = true;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};  

// Checks if the input parameter’s character count is greater than or equal to the n parameter.
validator.isOfLength = function(input, n) {
  var valid = false;
  try {
    if (!input || !n) {
        throw "Missing necessary parameter(s): (string, number)";
    } else if (input.length >= n) {
      valid = true;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};

// Counts the number of words in the input parameter. Refer to the definition of word used in the description of the .contains function above.
validator.countWords = function(input) {
  var count;
  try {
    if (typeof input === "string" && input.length === 0) {
      count = input.length;
    } else if (!input) {
      throw "Missing necessary parameter(s): (string)";
    } else {
      count = this.withoutSymbols(input).split(" ").length;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return count;
  }
};

// Checks if the input parameter has a word count less than or equal to the n parameter.
validator.lessWordsThan = function(input, n) {
  var words = this.countWords(input);
  return words <= n;
};

// Checks if the input parameter has a word count greater than or equal to the n parameter.
validator.moreWordsThan = function(input, n) {
  var words = this.countWords(input);
  return words >= n;
};

// Checks that the input parameter matches all of the following:
// input is greater than or equal to the floor parameter
// input is less than or equal to the ceil parameter.
validator.isBetween = function(input, floor, ceil) {
  var valid;
  try {
    if (!input || !floor || !ceil) {
      throw "Missing necessary parameter(s): (input, floor, ceil)";  
    } else if (input >= floor && input <= ceil) {
      valid = true;
    } else {
      valid = false;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};

// Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded.
validator.isAlphanumeric = function(input) {
  // [48-57: 0-9], [65-90: A-Z], [97-122: a-z]
  var valid = [];
  try {
    if (typeof input === "string" && input.length === 0) {
      valid.push(true);
    } else if (!input) {
      valid.push(false);
      throw "Missing necessary parameter(s): (string)";
    } else {
      for (var i=0; i<input.length; i++) {
        if(input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
          valid.push(true);
        } else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
          valid.push(true);
        } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
          valid.push(true);
        } else {
          valid.push(false);
        }
      }
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid.indexOf(false) === -1;
  }
};

//Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).
validator.isCreditCard = function(input) {
  var valid;
  var hyphens = 0;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (number)";  
    } else {
      if (input.length === 16) {
        for (var i=0; i<input.length; i++) {
          if (!this.isAlphanumeric(input[i])) {
            valid = false;
          } else {
            valid = true;
          }
        }
      } else if (input.length === 19) {
        for (var j=0; j<input.length; j++) {
          if (input.charAt(j) === "-") {
            hyphens += 1;
          }
        }
        if (hyphens === 3) {
          for (var k=0; k<input.length; k++) {
            if (input.charAt(k) === "-") {
              k++;
            } else if (!this.isAlphanumeric(input.charAt(k))) {
              valid = false;
            } else {
              valid = true;
            }
          }
        } 
      } else {
        valid = false;
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

// Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters 0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333. The input must start with a # to be considered valid.
validator.isHex = function(input) {
  // [48-57: 0-9], [65-70: A-F], [97-102: a-f]
  var valid = true;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (string)";  
    } else if (input.length === 4 || input.length === 7) {
      if (input[0] === "#") {
        for (var i=1; i<input.length; i++) {
          if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57);
          else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 70);
          else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 102);
          else valid = false;
        }
      } else {
        valid = false;
      }
    } else {
      valid = false;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};

// Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
// Three numbers between 0 and 255
// A comma between each number
// The three numbers should be contained within “rgb(” and “)“.
validator.isRGB = function(input) {
  var rbgVals = "";
  var valid = false;
  var commaPos;
  var firstNum;
  var secondNum;
  var thirdNum;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (string)";  
    } else if(input.substr(0, 4) === "rgb(" && input[input.length - 1] === ")") {
      rbgVals = input.substr(4).slice(0, -1);
          
      commaPos = rbgVals.indexOf(",");
      firstNum = Number.parseInt(rbgVals.slice(0, commaPos)).toString();
      rbgVals = rbgVals.substr(commaPos + 1);
          
      commaPos = rbgVals.indexOf(",");
      secondNum = Number.parseInt(rbgVals.slice(0, commaPos)).toString();
      rbgVals = rbgVals.substr(commaPos + 1);
          
      commaPos = rbgVals.indexOf(",");
      thirdNum = Number.parseInt(rbgVals.slice(0)).toString();
          
      if (firstNum && secondNum && thirdNum) {
        if (firstNum >= 0 && firstNum <= 255) {
          if (secondNum >= 0 && secondNum <= 255) {
            if (thirdNum >= 0 && thirdNum <= 255) {
              valid = true;
            }
          }
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

// Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:3
// Three numbers:
// the first number, Hue, is between 0 and 360
// the second and third numbers, Saturation and Lightness, are between 0 and 1
// A comma between each number
// The three numbers should be contained within “hsl(” and “)“.
validator.isHSL = function(input) {
  var hslVals = "";
  var valid = false;
  var commaPos;
  var firstNum;
  var secondNum;
  var thirdNum;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (string)";  
    } else if (input.substr(0, 4) === "hsl(" && input[input.length - 1] === ")") {
      hslVals = input.substr(4).slice(0, -1);
          
      commaPos = hslVals.indexOf(",");
      firstNum = Number.parseFloat(hslVals.slice(0, commaPos)).toString();
      hslVals = hslVals.substr(commaPos + 1);

      commaPos = hslVals.indexOf(",");
      secondNum = Number.parseFloat(hslVals.slice(0, commaPos)).toString();
      hslVals = hslVals.substr(commaPos + 1);

      commaPos = hslVals.indexOf(",");
      thirdNum = Number.parseFloat(hslVals.slice(0)).toString();
          
      if (firstNum && secondNum && thirdNum) {
        if (firstNum >= 0 && firstNum <= 360) {
          if (secondNum >= 0 && secondNum <= 1) {
            if (thirdNum >= 0 && thirdNum <= 1) {
              valid = true;
            }
          }
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

// Checks if the input parameter is a hex, RGB, or HSL color type.
validator.isColor = function(input) {
  var valid = false;
  try {
    if (!input) {
      throw "Missing necessary parameter(s): (string)";  
    } else if (this.isRGB(input) || this.isHSL(input) || this.isHex(input)) {
      valid = true;
    }
  }
  catch(err) {
    console.log(err);
  }
  finally {
    return valid;
  }
};

// Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. Leading refers to before while trailing refers to after. This function will help validate cases where extra spaces were added accidentally by the user.
validator.isTrimmed = function(input) {
  var valid = false;
  var words;
  var wordCount = 0;
  var characters;
  var spaces = 0;
  try {
    if (!input && typeof input !== "string") {
      throw "Missing necessary parameter(s): (string)";  
    } else {
      words = input.split(" ");
      words.filter(function(el) {
        if (el !== "") {wordCount += 1;}
      });
      
      characters = input.split("");
      characters.filter(function(el) {
        if (el === " ") {spaces += 1;}
      });
      
      if (wordCount === spaces + 1) {
        valid = true;
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

// Calulate age.
validator.getAge = function (dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}  
  
})(window);
