// var ile değişken tanımlamak
// var serverName = "JavaScript Dersleri";
// console.log(serverName);

// let ile değişken tanımalamak

// let serverName;
// console.log(serverName);
// let ile değişkene bilgi atamak

// serverName = "hello world";
// console.log(serverName);
// let ile değişkene bilgi atayarak tanımlamak

// let serverName = "hello world";
// console.log(serverName);

// let ile tanımlanan değişkenin içerisindeli bilgiyi değiştirmek

// serverName = "hello hell";
// console.log(serverName);

// let ile birleştirme veya ekleme

// serverName + "yeni eklenen bilgi";

// console.log(serverName + " test bilgisi"); // ekle ve göster ama degıskene eklemeden

// serverName = serverName + " yeni eklenen bilgi";
// console.log(serverName);

// sıfırlayıp yeni bilgi eklemek

// serverName = "sifirlandi";
// serverName += " ve Yeni Bilgi Eklendi";
// console.log(serverName);

// const ile desgıkenı bos tanımlamaya çalışmak
// BİR ŞEY DEĞİŞECEKSE İÇERİĞİ LET İLE DEĞİŞMEYECEKSE CONST İL

/* ---------D-E-R-S-2------------------- */

// DEGISKEN TANIMLAMA KURALLARI

// camelCase kullanımı
// let fullName = "AHMET EMIR";
// console.log(fullName);
// UPPER_CASE kullanımı
// let FULL_NAME = "Emir";
// console.log(FULL_NAME);
// Değişkenlerde türkçe ve diğer dillerin kullanımı

// 1 : boolean tanımlarken is/has kullanımı active-pasif
// let isActive = true;
// let hasPass = false;
// console.log(isActive);
// console.log(hasPass);
// Anlamsız isimlendirmelerden kaçın

// 2: Line Length < 80

// NUMBER
// let price = 100;
// let tax = 0.18;
// let priceTax = price * tax;
// let total = price + priceTax;
// console.log(
//   "Fiyat",
//   price,
//   "KDV Oranı",
//   tax,
//   "KDV Tutarı",
//   priceTax,
//   "Fiyat",
//   total
// );
// COUNTER
// let counter = 320;
// counter = counter + 1;
// counter++;
// console.log(counter);
// console.log("hello world", "!", "Ahmedenyo");

// console.log(typeof "ahmet");
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(5);

// let userProfile = "AHMET";
// console.log(userProfile);
// userProfile = "24";
// console.log(userProfile)let
// let ahmet = "ahmet";
// let emir = "emir";
// let user = "user";
// let cakir = "cakir";
// console.log(ahmet, emir, user, cakir);
// let firstName = "Ahmet";
// surName = "Çakır";
// maritalStatus = false;
// country = "Türkiye";
// age = "24";
// console.log(firstName, surName, maritalStatus, country, age);

// let benimYasim = "Ben 25 Yaşındayım";
// let seninYasin = "Sen 30 Yaşındasın";
// console.log(benimYasim);
// console.log(seninYasin);

// let numOne = 3;
// let numTwo = 3;
// console.log(numOne == numTwo);

// let numThree = 4;
// let numFour = 5;
// console.log(numThree == numFour);

// let nums = [1, 2, 3];
// console.log(nums);
// nums[0] = 10;
// console.log(nums);
// nums[1] = 20;
// console.log(nums);

// let nums = [1, 2, 3];
// let nums2 = [1, 2, 3];

// console.log(nums == nums2); // false

// let nums1 = [1, 2, 3];
// let numbers = nums1;

// console.log(nums1 == numbers); // true

// let firstName = "Ahmet";
// let lastName = "Çakır";
// let country = "Turkey";
// let city = "Istanbul";
// let language = "JavaScript";
// let job = "Developer";
// let age = "23";
// let fullName = firstName + " " + lastName;

// let personInfoTwo = `I am ${fullName}. I am ${age} years old. I live in ${country}.`;

// console.log(personInfoTwo);

// country = "Fınland";
// let personInfoThree = `I am ${fullName}. I am ${age} years old. I live in ${country}.`;
// console.log(personInfoTwo);
// console.log(personInfoThree);

// let a = 2;
// let b = 3;

// console.log(`${a} is greater than ${b}: ${a > b}`);

// let js = "Javascript";
// console.log(js.length);

// let string = "30 Days Of Javascript";

// console.log(string.includes("days")); // arama yapar yazının içinde bu kelime var mı
// console.log(string.includes("Days"));
// console.log(string.replace("Days", "Hours")); // string içindeki yazıyı değişmek için

// console.log(string.concat(" and", " Python"));

// let txt =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
// let regEx = /\d+/;

// // kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// // + bir veya daha fazla basamaklı sayı anlamına gelir,
// // ondan sonra g varsa global demektir, her yerde ara.

// console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]
// console.log(string.repeat(10)); // stringi verdiğin sayı kadar repeat eder

// let num = "10";
// let numInt = parseInt(num);
// console.log(numInt); // 10

// let num1 = 9.81;
// let num1Int = parseInt(num1);

// console.log(num1Int);
// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );

// let x = 6;
// let y = 4;
// console.log(x % y);
// console.log(x ** y);
// console.log(x / y);
// console.log(x + y);
// console.log(x - y);

// console.log(x != y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// const check = 4 > 3 && 10 > 5;
// console.log(check);

// console.log(++x);
// console.log(--x);

// let number = 5;
// number > 0
//   ? console.log(`${number} is a positive number `)
//   : console.log(`${number} is a negative number`);
// number = -5;

// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`);

// // prompt("Required , optimal");
// // let promoptNumber = prompt("Enter Number", "Number goes here");
// // console.log(promoptNumber);

// const now = new Date();
// const year = now.getFullYear(); // yılı döndürür
// const month = now.getMonth() + 1; // ayı döndürür (0 - 11) olduğu için +1 ekliyor
// const date = now.getDate(); // günü döndürür (1 - 31)
// const hours = now.getHours(); // sayıyı döndürür (0 - 23)
// const minutes = now.getMinutes(); // sayıyı döndürür (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
// let num = 0;
// if ((num) => 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// let a = 0;
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not number`);
// }
// const arr = [
//   "Ahmet",

//   24,

//   true,

//   {
//     country: "Turkey",
//     city: "ISTANBUL",
//   },
// ];
// console.log(arr);

// const  arr = [

//   'Asabeneh',

//   250,

//   true,

//   { country:  'Finland', city:  'Helsinki' },

//   { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }

//   ] // arr farklı veri tipleri içerir.

//   console.log(arr)
// let firstList = [1, 2, 3];
// let secondList = [4, 5, 6];
// let thirdList = firstList.concat(secondList);
// console.log(thirdList);

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names.join()); // Asabeneh,Mathias,Elias,Brook

// console.log(names.join("")); //AsabenehMathiasEliasBrook

// console.log(names.join(" ")); //Asabeneh Mathias Elias Brook

// console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook

// console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook
// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

// const backEnd = ["Node", "Express", "MongoDB"];

// const fullStack = [frontEnd, backEnd];

// console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

// console.log(fullStack.length); // 2

// console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]

// console.log(fullStack[1]);

// LOOPS FOR / EACH / WHİLE
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = 20; i <= 25; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// for (let i = 30; i <= 35; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const numbers = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// var k_userName = "guest";
// var k_password = "12345";
// var logIn = false;

// while (logIn == false) {
//   var userName = prompt("kullanıcı adı :");
//   var userPassword = prompt("parola :");

//   if (k_userName == userName && k_password == userPassword) {
//     console.log("Giriş Yapıldı");
//     logIn = true;
//   } else {
//     console.log("Hatalı giriş");
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }
// for (let i = 0; i <= 10; i++) {
//   let i2 = i * i;
//   let i3 = i2 * i;
//   console.log(`${i} ${i2} ${i3}`);
// }
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i = i+2;
// }
// const anonymousFun = function () {
//   console.log();
// };

// function square() {
//   let num = 2;
//   let square = num * num;
//   console.log(square);
// }
// square();

// function addTwoNumbers() {
//   let numOne = 10;
//   let numTwo = 20;
//   let sum = numOne + numTwo;

//   console.log(sum);
// }

// addTwoNumbers(); // fonksiyon kendisine verilen isimle çağrılmalı

// function printFullName() {
//   let firtsName = "Ahmet";
//   let lastName = "Çakır";
//   let space = " ";
//   let fullName = firtsName + space + lastName;
//   return fullName;
// }
// console.log(printFullName());

// fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// console.log(areaOfCircle(10)); // bağımsız bir değişkenle çağırılmalı

// function square(number) {
//   return number * number;
// }

// console.log(square(10));

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   console.log(sum);
// }
// sumTwoNumbers(10, 20); // fonksiyon çağırımı
// // Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir.

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   return sum;
// }

// console.log(sumTwoNumbers(10, 20));
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("Asabeneh", "Yetayeh"));

// const person = {
//   name: `Ahmet`,
//   surName: `Çakır`,
//   age: 25,
//   skills: [`HTML`, `JavaScript`, `CSS`, `PHP`],
//   siblings: [
//     {
//       name: "Meryem",
//       surName: "Çakır",
//     },
//   ],
//   getFullName: function () {
//     return `${this.age} ${this.skills}`;
//   },
// };
// console.log(person.getFullName());

// DOM

// const h1 = document.getElementsByTagName("h1");
/*
let len = h1.length;
for (let i = 0; i < len; i++) {
  console.log(h1[i]);
}

[...h1].forEach((item) => {
  console.log(tiem);
});
*/

// const title = document.getElementById("title");

// title.style.color = "red";
// title.style.backgroundColor = "yellow";

// let h1 = document.querySelector("h1");

// h1.style.color = "red";

// let firma = prompt("JavaScript hangi firma tarafından yaratılmıştır?", "");

// firma == "Netscape" ? alert("Doğru!") : alert("Yanlış.");

// LIKE TEST
// let valueElement = document.getElementById("nft-like");
// let toggleButton = document.getElementById("toggleButton");
// let value = 100;
// let increasingMod = true;
// toggleButton.addEventListener("click", function () {
//   if (increasingMod) {
//     value++;
//   } else {
//     value--;
//   }
//   valueElement.textContent = value;
//   increasingMod = !increasingMod;
// });
// JS ALGORİTMA SORULARI
/* let sicaklikDeğeri = prompt("Sıcaklık Değerini Giriniz !");
sicaklikDeğeri = parseInt(sicaklikDeğeri);

if (sicaklikDeğeri <= 0) {
  alert("KATI");
} else if (sicaklikDeğeri > 0 && sicaklikDeğeri < 100) {
  alert("SIVI");
} else {
  alert("GAZ");
}
console.log(sicaklikDeğeri);
*/
// let x = prompt("Bir sayı giriniz");
// if ((x = "")) {
//   alert("Herhangi bir sayı girmedin !");
//   return;
// }
// x = parseInt(x);
// if (x % 2 == 0) {
//   alert("Sayı çifttir");
// } else {
//   alert("sayı tektir");
// }

// let asaldizisi = [];
// for (i = 2; i < 100; i++) {
//   let flag = true;
//   for (j = 2; j <= i/2; j++) {
//     if (i % j == 0) {
//       flag = false;
//     }
//   }
//   if (flag) {
//     asaldizisi.push(i);
//   }
// }
// console.log(asaldizisi);

const sayi1 = parseInt(prompt("1.Sayıyı Girin"));
const sayi2 = parseInt(prompt("2.Sayıyı Girin"));

console.log(typeof sayi1);
