define(['require'], (function (require) { 'use strict';

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

  new Promise(function (resolve, reject) { require(['./Lazy-95404a1b'], resolve, reject); }).then(({ defaut: lazyFunc }) => {
    console.log(lazyFunc());
  });

}));
