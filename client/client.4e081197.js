function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,m=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:p(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:A(t,r,e[r])}function L(t){return Array.from(t.childNodes)}function P(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){P(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function H(t,e,n){return C(t,e,n,$)}function U(t,e,n){return C(t,e,n,y)}function O(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function k(t){return O(t," ")}function M(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function j(t){const e=M(t,"HTML_TAG_START",0),n=M(t,"HTML_TAG_END",e);if(e===n)return new K;P(t);const r=t.splice(e,n-e+1);v(r[0]),v(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(s)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),v(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function W(t){h=t}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(t){J().$$.on_mount.push(t)}function V(t){J().$$.after_update.push(t)}function F(t){J().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(t){Z.push(t)}const st=new Set;let ot=0;function it(){const t=h;do{for(;ot<X.length;){const t=X[ot];ot++,W(t),at(t.$$)}for(W(null),X.length=0,ot=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];st.has(e)||(st.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,st.clear(),W(t)}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function ft(){lt.r||s(lt.c),lt=lt.p}function dt(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ht(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function mt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function _t(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(rt)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,c,l,u=[-1]){const f=h;W(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&wt(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const t=L(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&dt(e.$$.fragment),_t(e,n.target,n.anchor,n.customElement),m=!1,it()}W(f)}class yt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function xt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const St={};var Tt={owner:"Canboo",repo:"upptime","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",assignees:["Canboo"],sites:[{name:"CIAOYU",url:"https://www.ciaoyu.com.tw",icon:"https://www.ciaoyu.com.tw/favicon.ico"},{name:"HPA-ARTM",url:"https://artm.hpa.gov.tw"},{name:"NYCU-DISCUSS",url:"https://discuss.ord.nycu.edu.tw/login"},{name:"NYCU-FUND",url:"https://fund.nycu.edu.tw"},{name:"NYCU-GA",url:"https://ga.nycu.edu.tw"},{name:"NYCU-ORD",url:"https://ord.nycu.edu.tw"}],"status-website":{cname:"upptime.ciaoyu.com.tw",favicon:"https://www.ciaoyu.com.tw/favicon.ico",logoUrl:"https://www.ciaoyu.com.tw/logo.png",name:"系統監測平台",introTitle:"",introMessage:"",navbar:[{title:"狀態",href:"/"}]},i18n:{activeIncidents:"活動事件",allSystemsOperational:"正常運作中",incidentReport:"事件 #$NUMBER 報告 →",activeIncidentSummary:"在 $DATE 打開，有 $POSTS 個訊息",incidentTitle:"事件 $NUMBER 的詳細訊息",incidentDetails:"事件詳細訊息",incidentFixed:"已修復",incidentOngoing:"正在進行",incidentOpenedAt:"開始於",incidentClosedAt:"結束於",incidentSubscribe:"訂閱更新",incidentViewOnGitHub:"在 GitHub 上查看",incidentCommentSummary:"由 $AUTHOR 在 $DATE 发布",incidentBack:"← 返回所有事件",pastIncidents:"過往的事件",pastIncidentsResolved:"$POSTS 个问题在 $MINUTES 分鐘内得到解决",liveStatus:"即時狀態",overallUptime:"正常運作時間： $UPTIME",overallUptimeTitle:"正常運作時間",averageResponseTime:"平均回應速度: $TIMEms",averageResponseTimeTitle:"平均回應速度",sevelDayResponseTime:"7 天回應速度",responseTimeMs:"回應時間（毫秒）",up:"🟩 正常",down:"🟥 停機",degraded:"🟨 系統缓慢",ms:"毫秒",loading:"讀取中",navGitHub:"GitHub",footer:"© 2019-2022 Ciaoyu-baobao Information Co., Ltd",rateLimitExceededTitle:"超出速率限制",rateLimitExceededIntro:"您已超过一小時内可以执行的请求数，因此您必须等待才能再次访问此网站。或者，您可以添加 GitHub 个人访问令牌以继续使用本网站。",rateLimitExceededWhatDoesErrorMean:"这个错误是什么意思？本网站使用 GitHub API 访问有关我们网站狀態的即時数据。默认情况下，GitHub 允许每个 IP 地址每小時 60 个请求，您已经消耗了这些请求。",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"我该如何解决？",rateLimitExceededErrorFix:"您可以再等一个小時，您的 IP 地址限制将恢复。或者，您可以添加您的 GitHub 个人访问令牌，这将为您提供每小時额外 5,000 个请求。",rateLimitExceededGeneratePAT:"了解如何生成个人访问令牌",rateLimitExceededHasSet:"您有一个个人访问令牌集。",rateLimitExceededRemoveToken:"删除令牌",rateLimitExceededGitHubPAT:"GitHub 个人访问令牌",rateLimitExceededCopyPastePAT:"复制并粘贴您的令牌",rateLimitExceededSaveToken:"保存令牌",errorTitle:"发生错误",errorIntro:"尝试获取最新狀態详细信息时出错。",errorText:"您可以稍后再试。",errorHome:"转到主页",pastScheduledMaintenance:"過往的預定維護",scheduledMaintenance:"定期維護",scheduledMaintenanceSummaryStarted:"從 $DATE 開始，持續 $DURATION 分鐘",scheduledMaintenanceSummaryStarts:"從 $DATE 開始，持續 $DURATION 分鐘",startedAt:"開始在",startsAt:"開始於",duration:"持續時間",durationMin:"$DURATION 分鐘",incidentCompleted:"已完成",incidentScheduled:"已預定",url:"網址",status:"狀態",history:"歷史紀錄",responseTime:"回應速度",uptime:"正常比例",responseTimeGraphAlt:"回應速度圖像",responseTimeDay:"24 小時回應速度",responseTimeWeek:"7 天正常運作時間",responseTimeMonth:"30天的正常運作時間",responseTimeYear:"1年的正常運作時間",uptimeDay:"24 小時正常運作時間",uptimeWeek:"7 天正常運作時間",uptimeMonth:"30天的正常運作時間",uptimeYear:"1年的正常運作時間",liveStatusHtmlComment:"<！ -即時狀態- >",degradedPerformance:"🟨 性能降低",completeOutage:"🟥 全部系統停擺中",partialOutage:"🟧 部份系統停擺中"},path:"https://upptime.ciaoyu.com.tw"};function Nt(t,e,n){const r=t.slice();return r[1]=e[n],r}function At(e){let n,r,s,o,i=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=$("img"),this.h()},l(t){n=H(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,r=Tt["status-website"].logoUrl)||A(n,"src",r),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}(),a=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,r,s=Tt["status-website"].name+"";return{c(){n=$("div"),r=E(s)},l(t){n=H(t,"DIV",{});var e=L(n);r=O(e,s),e.forEach(v)},m(t,e){_(t,n,e),g(n,r)},p:t,d(t){t&&v(n)}}}();return{c(){n=$("div"),r=$("a"),i&&i.c(),s=x(),a&&a.c(),this.h()},l(t){n=H(t,"DIV",{});var e=L(n);r=H(e,"A",{href:!0,class:!0});var o=L(r);i&&i.l(o),s=k(o),a&&a.l(o),o.forEach(v),e.forEach(v),this.h()},h(){A(r,"href",o=Tt["status-website"].logoHref||Tt.path),A(r,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),i&&i.m(r,null),g(r,s),a&&a.m(r,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&i.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&v(n),i&&i.d(),a&&a.d()}}}function It(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),r=E(a),i=x(),this.h()},l(t){e=H(t,"LI",{});var s=L(e);n=H(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=O(o,a),o.forEach(v),i=k(s),s.forEach(v),this.h()},h(){A(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",o=t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),A(n,"class","svelte-a08hsz")},m(t,s){_(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",s)},d(t){t&&v(e)}}}function Lt(e){let n,r,s,o,i,a=Tt["status-website"]&&Tt["status-website"].logoUrl&&At(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=It(Nt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(1&s){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Nt(t,n,o);r[o]?r[o].p(i,s):(r[o]=It(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&v(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,r,s,o,i=Tt.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=E(i),this.h()},l(t){n=H(t,"LI",{});var e=L(n);r=H(e,"A",{href:!0,class:!0});var o=L(r);s=O(o,i),o.forEach(v),e.forEach(v),this.h()},h(){A(r,"href",o=`https://github.com/${Tt.owner}/${Tt.repo}`),A(r,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&v(n)}}}();return{c(){n=$("nav"),r=$("div"),a&&a.c(),s=x(),o=$("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=H(t,"NAV",{class:!0});var e=L(n);r=H(e,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=k(u),o=H(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=k(f),l&&l.l(f),f.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){A(o,"class","svelte-a08hsz"),A(r,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&a.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&v(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Pt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Rt extends yt{constructor(t){super(),$t(this,t,Pt,Lt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ht(Ut(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ot(Ht(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ut(s[8])+'" alt="'+Ut(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ut(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ot(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ut(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function kt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Dt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function qt(e){let n,r;return{c(){n=$("script"),this.h()},l(t){n=H(t,"SCRIPT",{src:!0}),L(n).forEach(v),this.h()},h(){c(n.src,r=e[8].src)||A(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function zt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Bt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=H(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Kt(e){let n,r,s,o,i,a,c,u,f,d,h,m,p,b,y,E,T,N,I=Ot(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",P=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,r=S(),this.h()},l(t){n=j(t),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}();let R=((Tt["status-website"]||{}).themeUrl?Gt:Dt)(e),C=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=jt(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&v(e)}}}(e),U=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&v(e)}}}(e),O=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(kt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=kt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&v(e)}}}(e),M=Tt["status-website"].css&&function(e){let n,r,s=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new K,r=S(),this.h()},l(t){n=j(t),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}(),D=Tt["status-website"].js&&function(e){let n,r,s=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new K,r=S(),this.h()},l(t){n=j(t),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}(),G=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,r=S(),this.h()},l(t){n=j(t),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}();m=new Rt({props:{segment:e[0]}});const q=e[2].default,z=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(q,e,e[1],null);return{c(){P&&P.c(),n=S(),R.c(),r=$("link"),s=$("link"),o=$("link"),C&&C.c(),i=S(),U&&U.c(),a=S(),O&&O.c(),c=S(),M&&M.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),gt(m.$$.fragment),p=x(),b=$("main"),z&&z.c(),y=x(),E=$("footer"),T=$("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(e),n=S(),R.l(e),r=H(e,"LINK",{rel:!0,href:!0}),s=H(e,"LINK",{rel:!0,type:!0,href:!0}),o=H(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),i=S(),U&&U.l(e),a=S(),O&&O.l(e),c=S(),M&&M.l(e),u=S(),D&&D.l(e),f=S(),e.forEach(v),d=k(t),G&&G.l(t),h=k(t),bt(m.$$.fragment,t),p=k(t),b=H(t,"MAIN",{class:!0});var l=L(b);z&&z.l(l),l.forEach(v),y=k(t),E=H(t,"FOOTER",{class:!0});var g=L(E);T=H(g,"P",{}),L(T).forEach(v),g.forEach(v),this.h()},h(){A(r,"rel","stylesheet"),A(r,"href",`${Tt.path}/global.css`),A(s,"rel","icon"),A(s,"type","image/svg"),A(s,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){P&&P.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),C&&C.m(document.head,null),g(document.head,i),U&&U.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),_(t,d,e),G&&G.m(t,e),_(t,h,e),_t(m,t,e),_(t,p,e),_(t,b,e),z&&z.m(b,null),_(t,y,e),_(t,E,e),g(E,T),T.innerHTML=I,N=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&P.p(t,e),R.p(t,e),(Tt["status-website"]||{}).scripts&&C.p(t,e),(Tt["status-website"]||{}).links&&U.p(t,e),(Tt["status-website"]||{}).metaTags&&O.p(t,e),Tt["status-website"].css&&M.p(t,e),Tt["status-website"].js&&D.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),z&&z.p&&(!N||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(z,q,t,t[1],N?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){N||(dt(m.$$.fragment,t),dt(z,t),N=!0)},o(t){ht(m.$$.fragment,t),ht(z,t),N=!1},d(t){P&&P.d(t),v(n),R.d(t),v(r),v(s),v(o),C&&C.d(t),v(i),U&&U.d(t),v(a),O&&O.d(t),v(c),M&&M.d(t),v(u),D&&D.d(t),v(f),t&&v(d),G&&G.d(t),t&&v(h),vt(m,t),t&&v(p),t&&v(b),z&&z.d(t),t&&v(y),t&&v(E)}}}function Wt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Jt extends yt{constructor(t){super(),$t(this,t,Wt,Kt,i,{segment:0})}}function Yt(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=E(r)},l(t){e=H(t,"PRE",{});var s=L(e);n=O(s,r),s.forEach(v)},m(t,r){_(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&v(e)}}}function Vt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Yt(e);return{c(){r=x(),s=$("h1"),o=E(e[0]),i=x(),a=$("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(v),r=k(t),s=H(t,"H1",{class:!0});var n=L(s);o=O(n,e[0]),n.forEach(v),i=k(t),a=H(t,"P",{class:!0});var h=L(a);c=O(h,f),h.forEach(v),l=k(t),d&&d.l(t),u=S(),this.h()},h(){A(s,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){_(t,r,e),_(t,s,e),g(s,o),_(t,i,e),_(t,a,e),g(a,c),_(t,l,e),d&&d.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&f!==(f=t[1].message+"")&&D(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Yt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&v(r),t&&v(s),t&&v(i),t&&v(a),t&&v(l),d&&d.d(t),t&&v(u)}}}function Ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends yt{constructor(t){super(),$t(this,t,Ft,Vt,i,{status:0,error:1})}}function Qt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),r=S()},l(t){n&&bt(n.$$.fragment,t),r=S()},m(t,e){n&&_t(n,t,e),_(t,r,e),s=!0},p(t,e){const s=16&e?mt(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{vt(t,1)})),ft()}i?(n=new i(a()),gt(n.$$.fragment),dt(n.$$.fragment,1),_t(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&dt(n.$$.fragment,t),s=!0)},o(t){n&&ht(n.$$.fragment,t),s=!1},d(t){t&&v(r),n&&vt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){_t(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(dt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function te(t){let e,n,r,s;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){i[e].m(t,n),_(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ut(),ht(i[c],1,1,(()=>{i[c]=null})),ft(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),dt(n,1),n.m(r.parentNode,r))},i(t){s||(dt(n),s=!0)},o(t){ht(n),s=!1},d(t){i[e].d(t),t&&v(r)}}}function ee(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Jt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){_t(n,t,e),r=!0},p(t,[e]){const r=12&e?mt(s,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(dt(n.$$.fragment,t),r=!0)},o(t){ht(n.$$.fragment,t),r=!1},d(t){vt(n,t)}}}function ne(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return V(l),u=St,f=r,J().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class re extends yt{constructor(t){super(),$t(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],oe=[{js:()=>Promise.all([import("./index.06f4f478.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.41efe0d3.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.740e050e.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.5c6a046a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.4562a5c5.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,fe=1;const de="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),de.pushState({id:ue},"",s.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function we(t){if(he[ue]=ve(),t.state){const e=be(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){ue=t}(fe),de.replaceState({id:ue},"",location.href)}function $e(t,e,n,r){return ce(this,void 0,void 0,(function*(){const s=!!e;if(s)ue=e;else{const t=ve();he[ue]=t,ue=e=++fe,he[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,xe=null;function Se(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,ye(document)));if(e)xe&&t===xe.href||(xe={href:t,promise:qe(e)}),xe.promise}(e.href)}function Te(t){clearTimeout(Ee),Ee=setTimeout((()=>{Se(t)}),20)}function Ne(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,ye(document)));if(n){const r=$e(n,null,e.noscroll);return de[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),r}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ie,Le,Pe,Re=!1,Ce=[],He="{}";const Ue={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:xt(null),session:xt(Ae&&Ae.session)};let Oe,ke,Me;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function De(t){return ce(this,void 0,void 0,(function*(){Ie&&Ue.preloading.set(!0);const e=function(t){return xe&&xe.href===t.href?xe.promise:qe(t)}(t),n=Le={},r=yield e,{redirect:s}=r;if(n===Le)if(s)yield Ne(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ge(n,e,je(e,t.page))}}))}function Ge(t,e,n){return ce(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Ie?Ie.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield Pe},e.notify=Ue.page.notify,Ie=new re({target:Me,props:e,hydrate:!0})),Ce=t,He=JSON.stringify(n.query),Re=!0,ke=!1}))}function qe(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Pe){const t=()=>({});Pe=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Oe)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==He)return!0;const s=Ce[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(ke||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let o;o=Re||!Ae.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Oe):{}:Ae.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Ce[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var ze,Be,Ke;Ue.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Oe=t,!Re)return;ke=!0;const e=be(new URL(location.href)),n=Le={},{redirect:r,props:s,branch:o}=yield qe(e);n===Le&&(r?yield Ne(r.location,{replaceState:!0}):yield Ge(o,s,je(s,e.page)))})))),ze={target:document.querySelector("#sapper")},Be=ze.target,Me=Be,Ke=Ae.baseUrl,me=Ke,pe=De,"scrollRestoration"in de&&(de.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{de.scrollRestoration="auto"})),addEventListener("load",(()=>{de.scrollRestoration="manual"})),addEventListener("click",_e),addEventListener("popstate",we),addEventListener("touchstart",Se),addEventListener("mousemove",Te),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ae;Pe||(Pe=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Pe},level1:{props:{status:o,error:i},component:Xt},segments:s},c=ge(n);Ge([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;de.replaceState({id:fe},"",e);const n=be(new URL(location.href));if(n)return $e(n,fe,!0,t)}));export{vt as A,T as B,s as C,Q as D,j as E,c as F,f as G,K as H,B as I,Ot as J,y as K,U as L,Ne as M,G as N,N as O,e as P,I as Q,mt as R,yt as S,V as T,F as U,u as V,pt as W,rt as X,z as Y,L as a,O as b,H as c,v as d,$ as e,A as f,_ as g,g as h,$t as i,x as j,k,ut as l,ht as m,t as n,ft as o,dt as p,Y as q,Tt as r,i as s,E as t,D as u,S as v,w,gt as x,bt as y,_t as z};

import __inject_styles from './inject_styles.803b7e80.js';