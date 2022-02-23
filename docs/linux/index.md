# Instale usando o repositório 
Antes de instalar o Docker Engine pela primeira vez em uma nova máquina host, você precisa configurar o repositório Docker. Depois disso, você pode instalar e atualizar o Docker a partir do repositório.

## Configure o repositório
1. Atualize o pacote *apt* e instale os pacotes para permitir o uso do *apt* de um repositório por HTTPS:

```bash
 sudo apt-get update
 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

2. Adicione a chave GPG oficial do Docker:

```bash
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

3. Use o seguinte comando para configurar o repositório *stable* .

```bash
 echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## Instale o Docker Engine
1. Atualize o pacote *apt* e instale a versão mais recente do Docker Engine e containerd:

```bash
 sudo apt-get update
 sudo apt-get install docker-ce docker-ce-cli containerd.io
```

2. Verifique se o Docker Engine está instalado corretamente executando a imagem do hello-world.

```bash
 sudo docker run hello-world
```

Este comando baixa uma imagem de teste e a executa em um container. Quando o container é executado, ele imprime uma mensagem e sai.

O Docker Engine está instalado e em execução. O dockergroup é criado, mas nenhum usuário é adicionado a ele. Você precisa usar *sudo* para executar os comandos do Docker. Continue a pós-instalação do Linux para permitir que usuários sem privilégios executem comandos do Docker.

- Adicionando o seu usuário ao grupo docker

```bash
sudo usermod -aG docker $USER
```

- Faça logout e login novamente no seu usuário linux para que sua associação ao grupo seja revalidada. 