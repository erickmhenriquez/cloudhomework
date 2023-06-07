function numberChecker(num) { //create a funtion
    if (num > 20) { //first condition for numbers greater than 20
      return `${num} is greater than 20`; //what should return for objects greater than 20
    } else if (num === 20) {// stating the condition if a numer =20
      return `${num} is equal to 20`;//what should return if the numer is 20
    } else if (num < 20) { // stating the condition is less than 20
      return `${num} is less than 20`; // what should return with a number less than 20
    } else {
      return `${num} isn't even a number :(`; //if no conditions have been meet, this is what it should return
    }
  }

  