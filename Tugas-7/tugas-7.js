// soal 1
console.log("----Soal 1----");
console.log("----Release 0----");

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }

  get sheep() {
    return this.name;
  }
}

let sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

console.log("----Release 1----");
class Ape extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs
  }

  set kaki(value) {
    this.legs = value;
  }

  yell = () => {
    return "Auoo";
  };
}

class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump = () => {
    return "hop hop";
  };
}

let sungokong = new Ape("kera sakti");
sungokong.kaki = 2;

let kodok = new Frog("buduk");

console.log(sungokong.name)
console.log(sungokong.legs);
console.log(sungokong.yell());
console.log()
console.log(kodok.name)
console.log(kodok.legs);
console.log(kodok.jump());

console.log();
console.log("----Soal 2----");

class Clock {
  constructor({template}) {
    this.template = template;
    this.timer;
  }

  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    const output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
    return output;
  }

  stop = () => {
    clearInterval(this.timer);
  }

  start = () => {
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
