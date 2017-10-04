/* leverage ES 6 class */
/**
 * MetaClass
 * implemente a method missing member function, will be called if some funciton doesn't exist.
 */
class MetaClass extends Object {
  send(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (!this[method]) {
      return this.methodMissing.apply(this, args);
    }

    this[method].apply(this, args);
  }

  methodMissing() {
    console.log(arguments);
  }
}


/**
 * TestClass
 * only one method inside, simply logout a greeting message.
 */
class TestClass {
  greeting(s) {
    console.log('Hello ' + s);
  }
}

var a = new TestClass();

// normal call
a.greeting('World'); /* Hello World */
a.greetings('World'); /* raise a error, funciton doesn't exist */

class TestClassWithMeta extends MetaClass {
  greeting(s) {
    console.log('Hello ' + s);
  }
}

var a = new TestClassWithMeta();

// send method
a.send('greeting', 'World'); /* Hello World */
a.send('greetings', 'World'); /* methodMissing called! */
