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

  checkSpaceFree(x, y){
    let available = true;
    if((x > this.garden.length || x < 0) || ((y > this.garden[0].length || y < 0) || this.garden[x][y])){
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

  plantFromSeed(seedName){
    let newPlant = new Plant(seedName, Math.floor((Math.random()*5)+1), ['']);
    return newPlant;
  }


  addFlora(x, y, flora){
    if(checkSpaceFree(x, y)){
      this.garden[x][y] = flora;
    }
  }

  removeFlora(x, y){
      this.garden[x][y] = "";
  }

  newWeed(name, level, bestTools){
    let newWeed = new Weed(name, level, bestTools);
    return newWeed;
  }

  removeWeed(x, y, tool){
    let flora = this.garden[x][y];
    let isWeedRemoved = false;
    if(flora.bestTools && flora.bestTools.includes(tool)){
      removeFlora(x,y);
      isWeedRemoved = true;
    }
    return isWeedRemoved;
  }


}
