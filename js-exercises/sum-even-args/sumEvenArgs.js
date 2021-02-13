

function sumEvenArgs(){
  // store arguments into an array. Using slice/call combo
  var arr = [].slice.call(arguments);
  return arr.reduce(function(accumulator, nextVal) {
      if(nextVal % 2 === 0) return accumulator + nextVal;
      // if not event, then returning accumulator (0 as first val from reduce 2nd param);
      return accumulator;
  }, 0);
}

export { sumEvenArgs };
