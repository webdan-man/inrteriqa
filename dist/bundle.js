!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6)},function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",(function(){new o}));const o=function(){const e=document.querySelector(".menu"),t=(document.documentElement,document.querySelector('meta[name="viewport"]')),n=document.querySelector("header .header_right .contact_info"),o=document.querySelector("footer .wrap .footer_grup .footer_left .contact_info"),i=n.cloneNode(!0),c=document.querySelector("header .header_right .messengers"),r=c.cloneNode(!0),a=document.querySelector("#main nav .wrap"),l=document.querySelectorAll(".button_scroll"),u=document.querySelectorAll(".popap_button_scroll"),s=document.querySelector(".minus"),d=document.querySelector(".plus"),p=document.querySelector("#count_input input"),m=document.querySelector("#areaRoom"),f=document.querySelector("#total-cost"),h=document.querySelector("#total-day"),v=document.querySelector('input[name="name"]'),b=(document.querySelector('input[name="phone"]'),document.querySelector(".button_sostav")),g=document.querySelectorAll(".button_project"),y=document.querySelector("#sostav"),w=document.querySelector("#project"),k=document.querySelectorAll(".popap .close"),S=document.querySelectorAll('input[name="name"]'),q=document.querySelectorAll('input[name="phone"]'),x=document.querySelectorAll("input"),L=[n,c],_=function(){for(var e=0;e<k.length;e++)k[e].addEventListener("click",E)},E=function(){document.body.classList.remove("popap_open"),this.closest(".popap")&&this.closest(".popap").classList.remove("open")},C=function(){for(var e=0;e<u.length;e++)u[e].addEventListener("click",z)},j=function(){for(var e=0;e<l.length;e++)l[e].addEventListener("click",A)},A=function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"}),this.closest("#main")&&this.closest("#main").classList.remove("open")},z=function(e){e.preventDefault();const t=document.querySelector(this.getAttribute("href"));setTimeout(t.scrollIntoView({behavior:"smooth",block:"start"}),500),document.body.classList&&document.body.classList.remove("popap_open"),this.closest(".popap")&&this.closest(".popap").classList.remove("open"),this.closest("#main")&&this.closest("#main").classList.remove("open")},O=function(){e.addEventListener("click",(function(e){e.target.closest("#main").classList.toggle("open")}))},$=function(){document.documentElement.clientWidth<=1100&&document.documentElement.clientWidth>480&&(t.setAttribute("content","width=1100, initial-scale=1"),console.log("is laptop :)"))},M=function(){var e;e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&document.documentElement.clientWidth<=480&&(t.setAttribute("content","width=480, initial-scale="+window.screen.width/480+", user-scalable=no"),P(),N(),console.log("is mobile :)"))},N=function(){L.forEach(e=>{e.parentNode.removeChild(e)})},D=function(e){let t=document.createElement("span"),n=document.createTextNode(e.querySelector(".phone").innerHTML);t.className="phone",t.appendChild(n),e.removeChild(e.querySelector(".phone")),e.appendChild(t)},P=function(){let e=document.createElement("div");e.className="nav_info",e.appendChild(i),e.appendChild(r),a.appendChild(e)},T=function(){s.addEventListener("click",(function(){const e=p.value.replace("м²","");+e>1&&(p.value=+e-1+"м²",W())})),d.addEventListener("click",(function(){const e=p.value.replace("м²","");+e>0&&e<999&&(p.value=+e+1+"м²",W())})),p.addEventListener("change",(function(){const e=p.value.replace("м²","");+e>999&&(p.value="999м²"),+e<1&&(p.value="1м²"),W()})),p.oninput=function(){p.value=p.value.replace(/\D/g,"")+"м²",document.querySelector("#count_input input").style.width=12*p.value.length+"px"}},W=function(){const e=p.value.replace("м²","");m.textContent=e;const t=2500*+e;f.textContent=t.toLocaleString("ru"),I(e)},I=function(e){+e>0&&+e<=50&&(h.textContent=20),+e>50&&+e<=100&&(h.textContent=30),+e>100&&+e<=200&&(h.textContent=50),+e>200&&+e<=999&&(h.textContent=60)},V=function(){v.oninput=function(){let e="";if(!0!==/^[a-zA-Z]*$/.test(v.value)){for(let t of v.value)!0!==/[0-9]/.test(t)&&(e+=t);v.value=e}}},Y=function(){b.addEventListener("click",(function(e){main.style.transformOrigin="50% "+e.pageY+"px",document.body.classList.add("popap_open"),y.classList.add("open")}))},H=function(){for(var e=0;e<g.length;e++)g[e].addEventListener("click",(function(e){main.style.transformOrigin="50% "+e.pageY+"px",document.body.classList.add("popap_open"),w.classList.add("open")}))},R=function(){S.forEach((function(e){e.onblur=function(){this.value.length<2&&this.classList.add("error-input")}})),q.forEach((function(e){e.onblur=function(){this.value.length<10&&this.classList.add("error-input")}})),x.forEach((function(e){e.onfocus=function(){this.classList.remove("error-input")}}))};j(),O(),$(),M(),D(n),D(o),T(),V(),Y(),H(),_(),C(),R()};$(document).ready((function(){$('input[name="phone"]').mask("+7 (999) 999-99-99"),$("form").submit((function(e){if(e.preventDefault(),$(this).find("input").trigger("blur"),$(this).find("input").hasClass("error-input"))alert("Error");else{$(this).attr("method"),$(this).attr("action"),$(this).serialize();alert("Success")}}))}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);