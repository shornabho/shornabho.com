const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  const isProd = process.env.ELEVENTY_ENV === "production";

  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("index.css");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("netlify.toml");

  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toISOString();
  });

  eleventyConfig.addCollection("posts", (api) => {
    return api
      .getFilteredByGlob("posts/**/*.md")
      .filter((item) => !(isProd && item.data.draft))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    api
      .getFilteredByGlob("posts/**/*.md")
      .filter((item) => !(isProd && item.data.draft))
      .forEach((item) => {
        (item.data.tags || [])
          .filter((t) => t !== "posts")
          .forEach((t) => tags.add(t));
      });
    return [...tags].sort();
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "11ty.js"],
  };
};
