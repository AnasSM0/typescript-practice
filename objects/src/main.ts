/*const car = {
  make: "Honda",
  model: "NSX",
  year: 1996,
  available: true,
  colors: ["red", "blue", "black", "white"],

  getinfo: function () {
    return `${this.make} ${this.model}`;
  },

  displayinfo: function () {
    console.log(`This is a ${this.getinfo()} built in ${this.year}`);
  },

  engineSound:()=> 'vroom vroom',

  oilChange:function(){

    return `${this.make} ${this.model} requires an oil change.`
  }

};

car.displayinfo();
console.log("It goes", car.engineSound());
console.log(car.oilChange());

console.log("---------------------------------")
*/
interface vehicle {
    make: string;
    model: string;
    year: number;
    available: boolean;
    colors: string[];
    getinfo: () => string;
    displayinfo: () => void;
    engineSound: () => string;
    oilChange?: () => string; // Optional method
  }
  
  const car1: vehicle = {
    make: "Honda",
    model: "NSX",
    year: 1996,
    available: true,
    colors: ["red", "blue", "black", "white"],
  
    getinfo: function () {
      return `${this.make} ${this.model}`;
    },
  
    displayinfo: function () {
      console.log(`This is a ${this.getinfo()} built in ${this.year}`);
    },
  
    engineSound: () => 'vroom vroom',
  
  };
  
  car1.displayinfo();
  console.log("It goes", car1.engineSound());
  
  // Check if the optional method exists before calling it
  if (car1.oilChange) {
    console.log(car1.oilChange());
  }

  console.log("--------------------------------------------");

  const car2: vehicle = {
    make: "Mercedes",
    model: "C63",
    year: 2008,
    available: true,
    colors: ["red", "yellow", "black", "gray"],
  
    getinfo: function () {
      return `${this.make} ${this.model}`;
    },
  
    displayinfo: function () {
      console.log(`This is a ${this.getinfo()} built in ${this.year}`);
    },
  
    engineSound: () => 'VRROOOOM VROOOOM',
  
    oilChange: function () {
      return `${this.make} ${this.model} requires an oil change.`;
    }
  };
  
  car2.displayinfo();
  console.log("It goes", car2.engineSound());
  
  // Check if the optional method exists before calling it
  if (car2.oilChange) {
    console.log(car2.oilChange());
  }

  interface plane extends vehicle{

    ammunation:boolean;
    pilot:string;

    fireMissiles: () => string;

  }

  const jet: plane = {

    make:"Lockheed Martin",
    model: "F16 Raptor",
    year:2008,
    available:true,
    colors:["gray","black","silver"],
    ammunition: true,
    pilot: "Captain Maverick",

    getinfo: function () {
        return `${this.make} ${this.model}`;
      },
    
      displayinfo: function () {
        console.log(`This is a ${this.getinfo()} built in ${this.year}`);
      } , 
      
      engineSound: () => 'WHOOOSH',

      fireMissiles: function () {
        return(`${this.make} ${this.model} is firing missiles!`);
      },
    
      
    };

    console.log("--------------------------------------------");

  jet.displayinfo();
  console.log("It goes",jet.engineSound());
  console.log(jet.fireMissiles());