#### Conteúdo Teórico

Os formulários são essenciais em páginas web, permitindo que os usuários enviem dados para servidores. Para garantir a integridade e a precisão dessas informações, é crucial realizar **validações** antes do envio. A validação pode ocorrer no lado do cliente (frontend), utilizando JavaScript para checar os dados antes que o formulário seja enviado ao servidor.

**Tipos de Validações em Formulários:**
1. **Validação de Requerimento:** Verifica se o campo não está vazio.
2. **Validação de Formato:** Verifica se o valor inserido segue um formato específico (e.g., e-mails).
3. **Validação de Comprimento:** Checa se a entrada tem o comprimento correto (e.g., senha com mínimo de 8 caracteres).
4. **Validação de Tipo de Dados:** Garante que o tipo de dado inserido seja o correto (e.g., números em um campo de telefone).

**Eventos comumente usados para validação:**
- **`submit`:** Ocorre quando o formulário é enviado.
- **`input`:** Detecta alterações nos campos de entrada.
- **`blur`:** Acontece quando o usuário sai de um campo.

**Exemplo de Validação de Campo Requerido:**
```js
const form = document.querySelector('#meuFormulario');
const inputNome = document.querySelector('#nome');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // Impede o envio do formulário
  if (inputNome.value === '') {
    alert('O campo nome é obrigatório!');
  }
});
```

#### Conteúdo Prático

##### Exemplo 1: Validação de Campos Obrigatórios
```js
const form = document.querySelector('#cadastroForm');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nomeInput.value === '' || emailInput.value === '') {
    alert('Todos os campos são obrigatórios.');
  }
});
```

##### Exemplo 2: Validação de Formato de E-mail
```js
const form = document.querySelector('#emailForm');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(emailInput.value)) {
    alert('Por favor, insira um e-mail válido.');
  }
});
```

##### Exemplo 3: Validação de Comprimento de Senha
```js
const form = document.querySelector('#senhaForm');
const senhaInput = document.querySelector('#senha');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (senhaInput.value.length < 8) {
    alert('A senha deve ter pelo menos 8 caracteres.');
  }
});
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/rudAiGQ-mes/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAva8sJoaNQ9klQpAZnAEhxE0u_jg)](https://youtu.be/rudAiGQ-mes?si=RCOdhCOQ7fxsb2eV)

#### Exercícios

1. Crie um formulário com campos para nome, e-mail e senha. Implemente uma validação que garanta que todos os campos sejam preenchidos antes do envio.
2. Adicione validação para garantir que o campo de e-mail contenha um endereço válido, utilizando uma expressão regular.
3. Crie um campo de confirmação de senha que verifique se os valores inseridos em dois campos de senha são idênticos antes do envio.
4. Implemente uma validação que exiba um aviso se o telefone inserido não contiver apenas números.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Trabalhar com formulários e validações em JavaScript é uma habilidade essencial para o desenvolvimento web, garantindo que os dados inseridos pelos usuários sejam coerentes e seguros antes de serem enviados ao servidor. Com a validação no lado do cliente, conseguimos evitar o envio de dados incorretos, economizando tempo e recursos do sistema, além de proporcionar uma experiência de usuário mais amigável e responsiva.
