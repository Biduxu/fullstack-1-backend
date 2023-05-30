# fullstack-1-back

## Introdução
Projeto possui o cadastro de usuários e o cadastro de seus contatos em uma relação 1:N

Front-end do projeto: fullstack-1-front

## Rodando a aplicação (Passo a passo)
Faça o clone do repositório em sua máquina

Em seu terminal instale as dependências: yarn

Crie seu banco de dados e manipule o arquivo .env seguindo o .env.example não esqueça de adicionar uma SECRET_KEY

Para criar as migrações rode o comando: npx prisma migrate dev

Em seguida digite o nome da migração.

Rode a aplicação: yarn start:dev

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista o usuário que efetuou o login               | Necessita de token                     |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Qualquer usuário, necessita de token   |
| DELETE | /users/:id                 | Realiza um delete no usuário                      | Qualquer usuário, necessita de token   |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /contacts                  | Criação de um contato                             | Qualquer usuário, necessita de token   |
| GET    | /contacts                  | Lista todos contatos do usuário logado            | Qualquer usuário, necessita token      |
| GET    | /contacts/:id              | Lista o contato passando o id                     | Qualquer usuário, necessita de token   |
| PATCH  | /contacts/:id              | Atualiza um contato                               | Qualquer usuário, necessita de token   |
| DELETE | /contacts/:id              | Deleta um contato                                 | Qualquer usuário, necessita de token   |
