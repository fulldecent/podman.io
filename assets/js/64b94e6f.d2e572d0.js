"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2687],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},o=void 0,s={unversionedId:"podman-pull",id:"podman-pull",title:"podman-pull",description:"% podman-pull 1",source:"@site/docs/podman-pull.md",sourceDirName:".",slug:"/podman-pull",permalink:"/website-new/docs/podman-pull",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-pull.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-ps",permalink:"/website-new/docs/podman-ps"},next:{title:"podman-push",permalink:"/website-new/docs/podman-push"}},l={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SOURCE",id:"source",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all-tags</strong>, <strong>-a</strong>",id:"--all-tags--a",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"FILES",id:"files",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"% podman-pull 1"),(0,i.kt)("h2",{id:"name"},"NAME"),(0,i.kt)("p",null,"podman","-","pull - Pull an image from a registry"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman pull")," ","[",(0,i.kt)("em",{parentName:"p"},"options"),"]"," ",(0,i.kt)("em",{parentName:"p"},"source")," ","[",(0,i.kt)("em",{parentName:"p"},"source"),"...]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman image pull")," ","[",(0,i.kt)("em",{parentName:"p"},"options"),"]"," ",(0,i.kt)("em",{parentName:"p"},"source")," ","[",(0,i.kt)("em",{parentName:"p"},"source"),"...]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman pull")," ","[",(0,i.kt)("em",{parentName:"p"},"options"),"][*transport*]",(0,i.kt)("em",{parentName:"p"},"name"),"[:",(0,i.kt)("em",{parentName:"p"},"tag"),"|@",(0,i.kt)("em",{parentName:"p"},"digest"),"]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman image pull")," ","[",(0,i.kt)("em",{parentName:"p"},"options"),"][*transport*]",(0,i.kt)("em",{parentName:"p"},"name"),"[:",(0,i.kt)("em",{parentName:"p"},"tag"),"|@",(0,i.kt)("em",{parentName:"p"},"digest"),"]"),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"podman pull copies an image from a registry onto the local machine. The command can pull one or more images. If the image reference in the command line argument does not contain a registry, it is referred to as a",(0,i.kt)("inlineCode",{parentName:"p"},"short-name")," reference. If the image is a 'short-name' reference, Podman will prompt the user for the specific container registry to pull the image from, if an alias for the short-name has not been specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"short-name-aliases.conf"),". If an image tag is not specified, ",(0,i.kt)("strong",{parentName:"p"},"podman pull")," defaults to the image with the ",(0,i.kt)("strong",{parentName:"p"},"latest")," tag (if it exists) and pulls it. After the image is pulled, podman will print the full image ID. ",(0,i.kt)("strong",{parentName:"p"},"podman pull")," can also pull images using a digest ",(0,i.kt)("strong",{parentName:"p"},"podman pull")," ",(0,i.kt)("em",{parentName:"p"},"image"),"@",(0,i.kt)("em",{parentName:"p"},"digest")," and can also be used to pull images from archives and local storage using different transports.\n",(0,i.kt)("em",{parentName:"p"},"IMPORTANT: Images are stored in local image storage.")),(0,i.kt)("h2",{id:"source"},"SOURCE"),(0,i.kt)("p",null,"SOURCE is the location from which the container image is pulled from. It supports all transports from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-transports.5.md"},"containers-transports(5)")),". If no transport is specified, the input is subject to short-name resolution and the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," (i.e., container registry) transport is used. For remote clients, including Mac and Windows (excluding WSL2) machines, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," is the only supported transport."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Pull from a container registry\n$ podman pull quay.io/username/myimage\n\n# Pull from a container registry with short-name resolution\n$ podman pull fedora\n\n# Pull from a container registry via the docker transport\n$ podman pull docker://quay.io/username/myimage\n\n# Pull from a local directory\n$ podman pull dir:/tmp/myimage\n\n# Pull from a tarball in the docker-archive format\n$ podman pull docker-archive:/tmp/myimage\n\n# Pull from a local docker daemon\n$ sudo podman pull docker-daemon:docker.io/library/myimage:33\n\n# Pull from a tarball in the OCI-archive format\n$ podman pull oci-archive:/tmp/myimage\n")),(0,i.kt)("h2",{id:"options"},"OPTIONS"),(0,i.kt)("h4",{id:"--all-tags--a"},(0,i.kt)("strong",{parentName:"h4"},"--all-tags"),", ",(0,i.kt)("strong",{parentName:"h4"},"-a")),(0,i.kt)("p",null,"All tagged images in the repository will be pulled."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"IMPORTANT: When using the all-tags flag, Podman will not iterate over the search registries in the ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"},"containers-registries.conf(5)"))," but will always use docker.io for unqualified image names.")),(0,i.kt)("p",null,"@@option arch"),(0,i.kt)("p",null,"@@option authfile"),(0,i.kt)("p",null,"@@option cert-dir"),(0,i.kt)("p",null,"@@option creds"),(0,i.kt)("p",null,"@@option decryption-key"),(0,i.kt)("p",null,"@@option disable-content-trust"),(0,i.kt)("h4",{id:"--help--h"},(0,i.kt)("strong",{parentName:"h4"},"--help"),", ",(0,i.kt)("strong",{parentName:"h4"},"-h")),(0,i.kt)("p",null,"Print the usage statement."),(0,i.kt)("p",null,"@@option os.pull"),(0,i.kt)("p",null,"@@option platform"),(0,i.kt)("h4",{id:"--quiet--q"},(0,i.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,i.kt)("strong",{parentName:"h4"},"-q")),(0,i.kt)("p",null,"Suppress output information when pulling images"),(0,i.kt)("p",null,"@@option tls-verify"),(0,i.kt)("p",null,"@@option variant.container"),(0,i.kt)("h2",{id:"files"},"FILES"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"short-name-aliases.conf")," (",(0,i.kt)("inlineCode",{parentName:"p"},"/var/cache/containers/short-name-aliases.conf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.cache/containers/short-name-aliases.conf"),")"),(0,i.kt)("p",null,"When users specify images that do not include the container registry where the\nimage is stored, this is called a short name. The use of unqualified-search registries entails an ambiguity as it is unclear from which registry a given image, referenced by a short name, may be pulled from."),(0,i.kt)("p",null,"Using short names is subject to the risk of hitting squatted registry namespaces. If the unqualified-search registries are set to ",'["public-registry.com", "my-private-registry.com"]'," an attacker may take over a namespace of ",(0,i.kt)("inlineCode",{parentName:"p"},"public-registry.com")," such that an image may be pulled from ",(0,i.kt)("inlineCode",{parentName:"p"},"public-registry.com")," instead of the intended source ",(0,i.kt)("inlineCode",{parentName:"p"},"my-private-registry.com"),"."),(0,i.kt)("p",null,"While it is highly recommended to always use fully-qualified image references, existing deployments using short names may not be easily changed. To circumvent the aforementioned ambiguity, so called short-name aliases can be configured that point to a fully-qualified image reference. Distributions often ship a default shortnames.conf expansion file in /etc/containers/registries.conf.d/ directory. Administrators can use this directory to add their own local short-name expansion files."),(0,i.kt)("p",null,"When pulling an image, if the user does not specify the complete registry, container engines attempt to expand the short-name into a full name. If the command is executed with a tty, the user will be prompted to select a registry from the\ndefault list unqualified registries defined in registries.conf. The user's selection is then stored in a cache file to be used in all future short-name expansions. Rootful short-names are stored in /var/cache/containers/short-name-aliases.conf. Rootless short-names are stored in the $HOME/.cache/containers/short-name-aliases.conf file."),(0,i.kt)("p",null,"For more information on short-names, see ",(0,i.kt)("inlineCode",{parentName:"p"},"containers-registries.conf(5)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"registries.conf")," (",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/containers/registries.conf"),")"),(0,i.kt)("p",null,"registries.conf is the configuration file which specifies which container registries should be consulted when completing image names which do not include a registry or domain portion."),(0,i.kt)("p",null,"NOTE: Use the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TMPDIR")," to change the temporary storage location of downloaded container images. Podman defaults to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/tmp"),"."),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("p",null,"Pull a single image with short name resolution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ podman pull alpine:latest\nResolved "alpine" as an alias (/etc/containers/registries.conf.d/000-shortnames.conf)\nTrying to pull docker.io/library/alpine:latest...\nGetting image source signatures\nCopying blob 5843afab3874 done\nCopying config d4ff818577 done\nWriting manifest to image destination\nStoring signatures\nd4ff818577bc193b309b355b02ebc9220427090057b54a59e73b79bdfe139b83\n')),(0,i.kt)("p",null,"Pull multiple images with/without short name resolution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"podman pull busybox:musl alpine quay.io/libpod/cirros\nTrying to pull docker.io/library/busybox:musl...\nGetting image source signatures\nCopying blob 0c52b060233b [--------------------------------------] 0.0b / 0.0b\nCopying config 9ad2c435a8 done\nWriting manifest to image destination\nStoring signatures\n9ad2c435a887e3f723654e09b48563de44aa3c7950246b2e9305ec85dd3422db\nTrying to pull docker.io/library/alpine:latest...\nGetting image source signatures\nCopying blob 5843afab3874 [--------------------------------------] 0.0b / 0.0b\nCopying config d4ff818577 done\nWriting manifest to image destination\nStoring signatures\nd4ff818577bc193b309b355b02ebc9220427090057b54a59e73b79bdfe139b83\nTrying to pull quay.io/libpod/cirros:latest...\nGetting image source signatures\nCopying blob 8da581cc9286 done\nCopying blob 856628d95d17 done\nCopying blob f513001ba4ab done\nCopying config 3c82e4d066 done\nWriting manifest to image destination\nStoring signatures\n3c82e4d066cf6f9e50efaead6e3ff7fddddf5527826afd68e5a969579fc4db4a\n")),(0,i.kt)("p",null,"Pull an image using its digest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman pull alpine@sha256:d7342993700f8cd7aba8496c2d0e57be0666e80b4c441925fc6f9361fa81d10e\nTrying to pull docker.io/library/alpine@sha256:d7342993700f8cd7aba8496c2d0e57be0666e80b4c441925fc6f9361fa81d10e...\nGetting image source signatures\nCopying blob 188c0c94c7c5 done\nCopying config d6e46aa247 done\nWriting manifest to image destination\nStoring signatures\nd6e46aa2470df1d32034c6707c8041158b652f38d2a9ae3d7ad7e7532d22ebe0\n")),(0,i.kt)("p",null,"Pull an image by specifying an authentication file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman pull --authfile temp-auths/myauths.json docker://docker.io/umohnani/finaltest\nTrying to pull docker.io/umohnani/finaltest:latest...Getting image source signatures\nCopying blob sha256:6d987f6f42797d81a318c40d442369ba3dc124883a0964d40b0c8f4f7561d913\n 1.90 MB / 1.90 MB [========================================================] 0s\nCopying config sha256:ad4686094d8f0186ec8249fc4917b71faa2c1030d7b5a025c29f26e19d95c156\n 1.41 KB / 1.41 KB [========================================================] 0s\nWriting manifest to image destination\nStoring signatures\n03290064078cb797f3e0a530e78c20c13dd22a3dd3adf84a5da2127b48df0438\n")),(0,i.kt)("p",null,"Pull an image by authenticating to a registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman pull --creds testuser:testpassword docker.io/umohnani/finaltest\nTrying to pull docker.io/umohnani/finaltest:latest...Getting image source signatures\nCopying blob sha256:6d987f6f42797d81a318c40d442369ba3dc124883a0964d40b0c8f4f7561d913\n 1.90 MB / 1.90 MB [========================================================] 0s\nCopying config sha256:ad4686094d8f0186ec8249fc4917b71faa2c1030d7b5a025c29f26e19d95c156\n 1.41 KB / 1.41 KB [========================================================] 0s\nWriting manifest to image destination\nStoring signatures\n03290064078cb797f3e0a530e78c20c13dd22a3dd3adf84a5da2127b48df0438\n")),(0,i.kt)("p",null,"Pull an image using tls verification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman pull --tls-verify=false --cert-dir image/certs docker.io/umohnani/finaltest\nTrying to pull docker.io/umohnani/finaltest:latest...Getting image source signatures\nCopying blob sha256:6d987f6f42797d81a318c40d442369ba3dc124883a0964d40b0c8f4f7561d913\n 1.90 MB / 1.90 MB [========================================================] 0s\nCopying config sha256:ad4686094d8f0186ec8249fc4917b71faa2c1030d7b5a025c29f26e19d95c156\n 1.41 KB / 1.41 KB [========================================================] 0s\nWriting manifest to image destination\nStoring signatures\n03290064078cb797f3e0a530e78c20c13dd22a3dd3adf84a5da2127b48df0438\n")),(0,i.kt)("p",null,"Pull an image by overriding the host architecture."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman pull --arch=arm arm32v7/debian:stretch\nTrying to pull docker.io/arm32v7/debian:stretch...\nGetting image source signatures\nCopying blob b531ae4a3925 done\nCopying config 3cba58dad5 done\nWriting manifest to image destination\nStoring signatures\n3cba58dad5d9b35e755b48b634acb3fdd185ab1c996ac11510cc72c17780e13c\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-push"},"podman-push(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-login"},"podman-login(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md"},"containers-certs.d(5)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"},"containers-registries.conf(5)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-transports.5.md"},"containers-transports(5)"))),(0,i.kt)("h2",{id:"history"},"HISTORY"),(0,i.kt)("p",null,"July 2017, Originally compiled by Urvashi Mohnani ",(0,i.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}d.isMDXComponent=!0}}]);