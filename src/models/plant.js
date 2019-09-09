import Flora from './flora.js';

export class Plant extends Flora {
  constructor(name, level, toolBonuses){
    super(name, level);
    this.lifeSpan = setLifeSpan();
    this.wateringCounter = 0;
    this.toolBonuses = toolBonuses;
    this.seedQty = setSeedQty();
  }

  setLifeSpan(){
    return this.level;
  }

  setSeedQty(){
    return Math.floor(Math.random() * this.level);
  }
}
