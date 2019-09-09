export class Basket {
  constructor(){
    this.maturePlants = [];
    this.gold = 30;
    this.seeds = [
      ["Tomato", 4],
      ["Carrot", 4],
      ["Sunflower", 4],
      ["Pumpkin", 2]
    ];
    this.tools = [];
  }

  addTool(tool, price){
    if(price <= this.gold){
      this.tools.push(tool);
      exchangeGold(-price);
    }
  }

  addPlants(plants){
    this.maturePlants = this.maturePlants.concat(plants);
  }

  addSeeds(seeds, totalCost){
    if(totalCost <= this.gold){
      this.seeds = this.seeds.concat(seeds);
      exchangeGold(-totalCost);
    }
  }

  sellPlant(plant, price){
    this.maturePlants.sort();
    const plantFirstIndex = this.maturePlants.indexOf(plant);
    const plantLastIndex = this.maturePlants.lastIndexOf(plant);
    const indexDelta = plantLastIndex - plantFirstIndex;
    if(plantIndex !== -1){
      this.maturePlants.splice(plantFirstIndex, indexDelta+1);
      exchangeGold(price*(indexDelta+1));
    }
  }

  exchangeGold(goldAmount){
    this.gold += goldAmount;
  }
}
