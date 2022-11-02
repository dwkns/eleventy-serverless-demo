const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy');
const { logToConsole } = require('dwkns-eleventy-plugins')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'preview', // The serverless function name from your permalink object
    functionsDir: './netlify/functions/',
  });

  eleventyConfig.addPlugin(logToConsole, {
    logToHtml: true,
    logToConsole: false,
    colorizeConsole: false,
    escapeHTML: true,
  });

  
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
