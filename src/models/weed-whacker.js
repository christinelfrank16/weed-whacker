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

import Plant from './plant.js';
import Weed from './weed.js';
import Basket from './basket.js';
import Store from './store.js';
import Garden from './garden.js';

export class Game {
  constructor(x,y){
    this.garden = new Garden(x,y);
    this.basket = new Basket();
    this.store = new Store();
    this.dayLength = 5*60*1000;
    this.currentDay = 0;
  }

  pullWeed(x,y){

  }
}


// pull weed

// grow weed & spread weed

// plant seed

// water plant

// harvest plant

// dry for seeds

// use tool



// sell mature plants

// buy new tool

// buy new seeds
