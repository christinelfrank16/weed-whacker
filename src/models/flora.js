export class Flora {
  constructor(name, level, type){
    this.name = name;
    this.level = level;
    this.type = type;
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
