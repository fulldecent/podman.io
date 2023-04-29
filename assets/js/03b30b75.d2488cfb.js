"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[6156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=i(n),u=o,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(k,p(p({ref:t},l),{},{components:n})):r.createElement(k,p({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:o,p[1]=d;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},p=void 0,d={unversionedId:"podman-network/podman-network-update",id:"podman-network/podman-network-update",title:"podman-network-update",description:"% podman-network-update 1",source:"@site/docs/podman-network/podman-network-update.md",sourceDirName:"podman-network",slug:"/podman-network/podman-network-update",permalink:"/website-new/docs/podman-network/podman-network-update",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-network/podman-network-update.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-network-rm",permalink:"/website-new/docs/podman-network/podman-network-rm"},next:{title:"podman-pause",permalink:"/website-new/docs/podman-pause"}},s={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--dns-add</strong>",id:"--dns-add",level:4},{value:"<strong>--dns-drop</strong>",id:"--dns-drop",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2}],l={toc:i},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-network-update 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","network","-","update - Update an existing Podman network"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman network update")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"network")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Allow changes to existing container networks. At present, only changes to the DNS servers in use by a network is supported."),(0,o.kt)("p",null,"NOTE: Only supported with the netavark network backend."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--dns-add"},(0,o.kt)("strong",{parentName:"h4"},"--dns-add")),(0,o.kt)("p",null,"Accepts array of DNS resolvers and add it to the existing list of resolvers configured for a network."),(0,o.kt)("h4",{id:"--dns-drop"},(0,o.kt)("strong",{parentName:"h4"},"--dns-drop")),(0,o.kt)("p",null,"Accepts array of DNS resolvers and removes them from the existing list of resolvers configured for a network."),(0,o.kt)("h2",{id:"example"},"EXAMPLE"),(0,o.kt)("p",null,"Update a network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman network update network1 --dns-add 8.8.8.8,1\n")),(0,o.kt)("p",null,"Update a network and add/remove dns servers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman network update network1 --dns-drop 8.8.8.8 --dns-add 3.3.3.3\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-network/"},"podman-network(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-network/podman-network-inspect"},"podman-network-inspect(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-network/podman-network-ls"},"podman-network-ls(1)"))))}c.isMDXComponent=!0}}]);