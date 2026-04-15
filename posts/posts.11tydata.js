const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  permalink: (data) => {
    if (isProd && data.draft) return false;
    return `/blog/${data.page.fileSlug}/`;
  },
  eleventyComputed: {
    eleventyExcludeFromCollections: (data) => {
      return isProd && data.draft ? true : data.eleventyExcludeFromCollections;
    },
  },
};
