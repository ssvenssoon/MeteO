import{r as m,o as l,c as d,a as e,b as _,w as u,F as f,d as p,e as y,v as b,t as c,f as g,p as x,g as k,h as V,i as L,j as A}from"./vendor.4f4dfca7.js";const C=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};C();var I="/MeteO/assets/weather-icon-2.1b8e42ef.png";var h=(s,o)=>{const r=s.__vccOpts||s;for(const[a,t]of o)r[a]=t;return r};const W={},N={class:"nav-bar"},R={class:"icon-home"},$=e("img",{src:I,alt:"Weather app icon",class:"icon"},null,-1),F={class:"ul-navbar"},O=p("Weather"),P=p("About"),S=p("Contact");function T(s,o,r,a,t,n){const i=m("RouterLink"),w=m("RouterView");return l(),d(f,null,[e("nav",N,[e("div",R,[_(i,{to:"/"},{default:u(()=>[$]),_:1})]),e("ul",F,[e("li",null,[_(i,{to:"/"},{default:u(()=>[O]),_:1})]),e("li",null,[_(i,{to:"/about"},{default:u(()=>[P]),_:1})]),e("li",null,[_(i,{to:"/contact"},{default:u(()=>[S]),_:1})])])]),e("main",null,[_(w)])],64)}var H=h(W,[["render",T]]);const M={};function j(s,o){return l(),d("h1",null,"About")}var B=h(M,[["render",j]]);const D={};function E(s,o){return l(),d("h1",null,"Contact")}var q=h(D,[["render",E]]);const K={data(){return{value:"",api_key:"aa7344cdd18bf02e87442e7b2b5f4a29",url_base:"http://api.openweathermap.org/data/2.5/",weather:{}}},methods:{fetchWeather(s){s.key=="Enter"&&fetch(`${this.url_base}weather?q=${this.value}&units=metric&APPID=${this.api_key}`).then(o=>o.json()).then(this.setResults)},setResults(s){this.weather=s,console.log(this.weather)}}},v=s=>(x("data-v-9f7ef29c"),s=s(),k(),s),G={class:"input-field"},U={class:"mb-3"},z=v(()=>e("label",{for:"exampleFormControlInput1",class:"form-label"}," Search city/country ",-1)),J={key:0,class:"weather-info"},Q=v(()=>e("p",{class:"today"},"Today",-1)),X={class:"location"},Y={class:"container"},Z={class:"row row-cols-2"},ee={class:"col"},te={class:"temp"},se={class:"col"},oe={class:"feels-like"},ne={class:"col"},ie={class:"temp-max"},ce={class:"col"},re={class:"temp-min"},ae={class:"col"},le={class:"weather"},de={class:"col"},_e={class:"wind"},ue={class:"col"},he={class:"humidity"},pe={class:"col"},me={class:"pressure"},fe={class:"col"},ve={class:"longitude"},we={class:"col"},ye={class:"latitude"};function be(s,o,r,a,t,n){return l(),d(f,null,[e("div",G,[e("div",U,[z,y(e("input",{class:"form-control",id:"exampleFormControlInput1",placeholder:"G\xF6teborg","onUpdate:modelValue":o[0]||(o[0]=i=>t.value=i),onKeypress:o[1]||(o[1]=(...i)=>n.fetchWeather&&n.fetchWeather(...i))},null,544),[[b,t.value]])])]),typeof t.weather.main!="undefined"?(l(),d("div",J,[Q,e("div",X,c(t.weather.name)+", "+c(t.weather.sys.country),1),e("div",Y,[e("div",Z,[e("div",null,[e("div",ee,[e("div",te,"Temp: "+c(Math.round(t.weather.main.temp)),1)])]),e("div",null,[e("div",se,[e("div",oe," Feels like: "+c(Math.round(t.weather.main.feels_like)),1)])]),e("div",null,[e("div",ne,[e("div",ie,"Temp max: "+c(t.weather.main.temp_max),1)])]),e("div",null,[e("div",ce,[e("div",re,"Temp min: "+c(t.weather.main.temp_min),1)])]),e("div",null,[e("div",ae,[e("div",le,"Weather: "+c(t.weather.weather[0].main),1)])]),e("div",null,[e("div",de,[e("div",_e,"Wind: "+c(t.weather.wind.speed)+" m/s",1)])]),e("div",null,[e("div",ue,[e("div",he,"Humidity: "+c(t.weather.main.humidity)+"%",1)])]),e("div",null,[e("div",pe,[e("div",me," Pressure: "+c(t.weather.main.pressure)+" hPa ",1)])]),e("div",null,[e("div",fe,[e("div",ve,"Longitude: "+c(t.weather.coord.lon),1)])]),e("div",null,[e("div",we,[e("div",ye,"Latitude: "+c(t.weather.coord.lat),1)])])])])])):g("",!0)],64)}var ge=h(K,[["render",be],["__scopeId","data-v-9f7ef29c"]]),xe=V({history:L(),routes:[{component:B,path:"/about"},{component:q,path:"/contact"},{component:ge,path:"/"}]});A(H).use(xe).mount("#app");
