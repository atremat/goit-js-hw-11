import{S as c}from"./assets/vendor-870f0eb5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i={form:document.querySelector(".form"),textInput:document.querySelector("#query"),searchBtn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery-list"),loadingStatus:document.querySelector(".loading")},l={captions:!0,captionDelay:250,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0};i.form.addEventListener("submit",u);function u(n){n.preventDefault();const o=n.currentTarget.elements.query.value,a=new URLSearchParams({key:"42031589-0742425241f8784341d5a922f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});i.loadingStatus.classList.remove("is-hidden");try{fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t.hits),i.galleryList.innerHTML=f(t.hits);const e=new c(".gallery-list a",l)}).catch(t=>{console.log(t)})}catch{console.log("error")}}function f(n){return n.map(o=>`
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
