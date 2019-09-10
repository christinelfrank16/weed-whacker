import {Flora} from './flora.js';

export class Plant extends Flora {
  constructor(name, level, toolBonuses){
    super(name, level, 'plant');
    this.lifeSpan = this.setLifeSpan(); // # days between each stage
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

  grow(){
    plant.lifeSpan--;
    if(this.lifeSpan === 0 && wateringCounter !== 0){
      this.maturity++;
      this.lifeSpan = setLifeSpan();
    } else if (wateringCounter === 0){
      this.maturity === 5;
    }
  }
}
