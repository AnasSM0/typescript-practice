const car={

make: "Honda",
model: "NSX",
year: 1996,
available: true,
colors: ["red","blue","black","white"],

getinfo:function(){

return `${this.make} ${this.model}`

},

 displayinfo:function(){

console.log(`This is a ${this.getinfo()} built in ${this.year}`)
        
}

}

car.displayinfo();


