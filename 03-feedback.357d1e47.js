function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=l||u||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var i,o,r,a,f,l,u=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function j(e){return u=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||c&&e-u>=r}function S(){var e=g();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return c?d(n,r-(e-u)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function w(){var e=g(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(c)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,r=(c="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){const t=e.target.closest(".feedback-form").elements.email.value,n=e.target.closest(".feedback-form").elements.message.value,i={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500));const j=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};y.elements.email.value=j.email,y.elements.message.value=j.message,y.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t.email=t.email.trim(),t.message=t.message.trim(),""===t.email||""===t.message)return alert("fill all fields");console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.357d1e47.js.map