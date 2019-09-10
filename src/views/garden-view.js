import {Garden} from './../models/garden';
var emoji = require('node-emoji');

export function plantArraytoHTML(garden) {
  let output;
  for (let x = 0; x < garden.length; x++) {
    output += "<div class=row>";
    for (let y = 0; y < garden[x].length; y++) {
      if (garden[x][y]) {
        output += '<div class="col plant" id=g' + x + '-' + y + ">" + plantTitleHTML(garden[x][y]) + "</div>";
      } else {
        output += '<div class="col plant" id=g' + x + '-' + y + "></div>";
      }
    }
    output+="</div>"
  }
  return output;
}

function plantTitleHTML(plant) {
  let plantNameRow = "<div class=row><div class=col-sm-12>" + plant.name + "</div></div>";
  let wateringCounterDiv = '<div class=col-sm-4>' + plant.wateringCounter + '</div>';
  let currentLevelDiv = '<div class=col-sm-4>' + maturityStageEmoji(plant) + '</div>';
  let daysToGrowDiv = '<div class=col-sm-4>' + plant.lifeSpan + "</div>";
  let output = plantNameRow + "<div class=row>" + wateringCounterDiv + currentLevelDiv + daysToGrowDiv + "</div>"
  return output;
}

function maturityStageEmoji(plant) {
  let maturityImage = {
    1: "🌰",
    2: "🌱",
    3: "🌾",
    4: {
      tomato: "🍅",
      watermelon: "🍉",
      eggplant: "🍆",
      carrot: "🥕",
      sunflower: "🌻",
      catchall: "🌴"
    },
    5: "☠️",
    weed: "🌵",
    error: "❌"
  };
  let returnStatement = '';
  console.log("emoji check", plant, Object.keys(maturityImage));
  if (plant.type === 'plant') {
    if (Object.keys(maturityImage).includes(String(plant.maturity))) {
      console.log("In keys");
      if (plant.maturity === 4) {
        if (Object.keys(maturityImage[4]).includes(plant.name)) {
          returnStatement = maturityImage[4][plant.name];
        } else {
          returnStatement = maturityImage[4]['catchall'];
        }
      } else {
        returnStatement = maturityImage[plant.maturity];
      }
    } else {
      returnStatement = maturityImage['error'];
    }
  } else if (plant.type === 'weed') {
    returnStatement = maturityImage['weed'];
  } else {
    returnStatement = maturityImage['error'];
  }
  return returnStatement;
}
