parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HU2o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showSearchBar=s;var e=document.getElementById("search-inputs"),t=document.getElementById("search-icon");function s(t){t.preventDefault(),"block"===e.style.display?e.style.display="none":e.style.display="block"}t.addEventListener("click",s);
},{}],"q6Tg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dropMenu=n;var e=document.getElementById("menu-icon"),t=document.getElementById("ul-menu");function n(e){e.preventDefault(),"block"===t.style.display?t.style.display="none":t.style.display="block"}e.addEventListener("click",n);
},{}],"wzuc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reset=o,exports.startSlide=s,exports.slideLeft=i,exports.slideRight=r;var e=document.querySelectorAll(".slide"),t=document.getElementById("arrow-right"),l=document.getElementById("arrow-left"),n=0;function o(){var t;for(t=0;t<e.length;t++)e[t].style.display="none"}function s(){o(),e[0].style.display="block"}function i(){o(),e[n-1].style.display="block",n--}function r(){o(),e[n+1].style.display="block",n++}l.addEventListener("click",function(){0===n&&(n=e.length),i()}),t.addEventListener("click",function(){n===e.length-1&&(n=-1),r()}),s();
},{}],"JUMU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetSlider=n,exports.startSlides=o,exports.slideLeftNews=s,exports.slideRightNews=i;var e=document.querySelectorAll(".news-carousel-container-box"),t=document.querySelector(".arrow-right-yellow"),l=document.querySelector(".arrow-left-yellow"),r=0;function n(){var t;for(t=0;t<e.length;t++)e[t].style.display="none"}function o(){n(),e[0].style.display="flex"}function s(){n(),e[r-1].style.display="flex",r--}function i(){n(),e[r+1].style.display="flex",r++}l.addEventListener("click",function(){0===r&&(r=e.length),s()}),t.addEventListener("click",function(){r===e.length-1&&(r=-1),i()}),o();
},{}],"jemR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetEditorialSlider=o,exports.startEditorialSlides=r,exports.slideLeftEditorialNews=n,exports.slideRightEditorialNews=s;var e=document.querySelectorAll(".editorial-box"),t=document.querySelector(".arrow-right-editorial"),i=document.querySelector(".arrow-left-editorial"),l=0;function o(){var t;for(t=0;t<e.length;t++)e[t].style.display="none"}function r(){o(),e[0].style.display="block"}function n(){o(),e[l-1].style.display="block",l--}function s(){o(),e[l+1].style.display="block",l++}i.addEventListener("click",function(){0===l&&(l=e.length),n()}),t.addEventListener("click",function(){l===e.length-1&&(l=-1),s()}),r();
},{}],"WzUR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetLocalSlider=c,exports.startLocalSlides=r,exports.slideLeftLocalNews=s,exports.slideRightLocalNews=n;var e=document.querySelectorAll(".local-box"),l=document.querySelector(".arrow-right-local"),t=document.querySelector(".arrow-left-local"),o=0;function c(){var l;for(l=0;l<e.length;l++)e[l].style.display="none"}function r(){c(),e[0].style.display="block"}function s(){c(),e[o-1].style.display="block",o--}function n(){c(),e[o+1].style.display="block",o++}t.addEventListener("click",function(){0===o&&(o=locaalSlides.length),s()}),l.addEventListener("click",function(){o===e.length-1&&(o=-1),n()}),r();
},{}],"qYAE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetCarousel=s,exports.startCarouselSlide=r,exports.slideLeftCarousel=n,exports.slideRightCarousel=c;var e=document.querySelectorAll(".carousel-2-slide"),t=document.getElementById("carousel-2-arrow-right"),l=document.getElementById("carousel-2-arrow-left"),o=0;function s(){var t;for(t=0;t<e.length;t++)e[t].style.display="none"}function r(){s(),e[0].style.display="block"}function n(){s(),e[o-1].style.display="block",o--}function c(){s(),e[o+1].style.display="block",o++}l.addEventListener("click",function(){0===o&&(o=e.length),n()}),t.addEventListener("click",function(){o===e.length-1&&(o=-1),c()}),r();
},{}],"mCfS":[function(require,module,exports) {
"use strict";function e(){fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0").then(function(e){return e.json()}).then(function(e){var t=document.querySelectorAll(".news-heading"),r=document.querySelectorAll(".news-image"),n=document.querySelectorAll(".news-date"),o=document.querySelectorAll(".news-author"),l=document.querySelectorAll(".news-description");console.log(e);for(var c=0;c<t.length;c++)t[c].innerHTML=e.articles[c].title;for(var s=0;s<r.length;s++)r[s].src=e.articles[s].urlToImage;for(var a=0;a<n.length;a++)n[a].innerHTML=e.articles[a].publishedAt;for(var i=0;i<o.length;i++)o[i].innerHTML=e.articles[i].author;for(var u=0;u<l.length;u++)l[u].innerHTML=e.articles[u].content})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNews=e;
},{}],"C3d5":[function(require,module,exports) {
"use strict";function e(){fetch("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0").then(function(e){return e.json()}).then(function(e){var t=document.querySelectorAll(".business-heading"),n=document.querySelectorAll(".business-image"),s=document.querySelectorAll(".business-date");console.log(e);for(var r=0;r<t.length;r++)t[r].innerHTML=e.articles[r].title;for(var o=0;o<n.length;o++)n[o].src=e.articles[o].urlToImage;for(var l=0;l<s.length;l++)s[l].innerHTML=e.articles[l].publishedAt})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBusinessNews=e;
},{}],"e5N2":[function(require,module,exports) {
"use strict";function e(){fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3ab8892677804ed0bfdd40ef9adae2a0").then(function(e){return e.json()}).then(function(e){var t=document.querySelectorAll(".sport-heading"),r=document.querySelectorAll(".sport-image"),o=document.querySelectorAll(".sport-date");console.log(e);for(var n=0;n<t.length;n++)t[n].innerHTML=e.articles[n].title;for(var l=0;l<r.length;l++)r[l].src=e.articles[l].urlToImage;for(var s=0;s<o.length;s++)o[s].innerHTML=e.articles[s].publishedAt})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSportNews=e;
},{}],"YSWB":[function(require,module,exports) {
"use strict";function e(){fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3ab8892677804ed0bfdd40ef9adae2a0").then(function(e){return e.json()}).then(function(e){for(var t=document.querySelectorAll(".editorial-heading"),r=document.querySelectorAll(".editorial-image"),i=document.querySelectorAll(".editorial-date"),l=0;l<t.length;l++)t[l].innerHTML=e.articles[l].title;for(var n=0;n<r.length;n++)r[n].src=e.articles[n].urlToImage;for(var o=0;o<i.length;o++)i[o].innerHTML=e.articles[o].publishedAt})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getEditorialNews=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./search"),r=require("./dropdown-menu"),i=require("./slider"),s=require("./news-slider"),u=require("./editorial-news-slider"),n=require("./local-news-slider"),t=require("./thumbnail-slider"),w=require("./news"),l=require("./business-news"),q=require("./sport-news"),d=require("./editorial-news");(0,w.getNews)(),(0,l.getBusinessNews)(),(0,q.getSportNews)(),(0,d.getEditorialNews)();
},{"./search":"HU2o","./dropdown-menu":"q6Tg","./slider":"wzuc","./news-slider":"JUMU","./editorial-news-slider":"jemR","./local-news-slider":"WzUR","./thumbnail-slider":"qYAE","./news":"mCfS","./business-news":"C3d5","./sport-news":"e5N2","./editorial-news":"YSWB"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.c1821f8f.js.map