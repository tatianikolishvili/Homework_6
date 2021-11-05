function Person(name, surname, age, gender) {
  // your code goes here...
  this.name = name; 
  this.surname = surname;
  this.age = age;
  this.genger = gender;
 

  this.fullName = function () {
    return (this.name + ' ' + this.surname);
  }
}

let tatia1234 = new Person("Tatia", "Nikolishvili", 21, "W");
let Nino1234 = new Person("Nino", "Chavchavadze", 30, "W");


console.log({
  Tatia: {
    fullName: tatia1234.fullName(),
},
});