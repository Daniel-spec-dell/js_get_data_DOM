var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.replace(/,/g,""))}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length;function r(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}document.querySelector(".total-population").textContent=r(e),document.querySelector(".average-population").textContent=r(n);
//# sourceMappingURL=index.5ef0d809.js.map
