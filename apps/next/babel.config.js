module.exports = {
  presets: ["next/babel"],
  plugins: [
     "@babel/plugin-syntax-flow",
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "nativewind",
      },
    ],
  ],
};
