"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));const r={},i="Podman Remote clients for macOS and Windows",s={unversionedId:"tutorials/mac_win_client",id:"tutorials/mac_win_client",title:"Podman Remote clients for macOS and Windows",description:"---",source:"@site/docs/tutorials/mac_win_client.md",sourceDirName:"tutorials",slug:"/tutorials/mac_win_client",permalink:"/docs/tutorials/mac_win_client",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/mac_win_client.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Podman Mac Client Tutorial",permalink:"/docs/tutorials/mac_client"},next:{title:"Podman performance guide",permalink:"/docs/tutorials/performance"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Brief architecture",id:"brief-architecture",level:3},{value:"Obtaining and installing Podman",id:"obtaining-and-installing-podman",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Creating the first connection",id:"creating-the-first-connection",level:2},{value:"Enable the Podman service on the server machine.",id:"enable-the-podman-service-on-the-server-machine",level:3},{value:"Enable sshd",id:"enable-sshd",level:4},{value:"Setting up SSH",id:"setting-up-ssh",level:4},{value:"Using the client",id:"using-the-client",level:2},{value:"Wrap up",id:"wrap-up",level:2},{value:"History",id:"history",level:2}],c={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"podman-remote-clients-for-macos-and-windows"},"Podman Remote clients for macOS and Windows"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:"))," For running Podman on Windows, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/podman-for-windows"},"Podman for Windows")," guide, which uses the recommended approach of a Podman-managed Linux backend. For Mac, see the ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"Podman installation instructions"),". This guide covers the advanced usage of Podman with a custom Linux VM or a remote external Linux system."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The core Podman runtime environment can only run on Linux operating systems. But other operating systems can use the \u201cremote client\u201d to manage their containers to a Linux backend. This remote client is nearly identical to the standard Podman program. Certain functions that do not make sense for remote clients have been removed. For example, the \u201c--latest\u201d switch for container commands has been removed."),(0,a.kt)("h3",{id:"brief-architecture"},"Brief architecture"),(0,a.kt)("p",null,"The remote client uses a client-server model. You need Podman installed on a Linux machine or VM that also has the SSH daemon running. On the local operating system, when you execute a Podman command, Podman connects to the server via SSH. It then connects to the Podman service by using systemd socket activation. The Podman commands are executed on the server. From the client's point of view, it seems like Podman runs locally."),(0,a.kt)("h2",{id:"obtaining-and-installing-podman"},"Obtaining and installing Podman"),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Installing the Windows Podman client begins by downloading the Podman Windows installer. The Windows installer is built with each Podman release and is downloadable from its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases/latest"},"release description page"),". The Windows installer file is named ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-#.#.#-setup.exe"),", where the ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," symbols represent the version number of Podman."),(0,a.kt)("p",null,"Once you have downloaded the installer to your Windows host, simply double click the installer and Podman will be installed. The path is also set to put ",(0,a.kt)("inlineCode",{parentName:"p"},"podman")," in the default user path."),(0,a.kt)("p",null,"Podman must be run at a command prompt using the Windows Command Prompt (",(0,a.kt)("inlineCode",{parentName:"p"},"cmd.exe"),") or PowerShell (",(0,a.kt)("inlineCode",{parentName:"p"},"pwsh.exe"),") applications."),(0,a.kt)("h3",{id:"macos"},"macOS"),(0,a.kt)("p",null,"The Mac Client is available through ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),". You can download homebrew via the instructions on their site. Install podman using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ brew install podman\n")),(0,a.kt)("h2",{id:"creating-the-first-connection"},"Creating the first connection"),(0,a.kt)("h3",{id:"enable-the-podman-service-on-the-server-machine"},"Enable the Podman service on the server machine."),(0,a.kt)("p",null,"Before performing any Podman client commands, you must enable the podman.sock SystemD service on the Linux server. In these examples, we are running Podman as a normal, unprivileged user, also known as a rootless user. By default, the rootless socket listens at ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/user/${UID}/podman/podman.sock"),". You can enable and start this socket permanently, using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ systemctl --user enable --now podman.socket\n")),(0,a.kt)("p",null,"You will need to enable linger for this user in order for the socket to work when the user is not logged in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo loginctl enable-linger $USER\n")),(0,a.kt)("p",null,"You can verify that the socket is listening with a simple Podman command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman --remote info\nhost:\n  arch: amd64\n  buildahVersion: 1.16.0-dev\n  cgroupVersion: v2\n  conmon:\n    package: conmon-2.0.19-1.fc32.x86_64\n")),(0,a.kt)("h4",{id:"enable-sshd"},"Enable sshd"),(0,a.kt)("p",null,"In order for the client to communicate with the server you need to enable and start the SSH daemon on your Linux machine, if it is not currently enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl enable --now sshd\n")),(0,a.kt)("h4",{id:"setting-up-ssh"},"Setting up SSH"),(0,a.kt)("p",null,"Remote podman uses SSH to communicate between the client and server. The remote client works considerably smoother using SSH keys. To set up your ssh connection, you need to generate an ssh key pair from your client machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ssh-keygen\n")),(0,a.kt)("p",null,"Your public key by default should be in your home directory under .ssh\\id_rsa.pub. You then need to copy the contents of id_rsa.pub and append it into ~/.ssh/authorized_keys on the Linux server. On a Mac, you can automate this using ssh-copy-id."),(0,a.kt)("p",null,"If you do not wish to use SSH keys, you will be prompted with each Podman command for your login password."),(0,a.kt)("h2",{id:"using-the-client"},"Using the client"),(0,a.kt)("p",null,"The first step in using the Podman remote client is to configure a connection.."),(0,a.kt)("p",null,"You can add a connection by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"podman system connection add")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Users\\baude> podman system connection add baude --identity c:\\Users\\baude\\.ssh\\id_rsa ssh://192.168.122.1/run/user/1000/podman/podman.sock\n")),(0,a.kt)("p",null,"This will add a remote connection to Podman and if it is the first connection added, it will mark the connection as the default. You can observe your connections with ",(0,a.kt)("inlineCode",{parentName:"p"},"podman system connection list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Users\\baude> podman system connection list\nName    Identity    URI\nbaude*  id_rsa         ssh://baude@192.168.122.1/run/user/1000/podman/podman.sock\n")),(0,a.kt)("p",null,"Now we can test the connection with ",(0,a.kt)("inlineCode",{parentName:"p"},"podman info"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Users\\baude> podman info\nhost:\n  arch: amd64\n  buildahVersion: 1.16.0-dev\n  cgroupVersion: v2\n  conmon:\n    package: conmon-2.0.19-1.fc32.x86_64\n")),(0,a.kt)("p",null,"Podman has also introduced a \u201c--connection\u201d flag where you can use other connections you have defined. If no connection is provided, the default connection will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Users\\baude> podman system connection --help\n")),(0,a.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,a.kt)("p",null,"You can use the podman remote clients to manage your containers running on a Linux server. The communication between client and server relies heavily on SSH connections and the use of SSH keys are encouraged. Once you have Podman installed on your remote client, you should set up a connection using ",(0,a.kt)("inlineCode",{parentName:"p"},"podman system connection add")," which will then be used by subsequent Podman commands."),(0,a.kt)("h2",{id:"history"},"History"),(0,a.kt)("p",null,"Originally published on ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-clients-macos-windows"},"Red Hat Enable Sysadmin")))}u.isMDXComponent=!0}}]);