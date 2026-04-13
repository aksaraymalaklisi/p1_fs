# Prova P1 FS

Este projeto utiliza arquitetura em camadas e contêineres Docker para otimizar o desenvolvimento e a implantação.

## Requisitos

- Docker
- Docker Compose

## Como executar

A interface da API e os respectivos bancos de dados (MongoDB e MySQL) são orquestrados integralmente através do Docker Compose. Escolha abaixo o modo de operação desejado.

### Modo de Desenvolvimento

Neste ambiente, a pasta local do projeto é espelhada no container e o servidor utiliza `nodemon` para reiniciar a aplicação em tempo real mediante qualquer alteração de código.

1. Inicie os contêineres:
   ```bash
   docker compose up --build -d
   ```

2. O servidor ficará disponível em `http://localhost:3000`.

### Modo de Produção

Ideal para testes finais. O código é estático na imagem construída e otimizado para o padrão final, omitindo dependências e ferramentas de desenvolvimento.

1. Inicie utilizando apenas a configuração base:
   ```bash
   docker compose -f compose.yml up --build -d
   ```

### Encerramento

Independentemente do modo em uso, o desligamento de todos os recursos é feito pelo comando formal de parada:

```bash
docker compose down
```

Utilize `-v` para eliminar os volumes e caso queira apagar o banco de dados ou recriá-lo.