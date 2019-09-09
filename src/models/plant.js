import Flora from './flora.js';

export class Plant extends Flora {
  constructor(name, level, toolBonuses){
    super(name, level);
    this.lifeSpan = setLifeSpan();
    this.wateringCounter = 20;
    this.toolBonuses = toolBonuses;
    this.seedQty = setSeedQty();
  }

  setLifeSpan(){
    return this.level;
  }

  setSeedQty(){
    return Math.floor(Math.random() * this.level);
  }

  water(){
    this.wateringCounter+=5;
  }

  decrementWater(){
    this.wateringCounter--;
  }
}
