import{_ as h}from"../chunks/preload-helper.41c905a7.mjs";import{S as v,i as f,s as g,k as c,l as m,m as p,h as l,n as u,b as y,G as k,J as T,H as d,o as w,K as b,w as E}from"../chunks/index.fd7152b0.mjs";function z(o){let a,r,i,e;return{c(){a=c("main"),r=c("div"),this.h()},l(n){a=m(n,"MAIN",{class:!0});var s=p(a);r=m(s,"DIV",{class:!0}),p(r).forEach(l),s.forEach(l),this.h()},h(){u(r,"class","svelte-c3qtym"),u(a,"class","svelte-c3qtym")},m(n,s){y(n,a,s),k(a,r),o[2](r),i||(e=T(window,"resize",o[1]),i=!0)},p:d,i:d,o:d,d(n){n&&l(a),o[2](null),i=!1,e()}}}function M(o,a,r){let i,e;w(async()=>{{const t=await h(()=>import("../chunks/leaflet-src.a1f00874.mjs").then(_=>_.l),[],import.meta.url);e=t.map(i).setView([53.462147658636255,9.998711356931745],6),t.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),t.marker([54.78065463305339,8.82010421472079],{title:"tj",interactive:!0}).addTo(e),t.marker([37.15667659707556,-7.567374318490646],{title:"björn",interactive:!0}).addTo(e),t.marker([48.1319107636191,11.597328269263155],{title:"wg",interactive:!0}).addTo(e),t.marker([54.86601997512145,8.664989118933663],{title:"eltern",interactive:!0}).addTo(e),t.marker([53.5839063248693,10.030755051845581],{title:"bruder",interactive:!0}).addTo(e),t.marker([53.528094164617904,8.105920701789987],{title:"alte Wohnung",interactive:!0}).addTo(e),t.marker([54.86966009631935,8.895859553098285],{title:"lde",interactive:!0}).addTo(e),t.marker([52.256295421053245,8.1017744410037],{title:"ex",interactive:!0}).addTo(e),t.marker([54.778399572631464,8.827109637840012],{title:"ng",interactive:!0}).addTo(e)}}),b(async()=>{e&&e.remove()});function n(){e&&e.invalidateSize()}function s(t){E[t?"unshift":"push"](()=>{i=t,r(0,i)})}return[i,n,s]}class x extends v{constructor(a){super(),f(this,a,M,z,g,{})}}export{x as default};