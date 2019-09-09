import Flora from './flora.js';

export class Weed extends Flora {
  constructor(name, level, bestTools){
    super(name, level);
    this.spreadRate = setSpreadRate();
    this.proximityRating = setProximityRating();
    this.bestTools = bestTools;
  }

  setSpreadRate(){
    return 0.4;
  }

  setProximityRating(){
    return 0.4;
  }
}
