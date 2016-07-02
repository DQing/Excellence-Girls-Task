'use strict';

function double_to_one(collection) {

  var oneArray=[];
  collection.forEach(function (element) {

    if (Array.isArray(element)){
        element.forEach(function (ele) {
          oneArray.push(ele);
        });
    }
    else {
      oneArray.push(element);
    }
  });
  return oneArray;
}

module.exports = double_to_one;
