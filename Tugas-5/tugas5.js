// soal 1
console.log("----Soal 1----");

function halo() {
  var str = "Halo Sanbers!";

  return str;
}
console.log(halo());

// soal 2
console.log("----Soal 2----");

function kalikan(num1, num2) {
  return num1 * num2;
}
var num1 = 12;
var num2 = 4;

console.log(kalikan(num1, num2));

// soal 3
console.log("----Soal 3----");

function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);

console.log(perkenalan);

// soal 4
console.log("----Soal 4----");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var result = {
  nama: arrayDaftarPeserta[0],
  jenis_kelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahun_lahir: arrayDaftarPeserta[3],
};

console.log(result);

// soal 5
console.log("----Soal 5----");
var result = [
  {
    nama: "strawberry",
    warna: "merah",
    ada_bijinya: "tidak",
    harga: "9000",
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ada_bijinya: "ada",
    harga: "8000",
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    ada_bijinya: "ada",
    harga: "10000",
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    ada_bijinya: "tidak",
    harga: "5000",
  },
];

console.log(result[0]);

// soal 6
console.log("----Soal 6----");
var dataFilm = [];

var obj = {
  nama: "spiderman",
  durasi: "2 jam",
  genre: "action",
  tahun: 2017,
};

function insertObj() {
  dataFilm.push(obj);

  return dataFilm;
}

console.log(insertObj());
