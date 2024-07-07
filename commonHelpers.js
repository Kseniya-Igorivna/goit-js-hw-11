import{S as u,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="44810429-780319b334a9c60538a2ecf11",m="https://pixabay.com/api/";async function p(t){const r=`${m}?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(r);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}let a;function y(t){const r=document.querySelector(".gallery");r.innerHTML=t.map(n=>h(n)).join(""),a?a.refresh():a=new u(".gallery a")}function h(t){return`
    <div class="photo-card">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${t.likes}
        </p>
        <p class="info-item">
            <b>Views:</b> ${t.views}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${t.comments}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${t.downloads}
        </p>
        </div>
    </div>
    `}function c(t){d.error({title:"Error",message:t})}function g(){document.querySelector(".loading").style.display="block"}function l(){document.querySelector(".loading").style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("search-form"),r=t.querySelector('input[name="query"]');t.addEventListener("submit",async n=>{n.preventDefault();const s=r.value.trim();if(s===""){c("Please enter a search query"),r.value="";return}try{g();const e=await p(s);l(),e.hits.length===0?(c("Sorry, there are no images matching your search query. Please try again!"),r.value=""):y(e.hits)}catch{l(),c("Failed to fetch images. Please try again later.")}})});
//# sourceMappingURL=commonHelpers.js.map
