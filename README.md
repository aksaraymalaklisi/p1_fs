# Atividade FS 1

Para executar este projeto localmente, certifique-se de ter o Node.js e o Docker instalados na sua máquina.

## Como executar

1. Inicie os containers de banco de dados em segundo plano:
   ```bash
   docker compose up -d
   ```

2. Instale todas as dependências do projeto (caso ainda não tenha feito):
   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

O servidor estará rodando e disponível na porta 3000.