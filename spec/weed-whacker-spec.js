import {Plant} from './../src/models/plant.js';
import {Weed} from './../src/models/weed.js';
import {Basket} from './../src/models/basket.js';
import {Store} from './../src/models/store.js';
import {Garden} from './../src/models/garden.js';
import {Game} from './../src/models/weed-whacker.js';

// describe('game-play', function(){
//   it('should initialize a new game with a new garden, and new basket with preset amounts of gold and seeds', function(){
//
//   });
//
//   it('should end a game when all garden spots are filled with weeds', function(){
//
//   });
//
//   it('should end a game when all garden spots are filled with dead plants or weeds', function(){
//
//   });
// });

describe('plant', function(){
  let plant;
  beforeEach(function(){
    plant = new Plant('tomato', 3, ['fertilizer']);
  });

  it('should be the correct type', function(){
    expect(plant).toBeDefined();
    expect(plant).toEqual(jasmine.any(Plant));
  });

  it('should have correct starting values', function(){
    expect(plant.wateringCounter).toEqual(0);
    expect(plant.name).toEqual('tomato');
    expect(plant.type).toEqual('plant');
    expect(plant.level).toEqual(3);
    expect(plant.toolBonuses[0]).toEqual('fertilizer');
    expect(plant.lifeSpan).toEqual(3);
    expect(plant.growTime).toEqual(6);
  });

  it('should add count to the  water counter when plant is watered', function(){
    plant.water();
    expect(plant.wateringCounter).toEqual(5);
  });

  it('should decrement count from the plant when triggered', function(){
    plant.water();
    plant.decrementWater();
    expect(plant.wateringCounter).toEqual(4);
  });

  it('should grow in maturity when triggered', function(){
    plant.grow();
    expect(plant.maturity).toEqual(2);
  });

  it('should have random seed qty assigned, 0 - up to plant level', function(){
    expect(plant.seedQty).toBeLessThan(plant.level);
    expect(plant.seedQty).toBeGreaterThanOrEqual(0);
  });
});

describe('store', function(){
  let store;
  beforeEach(function(){
    store = new Store();
  });

  it('should be the correct type', function(){
    expect(store).toBeDefined();
    expect(store).toEqual(jasmine.any(Store));
  });

  it('should have correct starting tools', function(){
    expect(store.tools).toEqual(jasmine.any(Array));
    expect(store.tools[0]).toEqual("shovel");
    expect(store.tools[1]).toEqual("hoe");
    expect(store.tools[2]).toEqual("rake");
    expect(store.tools[3]).toEqual("fertilizer");
  });

  it('should have correct starting tool prices', function(){
    expect(store.toolPrices).toEqual(jasmine.any(Object));
    Object.keys(store.toolPrices).forEach(function(propName){
      expect(store.tools.includes(propName)).toBe(true);
    });
    expect(store.toolPrices.shovel).toEqual(5);
    expect(store.toolPrices.hoe).toEqual(6);
    expect(store.toolPrices.rake).toEqual(8);
    expect(store.toolPrices.fertilizer).toEqual(3);
  });

  it('should have correct starting seed prices', function(){
    expect(store.seedPrices).toEqual(jasmine.any(Object));
    Object.keys(store.seedPrices).forEach(function(propName){
      expect(Object.keys(store.buyPrices).includes(propName)).toBe(true);
    });
    expect(store.seedPrices.tomato).toEqual(2);
    expect(store.seedPrices.pumpkin).toEqual(2);
    expect(store.seedPrices.sunflower).toEqual(2);
    expect(store.seedPrices.carrot).toEqual(2);
    expect(store.seedPrices.eggplant).toEqual(5);
    expect(store.seedPrices.zucchini).toEqual(5);
    expect(store.seedPrices.watermelon).toEqual(10);
    expect(store.seedPrices.saffron).toEqual(15);
    expect(store.seedPrices.truffles).toEqual(15);
    expect(store.seedPrices.squareWatermelons).toEqual(50);
  });

  it('should have correct starting plant buy prices', function(){
    expect(store.buyPrices).toEqual(jasmine.any(Object));
    Object.keys(store.buyPrices).forEach(function(propName){
      expect(Object.keys(store.seedPrices).includes(propName)).toBe(true);
    });
    expect(store.buyPrices.tomato).toEqual(3);
    expect(store.buyPrices.pumpkin).toEqual(3);
    expect(store.buyPrices.sunflower).toEqual(3);
    expect(store.buyPrices.carrot).toEqual(3);
    expect(store.buyPrices.eggplant).toEqual(7);
    expect(store.buyPrices.zucchini).toEqual(7);
    expect(store.buyPrices.watermelon).toEqual(15);
    expect(store.buyPrices.saffron).toEqual(20);
    expect(store.buyPrices.truffles).toEqual(20);
    expect(store.buyPrices.squareWatermelons).toEqual(70);
    
  });
});



describe('Basket', function(){
  let basket;
  let plant1;
  let plant2;
  let plantArray;
  let tool1;
  let tool2;
  let toolArray;
  let seed;
  beforeEach(function(){
    basket = new Basket();
    plant1 = new Plant('Tomato Thug',5,['fertilizer']);
    plant2 = new Plant('Square Watermelon', 20, ['fertilizer']);
    plantArray = [plant1, plant2];
    tool1 = 'shovel';
    tool2 = 'hose';
    toolArray = [tool1,tool2];
    seed = new Plant('carrot',0,[]);

  });

  it('.addPlants should allow the user to add mature plants to their basket',function(){
    basket.addPlants(plantArray);
    expect(basket.maturePlants).toEqual(plantArray);
  });

  it('.addTool should allow the user to add a single tool to their basket from the store in exchange for gold', function(){
    basket.addTool(tool1, 10);
    expect(basket.tools).toEqual([tool1]);
    expect(basket.gold).toEqual(20);
  });

  it('.addSeeds should allow the user to buy seeds in exchange for gold', function(){
    basket.addSeeds(seed.name,2,10);
    expect(basket.seeds.carrot).toEqual(14);
    expect(basket.gold).toEqual(10);
    });

  it('.dryPlant should allow the user to dry plants for seeds', function(){
    basket.addPlants(plantArray);
    basket.dryPlant(plant1.name,1);
    expect(basket.maturePlants).toEqual([plant2]);
    expect(basket.seeds[plant1.name]).toBeLessThanOrEqual(plant1.level);
    expect(basket.seeds[plant1.name]).toBeGreaterThanOrEqual(0);
  });

  it('.sellPlant should allow the user to sell mature plants in exchange for gold', function(){
    basket.addPlants(plantArray);
    basket.sellPlant(plant1.name,20,1);
    expect(basket.maturePlants).toEqual([plant2]);
    expect(basket.gold).toEqual(50);
  });
});

  describe('weed', function(){
    let weed1;
    beforeEach(function(){
      weed1 = new Weed('dandelion', 5,['lawn mower']);
    });

    it('should create a new Weed Object', function(){
      expect(weed1).toBeDefined();
      expect(weed1).toEqual(jasmine.any(Weed));
    });

    it('should create weeds with a spread rate of 0.4', function(){
      expect(weed1.spreadRate).toEqual(0.4);
    });

    it('should create weeds with a proximity rating for 0.4', function(){
      expect(weed1.proximityRating).toEqual(0.4);
    });

    it('should create weeds with an array of bestTools', function(){
      expect(weed1.bestTools).toEqual(jasmine.any(Array));
      expect(weed1.bestTools).toEqual(['lawn mower']);
    });
  });

  describe('garden', function(){
    let gardenObj;
    beforeEach(function(){
      gardenObj = new Garden(4,4);
    });

    it('should be the correct type', function(){
      expect(gardenObj).toBeDefined();
      expect(gardenObj).toEqual(jasmine.any(Garden));
    });

    it('should start empty for each new game', function(){
      expect(gardenObj.garden).toEqual(jasmine.any(Array));
      expect(gardenObj.garden.length).toEqual(4);
      expect(gardenObj.garden[0]).toEqual(jasmine.any(Array));
      expect(gardenObj.garden[0].length).toEqual(4);
      gardenObj.garden.forEach(function(col){
        col.forEach(function(space){
          expect(space).toBeUndefined();
        });
      });
    });

    it('should confirm when a space is available', function(){
      const plant = new Plant('carrot',0,[]);
    });

    it('should allow user to plant a seed when selected space is empty', function(){

    });

    it('should reject a seed when selected space is occupied', function(){

    });

    it('should require each plant to be watered on a timed interval', function(){

    });

    it('should grow weeds in random, open garden location based on level', function(){

    });

    it('should spread weeds to adjacent open garden locations, based on existing weed spread rate', function(){

    });

    it('should allow user to harvest mature plants and put them in their basket', function(){

    });

    it('should kill a plant if the user waits past the life-stage timer of that plant', function(){

    });

    it('should require the user to clear a dead plant before allowing a seed to be placed in that location', function(){

    });

    it('should allow the user to add fertilizer to a space and increase corresponding plant property', function(){

    });

    it('should allow user to remove a weed from selected location if user has the correct tool', function(){

    });

    it('should prevent user from weeding a selected location if user does not have the correct tool', function(){

    });

    it('should grow plants through life stages (seed-seedling-flowering-mature) when watered on time', function(){
      //tbd
    });
  });
