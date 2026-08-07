var Shaxzod = "Salom Shaxzod";
// vareyble. bu variable o'zgaruvchidir. uni qayta o'zgartirish mumkin
let Samir = "Salom Samir";
// let o'zgaruvchi. uni qayta o'zgartirish mumkin
const Javohir = "Salom Javohir";
// const o'zgaruvchi. uni qayta o'zgartirish mumkin emas.
//  const o'zgaruvchisi faqat bir marta qiymat oladi va o'zgarmaydi

Shaxzod = "Salom Shaxzod 2";
Samir = "Salom Samir 2";
//Javohir = "Salom Javohir 2";
console.log(Shaxzod);
console.log(Samir);
console.log(Javohir);

// Boolian. true yoki false qiymat oladi

let bir = 11 == 10; //tengmi
let ikki = 12 > 15; // katta mi
let uch = 10 < 15; // kichkinami
let turt = 9 >= 10; // katta yoki tengmi
let besh = 11 <= 10; // kichkina yoki tengmi
let olti = "Salom" === "Salom";
// tengmi harfni katta kichikligiga qarab
let yetti = 10 != 10; // teng emasmi
console.log(bir); //true
console.log(ikki); //false
console.log(uch); //true
console.log(turt); //false
console.log(besh); //false
console.log(olti); //false
console.log(yetti); //false

//  agar bolsa shartni tekshirish uchun ishlatiladi.
//  agar shart to'g'ri bo'lsa, if ichidagi kod ishlaydi.
//   agar shart noto'g'ri bo'lsa, else ichidagi kod ishlaydi.
// else if shartni tekshirish uchun ishlatiladi.
// agar shart to'g'ri bo'lsa, else if ichidagi kod ishlaydi.
//  else if bi if dan keyin bir necha marta ishlatilishi mumkin.
if (10 == 11) {
  console.log("Shart to'g'ri");
} else if (10 == 12) {
  console.log("Shart to'g'ri 2");
} else {
  console.log("Shart noto'g'ri");
}
