export class Garden {
  constructor(gardenX, gardenY){
    this.garden = buildGarden(gardenX, gardenY);
  }

  buildGarden(x,y){
    let garden = [];
    for(let i = 0; i < x; i++){
      const array = new Array(y);
      garden.push(array);
    }
    return garden;
  }

  checkSpaceFree(x,y){
    let available = true;
    if(x > this.garden.length || y > this.garden[0].length || this.garden[x][y]){
      available = false;
    }
    return available;
  }

  getAllFreeSpaces(){
    let freeSpaces = [];
    for(let col = 0; col < this.garden.length; col++){
      for(let row = 0; row < this.garden[0].length; row++){
        if(checkSpaceFree(col, row)){
          freeSpaces.push([col, row]);
        }
      }
    }
    return freeSpaces;
  }
}
