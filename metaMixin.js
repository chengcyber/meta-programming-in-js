/* Mixin Pattern to achieve Meta programming */
var MetaMixin = function() {
  this.send = function(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (!this[method]) {
      return this.methodMissing.apply(this, args);
    }

    this[method].apply(this, args);
  }

  this.methodMissing = function() {
    console.log(arguments);
  }
}

var TestObj = function(name) {

  /* Import Mixin */
  MetaMixin.call(this);

  this.name = name;
}

var a = new TestObj();

a.send('greeting', 'hi'); /* logout arguments */


