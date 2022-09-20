(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const Page = () => {
    return "Тестовая страница";
  };

  class Test {
    static testStatic = "testStatic";

    testFunc() {
      return "testFunc";
    }
  }

  console.log("Класс:", new Test());

  console.log("Импорт:", Page());

}));
