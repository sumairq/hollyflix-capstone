(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:ital,wght@1,300&display=swap);"]),i.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scrollbar-width: thin;\r\n}\r\n\r\nhtml {\r\n  font-family: "Ubuntu", sans-serif;\r\n  font-size: 65%;\r\n}\r\n\r\nbody {\r\n  background-color: #222;\r\n  margin: 2.5rem auto;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  all: unset;\r\n}\r\n\r\nbutton {\r\n  border-radius: 5px;\r\n  border: 2px solid black;\r\n  background-color: aliceblue;\r\n  height: 3rem;\r\n  width: 9rem;\r\n}\r\n\r\nbutton:hover {\r\n  border: aliceblue;\r\n  background-color: #222;\r\n  color: aliceblue;\r\n}\r\n\r\n/* Header and footer */\r\n\r\n/* header {\r\n  background-image: url("./modules/logo/logo_png.png");\r\n} */\r\n\r\nheader,\r\nfooter {\r\n  background-repeat: no-repeat;\r\n  width: 90vw;\r\n  height: 10vh;\r\n  /* border: 3px solid #111; */\r\n  /* border-radius: 5px; */\r\n  display: flex;\r\n  color: aliceblue;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2rem auto;\r\n  background-color: #333;\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item:not(:last-child) {\r\n  border-right: 3px solid aliceblue;\r\n  padding-right: 4rem;\r\n}\r\n\r\n.nav-item:hover {\r\n  text-shadow: 0.5rem 1rem 2rem aliceblue;\r\n}\r\n\r\n.logo {\r\n  display: block;\r\n  width: 22rem;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  letter-spacing: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  header,\r\n  footer {\r\n    width: 95vw;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .logo-img {\r\n    height: 5vh;\r\n    width: 10vw;\r\n  }\r\n  \r\n  .logo {\r\n    width: 5vw;\r\n    height: 5vh;\r\n  }\r\n\r\n  .nav-list {\r\n    font-size: 15px;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .nav-item:not(:last-child) {\r\n    padding-right: 2rem;\r\n  }\r\n}\r\n\r\n/* End Header and Footer section */\r\n\r\n/* Main section */\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n  border: 5px solid #111;\r\n  border-radius: 12px;\r\n  padding: 1.5rem;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.img-card {\r\n  display: block;\r\n  max-width: 30rem;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n}\r\n\r\n.img-card:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.card__title,\r\n.movie-title {\r\n  color: black;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* Feature like and buttons */\r\n\r\n.card__likes {\r\n  display: block;\r\n  margin-block-start: 1.33em;\r\n  margin-block-end: 1.33em;\r\n  margin-inline-start: 0px;\r\n  margin-inline-end: 0px;\r\n  font-weight: bold;\r\n  background-color: white;\r\n}\r\n\r\n.like-icon {\r\n  width: 2.5rem;\r\n  vertical-align: middle;\r\n  margin: 0 1.5rem 0.4rem;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\n.like-icon:hover {\r\n  transform: scale(1.5);\r\n}\r\n\r\n/* .btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 7px;\r\n  background-color: red;\r\n  color: #fff;\r\n  font-size: 2rem;\r\n  transition: 0.4s;\r\n}\r\n\r\n.btn:hover,\r\n.btn:active {\r\n  background-color: black;\r\n  color: #fff;\r\n} */\r\n\r\n/* End Feature like and buttons */\r\n\r\n/* The End main section */\r\n\r\n/* Modal section start */\r\n\r\n.modal-container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  inset: 0 0 0 0;\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  backdrop-filter: blur(0.5rem);\r\n  z-index: 5;\r\n}\r\n\r\n.show-modal {\r\n  display: flex;\r\n}\r\n\r\n.modal-card {\r\n  background-color: rgb(134, 134, 129);\r\n  width: 50%;\r\n  max-height: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 4rem;\r\n  overflow: auto;\r\n  padding-bottom: 3.5rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-modal-btn {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 38px;\r\n  align-self: flex-end;\r\n  border-style: none;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n  outline: none;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  margin: 2rem 2rem 0 0;\r\n  box-shadow: 2px 2px 2px 2px rgba(255, 4, 4, 0.2);\r\n  z-index: 10;\r\n}\r\n\r\n.close-modal-btn:hover {\r\n  color: #fff;\r\n  background-color: #cc2008;\r\n}\r\n\r\n.close-modal-btn:active {\r\n  color: #fff;\r\n  background-color: #23180d;\r\n}\r\n\r\n.modal-card figure {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.modal-card img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.modal-card .modal-header {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.modal-card .movie-title {\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  color: #fff;\r\n  background-color: #cc2008;\r\n  font-weight: 400;\r\n  font-size: 3rem;\r\n  margin: 0;\r\n  padding: 2rem;\r\n  text-align: center;\r\n  border-top-left-radius: 30px;\r\n  border-top-right-radius: 30px;\r\n  box-shadow: 2px -6px 8px 1px rgba(0, 0, 0, 0.4);\r\n  z-index: 1;\r\n}\r\n\r\n.modal-card iframe {\r\n  height: 40rem;\r\n  width: 100%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.modal-card .info-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  padding: 2rem;\r\n}\r\n\r\n.modal-card h3 {\r\n  width: 100%;\r\n  color: #fff;\r\n  color: #cc2008;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.modal-card p {\r\n  width: 90%;\r\n  text-align: center;\r\n  margin-bottom: 2rem;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.modal-card p span {\r\n  display: inline-block;\r\n  font-weight: 300;\r\n  color: #000;\r\n  background-color: rgba(243, 165, 2, 0.2);\r\n  padding: 1rem 2rem;\r\n  margin-bottom: 1rem;\r\n  border-radius: 20px;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.modal-card p.description {\r\n  text-align: justify;\r\n}\r\n/* Start comment section */\r\n\r\n.comments ul {\r\n  margin-bottom: 2rem;\r\n  width: 100%;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.comments ul li {\r\n  background-color: #eee;\r\n  padding: 1.6rem 2.8rem;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n.comments ul li:nth-child(odd) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.comments ul li span:first-child {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.comments ul li span:last-child {\r\n  font-weight: 300;\r\n}\r\n\r\n.comments form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.comments h2 {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.comments .msgErrorContainer {\r\n  color: red;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.comments form input,\r\n.comments form textarea {\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  resize: none;\r\n}\r\n\r\n/* End comment section */\r\n\r\n/* Reservation container start */\r\n.reservation ul {\r\n  margin-bottom: 2rem;\r\n  width: 100%;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.reservation ul li {\r\n  background-color: #eee;\r\n  padding: 1.6rem 2.8rem;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n.reservation ul li:nth-child(odd) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.reservation ul li span:first-child {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.reservation ul li span:last-child {\r\n  font-weight: 300;\r\n}\r\n\r\n.reservation form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.reservation h2 {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.reservation .msgErrorContainer {\r\n  color: red;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n .reservation form input {\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  resize: none;\r\n }\r\n \r\n/* Reservation container end */\r\n\r\n.add-comment-btn {\r\n  margin-left: 14vw;\r\n  margin-right: 12vw;\r\n}\r\n\r\n.add-reservation-btn {\r\n  margin-left: 14vw;\r\n  margin-right: 12vw;\r\n}\r\n\r\n/* Modal section end */\r\n',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var u=e(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var h=o(p,t);t.byIndex=s,r.splice(s,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},479:(n,r,e)=>{n.exports=e.p+"64818a78931334345848.svg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),l=e.n(d),m=e(589),u=e.n(m),p=e(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const g="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/",f="MryrGqfCiLUJUEbyrBie";var b=e(479);const v=n=>{const r=document.querySelector(".cards");n.forEach((n=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`\n         <div class="card__image-container">\n           <img class="img-card" src=${n.image.medium}\n             alt="ant-man">\n         </div>\n         <div class="card__content">\n           <p class="card__title text--medium">\n            ${n.name}\n           </p>\n           <div class="card__info">\n             <h4 id =${n.id} class=" card__likes text--medium">Likes</h4>\n             <button class="btn card__comments">Comments</button>\n             <button class="btn card__reservations">Reservations</button>\n             <img class="like-icon" src="${b}" alt="like-icon">\n           </div>\n         </div>\n         `,r.appendChild(e);const t=document.getElementById(`${n.id}`);t.addEventListener("click",(()=>{(async n=>{const r=await fetch(`${g}${f}/likes/`,{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-type":"application/JSON"}});await r.text()})(n.id);const r=t.textContent.split(" ");t.innerHTML=`${Number(r[0])+1} likes`}))})),(n=>{const r=(n=>{let r=0;return n.forEach((()=>{r+=1})),r})(n);(n=>{const r=document.querySelector(".nav-list"),e=document.createElement("li");e.innerHTML=` <li class="nav-item">(${n})Movies</li>`,r.appendChild(e)})(r)})(n),(async()=>{const n=await fetch(`${g}${f}/likes/`);return await n.json()})().then((n=>{n.forEach((n=>{document.getElementById(`${n.item_id}`).innerHTML=`${n.likes} Likes`}))}))},y="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps",x="MryrGqfCiLUJUEbyrBie",w=async n=>{const r=await window.fetch(`${y}/${x}/comments?item_id=${n}`),e=await r.json();return e.length?e:[]},k=n=>n.length?n.length:0,S=async n=>{const r=document.querySelector("ul"),e=await w(n);r.innerHTML="";let t="";e.forEach((n=>{const r=`\n  <li>\n    <span>${n.creation_date}</span>\n    <span>${n.username}: </span>\n    <span>${n.comment}</span>\n  </li>\n`;t+=r})),r.insertAdjacentHTML("beforeend",t)};let _=0;const E=document.querySelector(".modal-container"),$=document.querySelector("body"),L=()=>{E.classList.remove("show-modal"),$.classList.remove("overflow-hidden"),E.innerHTML=""},T=n=>{document.querySelectorAll(".card__comments").forEach(((r,e)=>{r.addEventListener("click",(async()=>{E.classList.add("show-modal"),$.classList.add("overflow-hidden"),_=await(async n=>{const r=await w(n);return k(r)})(n[e].id);const r=`https://api.tvmaze.com/shows/${n[e].id}`;((n,r)=>{const e=document.createElement("div");e.className="modal-card",e.innerHTML=((n,r)=>`\n          <button class="close-modal-btn">x</button>\n            <div class="modal-header">\n              <figure>\n                <img src="${n.image.medium}" alt="Title image"/>\n              </figure>\n              <h2 class="movie-title">${n.name}</h2>\n            </div>\n            <div class="info-container">\n              <h3>Genres</h2>\n              <p class="genres">${n.genres}</p>\n              <h3>Rating</h2>\n              <p class="rating">${n.rating.average}</p>\n              <h3>Description</h2>\n              <p class="description">${n.summary}</p> \n            </div>\n            <div class="info-container comments">\n              <h3>Comments (<span class="counter">${r}</span>)</h2>\n              <ul class="comment-container"></ul>\n              <h3>Add a comment</h2>\n              <div class="msgErrorContainer"></div>\n              <form action="index_submit" method="POST" accept-charset="utf-8">\n                <input class="name-input" type="text" placeholder="Name" name="Your name" maxlength="20" required/>\n                <textarea\n                  class="textarea"\n                  name="text-area"\n                  maxlength="220"\n                  placeholder="Your Insights" cols="50" rows="10" required></textarea>\n                <button type="submit" class="btn add-comment-btn">Comment</button>\n              </form>\n            </div>\n    `)(n,r),E.appendChild(e),document.querySelector(".close-modal-btn").addEventListener("click",L)})(await fetch(r).then((n=>n.json())).then((n=>n)),_);const t=document.querySelector("form");t.addEventListener("submit",(r=>{(async(n,r,e)=>{n.preventDefault();const t=document.querySelector(".counter"),o=r.querySelector("input"),a=r.querySelector("textarea");await(async(n,r,e)=>{const t=await fetch(`${y}/${x}/comments`,{method:"POST",body:JSON.stringify({item_id:e,username:n,comment:r}),headers:{"Content-type":"application/JSON"}});return await t.text()})(o.value,a.value,e),await S(e),t.textContent=await k(e),r.reset()})(r,t,n[e].id)})),S(n[e].id)}))}))},q="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps",C=n=>{let r=0;return n.forEach((()=>{r+=1})),r},M=async n=>{const r=document.querySelector("ul"),e=await(async n=>{const r=await fetch(`${q}/MryrGqfCiLUJUEbyrBie/reservations?item_id=${n}`),e=await r.json();return e.length?e:[]})(n);r.innerHTML="";let t="";e.forEach((n=>{const r=`\n  <li>\n    <span>${n.username}</span>\n    <span>${n.date_start}: </span>\n    <span>${n.date_end}</span>\n  </li>\n`;t+=r})),r.insertAdjacentHTML("beforeend",t),document.querySelector(".counter").textContent=C(e)},z=document.querySelector(".modal-container"),j=document.querySelector("body"),O=()=>{z.classList.remove("show-modal"),j.classList.remove("overflow-hidden"),z.innerHTML=""},H=n=>{document.querySelectorAll(".card__reservations").forEach(((r,e)=>{r.addEventListener("click",(async()=>{z.classList.add("show-modal"),j.classList.add("overflow-hidden");const r=`https://api.tvmaze.com/shows/${n[e].id}`;((n,r)=>{const e=document.createElement("div");var t;e.className="modal-card",e.innerHTML=`\n<button class="close-modal-btn">x</button>\n<div class="modal-header">\n<figure>\n  <img src="${(t=n).image.medium}" alt="Title image"/>\n</figure>\n<h2 class="movie-title">${t.name}</h2>\n</div>\n<div class="info-container">\n  <h3>Genres</h2>\n  <p class="genres">${t.genres}</p>\n  <h3>Rating</h2>\n  <p class="rating">${t.rating.average}</p>\n  <h3>Description</h2>\n  <p class="description">${t.summary}</p> \n</div>\n  <div class="info-container reservation">\n    <h3>Reservation (<span class="counter">0</span>)</h2>\n    <ul class="reservation-container"></ul>\n    <h3>Reserve</h2>\n    <div class="msgErrorContainer"></div>\n    <form action="index_submit" method="POST" accept-charset="utf-8">\n      <input type="text" placeholder="Name" name="Your name" maxlength="20" required/>\n      <p>Start Date</p>\n      <input id="start__date" type="date" placeholder="Start date" name="Start date" maxlength="20" required/>\n      <p>Return Date</p>\n      <input id="end__date" type="date" placeholder="Return date" name="Return date" maxlength="20" required/>\n      <button type="submit" class="btn add-reservation-btn">Submit</button>\n    </form>\n  </div>\n`,z.appendChild(e),document.querySelector(".close-modal-btn").addEventListener("click",O)})(await fetch(r).then((n=>n.json())).then((n=>n)));const t=document.querySelector("form");t.addEventListener("submit",(r=>{(async(n,r,e)=>{n.preventDefault();const t=document.querySelector(".counter"),o=document.querySelector("input"),a=document.getElementById("start__date"),i=document.getElementById("end__date");await(async(n,r,e,t)=>{const o=await fetch(`${q}/MryrGqfCiLUJUEbyrBie/reservations/`,{method:"POST",body:JSON.stringify({item_id:t,username:n,date_start:r,date_end:e}),headers:{"Content-type":"application/JSON"}});return await o.text()})(o.value,a.value,i.value,e),await M(e),t.textContent=await C(e),r.reset()})(r,t,n[e].id)})),M(n[e].id)}))}))};(async()=>await fetch("https://api.tvmaze.com/shows").then((n=>n.json())).then((n=>n.slice(0,50).map((n=>({id:n.id,name:n.name,genres:n.genres,image:n.image,end:n.ended,rating:n.rating,summary:n.summary}))))))().then((n=>{v(n),T(n),H(n)}))})()})();