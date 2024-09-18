### Criação e Remoção de Elementos

#### Conteúdo Teórico

Manipular o DOM não envolve apenas modificar elementos já existentes, mas também **criar** e **remover** novos elementos dinamicamente. Isso permite que você adicione conteúdo novo à página sem a necessidade de recarregá-la, criando uma experiência mais interativa.

**Criação de Elementos:**
- No JavaScript, usamos o método `document.createElement(tagName)` para criar um novo elemento.
- Após criar o elemento, podemos adicionar conteúdo e atributos a ele, e em seguida, inseri-lo no DOM usando métodos como:
  - `parent.appendChild(child)` - Adiciona o elemento filho no final do elemento pai.
  - `parent.insertBefore(newElement, referenceElement)` - Insere o elemento antes de outro especificado.

**Remoção de Elementos:**
- Para remover um elemento, podemos usar `element.remove()` ou `parent.removeChild(child)`, onde `child` é o elemento a ser removido.

### Conteúdo Prático

#### Exemplo 1: Criando e Adicionando Elementos

```js
// Criando um novo parágrafo
const novoParagrafo = document.createElement('p');

// Definindo o conteúdo do parágrafo
novoParagrafo.textContent = 'Este é um novo parágrafo criado via JavaScript.';

// Selecionando a div onde o parágrafo será inserido
const container = document.querySelector('.container');

// Inserindo o parágrafo na div
container.appendChild(novoParagrafo);
```

#### Exemplo 2: Removendo Elementos

```js
// Selecionando o primeiro parágrafo dentro da div
const primeiroParagrafo = document.querySelector('.container p');

// Removendo o parágrafo selecionado
primeiroParagrafo.remove();
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/pSkaIyRAt7w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcvVsWDd0NdemZAQR2WUelIHrX3A)](https://youtu.be/pSkaIyRAt7w?si=ouwmQYUOv6GrCraR)
[![Watch the video](https://i.ytimg.com/vi/eC-z9oHLzBc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcOYah5Ra3pjTfuSAWwCFe4gF2hA)](https://youtu.be/eC-z9oHLzBc?si=pvkzmdQDw1MFjfmQ)
### Exercícios

Você precisa usar este HTML para manipular os elementos nos exercícios propostos abaixo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios DOM</title>
    <style>
        .destaque {
            font-weight: bold;
        }
        .paragrafo-estilizado {
            background-color: lightgray;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1 id="principal">Título Principal</h1>

    <div class="container">
        <p class="destaque">Este é o primeiro parágrafo em destaque.</p>
        <p class="destaque">Este é o segundo parágrafo em destaque.</p>
        <p>Este é um parágrafo normal.</p>
        <p>Este é outro parágrafo normal.</p>
    </div>

</body>
</html>
```

1. Crie um botão que, ao ser clicado, adiciona um novo item em uma lista `<ul>`. O conteúdo do item deve ser inserido dinamicamente.
2. Selecione um `<div>` com a classe `content` e adicione um novo elemento `<img>` dentro dela. Defina o `src` e `alt` da imagem via JavaScript.
3. Remova o terceiro item de uma lista `<ul>` que tenha a classe `item-list`.
4. Crie um formulário com um campo de texto e um botão de enviar via JavaScript. Insira esse formulário no final do `body` da página.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

### Conclusão

Entender como criar e remover elementos do DOM dinamicamente é essencial para desenvolver aplicações interativas. Com `createElement` e os métodos de inserção como `appendChild`, você pode adicionar conteúdo à página em tempo real, enquanto métodos como `remove` permitem limpar ou reorganizar elementos. Essas técnicas são amplamente usadas em diversas aplicações web modernas para melhorar a experiência do usuário.
