
const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "preview", 
    functionsDir: "./netlify/functions/",
  });

  return {
    dir: {
      input: 'src',
    },
  };
};