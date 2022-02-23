# Configurando o Windows para utilização do Docker Engine


Agora que temos o Ubuntu-20.04 configurado em WSL2, podemos instalar o Docker Engine.
Para simplificar, execute os seguintes comandos no Ubuntu-20.04 para configurar o Docker Engine em sua máquina.

- Update do Ubuntu-20.04 e instalação de pacotes que são pré-requisitos

```bash
sudo apt-get install \
 apt-transport-https \
 ca-certificates \
 curl \
 gnupg \
 lsb-release
```

- Adicionando a chave GPG oficial do Docker

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

- Configurando o repositório *stable* do Docker.

```bash
echo \
 "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

- Atualizando o index do pacote apt com o repositório que adicionamos

```bash
sudo apt-get update
```

- Instalação da versão mais nova do Docker Engine e o ContainerD necessários para o Docker rodar

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

- Iniciando o Docker no WSL

```bash
sudo service docker start
```

- Criando o grupo docker

```bash
sudo groupadd docker
```

- Adicionando o seu usuário ao grupo docker

```bash
sudo usermod -aG docker $USER
```

- Faça logout e login novamente no WSL para que sua associação ao grupo seja reavaliada. 

# Executar comandos do Docker
Neste ponto, você deve ter um Docker Engine totalmente operacional instalado em execução no Ubuntu-20.04 sob WSL2. Você pode verificar isso tentando executar a imagem hello-world do Docker Hub.

```bash
docker run hello-world
```

Depois que isso for concluído, você deverá ver uma mensagem do docker indicando que foi bem-sucedido. Se você está vendo essa mensagem, está pronto para começar!

- Caso seja necessário iniciar o serviço docker após reinicializar ou reiniciar o WSL2, utilize o comando abaixo ao entrar no Ubuntu novamente:

```bash
sudo service docker start
```

# Resumo
Com as etapas acima, você deve ter uma cópia de trabalho do Docker Engine rodando com WSL2!

Se a sua cópia não estiver em execução, você pode verificar com os seguintes passos:

- Certifique-se de que sua distribuição WSL esteja sendo executada em WSL2 utilizando o seguinte comando: 

```bash
wsl -l -v
```

- Certifique-se de que o serviço docker esteja em execução, rode o comando abaixo para iniciar:

```bash
sudo service docker start.
```

O Visual Studio Code é compatível com arquivos dentro do WSL, para abrir o VSCode de dentro do WSL Linux, acesse a pasta e digite ```code .```

Caso queira acessar a pasta do linux no windows acesse menu executar>\\\wsl$ e dê enter e terá acesso as pastas do linux de dentro do Windows.
![Path WSL](arquivos/path_wsl.png)