/*!chibi 2.0.0, Copyright 2012-2016 Kyle Barrow, released under MIT license */
!function(){"use strict";function e(){var e;for(d=!0,e=0;e<h.length;e+=1)h[e]();h=[]}function t(){var t;for(p=!0,d||e(),t=0;t<f.length;t+=1)f[t]();f=[]}function n(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function a(e){return e.replace(/-\w/g,function(e){return e.charAt(1).toUpperCase()})}function s(e,t){return e.currentStyle?e.currentStyle[a(t)]:m.getComputedStyle?m.getComputedStyle(e,null).getPropertyValue(t):null}function c(e,t){return encodeURIComponent(e).replace(/%20/g,"+")+"="+encodeURIComponent(t).replace(/%20/g,"+")}function l(e,t,n){try{e.style[a(t)]=n}catch(s){}}function r(e){e.style.display="","none"===s(e,"display")&&(e.style.display="block")}function o(e){return e=e.reverse(),1===e.length&&(e=e[0]),e}function u(e){var t,a,s,l="";if(e.constructor===Object){for(t in e)if(e.hasOwnProperty(t))if(e[t].constructor===Array)for(a=0;a<e[t].length;a+=1)l+="&"+c(t,e[t][a]);else l+="&"+c(t,e[t])}else n(function(e){if("FORM"===e.nodeName)for(a=0;a<e.elements.length;a+=1)if(t=e.elements[a],!t.disabled)switch(t.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":t.length>0&&(l+="&"+c(t.name,t.value));break;case"select-multiple":for(s=0;s<t.length;s+=1)t[s].selected&&(l+="&"+c(t.name,t[s].value));break;case"checkbox":case"radio":t.checked&&(l+="&"+c(t.name,t.value));break;default:l+="&"+c(t.name,t.value)}},e);return l.length>0?l.substring(1):""}function i(e){var t,c,i,y=[],b=!1;if(e)if(e.nodeType&&1===e.nodeType)y=[e];else if("object"==typeof e)b="number"!=typeof e.length,y=e;else if("string"==typeof e)for(v.querySelectorAll||(v.querySelectorAll=function(e){var t,n,a,c=v.getElementsByTagName("head")[0],l=[];if(t=v.createElement("STYLE"),t.type="text/css",t.styleSheet){for(t.styleSheet.cssText=e+" {a:b}",c.appendChild(t),n=v.getElementsByTagName("*"),a=0;a<n.length;a+=1)"b"===s(n[a],"a")&&l.push(n[a]);c.removeChild(t)}return l}),c=v.querySelectorAll(e),i=0;i<c.length;i+=1)y[i]=c[i];return t=b?{}:y,t.ready=function(e){e&&(d?e():h.push(e))},t.loaded=function(e){e&&(p?e():f.push(e))},t.loop=function(e){"function"==typeof e&&n(function(t){return e.apply(t,arguments)},y)},t.find=function(e){if(e){var t,n=[];switch(e){case"first":y.length>0&&(y=[y.shift()]);break;case"last":y.length>0&&(y=[y.pop()]);break;case"odd":case"even":for(t="odd"===e?0:1;t<y.length;t+=2)n.push(y[t]);y=n}}return y.length>0?1===y.length?y[0]:y:!1},t.hide=function(){n(function(e){e.style.display="none"},y)},t.show=function(){n(function(e){r(e)},y)},t.toggle=function(){n(function(e){"none"===s(e,"display")?r(e):e.style.display="none"},y)},t.remove=function(){n(function(e){try{e.parentNode.removeChild(e)}catch(t){}},y),y=[]},t.css=function(e,t){var c=[];return n(function(n){t?l(n,e,t):n.style[a(e)]?c.push(n.style[a(e)]):s(n,e)?c.push(s(n,e)):c.push(null)},y),c.length>0?o(c):void 0},t.cls=function(e,t){var a,s,c,l,r,u=[];return e&&(a=e.split(/\s+/),t=t||"replace"),n(function(n){if(s=n.className,e){switch(t){case"add":n.className=s+" "+e;break;case"replace":n.className=e;break;case"has":case"toggle":case"remove":for(l=!0,r=0;r<a.length;r+=1)if(c=new RegExp("\\b"+a[r]+"\\b","g"),"has"===t){if(!s.match(c)){l=!1;break}}else"toggle"===t?n.className=n.className.match(c)?n.className.replace(c,""):n.className+" "+a[r]:n.className=n.className.replace(c,"");"has"===t&&u.push(l)}n.className=n.className.replace(/^\s+|\s+$/g,"")}else u.push(s)},y),u.length>0?o(u):void 0},t.html=function(e,t){var a,s,c=[];return n(function(n){if(t)for(a=v.createElement("div"),a.innerHTML=e;null!==(s=a.lastChild);)try{"before"===t?n.parentNode.insertBefore(s,n):"after"===t?n.parentNode.insertBefore(s,n.nextSibling):"append"===t?n.appendChild(s):"prepend"===t&&n.insertBefore(s,n.firstChild)}catch(l){break}else e?n.innerHTML=e:c.push(n.innerHTML)},y),c.length>0?o(c):void 0},t.attr=function(e,t){var a=[];return n(function(n){if(e)switch(e=e.toLowerCase()){case"style":t?n.style.cssText=t:n.style.cssText?a.push(n.style.cssText):a.push(null);break;case"class":t?n.className=t:n.className?a.push(n.className):a.push(null);break;default:t?n.setAttribute(e,t):n.getAttribute(e)?a.push(n.getAttribute(e)):a.push(null)}},y),a.length>0?o(a):void 0},t.val=function(e){var t,a,s,c,l=[],r=[];return"string"==typeof e&&(e=[e]),n(function(n){if(e)switch(n.nodeName){case"SELECT":for(t=0;t<n.length;t+=1)for(a=0;a<e.length;a+=1)if(n[t].selected="",n[t].value===e[a]){n[t].selected="selected";break}break;case"INPUT":switch(n.type){case"checkbox":case"radio":for(n.checked="",t=0;t<e.length;t+=1)if(n.value===e[t]){n.checked="checked";break}break;default:n.value=e[0]}break;case"TEXTAREA":case"BUTTON":n.value=e[0]}else switch(n.nodeName){case"SELECT":for(c=r.length,r.push([]),t=0;t<n.length;t+=1)n[t].selected&&r[c].push(n[t].value);switch(r[c].length){case 0:r[c]=null;break;case 1:r[c]=r[c][0]}break;case"INPUT":switch(n.type){case"checkbox":n.checked?r.push(n.value):r.push(null);break;case"radio":for(s=!1,t=0;t<l.length;t+=1)l[t][0]===n.name&&(n.checked&&(r[l[t][1]]=n.value),s=!0);s||(l.push([n.name,r.length]),n.checked?r.push(n.value):r.push(null));break;default:r.push(n.value)}break;case"TEXTAREA":case"BUTTON":r.push(n.value)}},y),r.length>0?o(r):void 0},t.on=function(t,a,s){(e===m||e===v)&&(y=[e]),n(function(e){v.addEventListener?s?e.removeEventListener(t,a,!1):e.addEventListener(t,a,!1):v.attachEvent&&(s?(e.detachEvent("on"+t,e[t+a]),e[t+a]=null):(e[t+a]=function(){return a.apply(e,arguments)},e.attachEvent("on"+t,e[t+a])))},y)},t.off=function(e,n){t.on(e,n,!0)},t.ajax=function(e,t,n,a,s){var c,l,r=u(y),o=-1===e.indexOf("?")?"?":"&",i=new RegExp("http[s]?://(.*?)/","gi"),h=i.exec(e),f="_ts="+ +new Date,d=v.getElementsByTagName("head")[0],p="chibi"+ +new Date+(g+=1);!s&&h&&m.location.host!==h[1]?(e+=o+r,a&&(e+="&"+f),e=e.replace("=%3F","=?"),n&&-1!==e.indexOf("=?")&&(e=e.replace("=?","="+p),m[p]=function(e){try{n(e,200)}catch(t){}m[p]=void 0}),l=document.createElement("script"),l.async=!0,l.src=e,l.onload=function(){d.removeChild(l)},d.appendChild(l)):(t=t||"GET",m.XMLHttpRequest?c=new XMLHttpRequest:m.ActiveXObject&&(c=new ActiveXObject("Microsoft.XMLHTTP")),c&&(t=t.toUpperCase(),"GET"===t&&(e+=o+r,r=null),a&&(e+="POST"===t?o+f:"&"+f),c.open(t,e,!0),c.onreadystatechange=function(){4===c.readyState&&n&&n(c.responseText,c.status)},c.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"===t&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(r)))},t}var h=[],f=[],d=!1,p=!1,g=0,v=document,m=window;v.addEventListener?(v.addEventListener("DOMContentLoaded",e,!1),m.addEventListener("load",t,!1)):v.attachEvent?(v.attachEvent("onreadystatechange",e),m.attachEvent("onload",t)):m.onload=t,m.$=i}();