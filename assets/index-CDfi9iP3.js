(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();class v extends HTMLElement{constructor(e,n,i=""){super(),this.attachShadow({mode:"open"});const t=document.createElement(e);t.innerHTML=i,t.className=n,this.shadowRoot.appendChild(t)}}const u=o=>document.getElementById(o),s=(o,e,n,i=null)=>{let t=document.createElement(o);if(n&&t.classList.add(...n),i&&(t.innerHTML=i),e)for(const r in e)if(r==="style"&&typeof e[r]=="object"){const d=Object.entries(e[r]).map(([l,a])=>`${l.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${a}`).join("; ");t.setAttribute("style",d)}else t[r]=e[r];return(...r)=>(r&&t.append(...r),t)};class y extends v{constructor(){super("div","svg-cart-wrapper",`<svg
                aria-hidden="true"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.01108 2.85232C3.09258 2.30609 3.60146 1.92934 4.1477 2.01084L4.00014 2.99989C4.1477 2.01084 4.14815 2.01091 4.14861 2.01097L4.14958 2.01112L4.15172 2.01145L4.15677 2.01223L4.16993 2.01434C4.18005 2.016 4.19282 2.01817 4.20807 2.02092C4.23855 2.02641 4.2791 2.03421 4.32826 2.04479C4.42633 2.0659 4.56022 2.09842 4.71808 2.14638C5.03 2.24113 5.45544 2.40211 5.88738 2.66849C6.77121 3.21355 7.7099 4.23332 7.67503 5.93064C7.67957 6.12762 7.68039 6.32931 7.67807 6.53491C13.461 5.76934 17.241 5.4252 19.834 5.54225C21.2251 5.60505 22.3345 5.80194 23.2568 6.17177C24.1984 6.54933 24.8983 7.08841 25.4909 7.76237C26.1636 8.5273 26.5553 9.62852 26.7703 10.7581C26.99 11.9127 27.0473 13.2164 26.9631 14.4961C26.8788 15.7759 26.6506 17.067 26.2775 18.1947C25.9116 19.3006 25.3726 20.3524 24.5989 21.0431C23.8057 21.7514 22.5073 22.1967 21.1457 22.4796C19.7362 22.7724 18.0788 22.926 16.4106 22.9388C14.7416 22.9516 13.031 22.8237 11.5143 22.5392C10.0231 22.2594 8.61516 21.8096 7.6342 21.1123L7.63398 21.1121C6.53327 20.3293 5.92028 19.1724 5.58769 17.9231C5.25736 16.6822 5.18288 15.2763 5.21075 13.8772C5.23636 12.5917 5.35071 11.2534 5.45825 9.99477C5.46807 9.87991 5.47782 9.76572 5.48745 9.65229C5.60443 8.27415 5.70128 7.01853 5.67505 5.95558C5.67463 5.93854 5.67465 5.92149 5.6751 5.90446C5.6965 5.09579 5.30309 4.6579 4.83756 4.3708C4.5925 4.21968 4.33677 4.12079 4.13678 4.06003C4.03868 4.03023 3.95892 4.0111 3.90733 3.99999C3.88167 3.99447 3.86338 3.99102 3.85374 3.98928L3.8465 3.98802C3.30354 3.90367 2.92989 3.39654 3.01108 2.85232ZM7.5813 8.56538C7.55088 8.98098 7.51594 9.40142 7.48028 9.82144C7.47085 9.9326 7.46136 10.0438 7.45186 10.155C7.34332 11.4266 7.23459 12.7004 7.21035 13.917C7.18392 15.2438 7.26073 16.4332 7.52038 17.4086C7.77777 18.3755 8.19344 19.0558 8.79315 19.4823C9.4217 19.929 10.4909 20.3123 11.8831 20.5735C13.25 20.8299 14.8292 20.9508 16.3953 20.9388C17.9621 20.9268 19.4847 20.7819 20.7389 20.5214C22.0411 20.2508 22.89 19.8877 23.2667 19.5513L23.2669 19.5512C23.6636 19.1971 24.061 18.5269 24.3787 17.5665C24.6894 16.6276 24.8921 15.5077 24.9674 14.3647C25.0426 13.2216 24.988 12.0909 24.8055 11.132C24.6183 10.1481 24.3177 9.45684 23.989 9.08309C23.5804 8.61837 23.1323 8.27663 22.5124 8.02808C21.8733 7.7718 21.0079 7.59728 19.7438 7.54022C17.2962 7.42973 13.581 7.76477 7.5813 8.56538Z"
                  fill="white"
                />
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7473 13.2834C16.7473 12.7312 17.195 12.2834 17.7473 12.2834H21.3758C21.9281 12.2834 22.3758 12.7312 22.3758 13.2834C22.3758 13.8357 21.9281 14.2834 21.3758 14.2834H17.7473C17.195 14.2834 16.7473 13.8357 16.7473 13.2834Z"
                fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.72877 25.5769C9.12132 25.5769 9.4406 25.8957 9.4406 26.2878C9.4406 26.6811 9.12132 26.9999 8.72877 26.9999C8.3349 26.9999 8.01562 26.6811 8.01562 26.2878C8.01562 25.8957 8.3349 25.5769 8.72877 25.5769Z"
                  fill="white"
                  />
                  <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.72877 26.5769C8.88471 26.5769 9.01562 26.4505 9.01562 26.2878C9.01562 26.1275 8.88591 25.9999 8.72877 25.9999C8.56913 25.9999 8.4406 26.1287 8.4406 26.2878C8.4406 26.4493 8.57032 26.5769 8.72877 26.5769ZM7.01562 26.2878C7.01562 25.341 7.7851 24.5769 8.72877 24.5769C9.67233 24.5769 10.4406 25.3422 10.4406 26.2878C10.4406 27.2335 9.67352 27.9999 8.72877 27.9999C7.7839 27.9999 7.01562 27.2347 7.01562 26.2878Z"
                  fill="white"
                  />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2478 25.5769C22.6417 25.5769 22.961 25.8957 22.961 26.2878C22.961 26.6811 22.6417 26.9999 22.2478 26.9999C21.8553 26.9999 21.536 26.6811 21.536 26.2878C21.536 25.8957 21.8553 25.5769 22.2478 25.5769Z"
                  fill="white"
                  />
                  <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2478 26.5769C22.4063 26.5769 22.536 26.4493 22.536 26.2878C22.536 26.1287 22.4075 25.9999 22.2478 25.9999C22.0907 25.9999 21.961 26.1275 21.961 26.2878C21.961 26.4505 22.0919 26.5769 22.2478 26.5769ZM20.536 26.2878C20.536 25.3422 21.3043 24.5769 22.2478 24.5769C23.1915 24.5769 23.961 25.341 23.961 26.2878C23.961 27.2347 23.1927 27.9999 22.2478 27.9999C21.3031 27.9999 20.536 27.2335 20.536 26.2878Z"
                  fill="white"
                />
              </svg>`);const e=document.createElement("style");e.textContent=`
          .svg-cart-wrapper path {
            
            fill: var(--cart-icon-color, white);
          }
          .svg-cart-wrapper svg {
            position: relative;
            top: var(--cart-icon-top, 0px);
            width: var(--cart-icon-size-x, 30px);
            height: var(--cart-icon-size-y, 30px);
            fill: var(--cart-icon-color, white);
          }
        `,this.shadowRoot.append(e)}}customElements.define("x-cart-svg",y);function c({title:o,image:e,tag:n,tagColor:i,price:t,productPage:r}){return console.log(r),s("article",{},["card"])(c.Tag({name:n,color:i}),c.Body({title:o,image:e,price:t}),c.Footer(r))}c.Tag=function(o){const e=s("div",{},["card__tag",`card__tag--${o.color}`],o.name)();return s("div",{},["card__tag--wrapper"])(e)};c.Body=function({title:o,image:e,price:n}){return s("div",{},["card__body"])(c.Body.Image(e,o),c.Body.Title(o),c.Body.PriceWrapper(n))};c.Body.Image=function(o,e){return s("img",{src:o,alt:e},["card__body__img"])()};c.Body.Title=function(o){return s("h3",{},["card__body__title"],o)()};c.Body.PriceWrapper=function(o){const e=s("div",{},["card__price"]);if(o.type=="fixed")return e(c.Body.PriceWrapper.Price(o.amount));{const n=s("i",{ariaHidden:!0},["card__price--svg"])(),i=c.Body.PriceWrapper.Price(o.amount[0]),t=c.Body.PriceWrapper.Price(o.amount[1]);return e(i,n,t)}};c.Body.PriceWrapper.Price=function(o){const e=s("span",{},["card__price--dollar"],"$")();return s("span",{})(e,o)};c.Footer=function(o){return s("div",{},["card__body__footer"])(c.Footer.Button(),s("a",{href:o},["card__footer__link"],`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1678 6.8325L6.83396 11.1664" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.1817 6.83905C7.1817 6.83905 10.5185 6.18356 11.1677 6.83269C11.8168 7.48181 11.1592 10.8165 11.1592 10.8165" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.9374C14.2027 15.9374 15.9375 14.2026 15.9375 8.99988C15.9375 3.79713 14.2027 2.06238 9 2.06238C3.79725 2.06238 2.0625 3.79713 2.0625 8.99988C2.0625 14.2026 3.79725 15.9374 9 15.9374Z" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `)(s("span",{},["link"],"More info")()))};c.Footer.Button=function(){return s("button",{},["button","button--sm","card__footer__button","button--active"])(s("x-cart-svg",{})(),"Buy")};c.Events={Buy:function(o,e){const n=(()=>{var r=o.getElementsByTagName("img")[0];return{element:r,get src(){return r.src},get width(){return r.getBoundingClientRect().width},get height(){return r.getBoundingClientRect().height},get top(){return r.getBoundingClientRect().top},get left(){return r.getBoundingClientRect().left},get borderRadius(){return r.computedStyleMap().get("border-radius").toString()}}})(),i=r=>`${r}px`,t=s("img",{src:n.src,style:{transition:"500ms ease-in-out",borderRadius:n.borderRadius,position:"fixed",zIndex:20001,height:i(n.height),top:i(n.top),left:i(n.left),boxShadow:"0 0 6px 1px rgba(0,0,0,0.2)"}})();o.append(t),t.style.top=i(e.getBoundingClientRect().top-e.getBoundingClientRect().height),t.style.left=i(e.getBoundingClientRect().left+11),t.style.height="70px",setTimeout(()=>{t.style.top=i(e.getBoundingClientRect().top-e.getBoundingClientRect().height/2),setTimeout(()=>{t.style.scale=0},100)},500)}};const w=(o,e=!0)=>{const n=t=>`button--toggle__${t?"left":"right"}`,i={get current(){return e},toggle(){return o.classList.replace(n(!e),n(e)),e=!e,e}};return o.addEventListener("click",()=>{e=i.toggle()}),i};function f(o,e=8,n="fruit"){o.addEventListener("mousemove",i=>{Array.from(o.getElementsByClassName(n)).forEach(async t=>{const r=o.getBoundingClientRect(),d=i.clientX-r.left,l=i.clientY-r.top,a=d/r.width*100,p=l/r.height*100,g=(a-50)/e,C=(p-50)/e;t.style.transform=`translate(${g}px, ${C}px)`})},{passive:!0})}function h({id:o,cover:e,close:n=!0}){const i=u(o),[t,r]=i.children,d=r.getElementsByClassName("dropdown__button--close")[0],l={get isOpen(){return n},open(){document.body.style.overflowY="hidden",document.body.style.paddingRight="15px",i.classList.add("dropdown-wrapper--open"),window.addEventListener("click",a),n=!1},close(){document.body.style.overflowY="auto",document.body.style.paddingRight="0",n=!0,window.removeEventListener("click",a),i.classList.remove("dropdown-wrapper--open")}};var a=p=>{const g=(C,m)=>C.contains(m);!g(t,p.target)&&!g(r,p.target)&&l.close()};return n||l.open(),t.onclick=()=>{d||n?l.open():l.close()},d&&(d.onclick=l.close),l}window.onload=function(){const o=u("cards"),e=u("card-list"),n=u("cart");setTimeout(()=>{document.body.classList.remove("pageLoading")},400),w(u("switch-lang")),f(document.getElementsByClassName("section__hero")[0],7),f(o,7),h({id:"top-nav-contacts",cover:!1,close:!0}),h({id:"menu-dropdown",cover:!0,close:!0}),(async()=>Array.from(e.children).forEach(i=>{i.getElementsByTagName("button")[0].onclick=()=>{c.Events.Buy(i,n)}}))()};
