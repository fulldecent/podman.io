"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const r={},i=void 0,c={unversionedId:"podman-container/podman-container-clone",id:"podman-container/podman-container-clone",title:"podman-container-clone",description:"% podman-container-clone 1",source:"@site/docs/podman-container/podman-container-clone.md",sourceDirName:"podman-container",slug:"/podman-container/podman-container-clone",permalink:"/website-new/docs/podman-container/podman-container-clone",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-container/podman-container-clone.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-cleanup",permalink:"/website-new/docs/podman-container/podman-container-cleanup"},next:{title:"podman-container-diff",permalink:"/website-new/docs/podman-container/podman-container-diff"}},p={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--cpus</strong>",id:"--cpus",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"<strong>--name</strong>",id:"--name",level:4},{value:"<strong>--pod</strong>=<em>name</em>",id:"--podname",level:4},{value:"<strong>--run</strong>",id:"--run",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-container-clone 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","container","-","clone - Creates a copy of an existing container"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container clone")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"container")," ",(0,a.kt)("em",{parentName:"p"},"name")," ",(0,a.kt)("em",{parentName:"p"},"image")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container clone")," creates a copy of a container, recreating the original with an identical configuration. This command takes three arguments: the first being the container ID or name to clone, the second argument in this command can change the name of the clone from the default of $ORIGINAL_NAME-clone, and the third is a new image to use in the cloned container."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("p",null,"@@option blkio-weight"),(0,a.kt)("p",null,"@@option blkio-weight-device"),(0,a.kt)("p",null,"@@option cpu-period"),(0,a.kt)("p",null,"If none is specified, the original container's cpu period is used"),(0,a.kt)("p",null,"@@option cpu-quota"),(0,a.kt)("p",null,"If none is specified, the original container's CPU quota are used."),(0,a.kt)("p",null,"@@option cpu-rt-period"),(0,a.kt)("p",null,"If none is specified, the original container's CPU runtime period is used."),(0,a.kt)("p",null,"@@option cpu-rt-runtime"),(0,a.kt)("p",null,"@@option cpu-shares"),(0,a.kt)("p",null,"If none are specified, the original container's CPU shares are used."),(0,a.kt)("h4",{id:"--cpus"},(0,a.kt)("strong",{parentName:"h4"},"--cpus")),(0,a.kt)("p",null,"Set a number of CPUs for the container that overrides the original containers CPU limits. If none are specified, the original container's Nano CPUs are used."),(0,a.kt)("p",null,"This is shorthand\nfor ",(0,a.kt)("strong",{parentName:"p"},"--cpu-period")," and ",(0,a.kt)("strong",{parentName:"p"},"--cpu-quota"),", so only ",(0,a.kt)("strong",{parentName:"p"},"--cpus")," or either both the ",(0,a.kt)("strong",{parentName:"p"},"--cpu-period")," and ",(0,a.kt)("strong",{parentName:"p"},"--cpu-quota")," options can be set."),(0,a.kt)("p",null,"This option is not supported on cgroups V1 rootless systems."),(0,a.kt)("p",null,"@@option cpuset-cpus"),(0,a.kt)("p",null,"If none are specified, the original container's CPUset is used."),(0,a.kt)("p",null,"@@option cpuset-mems"),(0,a.kt)("p",null,"If none are specified, the original container's CPU memory nodes are used."),(0,a.kt)("p",null,"@@option destroy"),(0,a.kt)("p",null,"@@option device-read-bps"),(0,a.kt)("p",null,"@@option device-write-bps"),(0,a.kt)("h4",{id:"--force--f"},(0,a.kt)("strong",{parentName:"h4"},"--force"),", ",(0,a.kt)("strong",{parentName:"h4"},"-f")),(0,a.kt)("p",null,"Force removal of the original container that we are cloning. Can only be used in conjunction with ",(0,a.kt)("strong",{parentName:"p"},"--destroy"),"."),(0,a.kt)("p",null,"@@option memory"),(0,a.kt)("p",null,"If no memory limits are specified, the original container's will be used."),(0,a.kt)("p",null,"@@option memory-reservation"),(0,a.kt)("p",null,"If unspecified, memory reservation will be the same as memory limit from the\ncontainer being cloned."),(0,a.kt)("p",null,"@@option memory-swap"),(0,a.kt)("p",null,"If unspecified, the container being cloned will be used to derive\nthe swap value."),(0,a.kt)("p",null,"@@option memory-swappiness"),(0,a.kt)("h4",{id:"--name"},(0,a.kt)("strong",{parentName:"h4"},"--name")),(0,a.kt)("p",null,"Set a custom name for the cloned container. The default if not specified is of the syntax: ",(0,a.kt)("strong",{parentName:"p"},"<ORIGINAL_NAME>-clone")),(0,a.kt)("h4",{id:"--podname"},(0,a.kt)("strong",{parentName:"h4"},"--pod"),"=",(0,a.kt)("em",{parentName:"h4"},"name")),(0,a.kt)("p",null,"Clone the container in an existing pod. It is helpful to move a container to an\nexisting pod. The container will join the pod shared namespaces, losing its configuration\nthat conflicts with the shared namespaces."),(0,a.kt)("h4",{id:"--run"},(0,a.kt)("strong",{parentName:"h4"},"--run")),(0,a.kt)("p",null,"When set to true, this flag runs the newly created container after the\nclone process has completed, this specifies a detached running mode."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman container clone d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman container clone --name=clone d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman container clone --destroy --cpus=5 d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# podman container clone 2d4d4fca7219b4437e0d74fcdc272c4f031426a6eacd207372691207079551de new_name fedora\nResolved "fedora" as an alias (/etc/containers/registries.conf.d/shortnames.conf)\nTrying to pull registry.fedoraproject.org/fedora:latest...\nGetting image source signatures\nCopying blob c6183d119aa8 done\nCopying config e417cd49a8 done\nWriting manifest to image destination\nStoring signatures\n5a9b7851013d326aa4ac4565726765901b3ecc01fcbc0f237bc7fd95588a24f9\n')),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-create"},"podman-create(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://man7.org/linux/man-pages/man7/cgroups.7.html"},"cgroups(7)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"January 2022, Originally written by Charlie Doern ",(0,a.kt)("a",{parentName:"p",href:"mailto:cdoern@redhat.com"},"cdoern@redhat.com")))}m.isMDXComponent=!0}}]);