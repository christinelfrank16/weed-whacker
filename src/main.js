import $ from 'jquery';
import basketImg from './images/basket';
// import {plantArraytoHTML} from './src/views/garden-view';
import {displayBasket} from './views/basket-view';
import emoji from 'node-emoji';
import {Plant} from './models/plant.js';
import {Weed} from './models/weed.js';
import {Basket} from './models/basket.js';
import {Store} from './models/store.js';
import {Garden} from './models/garden.js';
import {Game} from './models/weed-whacker.js';

const emojis = {
  tomato: "🍅",
  watermelon: "🍉",
  carrot: "🥕",
  eggplant: "🍆",
  sunflower: "🌻",
  pumpkin: "🎃",
  zucchini: "🥒",
  truffles: "🍄",
  saffron: "🎗",
  squareWatermelons: "💹"
};

let garden = new Garden(5,5);
const plant1 = new Plant('tomato', 3, ['fertilizer']);
const weed1 = new Weed('dandelion', 5,['lawn mower']);
const weed2 = new Weed('blackberry bush',5,['goat']);
const plant2 = new Plant('carrot',0,['fertilizer']);
const deadPlant = new Plant('tomato',5,[]);
garden.garden[0][0]=plant1;
garden.garden[0][3]=plant2;
garden.garden[2][2]=weed1;
garden.garden[3][4]=deadPlant;
const basketObj = new Basket();
basketObj.maturePlants.push(plant1);

$(document).ready(function(){
  $('#bskt').attr("src", basketImg);
  // $('#garden').html(plantArraytoHTML(garden));
  $('#basket').html(displayBasket(basketObj, emojis));
  // $('body').html("<img src='https://media.giphy.com/media/xT5LMWxAjHP2kHrNN6/giphy.gif'>");
});


// updateGardenDisplay
    // plant icon
    // stats: water count, maturity level, life span to next stage

    // separate actions: water all plant, pull all dead plants, pull all weeds with selected tool, plant all of single type seeds, harvest all plants of selected type


// display Basket options/actions
  // gold amount
  // seeds and qty
  // harvested plants -> actions: dry / sell
  // purchased tools

// display Store options/actions
  // seeds and cost -> action: buy
  // tools and cost -> action: buy

// display day
// display last action
// button to trigger next day
