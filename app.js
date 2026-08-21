// var son = 2;

// function SonidarajasiniAniqlash(son) {
//   var ADaraja = son;
//   var BDaraja = son * son;
//   var CDaraja = son * son * son;
//   var DDaraja = son * son * son * son;
//   var EDaraja = son * son * son * son * son;
//   var FDaraja = son * son * son * son * son * son;
//   var GDaraja = son * son * son * son * son * son * son;
//   var HDaraja = son * son * son * son * son * son * son * son;
//   var IDaraja = son * son * son * son * son * son * son * son * son;
//   var JDaraja = son * son * son * son * son * son * son * son * son * son;
//   var KDaraja = son * son * son * son * son * son * son * son * son * son * son;

//   console.log("1-daraja: " + ADaraja);
//   console.log("2-daraja: " + BDaraja);
//   console.log("3-daraja: " + CDaraja);
//   console.log("4-daraja: " + DDaraja);
//   console.log("5-daraja: " + EDaraja);
//   console.log("6-daraja: " + FDaraja);
//   console.log("7-daraja: " + GDaraja);
//   console.log("8-daraja: " + HDaraja);
//   console.log("9-daraja: " + IDaraja);
//   console.log("10-daraja: " + JDaraja);
//   console.log("11-daraja: " + KDaraja);
// }
// SonidarajasiniAniqlash(3);

// var num1 = 10;
// var num2 = 20;
// function SonnlarniKattasiniAniqlash(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + "$" + " soni " + num2 + "$" + " sonidan katta");
//   } else {
//     console.log(num2 + "$" + " soni " + num1 + "$" + " sonidan katta");
//   }
// }

// SonnlarniKattasiniAniqlash(2000, 3000);

// var arr = [1, 2, 3, 4, 5];
// function AddToArray(arr, value) {
//   arr.push(value);
//   console.log(arr);
// }
// AddToArray(arr, 8);

// var stringList = ["Avazidin", "Salohiddin", "Surob", "Abdulboqi", "Javohir"];

// function getLengths(stringList) {
//   let lengths = stringList.map((word) => word.length);

//   console.log(stringList[0] + ": " + lengths[0] + "ta harf bor");
//   console.log(stringList[1] + ": " + lengths[1] + "ta harf bor");
//   console.log(stringList[2] + ": " + lengths[2] + "ta harf bor");
//   console.log(stringList[3] + ": " + lengths[3] + "ta harf bor");
//   console.log(stringList[4] + ": " + lengths[4] + "ta harf bor");
// }
// getLengths(stringList);

// var soatlikHaq = 10;
// var ishSoati = 50;

// function calculateSalary(Soat, SoatlikHaq) {
//   if (Soat <= 40) {
//     return Soat * SoatlikHaq;
//   } else {
//     let odatiyTulov = 40 * SoatlikHaq;
//     let qushimchahaq = (Soat - 40) * SoatlikHaq * 1.5;

//     return odatiyTulov + qushimchahaq;
//   }
// }

// console.log(calculateSalary(25, 10));
// console.log(calculateSalary(55, 10));
// console.log(calculateSalary(45, 10000));

// function stars(n) {
//   return "*".repeat(n);
// }

// console.log(stars(1)); // ***
// console.log(stars(10)); // *****
// console.log(stars(20)); // **********
// var son = 2;
// function Juftvatoq(son) {
//   if (son % 2 == 0) {
//     console.log(son + " JuftSon");
//   } else {
//     console.log(son + " Toq son");
//   }
// }

// Juftvatoq(4);

// function Hammasiniqosh(num1, num2, num3) {
//   var yigindi = num1 + num2 + num3;
//   console.log(yigindi);
// }

// Hammasiniqosh(76, 97, 34);

// function Avaz(num) {
//   if (num > 5) {
//     console.log(num + " 5dan katta");
//   } else {
//     console.log(num + " 5dan kichik");
//   }
// }

// Avaz(3);
// Avaz(6);
// Avaz(8);

// function AddListEnds(arr) {
//   console.log(arr[0] + arr[arr.length - 1]);
// }
// let arr = [133, 2, 3, 4, 5, 6, 9, 30, 345];
// AddListEnds(arr);

// function ArrayniHammasi(sonlar) {
//   //   let jami = (sonlar[0] + sonlar[sonlar.length - 1]) * (sonlar.length / 2);
//   //   console.log(jami);
//   let jami = 0;
//   for (i = 0; sonlar.length <= i; i++) {
//     jami += sonlar[i];
//   }
//   console.log(jami);
// }
// sonlar = [1, 2, 3, 4, 5, 6, 29];
// ArrayniHammasi(sonlar);

// var ball = 20;

// function PassOrFail(ball) {
//   if (ball > 40) {
//     console.log("Imtihondan O'tding");
//   } else {
//     console.log("Imtihondan Yiqilding");
//   }
// }
// PassOrFail(ball);

// function teksirish(Nom) {
//   Nom = Nom.toLowerCase();
//   console.log(Nom[0] === Nom[Nom.length - 1]);
// }
// teksirish("Avaza");
// teksirish("Aziza");
// teksirish("Abdilboqia");
// teksirish("Salohiddins");
// teksirish("So`robs");

// function daraja(son) {
//   let natija = 1;

//   for (let i = 1; i <= son; i++) {
//     natija = natija * son;
//   }

//   return natija;
// }

// console.log(daraja(2));
// console.log(daraja(3));
// console.log(daraja(4));
// console.log(daraja(5));
// console.log(daraja(6));
// console.log(daraja(7));
// console.log(daraja(8));
// console.log(daraja(9));

// let son = 3;
// let natija = 1;

// for (let i = 1; i <= 10; i++) {
//   natija = natija * son;
//   console.log(son + " ni " + i + " Darajasi " + natija);
// }
// JavaScript’dagi while — biror shart true bo’lib turgan vaqt
// davomida kodni qayta-qayta bajaradi.

// let s = 1;
// while (s <= 10) {
//   if (s % 2 === 0) {
//     console.log(s + " bu Juft son ");
//   } else {
//     console.log(s + " Bu toq Son ");
//   }
//   s++;
// }
// // Vazifa
// // Console.log
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// // *******
// // ********
// // *********
// // **********

// console.log("*");

// push()

// arr.push(1);
// arr.push(2);

// let arr = [];
// let i = 1;
// while (i <= 1000) {
//   arr.push(i);
//   i++;
// }
// console.log(arr);
// let arr = [];
// let i = 1;
// while (i <= 15) {
//   arr.unshift(i);
//   i++;
// }
// console.log(arr);

// let Bola = ["Shaxruz", "Manucher", "Shaxzod", "Anis", "Samir"];
// console.log(Bola);
// console.log(Bola.pop());
// console.log(Bola);
// console.log(Bola.shift());
// console.log(Bola);
let arr = ["olma", "banan", "anor", "uzum"];

arr.splice(4);

console.log(arr);

let arr1 = [10, 20, 30, 40, 50];

console.log(arr1.slice(2));

let arr2 = [10, 20, 30, 40, 50];

console.log(arr2.slice(-2));

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

let result = arr3.concat(arr4);

console.log(result);
