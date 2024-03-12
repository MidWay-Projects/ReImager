// ==UserScript==
// @name Reimager | Changer | Chrome | Win |
// @icon https://reimager.midway.ovh/
// @author Scorbunny
// @namespace   https://github.com/MidWay-Projects/ReImager/tree/main
// @version     1.3
// @description Podmień obrazy na stronach
// @include http://*/*
// @include https://*/*
// @grant GM_addStyle
// @updateURL https://raw.githubusercontent.com/MidWay-Projects/ReImager/main/code.js
// @downloadURL https://raw.githubusercontent.com/MidWay-Projects0/ReImager/main/changer-chrome-win.js
// @homepage https://raw.github.com/MidWay-Projects/ReImager/tree/main
// @supportURL https://github.com/MidWay-Projects/ReImager/issues
// ==/UserScript==
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const originalWidth = img.offsetWidth;
    const originalHeight = img.offsetHeight;
    img.src = 'https://reimager.midway.ovh';
    img.style.width = originalWidth + 'px';
    img.style.height = originalHeight + 'px';
  });
});
console.log("ReImage");
// >>>>>>> Dziala tylko na Tampermokney