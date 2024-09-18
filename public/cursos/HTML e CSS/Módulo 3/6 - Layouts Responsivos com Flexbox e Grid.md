**Visão Geral:**

Nesta lição, você aprenderá duas das técnicas mais poderosas para criar layouts responsivos: Flexbox e Grid. Ambas as técnicas são essenciais para criar layouts modernos que se adaptam a diferentes tamanhos de tela e resoluções. Vamos explorar os conceitos básicos e as propriedades principais de cada técnica, além de entender quando usar Flexbox versus Grid.

**Conteúdo:**

- **Introdução ao Flexbox:**
  - **Conceitos Básicos:** Flexbox é um modelo de layout unidimensional que permite distribuir espaço e alinhar itens de forma eficiente em uma única direção (linha ou coluna).
  - **Propriedades Principais:**
    - **`display: flex`:** Ativa o modelo Flexbox em um contêiner, permitindo que seus filhos sejam flexíveis.
      ```css
      .container {
          display: flex;
      }
      ```
    - **`justify-content`:** Alinha os itens ao longo do eixo principal (horizontal por padrão). Pode usar valores como `flex-start`, `center`, `space-between`, `space-around`, e `space-evenly`.
      ```css
      .container {
          justify-content: space-between;
      }
      ```
    - **`align-items`:** Alinha os itens ao longo do eixo transversal (vertical por padrão). Pode usar valores como `flex-start`, `center`, `baseline`, e `stretch`.
      ```css
      .container {
          align-items: center;
      }
      ```
    - **`flex-direction`:** Define a direção dos itens dentro do contêiner (`row`, `column`, `row-reverse`, `column-reverse`).
      ```css
      .container {
          flex-direction: row;
      }
      ```
    - **`flex-wrap`:** Controla se os itens devem ou não quebrar para a próxima linha (`nowrap`, `wrap`, `wrap-reverse`).
      ```css
      .container {
          flex-wrap: wrap;
      }
      ```

- **Introdução ao Grid:**
  - **Conceitos Básicos:** CSS Grid é um sistema de layout bidimensional que permite criar layouts de colunas e linhas. Oferece mais controle sobre o posicionamento e o tamanho dos itens dentro de um contêiner.
  - **Propriedades Principais:**
    - **`display: grid`:** Ativa o modelo Grid em um contêiner, permitindo que os itens sejam posicionados em uma grade.
      ```css
      .grid-container {
          display: grid;
      }
      ```
    - **`grid-template-columns`:** Define a largura das colunas da grade. Pode usar valores absolutos, porcentagens ou a unidade `fr` (fração do espaço disponível).
      ```css
      .grid-container {
          grid-template-columns: repeat(3, 1fr);
      }
      ```
    - **`grid-template-rows`:** Define a altura das linhas da grade.
      ```css
      .grid-container {
          grid-template-rows: 100px auto;
      }
      ```
    - **`grid-gap`:** Define o espaço entre as células da grade.
      ```css
      .grid-container {
          grid-gap: 20px;
      }
      ```
    - **`grid-template-areas`:** Define a área de cada item da grade usando uma string de área de grid. Facilita a criação de layouts complexos e a atribuição de áreas de grid a itens específicos.
      ```css
      .grid-container {
          grid-template-areas: 
            "header header header"
            "sidebar main main"
            "footer footer footer";
      }
      ```
    - **`grid-area`:** Permite definir a posição de um item na grade usando a área da célula.
      ```css
      .header {
          grid-area: header;
      }
      .sidebar {
          grid-area: sidebar;
      }
      .main {
          grid-area: main;
      }
      .footer {
          grid-area: footer;
      }
      ```

- **Comparações e Quando Usar Flexbox versus Grid:**
  - **Flexbox:** Melhor para layouts unidimensionais (linhas ou colunas). Use quando você precisar alinhar e distribuir espaço entre itens em uma única direção.
  - **Grid:** Melhor para layouts bidimensionais (linhas e colunas). Use quando você precisar criar layouts complexos e controlar a posição e o tamanho dos itens em duas dimensões.

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Flexbox e Grid</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Exemplo de Flexbox -->
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>

    <!-- Exemplo de Grid sem grid-template-areas -->
    <div class="grid-container">
        <div class="grid-item">Item A</div>
        <div class="grid-item">Item B</div>
        <div class="grid-item">Item C</div>
    </div>

    <!-- Exemplo de Grid com grid-template-areas -->
    <div class="grid-container-areas">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="footer">Footer</div>
    </div>
</body>
</html>
```

```css
/* styles.css */

/* Estilos para Flexbox */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    padding: 10px;
}

.item {
    background-color: lightblue;
    padding: 10px;
    border: 1px solid blue;
}

/* Estilos para Grid sem grid-template-areas */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    border: 2px solid black;
    padding: 10px;
}

.grid-item {
    background-color: lightgreen;
    padding: 10px;
    border: 1px solid green;
}

/* Estilos para Grid com grid-template-areas */
.grid-container-areas {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-gap: 20px;
    border: 2px solid black;
    padding: 10px;
}

.header {
    grid-area: header;
    background-color: lightcoral;
    padding: 10px;
}

.sidebar {
    grid-area: sidebar;
    background-color: lightgoldenrodyellow;
    padding: 10px;
}

.main {
    grid-area: main;
    background-color: lightgreen;
    padding: 10px;
}

.footer {
    grid-area: footer;
    background-color: lightblue;
    padding: 10px;
}
```

**Links úteis:**
	1. Flexbox Zombies: [Game que vai te ajudar a aprender flexbox enquanto enfrenta zombies](https://mastery.games/post/flexboxzombies2/)
	2. Flexbox Froggy: [Game que vai te ajudar a aprender flexbox enquanto ajuda um sapinho a chegar na sua vitória regia](https://flexboxfroggy.com/)
	3. Grid Garden: [Game que vai te ajudar a aprender Grid Layout enquanto você cria uma pantação de cenouras](https://cssgridgarden.com/)

**Vídeos de apoio:**
[![Watch the video](https://i.ytimg.com/vi/zPlt84S1L0U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqUwDzBmP1tcHti7QddUyvSQcvIw)](https://www.youtube.com/watch?v=Swo_sCLHKlU)
[![Watch the video](https://i.ytimg.com/vi/yLTFRELCh2o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKXRyfexzCoBCcE4XBS_SWkJFFSA)](https://www.youtube.com/watch?v=yLTFRELCh2o)

**Exercícios:**
1. **Layout de Galeria com Flexbox:**
   - Crie um layout de galeria de fotos usando Flexbox. Organize as imagens em uma linha, garantindo que elas se ajustem ao tamanho da tela e que haja espaçamento adequado entre elas. Utilize as propriedades `display: flex`, `justify-content`, e `align-items` para ajustar o layout.

2. **Recriação com Grid e Comparação:**
   - Recrie o layout de galeria utilizando CSS Grid. Defina o número de colunas e o espaçamento entre as imagens usando `grid-template-columns` e `grid-gap`. Compare o layout criado com o Flexbox e discuta as diferenças em termos de flexibilidade e controle de layout.

3. **Layout com Grid-template-areas:**
   - Crie um layout de página de exemplo utilizando `grid-template-areas`. Defina áreas para o cabeçalho, a barra lateral, o conteúdo principal e o rodapé. Estilize cada área com cores e espaçamentos distintos e ajuste o layout conforme necessário.
  
---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
