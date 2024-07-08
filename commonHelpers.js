import{S as d,i as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m="44810429-780319b334a9c60538a2ecf11",y="https://pixabay.com/api/";async function p(e){const r=`${y}?key=${m}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(r);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}let c;function h(e){const r=document.querySelector(".gallery");r.innerHTML=e.map(n=>g(n)).join(""),c?c.refresh():c=new d(".gallery a")}function g(e){return`
    <div class="photo-card">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${e.likes}
        </p>
        <p class="info-item">
            <b>Views:</b> ${e.views}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${e.comments}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${e.downloads}
        </p>
        </div>
    </div>
    `}function l(e){f.error({title:"Error",message:e})}function b(){document.querySelector(".loading").style.display="block"}function u(){document.querySelector(".loading").style.display="none"}function i(){const e=document.querySelector(".gallery");e.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("search-form"),r=e.querySelector('input[name="query"]');e.addEventListener("submit",async n=>{n.preventDefault();const s=r.value.trim();if(s===""){i(),l("Please enter a search query"),r.value="";return}try{b();const t=await p(s);u(),t.hits.length===0?(i(),l("Sorry, there are no images matching your search query. Please try again!"),r.value=""):(i(),h(t.hits))}catch{u(),i(),l("Failed to fetch images. Please try again later.")}})});
//# sourceMappingURL=commonHelpers.js.map
