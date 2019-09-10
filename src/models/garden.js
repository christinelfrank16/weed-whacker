import {Plant} from './plant.js';
import {Weed} from './weed.js';

export class Garden {
  constructor(gardenX, gardenY){
    this.garden = this.buildGarden(gardenX, gardenY);
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
        if(this.checkSpaceFree(col, row)){
          const array = [col,row];
          freeSpaces.push(array);
        }
      }
    }
    return freeSpaces;
  }

  getAllPlants(){
    let plantedPlants = [];
    for(let col = 0; col < this.garden.length; col++){
      for(let row = 0; row < this.garden[0].length; row++){
        if(!this.checkSpaceFree(col, row) && this.garden[col][row].type === 'plant'){
          plantedPlants.push(this.garden[col][row]);
        }
      }
    }
    return plantedPlants;
  }

  plantFromSeed(seedName){
    let newPlant = new Plant(seedName, Math.floor((Math.random()*5)+1), ['']);
    return newPlant;
  }


  addFlora(x, y, flora){
    let isFloraAdded = false;
    if(this.checkSpaceFree(x, y)){
      this.garden[x][y] = flora;
      isFloraAdded = true;
    }
    return isFloraAdded;
  }

  removeFlora(x, y){
      this.garden[x][y] = "";
      return (this.garden[x][y] === "" ? true : false);
  }

  newWeed(name, level, bestTools){
    let newWeed = new Weed(name, level, bestTools);
    return newWeed;
  }

  makeRandomWeed(level){
    const names = ['dandilion', 'thistle', 'crabgrass', 'wildflowers', 'blackberries', 'poison ivy', 'stinging nettle'];
    const bestTools = ["shovel", "hoe", "rake", "fertilizer"];
    const nameIndex = Math.floor(Math.random()*names.length);
    const toolIndex = Math.floor(Math.random()*bestTools.length);

    return this.newWeed(names[nameIndex], level, [bestTools[toolIndex]]);
  }

  removeWeed(x, y, tool){
    let flora = this.garden[x][y];
    let isWeedRemoved = false;
    if(flora.bestTools && flora.bestTools.includes(tool)){
      this.removeFlora(x,y);
      isWeedRemoved = true;
    }
    return isWeedRemoved;
  }


}
