'use strict';

const Page = () => {
  return "Тестовая страница";
};

class Test {
  static testStatic = "testStatic";

  testFunc() {
    return "testFunc";
  }
}

const instance = new Test();

console.log(Page(), instance);

Promise.resolve().then(function () { return require('./Lazy-c1919cd8.js'); }).then(({ defaut: lazyFunc }) => {
  console.log(lazyFunc());
});
