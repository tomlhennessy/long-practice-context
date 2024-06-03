function changeContext(func, obj) {
  return func.call(obj); // invoke func with obj as its context using call method
}

// Manual testing
class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
