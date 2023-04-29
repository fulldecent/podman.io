"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,p={unversionedId:"podman-secret/podman-secret-ls",id:"podman-secret/podman-secret-ls",title:"podman-secret-ls",description:"% podman-secret-ls 1",source:"@site/docs/podman-secret/podman-secret-ls.md",sourceDirName:"podman-secret",slug:"/podman-secret/podman-secret-ls",permalink:"/website-new/docs/podman-secret/podman-secret-ls",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-secret/podman-secret-ls.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-secret-inspect",permalink:"/website-new/docs/podman-secret/podman-secret-inspect"},next:{title:"podman-secret-rm",permalink:"/website-new/docs/podman-secret/podman-secret-rm"}},i={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--filter</strong>, <strong>-f</strong>=<em>filter=value</em>",id:"--filter--ffiltervalue",level:4},{value:"<strong>--format</strong>=<em>format</em>",id:"--formatformat",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-secret-ls 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","secret","-","ls - List all available secrets"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman secret ls")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Lists all the secrets that exist. The output can be formatted to a Go template using the ",(0,a.kt)("strong",{parentName:"p"},"--format")," option."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--filter--ffiltervalue"},(0,a.kt)("strong",{parentName:"h4"},"--filter"),", ",(0,a.kt)("strong",{parentName:"h4"},"-f"),"=",(0,a.kt)("em",{parentName:"h4"},"filter=value")),(0,a.kt)("p",null,"Filter output based on conditions given.\nMultiple filters can be given with multiple uses of the --filter option."),(0,a.kt)("p",null,"Valid filters are listed below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Filter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"[Name]"," Secret name (accepts regex)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"[ID]"," Full or partial secret ID")))),(0,a.kt)("h4",{id:"--formatformat"},(0,a.kt)("strong",{parentName:"h4"},"--format"),"=",(0,a.kt)("em",{parentName:"h4"},"format")),(0,a.kt)("p",null,"Format secret output using Go template."),(0,a.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Placeholder")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".CreatedAt"),(0,a.kt)("td",{parentName:"tr",align:null},"When secret was created (relative timestamp, human-readable)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".ID"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec ..."),(0,a.kt)("td",{parentName:"tr",align:null},"Details of secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec.Driver"),(0,a.kt)("td",{parentName:"tr",align:null},"Driver info")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec.Driver.Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Driver name (string)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec.Driver.Options ..."),(0,a.kt)("td",{parentName:"tr",align:null},"Driver options (map of driver-specific options)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec.Labels"),(0,a.kt)("td",{parentName:"tr",align:null},"Labels for this secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Spec.Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".UpdatedAt"),(0,a.kt)("td",{parentName:"tr",align:null},"When secret was last updated (relative timestamp, human-readable)")))),(0,a.kt)("p",null,"@@option noheading"),(0,a.kt)("h4",{id:"--quiet--q"},(0,a.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,a.kt)("strong",{parentName:"h4"},"-q")),(0,a.kt)("p",null,"Print secret IDs only."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ podman secret ls\n$ podman secret ls --format "{{.Name}}"\n$ podman secret ls --filter name=confidential\n')),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-secret/"},"podman-secret(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"January 2021, Originally compiled by Ashley Cui ",(0,a.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}c.isMDXComponent=!0}}]);