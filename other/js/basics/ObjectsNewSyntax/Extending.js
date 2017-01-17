'use strict';
class Animal extends Organism {

  constructor(name,species,birthDate,alive,cool){

    // we must call the Organism constructor
    // (by using the keyword super)
    // before we can use this as a keyword
    super(alive,cool);

    this.name = name;
    this.species = species;
    this.birthDate = new Date(birthDate);
  }

  set name(val){
    if(val.length < 3){
      throw("An animal name must be at least 3 chars long!");
    }
    this._name = val;
  }

  get name(){
    return this._name;
  }

  sayHi(){
    return '' +
      'Hi my name is ' + this.name + '!\n' +
      'I am ' + this.age + ' years old ' +
      'and I am a ' + this.species + '!';
  }

  // age is a getter
  // so to users of our class it appears
  // as a property but this code is run
  // each time someone asks for animals age
  get age(){
    var now = new Date().getTime();
    var bdate = this.birthDate.getTime();
    var ageInMs = now - bdate;
    var ageInYears = ageInMs/1000/60/60/24/365;
    return Math.floor(ageInYears);
  }

}


class Organism {

  constructor(alive = true, cool = false){

    this.alive = alive;
    this.cool = cool;

  }

  isAlive(){
    if(this.alive){
      return "I am alive!";
    }
    else {
      return "Oops! I am dead!";
    }
  }

  isCool(){
    if(this.cool){
      return "I am cool!";
    }
    else {
      return "I am not cool!";
    }
  }

}


