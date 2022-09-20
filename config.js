export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/iife/bundle-iife.js",
      format: "iife"
    }
  },
  {
    input: "src/index.lazy.js",
    output: {
      dir: 'dist/cjs',
      format: "cjs"
    }
  },
  {
    input: "src/index.js",
    output: {
      dir: 'dist/umd',
      format: "umd"
    }
  },
  {
    input: "src/index.lazy.js",
    output: {
      dir: 'dist/amd',
      format: "amd"
    }
  },
  {
    input: "src/index.lazy.js",
    output: {
      dir: 'dist/es',
      format: "es"
    }
  }
];
