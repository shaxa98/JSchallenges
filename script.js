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

//  agar bolsa shartni tekshirish uchun ishlatiladi.
//  agar shart to'g'ri bo'lsa, if ichidagi kod ishlaydi.
//   agar shart noto'g'ri bo'lsa, else ichidagi kod ishlaydi.
// else if shartni tekshirish uchun ishlatiladi.
// agar shart to'g'ri bo'lsa, else if ichidagi kod ishlaydi.
//  else if bi if dan keyin bir necha marta ishlatilishi mumkin.
// if (10 == 11) {
//   console.log("Shart to'g'ri");
// } else if (10 == 12) {
//   console.log("Shart to'g'ri 2");
// } else {
//   console.log("Shart noto'g'ri");
// }

// array bu bir nechta qiymatlarni saqlash uchun ishlatiladi.
//  array ichidagi qiymatlar indeks raqamlar bilan belgilanadi.
// array ichidagi qiymatlar 0 dan boshlanadi.
// array ichidagi qiymatlar o'zgartirilishi mumkin.
// array ichidagi qiymatlar qo'shilishi mumkin.
// array ichidagi qiymatlar o'chirilishi mumkin.
// array ichidagi qiymatlar tartiblanishi mumkin.
// array ichidagi qiymatlar filtrlash mumkin.
// array ichidagi qiymatlar map qilish mumkin.
// array ichidagi qiymatlar reduce qilish mumkin.
// array ichidagi qiymatlar find qilish mumkin.
// array ichidagi qiymatlar some qilish mumkin.
// array ichidagi qiymatlar every qilish mumkin.
// array
// var arr = [1, 2, 3, 4, 5];

// console.log(arr[4]);

// var bollalar = "Salohiddin, Surob, Abdulboqi, Javohir";
// console.log(bollalar);

// var blalar = ["Salohiddin", "Surob", "Abdulboqi", "Javohir"];
// console.log(blalar[2]);

var yosh = 20;
if (yosh == 7) {
  console.log("Birinchi Sinf");
} else if (yosh == 8) {
  console.log("Ikkinchi Sinf");
} else if (yosh == 9) {
  console.log("Uchinchi sinf");
} else if (yosh == 10) {
  console.log("To`rtinchi sinf");
} else if (yosh == 11) {
  console.log("Beshinchi Sinf");
} else if (yosh == 12) {
  console.log("Oltinchi Sinf");
} else if (yosh == 13) {
  console.log("Yettinchi Sinf");
} else if (yosh == 14) {
  console.log("Sakkizinchi Sinf");
} else if (yosh == 15) {
  console.log("To`qqizinchi Sinf");
} else if (yosh == 16) {
  console.log("O`ninchi Sinf");
} else if (yosh == 17) {
  console.log("O`nbirinchi Sinf");
} else if (yosh < 7) {
  console.log("Maktab Yoshiga yetmagan");
} else {
  console.log("Maktab yoshidan o`ttib ketgan");
}

let son = 7;

if (son % 2 === 0) {
  console.log("Juft son");
} else if (son % 2 === 1) {
  console.log("Toq son");
}

let login = "admin";
let password = "12345";

if (login === "admin" && password === "12345") {
  console.log("Kirish muvaffaqiyatli");
} else {
  console.log("Login yoki parol xato");
}
