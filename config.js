export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle-iife.js",
      format: "iife"
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle-cjs.js",
      format: "cjs"
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle-umd.js",
      format: "umd"
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle-amd.js",
      format: "amd"
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle-ejs.js",
      format: "es"
    }
  }
];
