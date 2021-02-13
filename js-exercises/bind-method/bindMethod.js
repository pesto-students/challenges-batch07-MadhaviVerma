
function bind(fn, thisArg){
  var outerArgs = [].slice.call(arguments,2)
  return function(){
      var innerArgs = [].slice.call(arguments)
      var allArgs = outerArgs.concat(innerArgs)
      return fn.apply(thisArg, allArgs)
  }
}

export { bind };
