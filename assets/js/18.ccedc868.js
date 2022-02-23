(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{437:function(a,s,t){"use strict";t.r(s);var n=t(11),o=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"configurando-o-windows-para-utilizacao-do-podman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurando-o-windows-para-utilizacao-do-podman"}},[a._v("#")]),a._v(" Configurando o Windows para utilização do Podman")]),a._v(" "),t("p",[a._v("Podman é um utilitário fornecido como parte da biblioteca libpod.")]),a._v(" "),t("p",[a._v("Ele pode ser usado para criar e manter contêineres. O tutorial a seguir ensinará como configurar o Podman e executar alguns comandos básicos.")]),a._v(" "),t("h1",{attrs:{id:"instale-o-podman-em-wsl2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instale-o-podman-em-wsl2"}},[a._v("#")]),a._v(" Instale o Podman em WSL2")]),a._v(" "),t("blockquote",[t("p",[a._v("Agora que temos o Ubuntu-20.04 configurado em WSL2, podemos instalar o Podman.\nPara simplificar, execute os seguintes comandos no Ubuntu-20.04 para configurar o Podman em sua máquina.")])]),a._v(" "),t("ul",[t("li",[a._v("Acessar a seguinte pasta")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" /etc/os-release\n")])])]),t("ul",[t("li",[a._v("Adicionando o repositório no linux WSL")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${VERSION_ID}")]),a._v('/ /"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\n")])])]),t("ul",[t("li",[a._v("Baixando o Podman")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${VERSION_ID}")]),a._v('/Release.key"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -\n")])])]),t("ul",[t("li",[a._v("Atualizando o Linux WSL e instalando o Podman")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" -y upgrade\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v("\n")])])]),t("h1",{attrs:{id:"utilizando-o-podman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utilizando-o-podman"}},[a._v("#")]),a._v(" Utilizando o Podman")]),a._v(" "),t("p",[a._v("Para utilização do Podman, todos os comandos são iguais aos comando do Docker, onde na chamada do comando ao invés de digitar Docker antes, deverá digitar Podman, como no exemplo abaixo:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("imagename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v(" images\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("podman")]),a._v(" build -f Dockerfile\n")])])]),t("ul",[t("li",[a._v("Demais comandos e dúvidas, segue PDF com principais comandos, "),t("a",{attrs:{href:"arquivos/podman_basics.pdf"}},[a._v("clique aqui")])]),a._v(" "),t("li",[a._v("Documentação - Introdução ao Podman, "),t("a",{attrs:{href:"https://podman.io/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[a._v("clique aqui"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=o.exports}}]);