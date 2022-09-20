import { Page } from "./components/Page";

class Test {
  static testStatic = "testStatic";

  testFunc() {
    return "testFunc";
  }
}

const instance = new Test();

console.log(Page(), instance);

import("./components/Lazy").then(({ defaut: lazyFunc }) => {
  console.log(lazyFunc());
});
