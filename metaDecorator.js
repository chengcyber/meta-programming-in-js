/* Decorator Pattern */
var MetaDecorator = function(obj) {
  obj.send = function(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (!this[method]) {
      return this.methodMissing.apply(this, args);
    }

    this[method].apply(this, args);
  }

  obj.methodMissing = function() {
    console.log(arguments);
  }

  return obj
}

var TestObj = function() {
  this.name = 'TestObj';
}

/* add a variantion to normal object, make it more powerful */
var a = MetaDecorator(new TestObj);

a.send('greeting', 'decorator');
