export class Flora {
  constructor(name, level, type){
    this.name = name;
    this.level = level;
    this.type = type;
    //has level 1. Seed 2. Seedling 3.Flowering 4.Mature 5.Dead
    this.maturity = 1;
    this.growTime = this.setGrowTime();
  }

  grow(){
    this.maturity++;
  }

  setGrowTime(){
    return this.level * 2;
  }
}
