function calcAge(day, month, year) {
  var age = 0;
  
  var today = new Date();
  
  var todayDay = today.getDate();
  var todayMonth = today.getMonth() + 1;
  var todayYear = today.getFullYear();
  var suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
  
  age = todayYear - year;
  
  if (month > todayMonth || (month == todayMonth && day > todayDay)) {
    age--;
  }
  
  if (age < 0) {
    return "This is not possible!";
  }
  else if (month == todayMonth && day == todayDay) {
    return "Happy " + age + suffixes[age % 10] + " Birthday!";
  }
  else {
    return "You are " + age + " years old! :)";
  }
}

function calcAge2(dateStr) {
  var dateParts = dateStr.split('-');
  return(calcAge(dateParts[0], dateParts[1], dateParts[2]));
}

function Person(fname, lname, bdate) {
  this.firstName = fname;
  this.lastName = lname;
  this.birthdate = bdate;
}

Person.prototype.tellMyAge = function () {
  return calcAge2(this.birthdate);
};

var ani = new Person('Ani', 'Ivanova', '10-08-1988');
console.log(ani.tellMyAge()); // 27



