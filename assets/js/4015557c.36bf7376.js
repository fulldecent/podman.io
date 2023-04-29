"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,u=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"podman-push",id:"podman-push",title:"podman-push",description:"% podman-push 1",source:"@site/docs/podman-push.md",sourceDirName:".",slug:"/podman-push",permalink:"/website-new/docs/podman-push",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-push.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pull",permalink:"/website-new/docs/podman-pull"},next:{title:"podman-remote",permalink:"/website-new/docs/podman-remote"}},p={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"Image storage",id:"image-storage",level:2},{value:"DESTINATION",id:"destination",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--encrypt-layer</strong>=<em>layer(s)</em>",id:"--encrypt-layerlayers",level:4},{value:"<strong>--encryption-key</strong>=<em>key</em>",id:"--encryption-keykey",level:4},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"<strong>--remove-signatures</strong>",id:"--remove-signatures",level:4},{value:"<strong>--sign-by</strong>=<em>key</em>",id:"--sign-bykey",level:4},{value:"<strong>--sign-by-sigstore</strong>=*param-file***",id:"--sign-by-sigstoreparam-file",level:4},{value:"<strong>--sign-by-sigstore-private-key</strong>=<em>path</em>",id:"--sign-by-sigstore-private-keypath",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2}],m={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-push 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","push - Push an image, manifest list or image index from local storage to elsewhere"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman push")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"image")," ","[",(0,r.kt)("em",{parentName:"p"},"destination"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image push")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"image")," ","[",(0,r.kt)("em",{parentName:"p"},"destination"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Pushes an image, manifest list or image index from local storage to a specified\ndestination. Push is mainly used to push images to registries, however\n",(0,r.kt)("strong",{parentName:"p"},"podman push")," can be used to save images to tarballs and directories using the\nfollowing transports:\n",(0,r.kt)("strong",{parentName:"p"},"dir:"),", ",(0,r.kt)("strong",{parentName:"p"},"docker-archive:"),", ",(0,r.kt)("strong",{parentName:"p"},"docker-daemon:")," and ",(0,r.kt)("strong",{parentName:"p"},"oci-archive:"),"."),(0,r.kt)("h2",{id:"image-storage"},"Image storage"),(0,r.kt)("p",null,"Images are pushed from those stored in local image storage."),(0,r.kt)("h2",{id:"destination"},"DESTINATION"),(0,r.kt)("p",null,"DESTINATION is the location the container image is pushed to. It supports all transports from ",(0,r.kt)("inlineCode",{parentName:"p"},"containers-transports(5)"),". If no transport is specified, the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," (i.e., container registry) transport is used. For remote clients, including Mac and Windows (excluding WSL2) machines, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," is the only supported transport."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Push to a container registry\n$ podman push quay.io/podman/stable\n\n# Push to a container registry via the docker transport\n$ podman push docker://quay.io/podman/stable\n\n# Push to a container registry with another tag\n$ podman push myimage quay.io/username/myimage\n\n# Push to a local directory\n$ podman push myimage dir:/tmp/myimage\n\n# Push to a tarball in the docker-archive format\n$ podman push myimage docker-archive:/tmp/myimage\n\n# Push to a local docker daemon\n$ sudo podman push myimage docker-daemon:docker.io/library/myimage:33\n\n# Push to a tarball in the OCI format\n$ podman push myimage oci-archive:/tmp/myimage\n")),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("p",null,"@@option authfile"),(0,r.kt)("p",null,"@@option cert-dir"),(0,r.kt)("p",null,"@@option dir-compress"),(0,r.kt)("p",null,"Note: This flag can only be set when using the ",(0,r.kt)("strong",{parentName:"p"},"dir")," transport"),(0,r.kt)("p",null,"@@option compression-format"),(0,r.kt)("p",null,"@@option creds"),(0,r.kt)("p",null,"@@option digestfile"),(0,r.kt)("p",null,"@@option disable-content-trust"),(0,r.kt)("h4",{id:"--encrypt-layerlayers"},(0,r.kt)("strong",{parentName:"h4"},"--encrypt-layer"),"=",(0,r.kt)("em",{parentName:"h4"},"layer(s)")),(0,r.kt)("p",null,"Layer(s) to encrypt: 0-indexed layer indices with support for negative indexing (e.g. 0 is the first layer, -1 is the last layer). If not defined, will encrypt all layers if encryption-key flag is specified."),(0,r.kt)("h4",{id:"--encryption-keykey"},(0,r.kt)("strong",{parentName:"h4"},"--encryption-key"),"=",(0,r.kt)("em",{parentName:"h4"},"key")),(0,r.kt)("p",null,"The ","[protocol:keyfile]"," specifies the encryption protocol, which can be JWE (RFC7516), PGP (RFC4880), and PKCS7 (RFC2315) and the key material required for image encryption. For instance, jwe:/path/to/key.pem or pgp:",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@example.com"},"admin@example.com")," or pkcs7:/path/to/x509-file."),(0,r.kt)("h4",{id:"--format--fformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Manifest Type (oci, v2s2, or v2s1) to use when pushing an image."),(0,r.kt)("h4",{id:"--quiet--q"},(0,r.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,r.kt)("strong",{parentName:"h4"},"-q")),(0,r.kt)("p",null,"When writing the output image, suppress progress output"),(0,r.kt)("h4",{id:"--remove-signatures"},(0,r.kt)("strong",{parentName:"h4"},"--remove-signatures")),(0,r.kt)("p",null,"Discard any pre-existing signatures in the image."),(0,r.kt)("h4",{id:"--sign-bykey"},(0,r.kt)("strong",{parentName:"h4"},"--sign-by"),"=",(0,r.kt)("em",{parentName:"h4"},"key")),(0,r.kt)("p",null,"Add a \u201csimple signing\u201d signature at the destination using the specified key. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)"),(0,r.kt)("h4",{id:"--sign-by-sigstoreparam-file"},(0,r.kt)("strong",{parentName:"h4"},"--sign-by-sigstore"),"=","*","param-file","*","*","*"),(0,r.kt)("p",null,"Add a sigstore signature based on further options specified in a containers sigstore signing parameter file ",(0,r.kt)("em",{parentName:"p"},"param-file"),".\nSee containers-sigstore-signing-params.yaml(5) for details about the file format."),(0,r.kt)("h4",{id:"--sign-by-sigstore-private-keypath"},(0,r.kt)("strong",{parentName:"h4"},"--sign-by-sigstore-private-key"),"=",(0,r.kt)("em",{parentName:"h4"},"path")),(0,r.kt)("p",null,"Add a sigstore signature at the destination using a private key at the specified path. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)"),(0,r.kt)("p",null,"@@option sign-passphrase-file"),(0,r.kt)("p",null,"@@option tls-verify"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("p",null,"This example pushes the image specified by the imageID to a local directory in docker format."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# podman push imageID dir:/path/to/image")),(0,r.kt)("p",null,"This example pushes the image specified by the imageID to a local directory in oci format."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# podman push imageID oci-archive:/path/to/layout:image:tag")),(0,r.kt)("p",null,"This example pushes the image specified by the imageID to a container registry named registry.example.com"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# podman push imageID docker://registry.example.com/repository:tag")),(0,r.kt)("p",null,"This example pushes the image specified by the imageID to a container registry named registry.example.com and saves the digest in the specified digestfile."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# podman push --digestfile=/tmp/mydigest imageID docker://registry.example.com/repository:tag")),(0,r.kt)("p",null,"This example pushes the image specified by the imageID and puts it into the local docker container store"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# podman push imageID docker-daemon:image:tag")),(0,r.kt)("p",null,"This example pushes the alpine image to umohnani/alpine on dockerhub and reads the creds from\nthe path given to --authfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman push --authfile temp-auths/myauths.json alpine docker://docker.io/umohnani/alpine\nGetting image source signatures\nCopying blob sha256:5bef08742407efd622d243692b79ba0055383bbce12900324f75e56f589aedb0\n 4.03 MB / 4.03 MB [========================================================] 1s\nCopying config sha256:ad4686094d8f0186ec8249fc4917b71faa2c1030d7b5a025c29f26e19d95c156\n 1.41 KB / 1.41 KB [========================================================] 1s\nWriting manifest to image destination\nStoring signatures\n")),(0,r.kt)("p",null,'This example pushes the rhel7 image to rhel7-dir with the "oci" manifest type'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman push --format oci registry.access.redhat.com/rhel7 dir:rhel7-dir\nGetting image source signatures\nCopying blob sha256:9cadd93b16ff2a0c51ac967ea2abfadfac50cfa3af8b5bf983d89b8f8647f3e4\n 71.41 MB / 71.41 MB [======================================================] 9s\nCopying blob sha256:4aa565ad8b7a87248163ce7dba1dd3894821aac97e846b932ff6b8ef9a8a508a\n 1.21 KB / 1.21 KB [========================================================] 0s\nCopying config sha256:f1b09a81455c351eaa484b61aacd048ab613c08e4c5d1da80c4c46301b03cf3b\n 3.01 KB / 3.01 KB [========================================================] 0s\nWriting manifest to image destination\nStoring signatures\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-pull"},"podman-pull(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-login"},"podman-login(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-certs.d.5.md"},"containers-certs.d(5)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"},"containers-registries.conf(5)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/image/blob/main/docs/containers-transports.5.md"},"containers-transports(5)"))))}c.isMDXComponent=!0}}]);