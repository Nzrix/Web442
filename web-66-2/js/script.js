console.log("Hello");
console.log("เริ่มเรียนรู้ JS กันเล้ยยย");

let title = "JAVAScript";
console.log(title);

let firstname = "Pawaris";
let age = 20;
let my_gpa = 2.96;

console.log(age);
age = 20;
console.log(age);

console.log(2023 - age);

const thisYear = 2023;
const birthYear = 2003;
console.log("I am " + thisYear - birthYear);

console.log("My birthyear is " + birthYear);
console.log("I am" + (thisYear - birthYear));

const lastname = "Muyjeen";
console.log("My name is" + firstname + " " + lastname + ".");

let score = 14;

console.log(
  "Hello p\
    World"
);

console.log("I'm" + firstname + " " + lastname + ".");
console.log(`I'm ${firstname} ${lastname}.`);

const ageMax = 20;

if (ageMax >= 18) {
  console.log("He can drive a car.");
} else {
  console.log("He can't drive a car.");
}
const yrMoney = 75;
// สามารถซื้อของเล่นราคา 110 บาทได้ไหม ถ้าไม่ได้ต้องเพิ่มเงินอีกเท่าไหร่

console.log(typeof yrMoney);
console.log(typeof firstname);
console.log(typeof 3.1425);

age = age;
console.log(thisYear - age);
console.log(thisYear + age);
const strYear = "2023";
console.log(strYear + age);
console.log(strYear - age);

console.log(Number(strYear) + age);
console.log(Number(firstname));
console.log(typeof NaN);
console.log(Number(strYear), strYear);

console.log("I'm " + 18 + "years old");
console.log("2023" - 23);
console.log("2023" - "23" - 23);
console.log("2023" + "23" - 23);
console.log("14" * "7");
console.log("44" / "2");

console.log(1, Boolean(1));
console.log(0, Boolean(0));
console.log(23, Boolean(23));
console.log(-23, Boolean(-23));
console.log(Boolean(undefined));
console.log(firstname, Boolean(firstname));

if (firstname) {
  console.log("He has a name");
}

const noname = "";
console.log(Boolean(noname));

if (noname) {
  console.log("He has a name");
} else {
  console.log("He has noname");
}
console.log(Boolean(null));

age = 8;
const height = 140;
const hasTicket = true;
if (age >= 12 && age <= 65 && height >= 140 && hasTicket) {
  console.log("Welcome to the amusement park!");
} else {
  console.log("Sorry, you cannit enter the amusement park.");
}

const day = "wednesday";
switch (day) {
  case "monday":
    console.log("To day is Monday");
    break;
  case "tuesday":
    console.log("I love Tuesday");
    break;
  case "wednesday":
    console.log(`it's raining`);
    break;
  default:
    console.log("Not a vaild day");
}
function convertTemp(value, unit) {
  let result;

  switch (unit) {
    case "Celsius":
      result = {
        Fahrenheit: (value * 9) / 5 + 32,
        Kelvin: value + 273.15,
      };
      break;
    case "Fahrenheit":
      result = {
        Censius: ((value - 32) * 5) / 9,
        Kelvin: ((value - 32) * 5) / 9 + 273.15,
      };
      break;
    case "Kelvin":
      result = {
        Censius: value - 273.15,
        Fahrenheit: ((value - 273.15) * 9) / 5 + 32,
      };
    default:
      result = "Invaild unit";
  }

  return result;
}
console.log(convertTemp(23, "Celsius"));
console.log(convertTemp(73.4, "Fahrenheit"));

function groot() {
  console.log("I am Groot");
}
groot();

function calcAge(b_Year) {
  return 2024 - b_Year;
}
const age1 = calcAge(1999);
console.log(age1);

const calcAge2 = function (b_Year) {
  return 2024 - b_Year;
};
const age2 = calcAge2(1990);
console.log(age2);

const calcAge3 = (b_Year) => 2024 - b_Year;
const age3 = calcAge3(1999);
console.log(age3);

const calcCircumference = (radius) => 2 * Math.PI * radius;

const calcArea = (radius) => Math.PI * radius * radius;

const printCircleCalculations = (radius) => {
  const circumference = calcCircumference(radius);
  const area = calcArea(radius);

  console.log(`For a circle with radius ${radius}: `);
  console.log(`Circumference: ${circumference}`);
  console.log(`Area: ${area}`);
};
printCircleCalculations(10);
const friend1 = "Stephen";
const friend2 = "Freank";
const friend3 = "Suzy";

console.log(friend1, friend2, friend3);

const friend = ["Laura", "Mana", "Roti"];
console.log(friend);
console.log(friend[0]);
console.log(friend[2]);

console.log(friend.length);

firstname = "Jones";
const jones = [firstname, "Paa", 1998, "police", friend];
console.log(jones, jones.length);
console.log("age" + jones[2]);

let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
numbers.pop();

numbers.forEach((number) => console.log(number));

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[2]);
fruits[2] = "Blerberry";

console.log(fruits);

let users = [
  { name: "Ada", age: 35 },
  { name: "Dennis", age: 20 },
  { name: "Oreo", age: 42 },
];

let findeOreo = users.find((user) => user.name === "Oreo");

users.push({ name: "Joseph", age: 60 });
users = users.filter((user) => user.name != "Oreo");
users.shift();
users.pop();

const dave = {
  firstName: "Dave",
  lastName: "Rogers",
  job: "programmer",
  salary: 55000,
  age: thisYear - 2000,
  friends: ["Ken", "Ryu", "Vega"],
  calcAge: function () {
    this.age = 2024 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} ${this.lastName} has ${this.friends.length} freinds, and his best friend is ${this.friends[0]}`;
  },
};
console.log(
  `${dave.firstName} ${dave.lastName} has ${dave.friends.lenght} friends, and his best freind is ${dave.friends[0]}.`
);
