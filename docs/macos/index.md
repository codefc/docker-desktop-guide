# Utilizando o Minikube para uso do Docker em Apple MacOS
Até agora, o Minikube surgiu como o substituto mais fácil para o Docker Desktop. 

Minikube é usado para executar um cluster Kubernetes no ambiente local. Mas também executa um daemon docker que pode ser usado para executar containers. 

No MacOS, o Minikube é executado em várias tecnologias de virtualização, mas o Hyperkit é o mais fácil de usar.

>Acesse o shell do Mac e siga os passos abaixo:


- Instalando o hyperkit e o minikube

```bash
brew install hyperkit
brew install minikube
```

- Instalando o Docker CLI

```bash
brew install docker
brew install docker-compose
```

- Start minikube

```bash
minikube start
```

- Diga ao Docker CLI para chamar com a VM do minikube

```bash
eval $(minikube docker-env)
```

- Salvar IP no hostname

```bash
echo "`minikube ip` docker.local" | sudo tee -a /etc/hosts > /dev/null
```

- Testando o Docker

```bash
docker run hello-world
```

# Dicas do minikube
```minikube stop``` - pare o cluster VM e k8s. Isso não exclui nenhum dado. Basta digitar ```minikube start``` para iniciar o cluster.

```minikube delete``` - Isso exclui o cluster com todos os dados. Todos os volumes mapeados serão perdidos. Saiba o que você está fazendo antes de executar isso. Se você deseja apenas interromper o uso do cluster digite ```minikube stop```.

```minikube ip``` - Endereço IP da VM em que o cluster e o engine docker são executados.

>O Minikube executa uma configuração de k8s e, portanto, executará muitos containers que não são necessários se não estiver usando o k8s. Podemos executar ```minikube pause``` para pausar os containers relacionados a k8s para que eles não acabem consumindo todo o recurso do sistema.