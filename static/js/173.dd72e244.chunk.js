"use strict";(self.webpackChunkauto_rent=self.webpackChunkauto_rent||[]).push([[173],{6552:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(8592),a=r(5861),o=r(9439),i=r(4687),c=r.n(i),s=r(2791),l=r(3927);var u=r.p+"static/media/heart_full.623a3b874365d724c658e79a860ad4a4.svg";var d=r.p+"static/media/heart_empty.ac060e771360fcc26ebb0c86173c8396.svg",p="FavoriteBtn_icon__PxzcW",f=r(184),x=function(e){var n=e.id,r=e.favs,t=e.isChanged,i=(0,s.useState)(r),x=(0,o.Z)(i,2),m=x[0],h=x[1],b=(0,s.useState)("resolved"),g=(0,o.Z)(b,2),v=g[0],_=g[1];function j(){return(j=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _("pending"),e.next=3,(0,l.dt)(n,!m);case 3:e.sent&&(h(!m),t&&t()),_("resolved");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,f.jsx)("div",{className:p,onClick:function(){return j.apply(this,arguments)},disabled:"pending"===v,children:(0,f.jsx)("img",{src:m?u:d,alt:m?"in favorites":"not in favorites"})})},m="AdvertCard_cardItem__pZQbd",h="AdvertCard_imageContainer__Wbr3X",b="AdvertCard_image__grMGg",g="AdvertCard_cardTitle__8Trld",v="AdvertCard_accent__IoJA7",_="AdvertCard_descrList__apAl9",j=function(e){var n=e.advert,r=e.openModal,a=e.isChanged,o=n.img,i=n.id,c=n.year,s=n.model,l=n.make,u=n.rentalPrice,d=n.rentalCompany,p=n.type,j=n.address,Z=n.accessories,k=n.favs;return(0,f.jsxs)("li",{className:m,title:"".concat(Z.join("\n")),children:[(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("img",{className:b,src:o,alt:"".concat(l,", ").concat(s),loading:"lazy"}),(0,f.jsx)(x,{favs:k||!1,id:i,isChanged:a})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{className:g,children:[(0,f.jsxs)("span",{children:["".concat(l," "),(0,f.jsx)("span",{className:v,children:"".concat(s)}),", ".concat(c)]}),(0,f.jsx)("span",{children:u})]}),(0,f.jsxs)("ul",{className:_,children:[(0,f.jsx)("li",{children:(0,t.oM)(j)}),(0,f.jsx)("li",{children:(0,t.Ku)(j)}),(0,f.jsx)("li",{children:d}),(0,f.jsx)("li",{children:p}),(0,f.jsx)("li",{children:s}),(0,f.jsx)("li",{children:i}),(0,f.jsx)("li",{children:Z[1]})]})]}),(0,f.jsx)("button",{className:"button-primary",type:"button",onClick:function(){return r(i)},children:"Learn more"})]})}},3812:function(e,n,r){r.d(n,{Z:function(){return i}});var t="LoadMoreBtn_buttonContainer__a4TYp",a="LoadMoreBtn_buttonLM__srxkL",o=r(184),i=function(e){var n=e.onClick;return(0,o.jsx)("div",{className:t,children:(0,o.jsx)("button",{className:a,type:"button",onClick:n,children:"Load more"})})}},6255:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(3433),a=r(5861),o=r(9439),i=r(4687),c=r.n(i),s=r(2791),l=r(4164),u=r(1087),d=r(3927),p=r(8592);var f=r.p+"static/media/close_btn.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",x="PopUpModal_overlay__6c-o0",m="PopUpModal_modal__3T0Q7",h="PopUpModal_modalCard__aspIv",b="PopUpModal_closeBtn__LQmYT",g="PopUpModal_modalImage__hI8wv",v="PopUpModal_modalTitle__QarWn",_="PopUpModal_accent__0WGab",j="PopUpModal_detailsList__AA4sd",Z="PopUpModal_desription__EvYiM",k="PopUpModal_featuresTitle__+Mta8",y="PopUpModal_rentalDetails__+4Yru",C=r(184),w=function(e){var n=e.onClose,r=e.id,i=document.querySelector("#modal-root"),w=(0,s.useState)(null),S=(0,o.Z)(w,2),N=S[0],M=S[1],P=(0,s.useState)("pending"),F=(0,o.Z)(P,2),A=F[0],L=F[1];(0,s.useEffect)((function(){(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L("pending"),e.prev=1,e.next=4,(0,d.lz)(r);case 4:(n=e.sent)&&M(n),n&&L("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),L("rejected"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}),[r]),(0,s.useEffect)((function(){return window.addEventListener("keydown",T),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",T),document.body.style.overflow="unset"}}));var T=function(e){"Escape"===e.code&&n()},I=function(e){e.currentTarget===e.target&&n()};if("resolved"===A){var B=N.img,R=N.make,z=N.model,U=N.functionalities,W=N.mileage,E=N.year,H=N.rentalPrice,O=N.rentalConditions,Y=N.address,G=N.description,J=N.fuelConsumption,K=N.engineSize,Q=N.rentalCompany,V=N.type,D=N.accessories;return(0,l.createPortal)((0,C.jsx)("div",{className:x,onClick:I,children:(0,C.jsx)("div",{className:m,children:(0,C.jsxs)("div",{className:h,tittle:Q,children:[(0,C.jsx)("img",{src:f,alt:"Close Button",className:b,onClick:I}),(0,C.jsx)("img",{src:B,alt:"".concat(R,", ").concat(z),className:g,loading:"lazy"}),(0,C.jsx)("h2",{className:v,children:(0,C.jsxs)("span",{children:["".concat(R," "),(0,C.jsx)("span",{className:_,children:"".concat(z)}),", ".concat(E)]})}),(0,C.jsxs)("ul",{className:j,children:[(0,C.jsx)("li",{children:(0,p.oM)(Y)}),(0,C.jsx)("li",{children:(0,p.Ku)(Y)}),(0,C.jsxs)("li",{children:["Id: ",r]}),(0,C.jsxs)("li",{children:["Year: ",E]}),(0,C.jsxs)("li",{children:["Type: ",V]}),(0,C.jsxs)("li",{children:["Fuel Consumption: ",J]}),(0,C.jsxs)("li",{children:["Engine Size: ",K]})]}),(0,C.jsx)("p",{className:Z,children:G}),(0,C.jsxs)("h3",{className:k,children:["Accessories and functionalities:"," "]}),(0,C.jsx)("ul",{className:j,children:[].concat((0,t.Z)(U),(0,t.Z)(D)).map((function(e,n){return(0,C.jsx)("li",{children:e},n)}))}),(0,C.jsx)("h3",{className:k,children:"Rental Conditions:"}),(0,C.jsxs)("ul",{className:y,children:[function(e){return e.split("\n").map((function(e,n){return(0,C.jsx)("li",{children:e.includes(":")?(0,C.jsxs)(C.Fragment,{children:[e.split(":")[0],":"," ",(0,C.jsx)("span",{className:_,children:e.split(":")[1]})," "]}):e},n)}))}(O),(0,C.jsxs)("li",{children:[" ","Mileage:"," ",(0,C.jsx)("span",{className:_,children:(0,p.ao)(W)})," "]}),(0,C.jsxs)("li",{children:[" ","Price:"," ",(0,C.jsx)("span",{className:_,children:(0,p.H3)(H)})," "]})]}),(0,C.jsx)(u.rU,{className:"button-primary button-rental",to:"tel:+380730000000",children:"Rental car"})]})})}),i)}}},7823:function(e,n,r){r.d(n,{Z:function(){return b}});var t=r(4942),a=r(1413),o=r(9439),i=r(2791),c=["All","Aston Martin","Audi","BMW","Bentley","Buick","Chevrolet","Chrysler","Ferrari","Ford","GMC","Honda","Hummer","Hyundai","Infiniti","Jaguar","Jeep","Kia","Lamborghini","Land Rover","Lexus","Lincoln","MINI","Mercedes-Benz","Mitsubishi","Nissan","Pontiac","Porsche","Skoda","Subaru","Toyota","Volvo"].map((function(e){return{value:e,label:e}})),s=r(3433);var l=[{value:"Any",label:"Any"}].concat((0,s.Z)(function(e,n){for(var r=[],t=n;t<=e;t+=n)r.push(t.toString());return r}(300,10).filter((function(e){return e>=10})).map((function(e){return{label:e,value:e}})))),u="SearchBar_form__gW7Gj",d="SearchBar_label__4uG7W",p="SearchBar_rangeInputs__Yo1lF",f=r(934),x={singleValue:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#121417"})},control:function(e,n){var r=n.isSelected;return(0,a.Z)((0,a.Z)({},e),{},{display:"flex",width:"224px",padding:"8px 18px",fontFamily:"Manrope, sans-serif",fontWeight:"500",fontSize:"18px",lineHeight:"20px",color:r?"#121417":"rgba(18, 20, 23, 0.2)",backgroundColor:"#F7F7FB;",boxShadow:"none",border:"none",borderRadius:"14px",outline:"none"})},option:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{fontFamily:"Manrope, sans-serif",fontWeight:"500",fontSize:"16px",lineHeight:"20px",color:n.isSelected?"#121417":"#rgba(18, 20, 23, 0.2)",backgroundColor:"none",cursor:"pointer"})},menu:function(e){return(0,a.Z)((0,a.Z)({},e),{},{top:"40px",padding:"14px 8px 14px 18px",backgroundColor:"#fff",boxShadow:"px 4px 36px 0px rgba(0, 0, 0, 0.02)",border:"1px solid rgba(18, 20, 23, 0.05)",borderRadius:"14px"})},menuList:function(e){return(0,a.Z)((0,a.Z)({},e),{},{boxSizing:"content-box","&::-webkit-scrollbar":{position:"relative",right:"-4px",top:0,width:"8px",height:"110px"},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",background:"rgba(18, 20, 23, 0.05)"},"&::-webkit-scrollbar-track":{background:"#fff"}})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{padding:0,color:"#121417",transition:"all 300ms ease",transform:n.selectProps.menuIsOpen?"rotate(180deg)":null})},placeholder:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#121417"})}},m={singleValue:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#121417"})},ValueContainer:function(e){return(0,a.Z)((0,a.Z)({},e),{},{overflow:"visible"})},input:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{"&:after":{content:n.value.length?'""':'"$"',position:"absolute",right:"15px",top:"6px",color:"#121417"}})},control:function(e,n){var r=n.isSelected;return(0,a.Z)((0,a.Z)({},e),{},{display:"flex",padding:"8px 18px",width:"125px",fontFamily:"Manrope, sans-serif",fontWeight:"500",fontSize:"18px",lineHeight:"20px",color:r?"#121417":"#12141733",backgroundColor:"#F7F7FB;",boxShadow:"none",border:"none",borderRadius:"14px",outline:"none"})},option:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{fontFamily:"Manrope, sans-serif",fontWeight:"500",fontSize:"16px",lineHeight:"20px",color:n.isSelected?"#121417":"#12141733",backgroundColor:"none",cursor:"pointer"})},menu:function(e){return(0,a.Z)((0,a.Z)({},e),{},{top:"40px",padding:"14px 8px 14px 18px",backgroundColor:"#fff",boxShadow:"px 4px 36px 0px rgba(0, 0, 0, 0.02)",border:"1px solid rgba(18, 20, 23, 0.05)",borderRadius:"14px"})},menuList:function(e){return(0,a.Z)((0,a.Z)({},e),{},{boxSizing:"content-box","&::-webkit-scrollbar":{position:"relative",right:"-4px",top:0,width:"8px",height:"110px"},"&::-webkit-scrollbar-thumb":{background:"#1214170D",borderRadius:"10px"},"&::-webkit-scrollbar-track":{background:"#fff"}})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{padding:0,color:"#121417",transition:"all 300ms ease",transform:n.selectProps.menuIsOpen?"rotate(180deg)":null})},placeholder:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"#121417"})}},h=r(184),b=function(e){var n=e.onSearch,r={make:null,rentalPrice:null,millageFrom:"",millageTo:""},s=(0,i.useState)(r),b=(0,o.Z)(s,2),g=b[0],v=b[1];(0,i.useEffect)((function(){j()}),[]);var _=function(e,n){v((0,a.Z)((0,a.Z)({},g),{},(0,t.Z)({},e,n)))},j=function(){v(r),n(r)};return(0,h.jsxs)("form",{className:u,children:[(0,h.jsxs)("label",{className:d,children:["Car brand",(0,h.jsx)(f.ZP,{options:c,isSearchable:!0,styles:x,closeMenuOnSelect:!1,placeholder:"Enter the text",onChange:function(e){return _("make",e.value)},value:""===g.make?"":{value:g.make,label:g.make}})]}),(0,h.jsxs)("label",{className:d,children:["Price / 1 hour",(0,h.jsx)(f.ZP,{options:l,isSearchable:!0,styles:m,closeMenuOnSelect:!1,placeholder:"To",onChange:function(e){return _("rentalPrice",e.value)},value:""===g.rentalPrice?"":{value:g.rentalPrice,label:g.rentalPrice}})]}),(0,h.jsxs)("label",{className:d,children:["Car mileage / km",(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("input",{type:"text",name:"millageFrom",placeholder:"From",value:g.millageFrom,onChange:function(e){return _("millageFrom",e.target.value)}}),(0,h.jsx)("input",{type:"text",name:"millageTo",placeholder:"To",value:g.millageTo,onChange:function(e){return _("millageTo",e.target.value)}})]})]}),(0,h.jsx)("button",{type:"submit",className:"button-primary button-search",onClick:function(e){e.preventDefault(),n(g)},children:"Search"}),(0,h.jsx)("button",{type:"button",className:"button-primary button-search",onClick:j,children:"Reset"})]})}},3927:function(e,n,r){r.d(n,{lz:function(){return u},Br:function(){return l},qW:function(){return f},Tg:function(){return d},yC:function(){return x},dt:function(){return p}});var t=r(5861),a=r(4687),o=r.n(a),i=r(1243),c=r(2989);function s(e,n){var r=n.make,t=n.rentalPrice,a=n.millageFrom,o=n.millageTo;return e.filter((function(e){var n="All"===r||!r||e.make===r,i="Any"===t||!t||Number(e.rentalPrice.split("$")[1])<=Number(t),c="All"===a||!a||e.mileage>=a,s="All"===o||!o||e.mileage<=o;return n&&i&&c&&s}))}i.Z.defaults.baseURL="https://6500b83518c34dee0cd555f8.mockapi.io/adverts";var l=function(){var e=(0,t.Z)(o().mark((function e(){var n,r,t,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.Z.get("?page=".concat(n,"&limit=8"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/".concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(o().mark((function e(){var n,r,t,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.Z.get("?favs=true&page=".concat(n,"&limit=8"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(n,r){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("/".concat(n),{favs:r});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)(o().mark((function e(n,r,t){var a,i,l,u,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.next=3,f();case 3:return a=e.sent,(0,c.P)("cars",a.data),i=(0,c.R)("cars"),e.next=8,s(i,n);case 8:return l=e.sent,e.abrupt("return",l.slice(0,8*r));case 10:if(!(0,c.R)("cars")){e.next=16;break}return u=(0,c.R)("cars"),e.next=14,s(u,n);case 14:return d=e.sent,e.abrupt("return",d.slice(0,8*r));case 16:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},2989:function(e,n,r){r.d(n,{P:function(){return t},R:function(){return a}});var t=function(e,n){return sessionStorage.setItem(e,JSON.stringify(n))},a=function(e){return JSON.parse(sessionStorage.getItem(e))}},8592:function(e,n,r){r.d(n,{H3:function(){return i},Ku:function(){return a},ao:function(){return o},oM:function(){return t}});var t=function(e){return e.split(",")[1].trim()},a=function(e){return e.split(",")[2].trim()},o=function(e){return e.toLocaleString("en-US")},i=function(e){return"".concat(e.substring(1),"$")}}}]);
//# sourceMappingURL=173.dd72e244.chunk.js.map