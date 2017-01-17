class Organism {

  constructor(settings){

    var defaults = {
      alive: true,
      cool: false
    }

    Object.assign(this,defaults,settings);

  }

}

var anOrganism = new Organism({alive:false, cool:true});