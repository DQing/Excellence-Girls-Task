'use strict';

function double_to_one(collection) {
  var oneArray = [];
  collection.forEach(function (element) {
    if (Array.isArray(element)) {
      element.forEach(function (ele) {
        if (isExist(ele, oneArray)) {
          oneArray.push(ele);
        }
      });
    }
    else if (isExist(element, oneArray)) {
      oneArray.push(element);
    }
  });

  return oneArray;
}

function isExist(ele, oneArray) {
  if (oneArray.indexOf(ele) === -1) {

    return true;
  }
}
module.exports = double_to_one;
