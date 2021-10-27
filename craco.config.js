const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  // ...
  webpack: {
    alias: {
      "@api": resolvePath("./src/api"),
      "@components": resolvePath("./src/components"),
      "@configs": resolvePath("./src/configs"),
      "@consts": resolvePath("./src/consts"),
      "@features": resolvePath("./src/features"),
      "@assets": resolvePath("./src/assets"),
      "@tools": resolvePath("./src/tools"),
    },
  },
  // ...
};
