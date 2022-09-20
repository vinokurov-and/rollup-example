(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class Test {
    static testStatic = "testStatic";

    testFunc() {
      return "testFunc";
    }
  }

  const instance = new Test();

  console.log(instance);

}));
