"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,g=s["".concat(l,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(g,p(p({ref:t},i),{},{components:n})):r.createElement(g,p({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:a,p[1]=d;for(var m=2;m<o;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},p=void 0,d={unversionedId:"podman-generate/podman-generate",id:"podman-generate/podman-generate",title:"podman-generate",description:"% podman-generate 1",source:"@site/docs/podman-generate/podman-generate.md",sourceDirName:"podman-generate",slug:"/podman-generate/",permalink:"/website-new/docs/podman-generate/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-generate/podman-generate.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-export",permalink:"/website-new/docs/podman-export"},next:{title:"podman-generate-spec",permalink:"/website-new/docs/podman-generate/podman-generate-spec"}},l={},m=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],i={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-generate 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","generate - Generate structured data based on containers, pods or volumes"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman generate")," ",(0,a.kt)("em",{parentName:"p"},"subcommand")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"The generate command will create structured output (like YAML) based on a container, pod or volume."),(0,a.kt)("h2",{id:"commands"},"COMMANDS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kube"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/website-new/docs/podman-kube/podman-kube-generate"},"podman-kube-generate(1)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generate Kubernetes YAML based on containers, pods or volumes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/website-new/docs/podman-generate/podman-generate-spec"},"podman-generate-spec(1)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generate Specgen JSON based on containers or pods.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"systemd"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/website-new/docs/podman-generate/podman-generate-systemd"},"podman-generate-systemd(1)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generate systemd unit file(s) for a container or pod.")))),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-pod/"},"podman-pod(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-container/"},"podman-container(1)"))))}c.isMDXComponent=!0}}]);