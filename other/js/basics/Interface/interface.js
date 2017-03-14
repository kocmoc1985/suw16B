class Interface {
    
    constructor(){
      
        
      // Basic warnings 
      if(this.constructor === Interface){
          throw(new Error("You can not instantiate the Interface base class."));
      }
      if(this.constructor === MyInterface){
          throw(new Error("You can not instantiate an interface."));
      }
      
      // Check if class really implements the interfce
      
      var p = this, methods;
      while(p){
          methods = Object.getOwnPropertyNames(p);
          if(methods.indexOf('isInterface') >= 0){ break; }
          p = Object.getPrototypeOf(p);
      }
      
      methods = methods.filter((method)=>{
          return method != "constructor" && method != "isInterface";
      });
      
      for(var method of methods){
          if(this[method] === p[method]){
              throw(new Error("The interface " + this.constructor.name + " does not implement " + method + "!"));
          }
      }
      
      
    }
    
    
}


class MyInterface extends Interface {
    isInterface(){} // only set on an interface
    talk(){}
    eat(){}
    die(){}
}


class ImplementsInterface extends MyInterface {
    talk(){}
    eat(){}
    die(){}
}


var a = new ImplementsInterface();