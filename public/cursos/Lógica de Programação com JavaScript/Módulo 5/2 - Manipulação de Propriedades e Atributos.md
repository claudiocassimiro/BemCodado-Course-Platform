#### Conteúdo Teórico

No JavaScript, a manipulação de propriedades e atributos de elementos HTML é uma técnica fundamental para criar páginas dinâmicas. **Propriedades** são características inerentes de um objeto DOM (como `textContent`, `style`, `value`, etc.), enquanto **atributos** são definidos diretamente no HTML (como `id`, `class`, `src`, `href`).

- **Propriedades**: A manipulação de propriedades permite alterar aspectos de um elemento diretamente através de JavaScript, como texto ou estilo.
    - Exemplo: `element.textContent = 'Novo texto';`
- **Atributos**: Um atributo é um dado associado a um elemento HTML que define algumas de suas características (como `id`, `class`, `src`, etc.).
    - Exemplo: `element.setAttribute('id', 'novoId');`

#### Manipulação de Propriedades
Propriedades são acessadas diretamente via `elemento.propriedade`. Algumas propriedades comuns incluem:
- `textContent`: Altera o conteúdo de texto de um elemento.
- `style`: Modifica o estilo CSS inline de um elemento.
- `value`: Define ou obtém o valor de um campo de formulário (input).

#### Manipulação de Atributos
Atributos são acessados e modificados por meio dos métodos:
- `getAttribute(attr)`: Obtém o valor de um atributo.
- `setAttribute(attr, value)`: Define o valor de um atributo.
- `removeAttribute(attr)`: Remove um atributo do elemento.

### Conteúdo Prático

#### Exemplo 1: Manipulando Propriedades

```js
// Seleciona o título principal e altera seu conteúdo
const titulo = document.getElementById('principal');
titulo.textContent = 'Novo Título';

// Muda o estilo do parágrafo
const paragrafos = document.querySelectorAll('.destaque');
paragrafos.forEach(p => {
    p.style.color = 'blue';
    p.style.fontSize = '20px';
});
```

#### Exemplo 2: Manipulando Atributos

```js
// Seleciona o elemento e modifica seu ID
const div = document.querySelector('.container');
div.setAttribute('id', 'container-principal');

// Remove o atributo 'class' de um parágrafo
const paragrafo = document.querySelector('p');
paragrafo.removeAttribute('class');
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/IwBEtyaQIYM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBumDUiCVH09APClgZHw_dZ-CI0eA)](https://youtu.be/IwBEtyaQIYM?si=YcHI0AZ21vIRmWxF)
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

1. Selecione o `<h1>` com o ID `principal` e altere o estilo da fonte para ser itálico e a cor para verde.
2. Utilize `setAttribute` para adicionar um novo atributo `data-info` ao primeiro parágrafo dentro do `div` com a classe `container`.
3. Remova o atributo `class` de todos os parágrafos com a classe `destaque`.
4. Crie um botão via JavaScript, adicione um atributo `onclick` que exibe uma mensagem no console quando clicado, e insira esse botão no final do `body`.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

### Conclusão

Manipular propriedades e atributos de elementos HTML com JavaScript é essencial para construir páginas dinâmicas e interativas. Propriedades como `textContent`, `style`, e `value` são diretamente acessíveis via JavaScript, enquanto atributos podem ser gerenciados através dos métodos `getAttribute`, `setAttribute`, e `removeAttribute`. Ao dominar essas técnicas, você conseguirá alterar o comportamento e o visual dos elementos HTML de forma eficiente e flexível.
