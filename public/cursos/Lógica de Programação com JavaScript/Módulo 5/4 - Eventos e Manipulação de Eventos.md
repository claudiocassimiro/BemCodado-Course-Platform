### Eventos e Manipulação de Eventos

#### Conteúdo Teórico

Em JavaScript, **eventos** são ações que ocorrem no navegador, como cliques de botão, movimentação do mouse, pressionamento de teclas, entre outros. A **manipulação de eventos** envolve a captura dessas ações e a execução de código em resposta a elas, permitindo interatividade em suas páginas.

**Tipos Comuns de Eventos:**
- **Clique (click):** Ocorre quando um elemento é clicado.
- **Mouseover:** Quando o mouse passa sobre um elemento.
- **Keydown/Keyup:** Ocorrem quando uma tecla é pressionada ou liberada.
- **Submit:** Quando um formulário é enviado.
- **Change:** Quando o valor de um input ou select muda.

**Como Lidar com Eventos:**
- Utilizamos o método `addEventListener(event, callback)` para "escutar" um evento em um elemento.
  - `event`: o tipo de evento que queremos monitorar, como `click`, `submit`, etc.
  - `callback`: a função a ser executada quando o evento ocorre.

**Exemplo:**
```js
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Botão clicado!');
});
```

**Remoção de Eventos:**
- Para remover um evento, utilizamos `removeEventListener(event, callback)`.

#### Conteúdo Prático

##### Exemplo 1: Escutando um Clique em um Botão
```js
const btn = document.querySelector('#meuBotao');

// Adiciona um evento de clique no botão
btn.addEventListener('click', () => {
  alert('Você clicou no botão!');
});
```

##### Exemplo 2: Evento de Envio de Formulário
```js
const form = document.querySelector('#meuFormulario');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o envio do formulário
  alert('Formulário enviado!');
});
```

##### Exemplo 3: Mudança de Input
```js
const input = document.querySelector('#meuInput');

input.addEventListener('change', () => {
  console.log(`Novo valor: ${input.value}`);
});
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/Ff4I7TwNvtk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkYIH1yV51duDeS2MYUhyZzlMKAA)](https://youtu.be/Ff4I7TwNvtk?si=JOyq5prpIvLQRqcB)
#### Exercícios

1. Adicione um evento de clique em um botão com o ID `add-item-btn`, que ao ser clicado, adiciona um item em uma lista.
2. Crie um evento de mouseover em um parágrafo. Quando o usuário passar o mouse sobre o parágrafo, altere a cor do texto.
3. Adicione um evento de `keydown` em um campo de input que detecta e exibe no console a tecla que foi pressionada.
4. Use um evento `submit` em um formulário para validar o campo de texto. Se o campo estiver vazio, exiba uma mensagem de erro e evite o envio.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Manipular eventos em JavaScript é fundamental para criar páginas web interativas. Com o uso de `addEventListener`, é possível capturar eventos do usuário e responder a eles, tornando a interface muito mais dinâmica. Seja clicando em botões, movendo o mouse ou enviando formulários, dominar a manipulação de eventos é essencial para qualquer desenvolvedor front-end.
