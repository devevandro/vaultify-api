# Nestjs Template

##### Versão: 1.0.0


## 1. Introdução

Este é um projeto template utilizando do framework Nestjs.

## 2. Nestjs

Nestjs é um framework typescript que usa de uma estrutura Node.js para a construção de aplicativos do lado do servidor eficientes, confiáveis e escalonáveis.

- [Documentação Nestjs](https://docs.nestjs.com/)

## 3. Estrutura do projeto

Esse projeto foi estruturado utilizando da modelagem de domínio para microserviços. O DDD ajuda a garantir que a arquitetura permaneça concentrada em capacidades comerciais.


### 3.1 Camada de Domínio
Caminho: `src/domain`.

É o diretório de alto nível. Dentro dele são definidas as interfaces que me dizem como o mundo externo se comunica com o meu domínio.


### 3.2 Camada de Providers
Caminho: `src/providers`.

São os _providers_ que assinam os contratos dos domínios e que são os _providers_ reais de informação. Os providers sempre seguem de um contrato definido pelo nosso domínio.

Quando formos chamar o ambiente de `prod` ou `dev`, iremos invocar justamente os _providers_. Porém, em ambiente de `test`, iremos injetar as classes fakes. As nossas classes fakes também obdecem dos mesmos contratos.


### 3.3 Camada de Infra
Caminho: `src/infra`.

Ela faz a junção do Domínio e _Providers_, ou seja, faz o meio de campo entre o que vem de fora.

O esquema segue, basicamente, os seguintes passos:

- Recebemos a requisição do mundo externo, através de uma rota;
- A rota chama o Controller;
- O Controller chama ou o Caso de Uso ou uma camada de apresentação, que é justamente para personalizar, ou pra um _client_ específico (alguns lugares podem chamar o `presentation`), porque, assim, tiramos a responsabilidade dele.


### 3.4 Controller e Presentation
O Controller é o nosso secretário. Recebe a informação, chama quem tem que chamar e retorna a resposta. Ele não faz nada mais além disso.

Caso não tenha tenhum tipo de personalização de resposta para um determinado _client_, ele chama o Caso de Uso diretamente. A rota sempre chama o Controller e ele ou chama o Caso de Uso ou chama uma camada de `presentation`, que é uma camada personalizada. No final, ele retorna o _response_.


## 4. Testes

O desacoplamento e a inversão de depedência proporcia uma modularização muito mais sucetível a testes.

Para os testes unitários utilizamos o Jest e para testes de integração a lib Supertest.

Concentramos os esforços dos testes de unidade no core da aplicação, por tanto, todos os casos de uso e entidades são testados.

Repositórios fakes são criados e dados são mocados de acordo com as necessidades dos testes, e a injeção dos provider como dependência sempre é feita por meio de factories ou singletons e o provider é decidido de acordo com o stage que está rodando a aplicação.

Para rodar os testes da aplicação, utilizar:
  - npm run test

## 5.Estartando o projeto

Visando padronizar o ambiente de desenvolvimento, utilizamos das funcionalidades do Docker para o empacotamento da nossa aplicação e suas depêndencias, portanto, para rodar o projeto, recomendamos fortemente a instalação e utilização do Docker.

 - [Docker Documentação](https://docs.docker.com/get-started/)


### 5.1 Primeiro start.
Com o docker instalado e configurado, realizar os seguintes passos:
  - Criar o arquivo `.env` na raiz do projeto seguindo como base o `.env.template` da aplicação.
  - Em uma janela do terminal, aberta no diretório raiz do projeto, executar o comando `docker-compose up --build`.
  - A aplicação estará disponível em modo de desenvolvimento (live reload) no endereço `http://localhost:3000`


### 5.2 Próximas execuções
Após o build realizado seguindo os passos do primeiro start, apenas o comando `docker-compose up` é necessário para subir o ambiente de desenvolvimento nas próximas execuções.


## 6. Documentação Api Rest
Para documentação dos métodos http/https de nossa API foi utilizado o Swagger.

A documentação é gerada de forma automática através do uso de annotations que o plugin do @nestjs/swagger provê.

 - [OpenApi com Nestjs](https://notiz.dev/blog/openapi-in-nestjs)

A documentação pode ser visualizada acessando `http://localhost:3000/api`

## 7.Pradonização dos commits

Utilizamos das especificações do Conventional Commits para padronização das nossas mensagens. As regras e boas práticas podem ser consultadas no artigo abaixo:

 - [Commits semânticos](https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/)

Como ferramenta para auxiliar na pradronização dos commits, utilizamos o commitizen. O commitizen provê um utilitário de linha de comando que auxilia a criação de commits com nossas regras.

 - [Commitizen](https://commitizen-tools.github.io/commitizen/)


## 8. CI/CD

Nossa esteira de entegra contínua constitui-se das seguintes etapas:

 - Commit lint: Validação dos padrões das mensagens de commit.
 - Testes: Execução dos teste unitários.
 - Sonar cloud: Verificação da qualidade e segurança do código de acordo com métricas pré-definidas.



