Fast Feet API - Transportadora fictícia

### Regras da aplicação

- A aplicação deve ter dois tipos de usuário, entregador e/ou admin
- Deve ser possível realizar login com CPF e Senha
- Deve ser possível realizar o CRUD dos entregadores
- Deve ser possível realizar o CRUD das encomendas
- Deve ser possível realizar o CRUD dos destinatários
- Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada)
- Deve ser possível retirar uma encomenda
- Deve ser possível marcar uma encomenda como entregue
- Deve ser possível marcar uma encomenda como devolvida
- Deve ser possível listar as encomendas com endereços de entrega próximo ao local do entregador
- Deve ser possível alterar a senha de um usuário
- Deve ser possível listar as entregas de um usuário
- Deve ser possível notificar o destinatário a cada alteração no status da encomenda

### Regras de negócio

- Somente usuário do tipo admin pode realizar operações de CRUD nas encomendas
- Somente usuário do tipo admin pode realizar operações de CRUD dos entregadores
- Somente usuário do tipo admin pode realizar operações de CRUD dos destinatários
- Para marcar uma encomenda como entregue é obrigatório o envio de uma foto
- Somente o entregador que retirou a encomenda pode marcar ela como entregue
- Somente o admin pode alterar a senha de um usuário
- Não deve ser possível um entregador listar as encomendas de outro entregador


### Tecnologias utilizadas

- NestJS

- Postgres

- Prisma ORM

- ZOD

- Passport | JWT 

Gerar chave pública e privada:

`openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048`, `openssl rsa -in private.pem -pubout -out public.pem`, 

`base64 -w 0 private.pem > private_base64.txt` `base64 -w 0 public.pem > public_base64.txt`

### Docker

- Iniciar container PostgreSQL: `docker-compose up -d`

### Prisma

- Rodar migrations: `npx prisma migrate dev`

- Atualiza o Prisma Client: `npx prisma generate`