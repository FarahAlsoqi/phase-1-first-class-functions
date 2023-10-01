
function receivesAFunction(callback) {
    callback();
  }


  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello World");
    }
    
    return namedFunction;
  }


  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hi I am here.");
    };
  }
  
