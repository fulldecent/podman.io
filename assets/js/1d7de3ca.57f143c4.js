"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2024],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(h,p(p({ref:n},s),{},{components:t})):a.createElement(h,p({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},p=void 0,i={unversionedId:"podman-machine/podman-machine-os-apply",id:"podman-machine/podman-machine-os-apply",title:"podman-machine-os-apply",description:"% podman-machine-os-apply 1",source:"@site/docs/podman-machine/podman-machine-os-apply.md",sourceDirName:"podman-machine",slug:"/podman-machine/podman-machine-os-apply",permalink:"/website-new/docs/podman-machine/podman-machine-os-apply",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-machine/podman-machine-os-apply.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-machine-list",permalink:"/website-new/docs/podman-machine/podman-machine-list"},next:{title:"podman-machine-os",permalink:"/website-new/docs/podman-machine/podman-machine-os"}},m={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"<strong>--restart</strong>",id:"--restart",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-machine-os-apply 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","machine","-","os","-","apply - Apply an OCI image to a Podman Machine's OS"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman machine os apply")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"image")," ","[vm]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Apply machine OS changes from an OCI image."),(0,r.kt)("p",null,"VM's that use OS's that use rpm-ostreee have the capability to rebase itself from the content of an OCI image.\n",(0,r.kt)("inlineCode",{parentName:"p"},"podman machine image apply")," takes an OCI image with container native ostree functionality and rebases itself on that image."),(0,r.kt)("p",null,"By default, Podman machines on Mac and Linux use an rpm-ostree based distrubition (Fedora CoreOS)."),(0,r.kt)("p",null,"For more information, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://coreos.github.io/rpm-ostree/container/"},"rpm-ostree docs"),"."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--help"},(0,r.kt)("strong",{parentName:"h4"},"--help")),(0,r.kt)("p",null,"Print usage statement."),(0,r.kt)("h4",{id:"--restart"},(0,r.kt)("strong",{parentName:"h4"},"--restart")),(0,r.kt)("p",null,"Restart VM after applying changes."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman machine os apply quay.io/podman_next\n$ podman machine os apply quay.io/podman_next podman-machine-defualt\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-machine/"},"podman-machine(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-machine/podman-machine-os"},"podman-machine-os(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"February 2023, Originally compiled by Ashley Cui ",(0,r.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}d.isMDXComponent=!0}}]);