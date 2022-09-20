import { Page } from "./components/Page";

class TreeShaking {}

class Test {
  static testStatic = "testStatic";

  testFunc() {
    return "testFunc";
  }
}

console.log("Класс:", new Test());

console.log("Импорт:", Page());