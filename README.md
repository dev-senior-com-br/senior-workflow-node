## Senior API SDK Platform Apps

Esta biblioteca facilita o uso das APIs de aplicativos da plataforma da Senior Sistemas S/A. A documentação completa das APIs está definido em https://dev.senior.com.br/apis_publicas/.

### Instalação

```bash
npm install --save @seniorsistemas/senior-platform-apps
```

### Ambiente
Atualmente o ambiente padrão para o desenvolvimento é o da Homologx.
Para fazer a troca do ambiente basta chamar o metodo `setEnvironment` ou `setUrl` caso queira passar uma url da plataforma diferente das configuradas:

```javascript
export enum ENVIRONMENTS {
  DEV = 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0',
  PROD = 'https://api.senior.com.br',
}
```

### Utilização

Para utilizar você só precisa logar através do authentication, atribuir o accessToken para a api recebido do authentication e em seguida você fazer as chamadas para os outros serviços.

```javascript
const { PlatformAppsApi } = require('@seniorsistemas/senior-platform-apps');

const api = new PlatformAppsApi();
api.authentication.login('my_user', 'my_pass').then((resp) => {
  api.accessToken = JSON.parse(resp.body.jsonToken).access_token;
  // api.bpm.startProcess(...)
});
```

Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
```

### Exemplos

No arquivo `examples/index.js` está alguns exemplos utilizando a biblioteca, para rodar eles basta inserir as variáveis de ambiente abaixo:

```bash
# Usuário da plataforma
PLATFORM_USER=
# Senha da plataforma
PLATFORM_PASS=
# Id da instancia do processo
PLATFORM_BPM_PROCESS_INSTANCE_ID=
```

#### Exemplos implementados

* [BPM](examples/index.js)

#### Dica

Você pode criar um arquivo na raiz do projeto chamado `.env` e nele informar as variaveis de ambiente, conforme abaixo:
```
PLATFORM_USER=usuario
PLATFORM_PASS=senha
PLATFORM_BPM_PROCESS_INSTANCE_ID=id_do_processo
```

## [Guia de contribuição](https://dev.senior.com.br/guia-de-contribuicao/)

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-platform-apps-node/issues](https://github.com/dev-senior-com-br/senior-platform-apps-node/issues)

## License

Copyright © 2020.
