### **Introdução ao DOM e Seleção de Elementos**

#### **Conteúdo Teórico**

O **DOM (Document Object Model)** é uma representação hierárquica dos elementos de uma página web, criada quando o navegador carrega um documento HTML. Ele permite que linguagens como JavaScript acessem, modifiquem e interajam com o conteúdo da página de forma dinâmica.

Cada elemento HTML é tratado como um **nó** no DOM, e esses nós podem ser acessados e manipulados com JavaScript. Através do DOM, você pode alterar a estrutura, o conteúdo e o estilo da página em tempo real, sem a necessidade de recarregá-la.

##### **Principais Métodos de Seleção de Elementos**
- `document.getElementById()`: Retorna o elemento com o ID especificado.
- `document.getElementsByClassName()`: Retorna uma coleção de todos os elementos que possuem a classe especificada.
- `document.getElementsByTagName()`: Retorna uma coleção de todos os elementos com a tag especificada.
- `document.querySelector()`: Retorna o primeiro elemento que corresponde ao seletor CSS.
- `document.querySelectorAll()`: Retorna todos os elementos que correspondem ao seletor CSS.

#### **Conteúdo Prático**

1. **Seleção de um elemento pelo ID:**
   ```javascript
   const titulo = document.getElementById('meu-titulo');
   console.log(titulo);
   ```
   Aqui, o elemento com o ID `meu-titulo` é selecionado e exibido no console.

2. **Seleção de elementos pela classe:**
   ```javascript
   const itens = document.getElementsByClassName('item');
   console.log(itens);
   ```
   Isso retorna uma coleção de todos os elementos com a classe `item`.

3. **Seleção pelo seletor CSS com `querySelector`:**
   ```javascript
   const primeiroItem = document.querySelector('.item');
   console.log(primeiroItem);
   ```
   Retorna o primeiro elemento com a classe `item`.

4. **Selecionando todos os elementos com um seletor CSS:**
   ```javascript
   const todosItens = document.querySelectorAll('.item');
   console.log(todosItens);
   ```
   Isso retorna todos os elementos que possuem a classe `item`.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/csf3dyY4GGg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR2tJ37oSnvcB1Ti9nd_t7t3_4gA)](https://youtu.be/csf3dyY4GGg?si=x3FRsvXhO6e2TXWM)
#### **Exercícios**

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

1. **Exercício 1:**
   Selecione o elemento com o ID `principal` e altere o seu conteúdo para "Bem-vindo ao DOM!"
   
2. **Exercício 2:**
   Selecione todos os elementos com a classe `destaque` e altere a cor do texto para vermelho.
   
3. **Exercício 3:**
   Utilize `querySelectorAll` para selecionar todos os parágrafos (`<p>`) e adicione a classe `paragrafo-estilizado` a cada um deles.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### **Conclusão**

A seleção de elementos no DOM é o primeiro passo para interagir com uma página web de forma programática. Usando os métodos de seleção, você pode acessar e modificar elementos, permitindo a construção de interfaces dinâmicas e interativas. À medida que você domina a manipulação de DOM, se tornará mais fácil criar páginas ricas em interatividade, personalizando a experiência do usuário em tempo real.
