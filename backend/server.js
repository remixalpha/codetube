require("@babel/register")({
    presets: ["@babel/preset-env"],
    sourceMaps: true,
  });
  // require("./server/helpers/seeder.js");
  require("@babel/polyfill");
  require("./app.js");