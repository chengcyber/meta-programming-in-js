/**
 * MetaObject
 * implemente a method missing member function, will be called if some funciton doesn't exist.
 */
class MetaObject extends Object {

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
 * TestObj
 * only one method inside, simply logout a greeting message.
 */
class TestObj {
  greeting(s) {
    console.log('Hello ' + s);
  }
}

var a = new TestObj();

// normal call
a.greeting('World'); /* Hello World */
a.greetings('World'); /* raise a error, funciton doesn't exist */

class TestObjWithMeta extends MetaObject {
  greeting(s) {
    console.log('Hello ' + s);
  }
}

var a = new TestObjWithMeta();

// send method
a.send('greeting', 'World'); /* Hello World */
a.send('greetings', 'World'); /* methodMissing called! */