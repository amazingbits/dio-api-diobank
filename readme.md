# DIO Bank API

<p>Uma pequena API desenvolvida com Node com TypeScript que simula um CRUD de usuário.</p>

### Rotas

<p>GET /user/ - retorna um array com todos os usuários cadastrados</p>
<p>GET /user/:userId - retorna um usuário específico</p>
<p>POST /user/create  - cria um novo usuário</p>
<p>Body (JSON): 
  {
    "name": string,
    "email": string
  }
</p>
<p>PUT /user/update/:userId - atualiza informações de um usuário específico</p>
<p>Body (JSON): 
  {
    "name": string,
    "email": string
  }
</p>
<p>DELETE /user/:userId - remove um usuário específico</p>
