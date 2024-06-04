function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2)
  // invoke function with obj1 as context and obj2 as argument
}

// Manual testing
const cat = {
  name: "Breakfast"
}

const mouse = {
  name: "Jerry"
}

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));
// "I'm Breakfast. Nice to meet you Jerry"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
