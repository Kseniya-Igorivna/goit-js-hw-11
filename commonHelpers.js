import{S as d,i as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="44810429-780319b334a9c60538a2ecf11",m="https://pixabay.com/api/";async function p(t){const o=`${m}?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(o);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}let a;function y(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(n=>h(n)).join(""),a?a.refresh():a=new d(".gallery a")}function h(t){return`
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
    `}function c(t){u.error({title:"Error",message:t})}function g(){document.querySelector(".loading").style.display="block"}function l(){document.querySelector(".loading").style.display="none"}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("search-form"),o=t.querySelector('input[name="query"]');t.addEventListener("submit",async n=>{n.preventDefault();const s=o.value.trim();if(s===""){c("Please enter a search query");return}try{g();const e=await p(s);l(),e.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):y(e.hits)}catch{l(),c("Failed to fetch images. Please try again later.")}})});
//# sourceMappingURL=commonHelpers.js.map
