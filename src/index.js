class TestTreeShaking {}

class Test {
  static testStatic = "testStatic";

  testFunc() {
    return "testFunc";
  }
}

const instance = new Test();

console.log(instance);
