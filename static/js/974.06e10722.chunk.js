"use strict";(self.webpackChunkauto_rent=self.webpackChunkauto_rent||[]).push([[974],{974:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var r=t(433),s=t(861),a=t(439),c=t(757),i=t.n(c),l=t(791),o=t(243);o.Z.defaults.baseURL="https://6500b83518c34dee0cd555f8.mockapi.io/adverts";var d=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,r,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,e.next=3,o.Z.get("?page=".concat(n,"&limit=8"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var p=t.p+"static/media/heart_full.623a3b874365d724c658e79a860ad4a4.svg";var f=t.p+"static/media/heart_empty.ac060e771360fcc26ebb0c86173c8396.svg",h=t(184),x=function(e){e.id;var n=e.favs;return(0,h.jsx)("button",{type:"button",children:n?(0,h.jsx)("img",{src:p,alt:"in favorites"}):(0,h.jsx)("img",{src:f,alt:"not in favorites"})})},m=function(e){var n=e.advert,t=e.openModal,r=n.img,s=n.id,a=n.year,c=n.model,i=n.make,l=n.rentalPrice,o=n.rentalCompany,d=n.type,u=n.address,p=n.accessories,f=n.favs;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:r,alt:"".concat(i,", ").concat(c),loading:"lazy",width:250}),(0,h.jsx)(x,{favs:f||!1,id:s})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[(0,h.jsxs)("span",{children:["".concat(i," "),(0,h.jsx)("span",{children:"".concat(c)}),", ".concat(a)]}),(0,h.jsx)("span",{children:l})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:u.split(",")[1].trim()}),(0,h.jsx)("li",{children:u.split(",")[2].trim()}),(0,h.jsx)("li",{children:o}),(0,h.jsx)("li",{children:d}),(0,h.jsx)("li",{children:c}),(0,h.jsx)("li",{children:s}),(0,h.jsx)("li",{children:p[1]})]})]}),(0,h.jsx)("button",{type:"button",onClick:function(){return t(s)},children:"Learn more"})]})},v=function(e){var n=e.onClick;return(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"button",onClick:n,children:"Load more"})})},j=t(164),_=t(87),g=function(e){return e.split(",")[1].trim()},b=function(e){return e.split(",")[2].trim()},y=function(e){return e.toLocaleString("en-US")},k=function(e){return"".concat(e.substring(1),"$")};var w=t.p+"static/media/close_btn.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",Z="PopUpModal_overlay__6c-o0",C="PopUpModal_modal__3T0Q7",N="PopUpModal_modalCard__aspIv",M="PopUpModal_closeBtn__LQmYT",P="PopUpModal_modalImage__hI8wv",S="PopUpModal_modalTitle__QarWn",U="PopUpModal_accent__0WGab",E="PopUpModal_detailsList__AA4sd",L="PopUpModal_desription__EvYiM",T="PopUpModal_featuresTitle__+Mta8",z="PopUpModal_rentalDetails__+4Yru",I=function(e){var n=e.onClose,t=e.id,c=document.querySelector("#modal-root"),o=(0,l.useState)(null),d=(0,a.Z)(o,2),p=d[0],f=d[1],x=(0,l.useState)("pending"),m=(0,a.Z)(x,2),v=m[0],I=m[1];(0,l.useEffect)((function(){(0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I("pending"),e.prev=1,e.next=4,u(t);case 4:(n=e.sent)&&f(n),n&&I("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),I("rejected"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}),[t]),(0,l.useEffect)((function(){return window.addEventListener("keydown",Y),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",Y),document.body.style.overflow="unset"}}));var Y=function(e){"Escape"===e.code&&n()},A=function(e){e.currentTarget===e.target&&n()};if("resolved"===v){var Q=p.img,R=p.make,B=p.model,F=p.functionalities,W=p.mileage,q=p.year,D=p.rentalPrice,G=p.rentalConditions,$=p.address,H=p.description,J=p.fuelConsumption,K=p.engineSize,O=p.rentalCompany,V=p.type,X=p.accessories;return(0,j.createPortal)((0,h.jsx)("div",{className:Z,onClick:A,children:(0,h.jsx)("div",{className:C,children:(0,h.jsxs)("div",{className:N,tittle:O,children:[(0,h.jsx)("img",{src:w,alt:"Close Button",className:M,onClick:A}),(0,h.jsx)("img",{src:Q,alt:"".concat(R,", ").concat(B),className:P,loading:"lazy"}),(0,h.jsx)("h2",{className:S,children:(0,h.jsxs)("span",{children:["".concat(R," "),(0,h.jsx)("span",{className:U,children:"".concat(B)}),", ".concat(q)]})}),(0,h.jsxs)("ul",{className:E,children:[(0,h.jsx)("li",{children:g($)}),(0,h.jsx)("li",{children:b($)}),(0,h.jsxs)("li",{children:["Id: ",t]}),(0,h.jsxs)("li",{children:["Year: ",q]}),(0,h.jsxs)("li",{children:["Type: ",V]}),(0,h.jsxs)("li",{children:["Fuel Consumption: ",J]}),(0,h.jsxs)("li",{children:["Engine Size: ",K]})]}),(0,h.jsx)("p",{className:L,children:H}),(0,h.jsxs)("h3",{className:T,children:["Accessories and functionalities:"," "]}),(0,h.jsx)("ul",{className:E,children:[].concat((0,r.Z)(F),(0,r.Z)(X)).map((function(e,n){return(0,h.jsx)("li",{children:e},n)}))}),(0,h.jsx)("h3",{className:T,children:"Rental Conditions:"}),(0,h.jsxs)("ul",{className:z,children:[function(e){return e.split("\n").map((function(e,n){return(0,h.jsx)("li",{children:e.includes(":")?(0,h.jsxs)(h.Fragment,{children:[e.split(":")[0],":"," ",(0,h.jsx)("span",{className:U,children:e.split(":")[1]})," "]}):e},n)}))}(G),(0,h.jsxs)("li",{children:[" ","Mileage:"," ",(0,h.jsx)("span",{className:U,children:y(W)})," "]}),(0,h.jsxs)("li",{children:[" ","Price:"," ",(0,h.jsx)("span",{className:U,children:k(D)})," "]})]}),(0,h.jsx)(_.rU,{className:"button-primary button-rental",to:"tel:+380730000000",children:"Rental car"})]})})}),c)}},Y=function(){var e=(0,l.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],o=(0,l.useState)("fullfield"),u=(0,a.Z)(o,2),p=u[0],f=u[1],x=(0,l.useState)(null),j=(0,a.Z)(x,2),_=j[0],g=j[1],b=(0,l.useState)(1),y=(0,a.Z)(b,2),k=y[0],w=y[1],Z=(0,l.useState)(!0),C=(0,a.Z)(Z,2),N=C[0],M=C[1],P=(0,l.useState)(!1),S=(0,a.Z)(P,2),U=S[0],E=S[1],L=(0,l.useState)(null),T=(0,a.Z)(L,2),z=T[0],Y=T[1];(0,l.useEffect)((function(){(0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f("pending"),g(null),e.prev=2,e.next=5,d();case 5:(n=e.sent)&&c(n),n&&f("fullfield"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),f("rejected"),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()}),[]),(0,l.useEffect)((function(){1!==k&&(0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(k);case 3:(n=e.sent)&&c((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),(null===n||void 0===n?void 0:n.length)<8&&M(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[k]);var A=function(e){E(!0),Y(e)};return(0,h.jsxs)("div",{children:["fullfield"===p&&(0,h.jsx)("ul",{children:t&&t.map((function(e){return(0,h.jsx)(m,{openModal:A,advert:e},e.id)}))}),N&&(null===t||void 0===t?void 0:t.length)>7&&(0,h.jsx)(v,{onClick:function(){return w((function(e){return e+1}))}}),U&&(0,h.jsx)(I,{id:z,onClose:function(){return E((function(e){return!e}))}}),"rejected"===p&&_&&(0,h.jsxs)("div",{children:[" ",_," "]})]})}}}]);
//# sourceMappingURL=974.06e10722.chunk.js.map