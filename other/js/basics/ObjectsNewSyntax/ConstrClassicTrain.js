'use strict';

class Organism {

  constructor(alive, cool){
    this.alive = alive;
    this.cool = cool;
  }
  
   setCool(yesNo){
      this.cool = yesNo;
  }
  
  getCool(){
      return this.cool;
  }

}

var org = new Organism(false,true);

org.setCool(false);
console.log("rst: " + org.getCool());