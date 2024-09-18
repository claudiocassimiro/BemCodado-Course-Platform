**Visão Geral:**

Nesta lição, vamos explorar os diferentes tipos de seletores CSS e como eles são usados para aplicar estilos a elementos HTML. Veremos seletores básicos como tipo, ID e classe, e avançaremos para seletores mais avançados, como pseudo-classes, seletores de atributo e pseudo-elementos.

**Conteúdo:**

- **Seletores de Tipo:** Aplicam estilos a todos os elementos de um tipo específico. Por exemplo, `h1` aplica estilos a todos os elementos `<h1>`.
  ```css
  h1 {
      color: blue;
  }
  ```

- **Seletores de ID:** Aplicam estilos a um único elemento com um ID específico. IDs devem ser únicos em uma página. Por exemplo, `#uniqueID` aplica estilos ao elemento com o atributo `id="uniqueID"`.
  ```css
  #uniqueID {
      color: red;
  }
  ```

- **Seletores de Classe:** Aplicam estilos a todos os elementos com uma classe específica. Classes podem ser reutilizadas em múltiplos elementos. Por exemplo, `.className` aplica estilos a todos os elementos com a classe `className`.
  ```css
  .className {
      background-color: yellow;
  }
  ```

- **Seletores de Pseudo-Classes:** Aplicam estilos a elementos com base em seu estado ou posição. Exemplos incluem:
  - `:hover`: Aplica estilos quando o cursor está sobre o elemento.
    ```css
    a:hover {
        color: green;
    }
    ```
  - `:first-child`: Aplica estilos ao primeiro filho de um elemento pai.
    ```css
    p:first-child {
        font-weight: bold;
    }
    ```

- **Seletores de Atributo:** Aplicam estilos a elementos com um atributo específico ou um valor de atributo. Exemplos:
  - `[type="text"]`: Seleciona todos os elementos `<input>` com o atributo `type="text"`.
    ```css
    input[type="text"] {
        border: 1px solid #ccc;
    }
    ```

- **Pseudo-Elementos:** Permitem aplicar estilos a partes específicas de um elemento. Exemplos:
  - `::before`: Insere conteúdo antes do conteúdo do elemento.
    ```css
    .className::before {
        content: "Prefixo - ";
        color: blue;
    }
    ```
  - `::after`: Insere conteúdo após o conteúdo do elemento.
    ```css
    .className::after {
        content: " - Sufixo";
        color: red;
    }
    ```

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Seletores CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Exemplo de Seletores</h1>
    <p id="uniqueID" class="className">Este é um parágrafo com ID e classe.</p>
    <a href="#">Link com efeito de hover</a>
</body>
</html>
```

```css
/* styles.css */
h1 {
    color: blue;
}

#uniqueID {
    color: red;
}

.className {
    background-color: yellow;
}

a:hover {
    color: green;
}

p:first-child {
    font-weight: bold;
}

input[type="text"] {
    border: 1px solid #ccc;
}

.className::before {
    content: "Prefixo - ";
    color: blue;
}

.className::after {
    content: " - Sufixo";
    color: red;
}
```

**Vídeo de apoio:**
[![Watch the video](https://i.ytimg.com/vi/LWU2OR19ZG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcPw4z7tniGD5JKQSpGHoeQqmXTg)](https://www.youtube.com/watch?v=LWU2OR19ZG4)
**Exercícios:**
1. **Criação de Menu:**
   - Crie um menu de navegação com itens estilizados usando seletores de tipo, ID e classe. Utilize pseudo-classes como `:hover` para adicionar efeitos interativos aos itens do menu.

2. **Prática com Seletores Avançados:**
   - Crie uma página com uma lista de itens. Utilize seletores avançados como `:nth-child()` e `:not()` para estilizar elementos específicos da lista. Por exemplo, aplique uma cor de fundo diferente ao segundo item da lista e esconda itens que não tenham uma classe específica.

3. **Estilização com Pseudo-Elementos:**
   - Utilize pseudo-elementos `::before` e `::after` para adicionar texto antes e depois do conteúdo de um elemento. Experimente diferentes estilos e conteúdos para ver como eles afetam a apresentação do elemento.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---

Esses tópicos e exercícios ajudarão os alunos a dominar a aplicação de estilos com diferentes seletores e a explorar as funcionalidades avançadas do CSS.
