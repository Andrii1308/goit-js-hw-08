var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==s.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,f,u,l,c=0,d=!1,s=!1,y=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function S(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||s&&i>=a}function h(){var e,n,i,o=p();if(S(o))return x(o);u=setTimeout(h,(e=o-l,n=o-c,i=t-e,s?v(i,a-n):i))}function x(e){return(u=void 0,y&&o)?j(e):(o=r=void 0,f)}function O(){var e,n=p(),i=S(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(h,t),d?j(e):f;if(s)return u=setTimeout(h,t),j(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=b(t)||0,g(i)&&(d=!!i.leading,a=(s="maxWait"in i)?m(b(i.maxWait)||0,t):a,y="trailing"in i?!!i.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},O.flush=function(){return void 0===u?f:x(p())},O}(e,t,{leading:o,maxWait:t,trailing:r})};const y="feedback-form-state";let j={};const S={feedbackForm:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};S.feedbackForm.addEventListener("submit",function(e){e.preventDefault(),j.email&&j.message?(console.log(j),e.target.reset(),localStorage.removeItem(y),j={}):alert("Заповність всі поля, будь ласка!")}),S.feedbackForm.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){j[e.target.name]=e.target.value,localStorage.setItem(y,JSON.stringify(j))},500)),function(){let e=localStorage.getItem(y);if(e){var t,n;j=JSON.parse(e),S.textarea.value=null!==(t=j.message)&&void 0!==t?t:"",S.inputEmail.value=null!==(n=j.email)&&void 0!==n?n:""}}();
//# sourceMappingURL=03-feedback.afeac5aa.js.map