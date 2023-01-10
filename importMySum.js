const sumFunc = require("./mySum");

const myArr = [1, 3, 5, 7, 9];

const result = sumFunc(...myArr);

console.log(result);

const mySecondArr = myArr.map(function (num) {
  return num * 2;
});

const averageOfMySecondArr = sumFunc(...mySecondArr) / mySecondArr.length;

console.log(
  mySecondArr.filter(function (num) {
    return num > averageOfMySecondArr;
  })
);

setTimeout(() => {
  console.log("Goodbye");
}, 3000);

const Employee = {
  name: "Carl Johnson",
  email: "cj@rockstargames.com",
  department: "Security",
  startDate: "2004/10/26",
};

const { name, email } = Employee;

const Person = { name: name, email: email };

console.log(Person);
