// To dos:
// - weather and seasons influence --> accessibility to specific seeds based on season
// - annual and perrenial plants
// - space requirements for plants
// - tools as objects, with usability rate
// - can sell tools for gold, price depending on usability rate
// - can harvest for seeds or gold (seeds produce random amnt up to level)
// - garden levels
// - food power ups to make it so your roll rates are better
// - require other interactions instead of watering (like pruning)
// - disasters (thunder, dog dig hole, meteor shower, cow stampede)
// - randomly generate how many veggies/fruits/herbs you harvest from a plant at a time
// - supply demand: if sold to store recently, they pay you less per subsequent sell

import Plant from './plant.js';
import Weed from './weed.js';
import Basket from './basket.js';
import Store from './store.js';
import Garden from './garden.js';

export class Game {
  constructor(x, y) {
    this.garden = new Garden(x, y);
    this.basket = new Basket();
    this.store = new Store();
    this.dayLength = 5 * 60 * 1000;
    this.currentDay = 0;
  }

  pullWeed(x, y, tool) {
    return this.garden.removeWeed(x, y, tool);
  }

  plantSeed(x, y, plantName) {
    if (Object.keys(this.basket.seeds).includes(plantName) && this.basket.seeds[plantName] > 0) {
      this.basket.seeds[plantName]--;
      const newPlant = this.garden.plantFromSeed(plantName);
      this.garden.addFlora(x, y, newPlant);
    }
    return this.garden;
  }

  waterPlant(x, y) {
    const flora = this.garden[x][y];
    if (flora.type === 'plant') {
      flora.water();
    } else {
      flora.spreadRate += 0.1;
    }
  }

  harvestPlant(x, y) {
    const flora = this.garden[x][y];
    if (flora.type === 'plant' && flora.maturity === 4) {
      this.basket.addPlants(flora.name);
      removeFlora(x, y);
    }else if (flora.type === 'plant'){
      removeFlora(x, y);
    }
  }

  sellPlant(plantName){
    const price = this.store.buyPrices[plantName];
    return this.basket.sellPlant(plantName, price);
  }

  buyNewTool(toolName){
    const price = this.store.toolPrices[toolName];
    this.basket.addTool(toolName,price);
    return -price;
  }

  buyNewSeeds(seedName, qty){
    const price = this.store.seedPrices[seedName];
    this.basket.addSeeds(seedName, price, qty);
    return -price;
  }

}




// grow weed & spread weed

// dry for seeds

// use tool


// buy new seeds
