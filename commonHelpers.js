import{i as l,S as c}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a={form:document.querySelector(".form"),textInput:document.querySelector("#query"),searchBtn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")},u={captions:!0,captionDelay:250,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0};a.form.addEventListener("submit",d);function d(s){s.preventDefault();const o=s.currentTarget.elements.query.value,i=new URLSearchParams({key:"42031589-0742425241f8784341d5a922f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});a.loader.classList.remove("is-hidden");try{fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{//!debug
t.total===0&&(l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.galleryList.innerHTML="",a.loader.classList.add("is-hidden")),a.galleryList.innerHTML=f(t.hits),a.loader.classList.add("is-hidden"),new c(".gallery-list a",u).refresh()}).catch(t=>{console.log(t)}).finally(()=>{a.form.reset()})}catch{console.log("error")}}function f(s){return s.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            data-source="${o.largeImageURL}"
            alt="${o.tags}"
          />
        </a>
      </li>
      `).join(`
`)}
//# sourceMappingURL=commonHelpers.js.map
