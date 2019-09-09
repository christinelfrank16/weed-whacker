export class Store {
  constructor(){
    this.tools = ["shovel", "hoe", "rake", "fertilizer"];
    this.toolPrices = {
      shovel: 5,
      hoe: 6,
      rake: 8,
      fertilizer: 3
    }
    this.seedPrices = {
      tomato: 2,
      pumpkin: 2,
      sunflower: 2,
      carrot: 2,
      eggplant: 5,
      zucchini: 5,
      watermelon: 10,
      saffron: 15,
      truffles: 15,
      squareWatermelons: 50
    }
    this.buyPrices = {
      tomato: 3,
      pumpkin: 3,
      sunflower: 3,
      carrot: 3,
      eggplant: 7,
      zucchini: 7,
      watermelon: 15,
      saffron: 20,
      truffles: 20,
      squareWatermelons: 70
    }
  }
}
