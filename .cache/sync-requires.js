// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-posts-js": preferDefault(require("/Users/lgy/gatsby_test/blog_gatsby/src/templates/posts.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/lgy/gatsby_test/blog_gatsby/src/templates/blog-post.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/lgy/gatsby_test/blog_gatsby/src/pages/about.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/lgy/gatsby_test/blog_gatsby/src/pages/my-files.js"))
}

