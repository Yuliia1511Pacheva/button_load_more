const e=document.querySelector("#search-form"),n=document.querySelector(".gallery"),t=document.querySelector(".load-more");let r=new SimpleLightbox(".gallery a"),a=12,i="",o=Math.round(12.5);async function s(e,n){const t=new URLSearchParams({key:"35795496-dc73936924deac0cc2e60d251",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:n});try{const e=await axios.get(`https://pixabay.com/api/?${t}`),{data:n}=e;return n}catch(e){console.error(e)}}function c(e){return e.map((({downloads:e,comments:n,views:t,likes:r,tags:a,largeImageURL:i,webformatURL:o})=>`\n  <div class="photo-card">\n  <a href="${i}">\n  <img src="${o}" alt="${a}" width="250" loading="lazy" />\n  </a>\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b> <br>${r}\n    </p>\n    <p class="info-item">\n      <b>Views</b><br>${t}\n    </p>\n    <p class="info-item">\n      <b>Comments</b><br>${n}\n    </p>\n    <p class="info-item">\n      <b>Downloads</b><br>${e}\n    </p>\n  </div>\n</div>\n  `)).join("")}e.addEventListener("submit",(function(e){e.preventDefault(),i=e.currentTarget.elements.searchQuery.value.trim(),s(i,a).then((e=>{if(!e.hits.length||!i)return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."),n.innerHTML="",void(t.hidden=!0);e.hits&&(n.innerHTML="",Notiflix.Notify.success(`Hooray! We found ${e.totalHits} images.`),n.insertAdjacentHTML("beforeend",c(e.hits)),r.refresh(),t.hidden=!1)})).catch((e=>console.log(e)))})),t.addEventListener("click",(function(){a+=1,a===o&&(Notiflix.Notify.info("We are sorry, but you have reached the end of search results."),t.style.display="none");s(i,a).then((e=>{n.insertAdjacentHTML("beforeend",c(e.hits)),r.refresh()}))}));
//# sourceMappingURL=index.2a779ca5.js.map