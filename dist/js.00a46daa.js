// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSearchBar = showSearchBar;
var searchInputs = document.getElementById('search-inputs');
var searchIcon = document.getElementById('search-icon');
searchIcon.addEventListener('click', showSearchBar);

function showSearchBar(e) {
  e.preventDefault();

  if (searchInputs.style.display === 'block') {
    searchInputs.style.display = 'none';
  } else {
    searchInputs.style.display = 'block';
  }
}
},{}],"js/dropdown-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropMenu = dropMenu;
var menuIcon = document.getElementById('menu-icon');
var menuUl = document.getElementById('ul-menu');
menuIcon.addEventListener('click', dropMenu);

function dropMenu(e) {
  e.preventDefault();

  if (menuUl.style.display === 'block') {
    menuUl.style.display = 'none';
  } else {
    menuUl.style.display = 'block';
  }
}
},{}],"js/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;
exports.startSlide = startSlide;
exports.slideLeft = slideLeft;
exports.slideRight = slideRight;
var slides = document.querySelectorAll('.slide');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var currentSlide = 0;

function reset() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  slides[0].style.display = 'block';
}

function slideLeft() {
  reset();
  slides[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRight() {
  reset();
  slides[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

arrowLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = slides.length;
  }

  slideLeft();
});
arrowRight.addEventListener('click', function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = -1;
  }

  slideRight();
});
startSlide();
},{}],"js/news-slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetSlider = resetSlider;
exports.startSlides = startSlides;
exports.slideLeftNews = slideLeftNews;
exports.slideRightNews = slideRightNews;
var slides = document.querySelectorAll('.news-carousel-container-box');
var arrowRight = document.querySelector('.arrow-right-yellow');
var arrowLeft = document.querySelector('.arrow-left-yellow');
var currentSlide = 0;

function resetSlider() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

function startSlides() {
  resetSlider();
  slides[0].style.display = 'flex';
}

function slideLeftNews() {
  resetSlider();
  slides[currentSlide - 1].style.display = 'flex';
  currentSlide--;
}

function slideRightNews() {
  resetSlider();
  slides[currentSlide + 1].style.display = 'flex';
  currentSlide++;
}

arrowLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = slides.length;
  }

  slideLeftNews();
});
arrowRight.addEventListener('click', function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = -1;
  }

  slideRightNews();
});
startSlides();
},{}],"js/editorial-news-slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetEditorialSlider = resetEditorialSlider;
exports.startEditorialSlides = startEditorialSlides;
exports.slideLeftEditorialNews = slideLeftEditorialNews;
exports.slideRightEditorialNews = slideRightEditorialNews;
var editorialSlides = document.querySelectorAll('.editorial-box');
var arrowEditorialRight = document.querySelector('.arrow-right-editorial');
var arrowEditorialLeft = document.querySelector('.arrow-left-editorial');
var currentSlide = 0;

function resetEditorialSlider() {
  var i;

  for (i = 0; i < editorialSlides.length; i++) {
    editorialSlides[i].style.display = 'none';
  }
}

function startEditorialSlides() {
  resetEditorialSlider();
  editorialSlides[0].style.display = 'block';
}

function slideLeftEditorialNews() {
  resetEditorialSlider();
  editorialSlides[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRightEditorialNews() {
  resetEditorialSlider();
  editorialSlides[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

arrowEditorialLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = editorialSlides.length;
  }

  slideLeftEditorialNews();
});
arrowEditorialRight.addEventListener('click', function () {
  if (currentSlide === editorialSlides.length - 1) {
    currentSlide = -1;
  }

  slideRightEditorialNews();
});
startEditorialSlides();
},{}],"js/local-news-slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetLocalSlider = resetLocalSlider;
exports.startLocalSlides = startLocalSlides;
exports.slideLeftLocalNews = slideLeftLocalNews;
exports.slideRightLocalNews = slideRightLocalNews;
var localSlides = document.querySelectorAll('.local-box');
var arrowLocalRight = document.querySelector('.arrow-right-local');
var arrowLocalLeft = document.querySelector('.arrow-left-local');
var currentSlide = 0;

function resetLocalSlider() {
  var i;

  for (i = 0; i < localSlides.length; i++) {
    localSlides[i].style.display = 'none';
  }
}

function startLocalSlides() {
  resetLocalSlider();
  localSlides[0].style.display = 'block';
}

function slideLeftLocalNews() {
  resetLocalSlider();
  localSlides[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRightLocalNews() {
  resetLocalSlider();
  localSlides[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

arrowLocalLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = locaalSlides.length;
  }

  slideLeftLocalNews();
});
arrowLocalRight.addEventListener('click', function () {
  if (currentSlide === localSlides.length - 1) {
    currentSlide = -1;
  }

  slideRightLocalNews();
});
startLocalSlides();
},{}],"js/thumbnail-slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCarousel = resetCarousel;
exports.startCarouselSlide = startCarouselSlide;
exports.slideLeftCarousel = slideLeftCarousel;
exports.slideRightCarousel = slideRightCarousel;
var carouselSlides = document.querySelectorAll('.carousel-2-slide');
var arrowRight = document.getElementById('carousel-2-arrow-right');
var arrowLeft = document.getElementById('carousel-2-arrow-left');
var currentSlide = 0;

function resetCarousel() {
  var i;

  for (i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].style.display = 'none';
  }
}

function startCarouselSlide() {
  resetCarousel();
  carouselSlides[0].style.display = 'block';
}

function slideLeftCarousel() {
  resetCarousel();
  carouselSlides[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRightCarousel() {
  resetCarousel();
  carouselSlides[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

arrowLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = carouselSlides.length;
  }

  slideLeftCarousel();
});
arrowRight.addEventListener('click', function () {
  if (currentSlide === carouselSlides.length - 1) {
    currentSlide = -1;
  }

  slideRightCarousel();
});
startCarouselSlide();
},{}],"js/news.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = getNews;

function getNews() {
  var generalNewsUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
  fetch(generalNewsUrl).then(function (res) {
    return res.json();
  }).then(function (data) {
    var newsHeadings = document.querySelectorAll('.news-heading');
    var newsImages = document.querySelectorAll('.news-image');
    var newsDates = document.querySelectorAll('.news-date');
    var newsAuthor = document.querySelectorAll('.news-author');
    var newsDescription = document.querySelectorAll('.news-description');
    console.log(data);

    for (var i = 0; i < newsHeadings.length; i++) {
      newsHeadings[i].innerHTML = data.articles[i].title;
    }

    for (var _i = 0; _i < newsImages.length; _i++) {
      newsImages[_i].src = data.articles[_i].urlToImage;
    }

    for (var _i2 = 0; _i2 < newsDates.length; _i2++) {
      newsDates[_i2].innerHTML = data.articles[_i2].publishedAt;
    }

    for (var _i3 = 0; _i3 < newsAuthor.length; _i3++) {
      newsAuthor[_i3].innerHTML = data.articles[_i3].author;
    }

    for (var _i4 = 0; _i4 < newsDescription.length; _i4++) {
      newsDescription[_i4].innerHTML = data.articles[_i4].content;
    }
  });
}
},{}],"js/business-news.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBusinessNews = getBusinessNews;

function getBusinessNews() {
  var businessUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
  fetch(businessUrl).then(function (res) {
    return res.json();
  }).then(function (data) {
    var businessHeadings = document.querySelectorAll('.business-heading');
    var businessImages = document.querySelectorAll('.business-image');
    var businessDates = document.querySelectorAll('.business-date');
    console.log(data);

    for (var i = 0; i < businessHeadings.length; i++) {
      businessHeadings[i].innerHTML = data.articles[i].title;
    }

    for (var _i = 0; _i < businessImages.length; _i++) {
      businessImages[_i].src = data.articles[_i].urlToImage;
    }

    for (var _i2 = 0; _i2 < businessDates.length; _i2++) {
      businessDates[_i2].innerHTML = data.articles[_i2].publishedAt;
    }
  });
}
},{}],"js/sport-news.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSportNews = getSportNews;

function getSportNews() {
  var sportUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
  fetch(sportUrl).then(function (res) {
    return res.json();
  }).then(function (data) {
    var sportHeadings = document.querySelectorAll('.sport-heading');
    var sportImages = document.querySelectorAll('.sport-image');
    var sportDates = document.querySelectorAll('.sport-date');
    console.log(data);

    for (var i = 0; i < sportHeadings.length; i++) {
      sportHeadings[i].innerHTML = data.articles[i].title;
    }

    for (var _i = 0; _i < sportImages.length; _i++) {
      sportImages[_i].src = data.articles[_i].urlToImage;
    }

    for (var _i2 = 0; _i2 < sportDates.length; _i2++) {
      sportDates[_i2].innerHTML = data.articles[_i2].publishedAt;
    }
  });
}
},{}],"js/editorial-news.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditorialNews = getEditorialNews;

function getEditorialNews() {
  var editorialUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
  fetch(editorialUrl).then(function (res) {
    return res.json();
  }).then(function (data) {
    var editorialsHeadings = document.querySelectorAll('.editorial-heading');
    var editorialsImages = document.querySelectorAll('.editorial-image');
    var editorialsDates = document.querySelectorAll('.editorial-date');

    for (var i = 0; i < editorialsHeadings.length; i++) {
      editorialsHeadings[i].innerHTML = data.articles[i].title;
    }

    for (var _i = 0; _i < editorialsImages.length; _i++) {
      editorialsImages[_i].src = data.articles[_i].urlToImage;
    }

    for (var _i2 = 0; _i2 < editorialsDates.length; _i2++) {
      editorialsDates[_i2].innerHTML = data.articles[_i2].publishedAt;
    }
  });
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _search = require("./search");

var _dropdownMenu = require("./dropdown-menu");

var _slider = require("./slider");

var _newsSlider = require("./news-slider");

var _editorialNewsSlider = require("./editorial-news-slider");

var _localNewsSlider = require("./local-news-slider");

var _thumbnailSlider = require("./thumbnail-slider");

var _news = require("./news");

var _businessNews = require("./business-news");

var _sportNews = require("./sport-news");

var _editorialNews = require("./editorial-news");

(0, _news.getNews)();
(0, _businessNews.getBusinessNews)();
(0, _sportNews.getSportNews)();
(0, _editorialNews.getEditorialNews)();
},{"./search":"js/search.js","./dropdown-menu":"js/dropdown-menu.js","./slider":"js/slider.js","./news-slider":"js/news-slider.js","./editorial-news-slider":"js/editorial-news-slider.js","./local-news-slider":"js/local-news-slider.js","./thumbnail-slider":"js/thumbnail-slider.js","./news":"js/news.js","./business-news":"js/business-news.js","./sport-news":"js/sport-news.js","./editorial-news":"js/editorial-news.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56332" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map