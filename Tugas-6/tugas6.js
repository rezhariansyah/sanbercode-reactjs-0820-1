// soal 1
console.log("----Soal 1----");
const luasSegitiga = (alas, tinggi) => {
  let luas = (alas * tinggi) / 2;

  return luas;
};

const luasPersegi = (sisi) => {
  let luas = sisi * sisi;

  return luas;
};

const luasLingkaran = (lingkaran) => {
  let hasil = lingkaran * lingkaran * Math.PI;
  return parseFloat(hasil.toFixed());
};

console.log(luasSegitiga(10, 10));
console.log(luasPersegi(5));
console.log(luasLingkaran(20));

// soal 2
console.log("----Soal 2----");
let kalimat = "";
let kata1 = "saya";
let kata2 = "adalah";
let kata3 = "seorang";
let kata4 = "frontend";
let kata5 = "developer";
const tambahKata = () => {
  kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;

  return kalimat;
};

console.log(tambahKata());

// soal 3
console.log("----Soal 3----");
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};
//Driver Code
newFunction("William", "Imoh").fullName();

// soal 4
console.log("----Soal 4----");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
const { firstName, lastName, destination, occupation, spell } = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation);

// soal 5
console.log("----Soal 5----");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)
