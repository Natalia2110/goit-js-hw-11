import{S as m,i as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(t){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"44418953-cdbfe82a1d191a3eebe28ee3b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:100}),e=`${o}${r}?${a}`,n=await fetch(e,{options:{headers:{"Access-Control-Allow-Origin":"*","Content - Type":"application/json","X-RateLimit-Limit":"100","X-RateLimit-Remaining":"99","X-RateLimit-Reset":"0.6"}}});if(n.ok)return n.json();throw new Error(n.status)}let i;function d(t){const o=document.querySelector(".gallery"),r=t.map(f).join("");o.insertAdjacentHTML("beforeEnd",r),i&&i.refresh(),i=new m(".gallery a",{captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250})}const f=t=>`<li class="gallery-item">
      <a class="gallery-link" href=${t.largeImageURL}>
        <img class="gallery-image" src=${t.webformatURL} alt=${t.tags} />
      </a>
      <ul class="desc-list">
        <li class="desc-item">
          <span class="desc-text">Likes</span>
          <span class="number">${t.likes}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Views</span>
          <span class="number">${t.views}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Comments</span>
          <span class="number">${t.comments}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Downloads</span>
          <span class="number">${t.downloads}</span>
        </li>
      </ul>
    </li>`,g="/goit-js-hw-11/assets/alert-icon-40fa32d5.svg",h=document.querySelector(".form"),y=document.querySelector(".form-input"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",t=>{t.preventDefault(),L.innerHTML="";const o=t.target.elements.photo.value.trim();o===""?l():(b(),p(o).then(r=>{if(y.value="",r.total===0)l();else return d(r.hits)}).catch(r=>alert(r)).finally(()=>w()))});function l(){return u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",messageLineHeight:"0.03em",titleColor:"#fff",titleSize:"16",titleLineHeight:"0.03em",position:"topRight",backgroundColor:"#ef4040",theme:"dark",iconUrl:g,iconColor:"#FAFAFB"})}function b(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
