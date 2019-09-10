// display Basket options/actions
  // gold amount
  // seeds and qty
  // harvested plants -> actions: dry / sell

  export function displayBasket(basketObj, emojiObj){
    const basketHtml = `
      <div id="basket-group">
        <img id="bskt" alt="A picture of a basket">
        <div id=basket-info>
          <p><span class="prop">Gold:</span> ${basketObj.gold}</p>
          <p>
            <span class="prop">Seeds:</span>
            <ul>
              ${displayObjPropAndCount(basketObj.seeds)}
            </ul>
          </p>
          <p>
            <span class="prop">Harvested Plants:</span>
            <ul>
              ${modifyMaturePlantsHtml(basketObj.maturePlants, emojiObj)}
            </ul>
          </p>
          <p>
            <span class="prop">Tools:</span>
            <ul>
              ${displayTools(basketObj.tools)}
            </ul>
          </p>
        </div>
        <div id="basket-btns">
          <button id="sell" type="button">Sell Plant</button>
          <button id="dry" type="button">Dry For Seeds</button>
        </div>
      </div>
    `;
    return basketHtml;
  }

  function modifyMaturePlantsHtml(maturePlantsArr, emojiObj){
    let plainHtml = displayObjPropAndCount(condenseMaturePlants(maturePlantsArr));
    Object.keys(emojiObj).forEach(function(emojiName){
      plainHtml = plainHtml.replace(emojiName, emojiObj[emojiName]);
      const regex = /(class="subprop")/g;
      plainHtml = plainHtml.replace(regex, `id="harvest-${emojiName}"`);
    });
    return plainHtml;
  }

  function displayObjPropAndCount(obj){
    let listHtml = "";
    Object.keys(obj).forEach(function(objProp){
      listHtml += `<li><span class="subprop">${objProp}:</span> ${obj[objProp]}</li>`;
    });
    return listHtml;
  }

  function displayTools(toolsArray){
    let toolHtml = "";
    toolsArray.forEach(function(tool){
      toolHtml += `<li>${tool}</li>`;
    });
    return toolHtml;
  }

  function condenseMaturePlants(maturePlantsArray){
    let maturePlantsObj = {};
    maturePlantsArray.forEach(function(pickedPlant){
      if(Object.keys(maturePlantsObj).includes(pickedPlant.name)){
        maturePlantsObj[pickedPlant.name]++;
      } else {
        maturePlantsObj[pickedPlant.name] = 1;
      }
    });

    return maturePlantsObj;
  }
