# Configurando o Windows para utilização do Podman
Podman é um utilitário fornecido como parte da biblioteca libpod. 

Ele pode ser usado para criar e manter contêineres. O tutorial a seguir ensinará como configurar o Podman e executar alguns comandos básicos.

# Instale o Podman em WSL2
> Agora que temos o Ubuntu-20.04 configurado em WSL2, podemos instalar o Podman.
Para simplificar, execute os seguintes comandos no Ubuntu-20.04 para configurar o Podman em sua máquina.
- Acessar a seguinte pasta

```bash
. /etc/os-release
```

- Adicionando o repositório no linux WSL

```bash
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```

- Baixando o Podman

```bash
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
```

- Atualizando o Linux WSL e instalando o Podman

```bash
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install podman
```

# Utilizando o Podman
Para utilização do Podman, todos os comandos são iguais aos comando do Docker, onde na chamada do comando ao invés de digitar Docker antes, deverá digitar Podman, como no exemplo abaixo:

```bash
podman run <imagename>
podman ps
podman ps -a
podman images
podman build -f Dockerfile
```

- Demais comandos e dúvidas, segue PDF com principais comandos, [clique aqui](arquivos/podman_basics.pdf)
- Documentação - Introdução ao Podman, [clique aqui](https://podman.io/getting-started/) 