function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",(function(t,o){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var r={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.47fbc27d.js","edJkd":"amazon-icon.bf9c062f.png","ckWAI":"open-book-icon.13365d66.png","87zR3":"book-shop-icon.f4a265a5.png","3rzcU":"amazon-icon@2x.3254cb4c.png","LbtVt":"open-book-icon@2x.66c58f73.png","fUzAu":"book-shop-icon@2x.88845c4c.png","8OQ7p":"icons.4ee90e29.svg"}'));var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var o=s.default(e,t,"get");return i.default(e,o)};var s=l(r("fExtF")),i=l(r("iaRLo"));function l(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,o){g.default(e,t),t.set(e,o)};var u,g=(u=r("7K24o"))&&u.__esModule?u:{default:u};var f=new WeakMap,b=new WeakMap;class m{async fetchBooks(){try{const e=await fetch(t(c)(this,b));return await e.json()}catch(e){throw new Error(e)}}async fetchCategories(){try{const e=await fetch(t(c)(this,f));return await e.json()}catch(e){throw new Error(e)}}async fetchCategoryBooks(e){try{const t=`https://books-backend.p.goit.global/books/category?category=${e}`,o=await fetch(t);return await o.json()}catch(e){throw new Error(e)}}constructor(){t(d)(this,f,{writable:!0,value:"https://books-backend.p.goit.global/books/category-list"}),t(d)(this,b,{writable:!0,value:"https://books-backend.p.goit.global/books/top-books"})}}var y=new WeakMap;class k{async fetchBook(e){try{const o=await fetch(t(c)(this,y)+e);return await o.json()}catch(e){throw new Error(e)}}constructor(){t(d)(this,y,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}}var h;h=new URL(r("kyEFX").resolve("edJkd"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("ckWAI"),import.meta.url).toString();var v;v=new URL(r("kyEFX").resolve("87zR3"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("3rzcU"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("LbtVt"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("fUzAu"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const S=async()=>{const e=document.querySelectorAll(".book-category-list"),o=document.querySelector("[data-modal-book]"),n=new k,a=e=>{if("IMG"!==e.target.nodeName)return;o.classList.remove("is-hidden");!async function(e){try{const t=await n.fetchBook(e);console.log(t);const a=c(t);o.innerHTML=a;document.querySelector("[data-modal-book-close]").addEventListener("click",r)}catch(e){console.error("Error:",e)}}(e.target.dataset.id)},r=e=>{o.classList.add("is-hidden")};const c=e=>{const o=""!==e.description.trim()?e.description:"In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to the know the family of his college sweetheart.";return`<div class="modal-book">\n    <button class="modal-book-close" type="button" data-modal-book-close>\n      <svg class="modal-book-close-icon" width="24" height="24">\n        <use href="${t(L)}#icon-close"></use>\n      </svg>\n    </button>\n    <div class="modal-wrapper">\n    <img class="modal-book-img" src="${e.book_image}" alt="${e.title}" width="287" height="408" />\n    <div class="modal-wrapper-content">\n    <h2 class="modal-book-name">${e.title}</h2>\n    <h3 class="modal-book-author">${e.author}</h3>\n    <p class="modal-description-book">${o}</p>\n    <ul class="trade-list">\n      <li class="trade-item">\n        <a href="#">\n          <img \n            class='trade-link-img amazon-img'\n            srcset="${t(h)} 1x, ${t(w)} 2x"\n            src="${t(h)}"\n            alt="amazon"\n            width="62"\n            height="19"\n          />\n        </a>\n      </li>\n      <li class="trade-item">\n        <a href="#">\n          <img\n            class='trade-link-img book-img'\n            srcset="${t(p)} 1x, ${t(E)} 2x"\n            src="${t(p)}"\n            alt="apple"\n            width="33"\n            height="32"\n          />\n        </a>\n      </li>\n      <li class="trade-item">\n        <a href="#">\n          <img\n            class='trade-link-img shop-img'\n            srcset="${t(v)} 1x, ${t(_)} 2x"\n            src="${t(v)}"\n            alt="book" \n            width="38" \n            height="36" \n          />\n        </a>\n      </li>\n    </ul>\n    </div>\n    </div>\n    <div class="btn-box">\n      <button class="btn-add-shopping-list" type="button" data-modal-add>\n        ADD TO SHOPPING LIST\n      </button>\n    </div>\n  </div>`};e.forEach((e=>{e.addEventListener("click",a)}))},$=new m,M=document.querySelector(".book-category-lists");function x(e){return`\n    <ul class="book-category-list">\n      ${e.map((e=>`\n            <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="${e._id}" src="${e.book_image}" alt="${e.title}" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">${e.title}</h3>\n                <p class="book-category-list-book-author">${e.author}</p>\n              </li>\n          `)).join("")}\n    </ul>\n  `}async function H(){try{const e=await $.fetchBooks(),t=await function(e){const t=[];for(const o of e){const n=document.createElement("div");n.innerHTML=`\n      <p class="book-category">${o.list_name}</p>\n      <ul class="book-category-list">\n        ${o.books.map((e=>`\n              <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="${e._id}" src="${e.book_image}" alt="${e.title}" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">${e.title}</h3>\n                <p class="book-category-list-book-author">${e.author}</p>\n              </li>\n            `)).join("")}\n      </ul>\n      <div class="book-list-container"></div>\n      <div class="button-container">\n        <button class="book-category-btn" data-category="${o.list_name}" type="button">SEE MORE</button>\n      </div>\n    `,n.querySelector(".book-category-btn").addEventListener("click",(async()=>{const t=n.querySelector(".book-list-container");try{const n=await $.fetchCategoryBooks(o.list_name);if(n.length){const a=[];e.filter((e=>e.list_name===o.list_name))[0].books.map((e=>a.push(e._id)));const r=n.filter((e=>!a.includes(e._id)));if(!r.length)return;const c=x(r);t.innerHTML=c}}catch(e){console.error("Error:",e)}})),t.push(n)}return t}(e);t.forEach((e=>{M.appendChild(e)})),S()}catch(e){console.error("Error:",e)}}const R=new m,F=document.querySelector(".filter-list"),I=document.querySelector(".book-category-lists"),q=document.querySelector(".filter-link");async function O(e){e.sort(((e,t)=>e.position-t.position));const t=e.map((e=>`\n      <li class="filter-list-item">\n        <a href="#" class="category-filter-link">${e.list_name}</a>\n      </li>\n    `)).join("");F.innerHTML=t,document.querySelectorAll(".category-filter-link").forEach((e=>{e.addEventListener("click",T)}))}async function j(){try{const e=await R.fetchCategories();await O(e)}catch(e){console.error("Error:",e)}}function T(e){e.preventDefault();const t=e.target.textContent;document.querySelector(".main-category-text").textContent=t,async function(e){try{const t=`https://books-backend.p.goit.global/books/category?category=${e}`,o=await fetch(t),n=await o.json(),a=document.createElement("div");a.innerHTML=`\n      <ul class="book-category-list">\n        ${n.map((e=>`\n              <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="${e._id}" src="${e.book_image}" alt="${e.title}" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">${e.title}</h3>\n                <p class="book-category-list-book-author">${e.author}</p>\n              </li>\n            `)).join("")}\n      </ul>\n    `,I.innerHTML="",I.appendChild(a),S()}catch(e){console.error("Error:",e)}}(t),q.classList.remove("active-filter")}q.addEventListener("click",(()=>{q.classList.add("active-filter")})),async function(){try{await Promise.all([j(),H()])}catch(e){console.error("Error:",e)}}(),window.addEventListener("scroll",(function(){const e=document.getElementById("scrollToTopButton");window.pageYOffset>100?e.style.display="block":e.style.display="none"}));document.getElementById("scrollToTopButton").addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".loader-offline"),document.querySelector(".content")}));let A=localStorage.getItem("darkMode");const U=document.querySelector("#dark-mode-toggle"),C=()=>{document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled")};"enabled"===A&&C(),U.addEventListener("click",(()=>{A=localStorage.getItem("darkMode"),"enabled"!==A?C():(document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null))})),(()=>{const e={openModalBtn:document.querySelector("[header-data-modal-open]"),closeModalBtn:document.querySelector("[header-data-modal-close]"),modal:document.querySelector("[header-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.47fbc27d.js.map
