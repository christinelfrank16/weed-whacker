import {Flora} from './flora.js';

export class Plant extends Flora {
  constructor(name, level, toolBonuses){
    super(name, level, 'plant');
    this.lifeSpan = this.setLifeSpan();
    this.wateringCounter = 0;
    this.toolBonuses = toolBonuses;
    this.seedQty = this.setSeedQty();
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
