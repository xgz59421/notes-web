function person(firstname, lastname, age, eyecolor) {
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
  this.eyecolor = eyecolor
  return [this.firstname, this.lastname, this.age, this.eyecolor, this]
}

var myFather = new person('John', 'Doe', 50, 'blue')
console.log(myFather)
