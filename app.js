// var Shaxzod = "Salom Shaxzod";
// // vareyble. bu variable o'zgaruvchidir. uni qayta o'zgartirish mumkin
// let Samir = "Salom Samir";
// // let o'zgaruvchi. uni qayta o'zgartirish mumkin
// const Javohir = "Salom Javohir";
// // const o'zgaruvchi. uni qayta o'zgartirish mumkin emas.
// //  const o'zgaruvchisi faqat bir marta qiymat oladi va o'zgarmaydi

// Shaxzod = "Salom Shaxzod 2";
// Samir = "Salom Samir 2";
// //Javohir = "Salom Javohir 2";
// console.log(Shaxzod);
// console.log(Samir);
// console.log(Javohir);

// // Boolian. true yoki false qiymat oladi

// let bir = 11 == 10; //tengmi
// let ikki = 12 > 15; // katta mi
// let uch = 10 < 15; // kichkinami
// let turt = 9 >= 10; // katta yoki tengmi
// let besh = 11 <= 10; // kichkina yoki tengmi
// let olti = "Salom" === "Salom";
// // tengmi harfni katta kichikligiga qarab
// let yetti = 10 != 10; // teng emasmi
// console.log(bir); //true
// console.log(ikki); //false
// console.log(uch); //true
// console.log(turt); //false
// console.log(besh); //false
// console.log(olti); //false
// console.log(yetti); //false

// //  agar bolsa shartni tekshirish uchun ishlatiladi.
// //  agar shart to'g'ri bo'lsa, if ichidagi kod ishlaydi.
// //   agar shart noto'g'ri bo'lsa, else ichidagi kod ishlaydi.
// // else if shartni tekshirish uchun ishlatiladi.
// // agar shart to'g'ri bo'lsa, else if ichidagi kod ishlaydi.
// //  else if bi if dan keyin bir necha marta ishlatilishi mumkin.
// if (10 == 11) {
//   console.log("Shart to'g'ri");
// } else if (10 == 12) {
//   console.log("Shart to'g'ri 2");
// } else {
//   console.log("Shart noto'g'ri");
// }
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

var stringList = ["Avazidin", "Salohiddin", "Surob", "Abdulboqi", "Javohir"];

function getLengths(stringList) {
  let lengths = stringList.map((word) => word.length);

  console.log(stringList[0] + ": " + lengths[0] + "ta harf bor");
  console.log(stringList[1] + ": " + lengths[1] + "ta harf bor");
  console.log(stringList[2] + ": " + lengths[2] + "ta harf bor");
  console.log(stringList[3] + ": " + lengths[3] + "ta harf bor");
  console.log(stringList[4] + ": " + lengths[4] + "ta harf bor");
}
getLengths(stringList);

var soatlikHaq = 10;
var ishSoati = 50;

function calculateSalary(Soat, SoatlikHaq) {
  if (Soat <= 40) {
    return Soat * SoatlikHaq;
  } else {
    let odatiyTulov = 40 * SoatlikHaq;
    let qushimchahaq = (Soat - 40) * SoatlikHaq * 1.5;

    return odatiyTulov + qushimchahaq;
  }
}

console.log(calculateSalary(25, 10));
console.log(calculateSalary(55, 10));
console.log(calculateSalary(45, 10000));
