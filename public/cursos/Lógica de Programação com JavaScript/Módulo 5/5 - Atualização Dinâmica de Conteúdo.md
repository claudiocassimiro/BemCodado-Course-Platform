#### Conteúdo Teórico

A atualização dinâmica de conteúdo em páginas web permite alterar elementos da interface sem precisar recarregar toda a página. Isso é feito usando JavaScript para modificar o **DOM** (Document Object Model), manipulando elementos como texto, atributos, classes e estilos diretamente no navegador. Esse tipo de interação cria uma experiência mais fluida e interativa para o usuário.

**Formas de Atualizar o Conteúdo Dinamicamente:**
- **Alterar o texto de elementos:** Usando `innerText` ou `textContent`.
- **Modificar o HTML interno:** Usando `innerHTML`.
- **Alterar atributos de elementos:** Com o método `setAttribute()`.
- **Adicionar ou remover classes:** Utilizando `classList`.
- **Modificar estilos diretamente:** Alterando a propriedade `style`.

**Exemplo de atualização dinâmica com texto:**
```js
const titulo = document.querySelector('#titulo');
titulo.innerText = 'Novo Título';  // Altera o texto do elemento
```

**Exemplo de alteração de atributos:**
```js
const img = document.querySelector('img');
img.setAttribute('src', 'nova-imagem.jpg');  // Modifica o atributo src da imagem
```

**Exemplo de modificação de estilos:**
```js
const paragrafo = document.querySelector('p');
paragrafo.style.color = 'blue';  // Muda a cor do texto para azul
```

#### Conteúdo Prático

##### Exemplo 1: Modificando Texto
```js
const btn = document.querySelector('#mudarTexto');
const paragrafo = document.querySelector('#meuParagrafo');

// Ao clicar no botão, o texto do parágrafo é atualizado
btn.addEventListener('click', () => {
  paragrafo.innerText = 'O conteúdo foi atualizado dinamicamente!';
});
```

##### Exemplo 2: Alterando Atributos de Imagens
```js
const btnImagem = document.querySelector('#mudarImagem');
const img = document.querySelector('#minhaImagem');

// Ao clicar no botão, o atributo src da imagem é alterado
btnImagem.addEventListener('click', () => {
  img.setAttribute('src', 'nova-imagem.jpg');
});
```

##### Exemplo 3: Atualizando Estilos Dinamicamente
```js
const btnCor = document.querySelector('#mudarCor');
const div = document.querySelector('#minhaDiv');

// Ao clicar no botão, a cor da div é alterada
btnCor.addEventListener('click', () => {
  div.style.backgroundColor = 'lightblue';
});
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/nA3QJYFGsYc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzdflVCx4uKxbkKPcjysFK2KPOMQ)](https://youtu.be/nA3QJYFGsYc?si=r1rDr7-F_1bYBOvo)
[![Watch the video](https://i.ytimg.com/vi/UubFxrc0-kw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwyHccHCVyBiMhVinyi8dGS4n27w)](https://youtu.be/UubFxrc0-kw?si=87KRVz-X8WWxWXI1)

#### Exercícios

1. Crie um botão que, ao ser clicado, altere o conteúdo de um parágrafo com a ID `info-paragraph` para "Texto atualizado dinamicamente".
2. Implemente um código que altere a imagem em uma tag `<img>` ao clicar em um botão com a ID `change-img-btn`.
3. Adicione um evento que, ao clicar em um botão com a ID `toggle-btn`, altere a classe de uma div de `invisible` para `visible`, e vice-versa.
4. Modifique o estilo de um elemento de texto ao passar o mouse sobre ele, mudando sua cor e tamanho.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

A atualização dinâmica de conteúdo com JavaScript é essencial para criar interfaces mais interativas e responsivas. Ao modificar o DOM em tempo real, podemos alterar texto, atributos, estilos e classes sem a necessidade de recarregar a página. Dominar essas técnicas permite melhorar significativamente a experiência do usuário e tornar as páginas mais dinâmicas e eficientes.
