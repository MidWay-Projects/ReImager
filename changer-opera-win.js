// ==UserScript==
// @name Reimager | Changer | Opera | Win |
// @icon https://reimager.midway.ovh/
// @author Scorbunny
// @namespace   https://github.com/MidWay-Projects/ReImager/tree/main
// @version     1.3
// @description Podmień obrazy na stronach
// @include http://*/*
// @include https://*/*
// @grant GM_addStyle
// @updateURL https://raw.githubusercontent.com/MidWay-Projects/ReImager/main/code.js
// @downloadURL https://raw.githubusercontent.com/MidWay-Projects0/ReImager/main/changer-opera-win.js
// @homepage https://raw.github.com/MidWay-Projects/ReImager/tree/main
// @supportURL https://github.com/MidWay-Projects/ReImager/issues
// ==/UserScript==
window.onload = function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const originalWidth = img.offsetWidth;
    const originalHeight = img.offsetHeight;
    img.src = 'https://reimager.midway.ovh/reimager.png';
    img.style.width = originalWidth + 'px';
    img.style.height = originalHeight + 'px';
  });
  const css = `
    img {
      transition: all 0.5s ease;
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  console.log("Gigachaded");
};
// >>>>>>> Dziala tylko na Tampermokney
