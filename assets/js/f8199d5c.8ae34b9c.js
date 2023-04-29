"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3320],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=i(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[s]="string"==typeof t?t:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8720:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={},o=void 0,p={unversionedId:"podman-pod/podman-pod-inspect",id:"podman-pod/podman-pod-inspect",title:"podman-pod-inspect",description:"% podman-pod-inspect 1",source:"@site/docs/podman-pod/podman-pod-inspect.md",sourceDirName:"podman-pod",slug:"/podman-pod/podman-pod-inspect",permalink:"/website-new/docs/podman-pod/podman-pod-inspect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-pod/podman-pod-inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-exists",permalink:"/website-new/docs/podman-pod/podman-pod-exists"},next:{title:"podman-pod-kill",permalink:"/website-new/docs/podman-pod/podman-pod-kill"}},d={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:i},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-pod-inspect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","pod","-","inspect - Displays information describing a pod"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod inspect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"pod")," ..."),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Displays configuration and state information about a given pod. It also displays information about containers\nthat belong to the pod."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--format--fformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Change the default output format. This can be of a supported type like 'json'\nor a Go template.\nValid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlkioDeviceReadBps"),(0,r.kt)("td",{parentName:"tr",align:null},"Block I/O Device Read, in bytes/sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlkioDeviceWriteBps"),(0,r.kt)("td",{parentName:"tr",align:null},"Block I/O Device Read, in bytes/sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlkioWeight"),(0,r.kt)("td",{parentName:"tr",align:null},"Block I/O Weight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlkioWeightDevice"),(0,r.kt)("td",{parentName:"tr",align:null},"Block I/O Device Weight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CgroupParent"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod cgroup parent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CgroupPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod cgroup path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Containers"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod containers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUQuota"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU quota")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUSetCPUs"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU Set CPUs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUSetMems"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU Set Mems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUShares"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU Shares")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreateCgroup"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether cgroup was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreateCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"Create command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when the pod was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreateInfra"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether infrastructure created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Devices"),(0,r.kt)("td",{parentName:"tr",align:null},"Devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ExitPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"Exit policy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod hostname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".InfraConfig ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Infra config (contains further fields)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".InfraContainerID"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod infrastructure ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".InspectPodData ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Nested structure, for experts only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemoryLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit, bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemorySwap"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory swap limit, in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Mounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Mounts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NumContainers"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of containers in the pod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SecurityOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"Security options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SharedNamespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod shared namespaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".State"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".VolumesFrom"),(0,r.kt)("td",{parentName:"tr",align:null},"Volumes from")))),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman pod inspect foobar\n{\n\n     "Id": "3513ca70583dd7ef2bac83331350f6b6c47d7b4e526c908e49d89ebf720e4693",\n     "Name": "foobar",\n     "Labels": {},\n     "CgroupParent": "/libpod_parent",\n     "CreateCgroup": true,\n     "Created": "2018-08-08T11:15:18.823115347-05:00"\n     "State": "created",\n     "Hostname": "",\n     "SharedNamespaces": [\n          "uts",\n          "ipc",\n          "net"\n     ]\n     "CreateInfra": false,\n     "InfraContainerID": "1020dd70583dd7ff2bac83331350f6b6e007de0d026c908e49d89ebf891d4699"\n     "CgroupPath": ""\n     "Containers": [\n          {\n               "id": "d53f8bf1e9730281264aac6e6586e327429f62c704abea4b6afb5d8a2b2c9f2c",\n               "state": "configured"\n          }\n     ]\n}\n')),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-pod/"},"podman-pod(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-inspect"},"podman-inspect(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"August 2018, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}u.isMDXComponent=!0}}]);