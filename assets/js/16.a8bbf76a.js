(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{435:function(a,s,e){"use strict";e.r(s);var t=e(11),o=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"configurando-o-windows-para-utilizacao-do-docker-engine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-o-windows-para-utilizacao-do-docker-engine"}},[a._v("#")]),a._v(" Configurando o Windows para utilização do Docker Engine")]),a._v(" "),e("p",[a._v("Agora que temos o Ubuntu-20.04 configurado em WSL2, podemos instalar o Docker Engine.\nPara simplificar, execute os seguintes comandos no Ubuntu-20.04 para configurar o Docker Engine em sua máquina.")]),a._v(" "),e("ul",[e("li",[a._v("Update do Ubuntu-20.04 e instalação de pacotes que são pré-requisitos")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n apt-transport-https "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n ca-certificates "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n gnupg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n lsb-release\n")])])]),e("ul",[e("li",[a._v("Adicionando a chave GPG oficial do Docker")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n")])])]),e("ul",[e("li",[a._v("Configurando o repositório "),e("em",[a._v("stable")]),a._v(" do Docker.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n '),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' stable"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/apt/sources.list.d/docker.list "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /dev/null\n")])])]),e("ul",[e("li",[a._v("Atualizando o index do pacote apt com o repositório que adicionamos")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n")])])]),e("ul",[e("li",[a._v("Instalação da versão mais nova do Docker Engine e o ContainerD necessários para o Docker rodar")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])]),e("ul",[e("li",[a._v("Iniciando o Docker no WSL")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start\n")])])]),e("ul",[e("li",[a._v("Criando o grupo docker")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupadd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),e("ul",[e("li",[a._v("Adicionando o seu usuário ao grupo docker")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" -aG "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v("\n")])])]),e("ul",[e("li",[a._v("Faça logout e login novamente no WSL para que sua associação ao grupo seja reavaliada.")])]),a._v(" "),e("h1",{attrs:{id:"executar-comandos-do-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executar-comandos-do-docker"}},[a._v("#")]),a._v(" Executar comandos do Docker")]),a._v(" "),e("p",[a._v("Neste ponto, você deve ter um Docker Engine totalmente operacional instalado em execução no Ubuntu-20.04 sob WSL2. Você pode verificar isso tentando executar a imagem hello-world do Docker Hub.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run hello-world\n")])])]),e("p",[a._v("Depois que isso for concluído, você deverá ver uma mensagem do docker indicando que foi bem-sucedido. Se você está vendo essa mensagem, está pronto para começar!")]),a._v(" "),e("ul",[e("li",[a._v("Caso seja necessário iniciar o serviço docker após reinicializar ou reiniciar o WSL2, utilize o comando abaixo ao entrar no Ubuntu novamente:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start\n")])])]),e("h1",{attrs:{id:"resumo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resumo"}},[a._v("#")]),a._v(" Resumo")]),a._v(" "),e("p",[a._v("Com as etapas acima, você deve ter uma cópia de trabalho do Docker Engine rodando com WSL2!")]),a._v(" "),e("p",[a._v("Se a sua cópia não estiver em execução, você pode verificar com os seguintes passos:")]),a._v(" "),e("ul",[e("li",[a._v("Certifique-se de que sua distribuição WSL esteja sendo executada em WSL2 utilizando o seguinte comando:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("wsl -l -v\n")])])]),e("ul",[e("li",[a._v("Certifique-se de que o serviço docker esteja em execução, rode o comando abaixo para iniciar:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start.\n")])])]),e("p",[a._v("O Visual Studio Code é compatível com arquivos dentro do WSL, para abrir o VSCode de dentro do WSL Linux, acesse a pasta e digite "),e("code",[a._v("code .")])]),a._v(" "),e("p",[a._v("Caso queira acessar a pasta do linux no windows acesse menu executar>\\\\wsl$ e dê enter e terá acesso as pastas do linux de dentro do Windows.\n"),e("img",{attrs:{src:"arquivos/path_wsl.png",alt:"Path WSL"}})])])}),[],!1,null,null,null);s.default=o.exports}}]);