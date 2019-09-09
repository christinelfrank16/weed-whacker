export class Basket {
  constructor() {
    this.maturePlants = [];
    this.gold = 30;
    this.seeds = {
      tomato: 4,
      carrot: 4,
      sunflower: 4,
      pumpkin: 2
    };
    this.tools = [];
  }

  addTool(tool, price) {
    if (price <= this.gold) {
      this.tools.push(tool);
      exchangeGold(-price);
    }
  }

  addPlants(plants) {
    this.maturePlants = this.maturePlants.concat(plants);
  }

  addSeeds(seedName, price, qty) {
    if(price*qty <= this.gold){
      if (this.seeds[seedName]) {
        this.seeds[seedName]+= qty;
        exchangeGold(-(price * qty));
      }else{
        this.seeds[seedName]= qty;
        exchangeGold(-(price * qty));
      }
    }
  }

  sellPlant(plant, price) {
    this.maturePlants.sort();
    const plantFirstIndex = this.maturePlants.indexOf(plant);
    const plantLastIndex = this.maturePlants.lastIndexOf(plant);
    const indexDelta = plantLastIndex - plantFirstIndex;
    let goldEarned=0;
    if (plantIndex !== -1) {
      this.maturePlants.splice(plantFirstIndex, indexDelta + 1);
      exchangeGold(price * (indexDelta + 1));
      goldEarned = price * (indexDelta + 1);
    }
    return goldEarned;
  }

  exchangeGold(goldAmount) {
    this.gold += goldAmount;
  }
}
