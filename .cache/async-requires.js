// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-posts-js": () => import("/Users/lgy/gatsby_test/blog_gatsby/src/templates/posts.js" /* webpackChunkName: "component---src-templates-posts-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/lgy/gatsby_test/blog_gatsby/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-about-js": () => import("/Users/lgy/gatsby_test/blog_gatsby/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-my-files-js": () => import("/Users/lgy/gatsby_test/blog_gatsby/src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */)
}

exports.data = () => import("/Users/lgy/gatsby_test/blog_gatsby/.cache/data.json")

