# Senior Plataform Apps SDK para Node

Esta biblioteca facilita o uso das APIs de aplicativos da plataforma da Senior Sistemas S/A em projetos Node. Essa mesma biblioteca também está [disponível para Java](https://github.com/dev-senior-com-br/senior-platform-apps-java). A documentação completa das APIs está definida em https://dev.senior.com.br/apis_publicas/.

Atualmente, as APIs disponibilizadas pelo SDK são:
- **Workflow**

Alguns serviços como o HCM e SAM possuem suas próprias bibliotecas, que podem ser encontradas no perfil do [Dev Senior no GitHub](https://github.com/dev-senior-com-br).

## Instalação

Adicione a dependência da biblioteca em seu projeto através do comando:
```bash
npm install --save @seniorsistemas/senior-platform-apps
```

## Ambiente
Atualmente o ambiente padrão para o desenvolvimento é o de homologação (Homologx).
Para fazer a troca do ambiente basta chamar o método `setEnvironment` ou `setUrl` caso queira passar uma url da plataforma diferente das configuradas. Os ambientes principais estão definidos no enum `ENVIRONMENTS` apresentado abaixo:

```javascript
export enum ENVIRONMENTS {
  DEV = 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0',
  PROD = 'https://api.senior.com.br',
}
```

## Utilização

Para utilizar a biblioteca você precisa apenas se autenticar através da API `authentication` e atribuir para a API o `accessToken` recebido após o processo. Em seguida você poderá utilizar todos os outros serviços disponíveis. O exemplo abaixo demonstra o processo de login e criação de uma solicitação de viagem no BPM através do método `startRequest`:

```javascript
const { PlatformAppsApi } = require('@seniorsistemas/senior-platform-apps');

const username = process.env.PLATFORM_USER;
const password = process.env.PLATFORM_PASS;
// identificador de um processo previamente criado e publicado no Workflow
const processId = process.env.PLATFORM_BPM_PROCESS_ID;

const api = new PlatformAppsApi();

api.authentication.login(username, password).then((resp) => {
  api.accessToken = JSON.parse(resp.body.jsonToken).access_token;
  api.workflow.startRequest({
    processId: processId,
    businessData: {
      destino: 'Curitiba',
      partida: '2021-06-25',
      retorno: '2021-06-28',
      motivo: 'Visita a cliente',
    },
    title: 'Viagem para Curitiba',
  })
  .then(resp => console.log(resp.body))
  .catch(err => console.error(err.response.data));
});
```

### Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
```

## Exemplos

Na pasta [examples](examples) há alguns arquivos com exemplos utilizando a biblioteca. Para executá-los, basta criar as variáveis de ambiente abaixo, sendo que elas podem ser declaradas na máquina ou em um arquivo `.env` na raiz do proejto:

```bash
# Usuário da plataforma
PLATFORM_USER=<seu_usuario_da_plataforma>
# Senha da plataforma
PLATFORM_PASS=<sua_senha_da_plataforma>
```

Alguns exemplos fazem uso de variáveis adicionais, como no caso do Workflow demonstrado acima que utiliza a variável `PLATFORM_BPM_PROCESS_ID` para definir o identificador de um processo previamente publicado na plataforma.

### Exemplos implementados

* [Workflow (BPM)](examples/workflow-examples.js)

## Contribuições

Contribuições ao projeto são bem vindas e podem ser realizadas seguindo nosso [Guia de contribuição](https://dev.senior.com.br/guia-de-contribuicao/).

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-platform-apps-node/issues](https://github.com/dev-senior-com-br/senior-platform-apps-node/issues)

## License

Copyright © 2020.
