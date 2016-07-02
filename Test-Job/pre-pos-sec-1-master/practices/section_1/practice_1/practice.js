function collect_same_elements(collection_a, collection_b) {

  var newArray = [];

  collection_a.forEach(function(element){

    if (isExisted(element, collection_b)) {
      newArray.push(element);
    }
  });
  return newArray;
}


function isExisted(item, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
      return true;
    }
  }

  return false;
}


module.exports = collect_same_elements;

