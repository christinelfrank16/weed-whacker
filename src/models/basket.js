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
      this.exchangeGold(-price);
    }
  }

  addPlants(plants) {
    let array = this.maturePlants.slice(0);
    plants.forEach(function(plant){
      array.push(plant);
    });
    this.maturePlants = array;
  }

  addSeeds(seedName, price, qty) {
    if (price * qty <= this.gold) {
      if (this.seeds[seedName]) {
        this.seeds[seedName] += qty;
        this.exchangeGold(-(price * qty));
      } else {
        this.seeds[seedName] = qty;
        this.exchangeGold(-(price * qty));
      }
    }
  }

  dryPlant(plantName, qty) {
    let seedsGathered = 0;
    const newMaturePlants = this.maturePlants.filter(plant => {
      return plant.name !== plantName
    });
    const plantsToDry = this.maturePlants.filter(plant => {
      return plant.name === plantName
    });
    let sortedPlantsToDry = plantsToDry.sort((a, b) => {
      (a.level > b.level) ? 1: ((a.level < b.level) ? -1 : 0)
    });
    if (qty < sortedPlantsToDry.length) {
      const seedPlants = sortedPlantsToDry.slice(0, qty);
      seedPlants.forEach(function(plant) {
        seedsGathered += plant.seedQty;
      });
      const leftoverPlants = sortedPlantsToDry.slice(qty);
      leftoverPlants.forEach(function(plant) {
        newMaturePlants.push(plant);
      });
      this.maturePlants = newMaturePlants;
      this.addSeeds(plantName, 0, seedsGathered);

    } else if (qty === sortedPlantsToDry.length) {
      this.maturePlants = newMaturePlants;
      plantsToDry.forEach(function(plant) {
        seedsGathered += plant.seedQty;
      });
      this.addSeeds(plantName, 0, seedsGathered);
    } else {
      //error
    }
    return seedsGathered;
  }

  sellPlant(plantName, price, qty) {
    let goldEarned = 0;
    const newMaturePlants = this.maturePlants.filter(plant => {
      return plant.name !== plantName
    });
    const plantsToSell = this.maturePlants.filter(plant => {
      return plant.name === plantName
    });
    let sortedPlantsToSell = plantsToSell.sort((a, b) => {
      (a.level > b.level) ? 1: ((a.level < b.level) ? -1 : 0)
    });
    if (qty < sortedPlantsToSell.length) {
      const leftoverPlants = sortedPlantsToSell.slice(qty);
      leftoverPlants.forEach(function(plant) {
        newMaturePlants.push(plant);
      });
      this.maturePlants = newMaturePlants;
      this.exchangeGold(price * qty);
      goldEarned = price * qty;
    } else if (qty === sortedPlantsToSell.length) {
      this.maturePlants = newMaturePlants;
      this.exchangeGold(price * qty);
      goldEarned = price * qty;
    } else {
      //error
    }
    return goldEarned;
  }

  exchangeGold(goldAmount) {
    this.gold += goldAmount;
  }
}
