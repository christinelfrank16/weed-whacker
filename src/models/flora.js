export class Flora {
  constructor(name, level){
    this.name = name;
    this.level = level;
    this.maturity = 0;
    this.growTime = setGrowTime();
  }

  grow(){
    this.maturity++;
  }

  setGrowTime(){
    return this.level * 2;
  }
}
