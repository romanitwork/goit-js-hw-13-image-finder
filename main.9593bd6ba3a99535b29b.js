(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("JBxO"),n("FdtR");var r="15301745-a7ab044afd83516da20e75026";var a=n("r9GR"),o=n.n(a),s=document.querySelector(".container"),i=document.querySelector(".load-more"),l=document.querySelector("input"),c=document.querySelector("#search-form"),u="star",m=0;function p(e){var t=o()(e);s.insertAdjacentHTML("beforeend",t)}function d(){!function(e,t,n){fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+e+"&page="+t+"&per_page=12&key="+r).then((function(e){return e.json()})).then((function(e){return n(e)})).then((function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log(e)}))}(l.value,++m,p)}i.addEventListener("click",d),c.addEventListener("keypress",(function(){"Enter"===event.key&&(event.preventDefault(),s.innerHTML="",d())}));var g={};localStorage.getItem(u)&&(g=JSON.parse(localStorage.getItem(u))),s.addEventListener("click",(function(e){if(console.log(e),"favorite-item"===e.target.className){var t=e.target.parentNode.querySelector(".photo-item").src;console.log(g[t]),g[t]=!0!==g[t],console.log(g[t]),!0===g[t]?e.target.setAttribute("src","./images/star-gold.png"):e.target.setAttribute("src","./images/star-empty.png"),localStorage.setItem(u,JSON.stringify(g)),console.log(g[t])}}))},r9GR:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o=e.lambda,s=e.escapeExpression;return'  <div class="card-wrapper">\r\n    <img class="favorite-item" src="../images/star-empty.png" alt="">\r\n  <img class = "photo-item" src="'+s(o(null!=t?t.webformatURL:t,t))+'" alt="'+s(o(null!=t?t.type:t,t))+'" />\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n      '+s(o(null!=t?t.likes:t,t))+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">visibility</i>\r\n      '+s(o(null!=t?t.views:t,t))+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+s(o(null!=t?t.comments:t,t))+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">cloud_download</i>\r\n      '+s(o(null!=t?t.downloads:t,t))+"\r\n    </p>\r\n  </div>\r\n  </div>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return'<div class="photo-card">\r\n'+(null!=(o=n.each.call(null!=t?t:e.nullContext||{},null!=t?t.hits:t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:2},end:{line:25,column:11}}}))?o:"")+"</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9593bd6ba3a99535b29b.js.map