In JavaScript, a class is a blueprint for creating objects with shared properties and methods.

A basic class can have a constructor to initialize properties and methods to define behavior.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.model} engine started!`);
  }

  stopEngine() {
    console.log(`${this.model} engine stopped.`);
  }
};

const myCar = new Car('Tesla', 2023);
myCar.startEngine(); // Output: Tesla engine started!
myCar.stopEngine();  // Output: Tesla engine stopped.





/////////////////////////////////////////////////////////////////////////////////////////////////////////




class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
};

const cat = new Animal('Cat', 4);
console.log(cat.describe()); // Output: Cat has 4 legs

const bird = new Animal('Bird', 2);
console.log(bird.describe()); // Output: Bird has 2 legs
