"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,v=u["".concat(i,".").concat(c)]||u[c]||d[c]||a;return n?o.createElement(v,l(l({ref:t},s),{},{components:n})):o.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[u]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>m,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},l=void 0,m={unversionedId:"podman-volume/podman-volume-rm",id:"podman-volume/podman-volume-rm",title:"podman-volume-rm",description:"% podman-volume-rm 1",source:"@site/docs/podman-volume/podman-volume-rm.md",sourceDirName:"podman-volume",slug:"/podman-volume/podman-volume-rm",permalink:"/website-new/docs/podman-volume/podman-volume-rm",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-volume/podman-volume-rm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-volume-reload",permalink:"/website-new/docs/podman-volume/podman-volume-reload"},next:{title:"podman-volume-unmount",permalink:"/website-new/docs/podman-volume/podman-volume-unmount"}},i={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"<strong>--time</strong>, <strong>-t</strong>=<em>seconds</em>",id:"--time--tseconds",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"Exit Status",id:"exit-status",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-volume-rm 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","volume","-","rm - Remove one or more volumes"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman volume rm")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"volume")," ","[...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Removes one or more volumes. Only volumes that are not being used will be removed.\nIf a volume is being used by a container, an error will be returned unless the ",(0,r.kt)("strong",{parentName:"p"},"--force"),"\nflag is being used. To remove all volumes, use the ",(0,r.kt)("strong",{parentName:"p"},"--all")," flag.\nVolumes can be removed individually by providing their full name or a unique partial name."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Remove all volumes."),(0,r.kt)("h4",{id:"--force--f"},(0,r.kt)("strong",{parentName:"h4"},"--force"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Remove a volume by force.\nIf it is being used by containers, the containers will be removed first."),(0,r.kt)("h4",{id:"--help"},(0,r.kt)("strong",{parentName:"h4"},"--help")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h4",{id:"--time--tseconds"},(0,r.kt)("strong",{parentName:"h4"},"--time"),", ",(0,r.kt)("strong",{parentName:"h4"},"-t"),"=",(0,r.kt)("em",{parentName:"h4"},"seconds")),(0,r.kt)("p",null,"Seconds to wait before forcibly stopping running containers that are using the specified volume. The --force option must be specified to use the --time option."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman volume rm myvol1 myvol2\n\n$ podman volume rm --all\n\n$ podman volume rm --force myvol\n")),(0,r.kt)("h2",{id:"exit-status"},"Exit Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"0")," All specified volumes removed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1")," One of the specified volumes did not exist, and no other failures"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2")," One of the specified volumes is being used by a container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"125")," The command fails for any other reason"),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-volume/"},"podman-volume(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"November 2018, Originally compiled by Urvashi Mohnani ",(0,r.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}d.isMDXComponent=!0}}]);