(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=a(135),c=a(139);a(224);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement(c.Section,{className:"has-background-light"},r.a.createElement("h1",{className:"title center"},t.frontmatter.title),r.a.createElement("div",{className:"container has-background-white border"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))))};var o="861893041"},133:function(e,t,a){var n;e.exports=(n=a(137))&&n.default||n},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(132),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(133),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},135:function(e,t,a){"use strict";var n=a(136),r=a(0),i=a.n(r),c=a(134),o=(a(138),a(140)),u=(a(139),a(141)),l={sectionClassName:"section",anchors:["one"],scrollBar:!1,arrowNavigation:!0,navigation:!1};t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"1126727397",render:function(e){return i.a.createElement("body",null,i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,e.site.siteMetadata.title),i.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description})),i.a.createElement("div",null,i.a.createElement(u.SectionsContainer,l,i.a.createElement(u.Section,{id:"slide"},i.a.createElement("div",{className:"center"},i.a.createElement("h1",{className:"has-text-white title title_position"},"LGY'S blog - by GATSBY")))),t))},data:n})}},136:function(e){e.exports={data:{site:{siteMetadata:{title:"beibei-blog",description:"李贝贝的小博客"}}}}},137:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(46),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},138:function(e,t,a){},224:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-639091e6a795cf048021.js.map