"use strict";(self.webpackChunkkeshavlingala_migrated=self.webpackChunkkeshavlingala_migrated||[]).push([[691],{8127:function(e,A,t){t.r(A),t.d(A,{Head:function(){return x},default:function(){return w}});var a=t(8453),n=t(6540);function i(e){const A=Object.assign({p:"p",h2:"h2",span:"span",ol:"ol",li:"li",pre:"pre",code:"code"},(0,a.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(A.p,null,"Simple Python GUI using PyQt5 and Qt-Material to analyze sorting algorithms."),"\n",n.createElement(A.h2,null,"Screenshots"),"\n",n.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="margin: 0 0 1.45rem; text-align: center;">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 132%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEBgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABWZpk0YgPJm1hERcT/8QAHhAAAQQCAwEAAAAAAAAAAAAAAwABAgQRMxASExT/2gAIAQEAAQUCOYsS/QZVJSmGxvVLRYdvfLKlowy6tx//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAABBAMBAAAAAAAAAAAAAAABAAIQETFxgTP/2gAIAQEABj8CcA81a9CrcbNp+46n7jqwFgR//8QAHBABAAICAwEAAAAAAAAAAAAAAQARECFRkbHx/9oACAEBAAE/IQNhQMBaNY24mp7oC03LwM90XbeifGgAUFT/2gAMAwEAAgADAAAAEEfC/P/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECH/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPxCFP//EAB8QAQACAQMFAAAAAAAAAAAAAAEAETEhQWFRkbHB8f/aAAgBAQABPxBzTQ1oUQDHZITos4IrPl4Ig3mKYUzZrfBFnsjsJNQkuVE+dlaQ6BU//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/65c7bd87f807742335af4813ce5b9aa4/ba381/screenshot.webp 200w,\n/static/65c7bd87f807742335af4813ce5b9aa4/7f61c/screenshot.webp 400w,\n/static/65c7bd87f807742335af4813ce5b9aa4/d00b9/screenshot.webp 800w,\n/static/65c7bd87f807742335af4813ce5b9aa4/92f8c/screenshot.webp 1200w,\n/static/65c7bd87f807742335af4813ce5b9aa4/52f78/screenshot.webp 1211w"\n              sizes="(max-width: 800px) 100vw, 800px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/65c7bd87f807742335af4813ce5b9aa4/e07e9/screenshot.jpg 200w,\n/static/65c7bd87f807742335af4813ce5b9aa4/066f9/screenshot.jpg 400w,\n/static/65c7bd87f807742335af4813ce5b9aa4/4b190/screenshot.jpg 800w,\n/static/65c7bd87f807742335af4813ce5b9aa4/e5166/screenshot.jpg 1200w,\n/static/65c7bd87f807742335af4813ce5b9aa4/9c7c2/screenshot.jpg 1211w"\n            sizes="(max-width: 800px) 100vw, 800px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/65c7bd87f807742335af4813ce5b9aa4/4b190/screenshot.jpg"\n            alt="Screenshot 1"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Screenshot 1</figcaption>\n  </figure>'}}),"\n",n.createElement("br"),"\n",n.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="margin: 0 0 1.45rem; text-align: center;">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 142.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAH12mZxidrwWtGAuf/EAB0QAAEDBQEAAAAAAAAAAAAAAAEAAgMEERIUMSH/2gAIAQEAAQUCAbazVJ0cUnQ0LBqk8cKhbKkqDn//xAAXEQEAAwAAAAAAAAAAAAAAAAAAEBES/9oACAEDAQE/AY0t/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgIDAAAAAAAAAAAAAAAAADEyoRAgIf/aAAgBAQAGPwJCOaIWI2Rsif/EAB4QAAICAgIDAAAAAAAAAAAAAAABESEQMXGRUWGB/9oACAEBAAE/IWNPR6vQkLBKvBQTI1eB3eAVIS1BEuOCeoi+n//aAAwDAQACAAMAAAAQNzJx/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERIVH/2gAIAQMBAT8QVl1dn//EABYRAQEBAAAAAAAAAAAAAAAAAAAREP/aAAgBAgEBPxDIj//EAB4QAQACAQUBAQAAAAAAAAAAAAEAESExQVFx8JFh/9oACAEBAAE/EDA6ZeEC0+aEIHYDlmA1sQKoGVYvVmmDg3Z+H6wQaGAdsElso8xK8/eo6ogAtLP/2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/2627f75a6f881f6daaca257e9ff06b27/ba381/themeselection.webp 200w,\n/static/2627f75a6f881f6daaca257e9ff06b27/7f61c/themeselection.webp 400w,\n/static/2627f75a6f881f6daaca257e9ff06b27/d00b9/themeselection.webp 800w,\n/static/2627f75a6f881f6daaca257e9ff06b27/e6b69/themeselection.webp 1122w"\n              sizes="(max-width: 800px) 100vw, 800px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/2627f75a6f881f6daaca257e9ff06b27/e07e9/themeselection.jpg 200w,\n/static/2627f75a6f881f6daaca257e9ff06b27/066f9/themeselection.jpg 400w,\n/static/2627f75a6f881f6daaca257e9ff06b27/4b190/themeselection.jpg 800w,\n/static/2627f75a6f881f6daaca257e9ff06b27/b3430/themeselection.jpg 1122w"\n            sizes="(max-width: 800px) 100vw, 800px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/2627f75a6f881f6daaca257e9ff06b27/4b190/themeselection.jpg"\n            alt="Screenshot 3"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Screenshot 3</figcaption>\n  </figure>'}}),"\n",n.createElement("br"),"\n",n.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="margin: 0 0 1.45rem; text-align: center;">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACZklEQVR42mVTXWsTQRTtP9JQPyKiVWtfjPogVSMoRgVB1Kj1QaSPkqZP+tIfoEI1KEitiRh9MNo236ltahVFMb5Zk5BsNvsxu7M53plszKa9cJjZuXPPvffsnaHV8hoWF3LIZIq0ZvHxQ1oivZRHIVtCLlNAms6L+WV8Kq1iZXmVzvLILObIX0CeUFpZx88fFYSvhTEEMtu2xQLHcWBZFhhjct82GRh9c87lmbBOp0NnTMKiOL2t4vvb19IXmZrqEhqGIS8KeK3NOHRmy4SMWTJJ705vZYqCuRPHAE1DZHq6S9jL7jURoFscJsEiv0YBm/0ytqVgPnicqtL7hKLNzWbbvEtIK5cVssEO3H2t8gtz4wHA9BD2NPRmbqgaVUd6cgcKtTVQoXvHIv1engwgNuoHZUUkGt1K2LtvEpHUlypsqSpM09yS1NLaeHFkFLGDuwcJvS07XOhGLRKRJBRtuxq26nVoVJWla8jP3Edu5gGej+1F7JAfrLqBe5FIl1Bta3I0ROa6oqLWVGHzLqGqG9BpfAylicS5cSSvhPDn6xc8OzyGx77tiI3swOw+H1KXz2Jy4laXsNZootnWoZkWbMcdC7dik8gEaav6F7EDI3jo8+Hp/p14smcYs34i2zWMR75tSBwN4G7YHWzTNGBQ4Ea9AUZaiT/ag9COkQRKrYrk1UtIhE4jfv4UEheCiF88g3goiHmqPH0njMnbE+4cUpDjcAnRutCRk8hiXLht/ddW+mi4B9F/RVHxU1LpLF4l3+HN+xSWCiUs5Aoolj+jRCjSO+/vPVhbR8mD/EoZ3yq/cf3GTfwDIs+e0mB/kEUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/de93e1f884be9e473e5b48faa316829a/ba381/analysescreen.webp 200w,\n/static/de93e1f884be9e473e5b48faa316829a/7f61c/analysescreen.webp 400w,\n/static/de93e1f884be9e473e5b48faa316829a/d00b9/analysescreen.webp 800w,\n/static/de93e1f884be9e473e5b48faa316829a/92f8c/analysescreen.webp 1200w,\n/static/de93e1f884be9e473e5b48faa316829a/fad48/analysescreen.webp 1600w,\n/static/de93e1f884be9e473e5b48faa316829a/d3d72/analysescreen.webp 2880w"\n              sizes="(max-width: 800px) 100vw, 800px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/de93e1f884be9e473e5b48faa316829a/772e8/analysescreen.png 200w,\n/static/de93e1f884be9e473e5b48faa316829a/e17e5/analysescreen.png 400w,\n/static/de93e1f884be9e473e5b48faa316829a/5a190/analysescreen.png 800w,\n/static/de93e1f884be9e473e5b48faa316829a/c1b63/analysescreen.png 1200w,\n/static/de93e1f884be9e473e5b48faa316829a/29007/analysescreen.png 1600w,\n/static/de93e1f884be9e473e5b48faa316829a/d9ed5/analysescreen.png 2880w"\n            sizes="(max-width: 800px) 100vw, 800px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/de93e1f884be9e473e5b48faa316829a/5a190/analysescreen.png"\n            alt="Screenshot 2"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Screenshot 2</figcaption>\n  </figure>'}}),"\n",n.createElement(A.h2,null,"Demo Video"),"\n",n.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/8yOZqOd-Utw?si=1lYNCXSIagH-FSZv",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),"\n",n.createElement(A.h2,null,"Instructions to run the Application ( MacOS )"),"\n",n.createElement(A.ol,null,"\n",n.createElement(A.li,null,"Clone the repository using this URL"),"\n"),"\n",n.createElement(A.pre,null,n.createElement(A.code,{className:"language-bash"},"git clone https://github.com/keshavlingala/AlgoAnalyzerTool\ncd AlgoAnalyzerTool\nchmod +x setup app # This will give execute permission to setup and app files\n./setup # This create a virtual environment and install all the dependencies\n./app # This will run the application\n")))}var s=function(e){void 0===e&&(e={});const{wrapper:A}=Object.assign({},(0,a.RP)(),e.components);return A?n.createElement(A,e,n.createElement(i,e)):i(e)},o=t(644),r=t(6447),c=t(1484),l=t(9077),g=t(4794),p=t(5363),f=t(3e3),m=t(4443),b=t(7437);const d=(0,o.A)("div",{target:"env3s041"})({name:"q8kd0o",styles:"display:flex;flex-direction:row;margin-bottom:1em;margin-top:1em"}),u=(0,o.A)(g.Link,{target:"env3s040"})("box-shadow:none;background-color:inherit;color:inherit;border-radius:4px;padding:5px;text-align:center;cursor:pointer;text-decoration:none;",(e=>{let{position:A}=e;return"left"===A&&"margin-right: auto; border-left: 1px solid;"})," ",(e=>{let{position:A}=e;return"right"===A&&"margin-left: auto; border-right: 1px solid;"})," &:focus,&:hover{outline:none;background-color:#1b1b1b;border-bottom:1px solid;}&:disabled{background-color:#1b1b1b;color:#545454;box-shadow:none;outline:none;cursor:not-allowed;}");var h={name:"1vllrt6",styles:"justify-content:flex-start;margin-top:40px;li{margin-right:30px;}"};const E=e=>{const{node:A,next:t,previous:i}=e.pageContext;return(0,b.Y)(n.Fragment,null,(0,b.Y)(r.A,null,(0,b.Y)(c.m,null,(0,b.Y)(d,null,i&&(0,b.Y)(u,{position:"left",to:"/"+i.frontmatter.slug},"Prev: ",i.frontmatter.title.length>30?i.frontmatter.title.slice(0,30)+"...":i.frontmatter.title),t&&(0,b.Y)(u,{position:"right",to:"/"+t.frontmatter.slug},"Next: ",t.frontmatter.title.length>30?t.frontmatter.title.slice(0,30)+"...":t.frontmatter.title)),(0,b.Y)("h1",null,A.frontmatter.title),(0,b.Y)("h3",null,"Technologies Used"),(0,b.Y)(m.C,null,A.frontmatter.techs&&p.P.filter((e=>A.frontmatter.techs.includes(e.name))).map((e=>(0,b.Y)(f.t,{tooltip:e.name,key:e.name},(0,b.Y)("img",{width:"40px",height:"40px",src:e.icon,alt:e.name}))))),(0,b.Y)("h3",null,"Links"),(0,b.Y)(f.UL,{css:h},A.frontmatter.code&&(0,b.Y)(f.t,{tooltip:"Open in Github",link:A.frontmatter.code},(0,b.Y)("i",{className:"fa fa-github fa-2x"}),"Github"),A.frontmatter.code2&&(0,b.Y)(f.t,{tooltip:"Open in Github",link:A.frontmatter.code2},(0,b.Y)("i",{className:"fa fa-github fa-2x"}),"Github"),A.frontmatter.demo&&(0,b.Y)(f.t,{tooltip:"Live Demo",link:A.frontmatter.demo},(0,b.Y)("i",{className:"fa fa-link fa-2x"}),"Demo")),(0,b.Y)("hr",null),(0,b.Y)(a.xA,null,e.children))))};function w(e){return n.createElement(E,e,n.createElement(s,e))}const x=e=>{let{pageContext:A}=e;const{node:t}=A;return(0,b.Y)(l.k,{title:t.frontmatter.title,description:t.frontmatter.description,image:t.frontmatter.featuredImage.publicURL,pathname:t.frontmatter.slug})}},8453:function(e,A,t){t.d(A,{RP:function(){return i},xA:function(){return o}});var a=t(6540);const n=a.createContext({});function i(e){const A=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(A):{...A,...e}),[A,e])}const s={};function o({components:e,children:A,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:i(e),a.createElement(n.Provider,{value:o},A)}}}]);
//# sourceMappingURL=component---src-templates-post-layout-tsx-content-file-path-src-content-posts-algoanalyser-index-mdx-8c62076607db5d1ef263.js.map