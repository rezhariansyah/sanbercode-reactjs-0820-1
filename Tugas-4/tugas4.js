// soal 1
console.log("----Soal 1----");
var num = 0;
console.log("LOOPING PERTAMA");
while (num < 20) {
  num += 2;
  console.log(num + " - I love coding");
}

console.log("LOOPING KEDUA");
num = 20;
while (num > 0) {
  console.log(num + " - I will become a frontend developer");
  num -= 2;
}

// soal 2
console.log("----Soal 2----");
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else if (i % 3 === 0 && i % 2 === 1) {
    console.log(i + " - I Love Coding");
  } else {
    console.log(i + " - Santai");
  }
}

// soal 3
console.log("----Soal 3----");
var tinggi = 7;
var str = "";
for (i = 1; i <= tinggi; i++) {
  str += "#";
  console.log(str);
}

// soal 4
console.log("----Soal 4----");
var kalimat = "saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

// soal 5
console.log("----Soal 5----");
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

var str = "";
for (var i = 0; i < daftarBuah.sort().length; i++) {
  str += daftarBuah[i] + "\n";
}
console.log(str);
