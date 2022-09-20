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

import('./Lazy-009e41d9.js').then(({ defaut: lazyFunc }) => {
  console.log(lazyFunc());
});
