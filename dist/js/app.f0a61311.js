(function(){"use strict";var n={9308:function(n,e,t){var r=t(9242),o=t(3396);function u(n,e,t,r,u,i){const a=(0,o.up)("FmRadio");return(0,o.wg)(),(0,o.j4)(a)}var i=t(4870);const a=(0,o._)("track",{kind:"captions"},null,-1),c=[a];var f=(0,o.aZ)({__name:"FmRadio",setup(n){const e=(0,i.iH)(null);let t=32,r=-1;const u=3e3;function a(){e.value?.play()}function f(){e.value?.pause()}function l(){e.value&&(e.value.src=`http://bfmstream.bfm.ru:8004/fm${t}`,e.value.preload="none",e.value.load())}function v(n){console.log(n),t!==n&&(t=n,l())}function s(){f(),setTimeout((()=>l()),u)}function d(){console.log("Произошла ошибка при загрузке аудио"),s()}function p(){e.value?.paused&&a()}function m(){const n=e.value?.currentTime||0,t=e.value?.duration||0,r=t-n;r<3&&!e.value?.paused&&(f(),setTimeout((()=>a()),3e3))}function b(){const{connection:n}=navigator;if(n&&n.downlink){const e=.7*n.downlink;v(e<.5?32:64)}}return(0,o.bv)((()=>{l(),e.value?.addEventListener("error",d),e.value?.addEventListener("canplay",p),e.value?.addEventListener("timeupdate",m),r=setInterval(b,5e3)})),(0,o.Ah)((()=>{e.value?.removeEventListener("error",d),e.value?.removeEventListener("canplay",p),e.value?.removeEventListener("timeupdate",m),clearInterval(r)})),(n,t)=>((0,o.wg)(),(0,o.iD)("audio",{ref_key:"audioPlayer",ref:e,controls:"",autoplay:""},c,512))}});const l=f;var v=l,s=(0,o.aZ)({name:"App",components:{FmRadio:v}}),d=t(89);const p=(0,d.Z)(s,[["render",u]]);var m=p;(0,r.ri)(m).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,u){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],u=n[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(l--,1);var f=o();void 0!==f&&(e=f)}}return e}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(e&&e(r);f<i.length;f++)u=i[f],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(l)},r=self["webpackChunkfm_radio_buffering"]=self["webpackChunkfm_radio_buffering"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9308)}));r=t.O(r)})();
//# sourceMappingURL=app.f0a61311.js.map