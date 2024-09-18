**Visão Geral:**

Nesta lição, você aprenderá a estilizar o texto em uma página web usando CSS. Exploraremos como alterar fontes, tamanhos de texto, cores, espaçamentos entre letras e mais, para criar designs de texto atraentes e legíveis.

**Conteúdo:**

- **Propriedades de Fontes:**
  - **`font-family`:** Define a fonte a ser usada para o texto. Pode ser uma fonte genérica ou uma fonte específica, com uma lista de fontes alternativas. Exemplo: `font-family: 'Arial', sans-serif;`.
  - **`font-size`:** Define o tamanho da fonte. Pode ser especificado em unidades relativas (como `em` ou `%`) ou absolutas (como `px` ou `pt`). Exemplo: `font-size: 2em;`.
  - **`font-weight`:** Controla a espessura da fonte. Valores comuns incluem `normal`, `bold`, `bolder`, e números como `100`, `200`, até `900`. Exemplo: `font-weight: bold;`.
  - **`font-style`:** Define o estilo da fonte, como `normal`, `italic`, ou `oblique`. Exemplo: `font-style: italic;`.

- **Alteração de Cores:**
  - **`color`:** Define a cor do texto. Pode ser especificada usando valores de cor em formato RGB, HEX ou HSL.
    - **RGB:** Exemplo: `color: rgb(255, 0, 0);` (vermelho).
    - **HEX:** Exemplo: `color: #ff0000;` (vermelho).
    - **HSL:** Exemplo: `color: hsl(0, 100%, 50%);` (vermelho).

- **Controle de Espaçamento de Texto:**
  - **`line-height`:** Controla o espaço entre linhas de texto. Pode ser um valor numérico, uma unidade, ou uma porcentagem. Exemplo: `line-height: 1.6;`.
  - **`letter-spacing`:** Define o espaçamento entre caracteres de um texto. Exemplo: `letter-spacing: 0.05em;`.

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Estilização de Texto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Título Estilizado</h1>
    <p>Este é um parágrafo estilizado com propriedades de texto CSS.</p>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: 'Arial', sans-serif;
    color: #333;
}

h1 {
    font-size: 2em;
    font-weight: bold;
}

p {
    line-height: 1.6;
    letter-spacing: 0.05em;
}
```

**Vídeo de apoio:**
[![Watch the video](https://i.ytimg.com/vi/nUj9hklpu38/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOAlTBBHYu8jh7vBurJKCgWWb_lA)](https://www.youtube.com/watch?v=nUj9hklpu38)

**Exercícios:**
1. **Experimento de Fontes e Estilos:**
   - Experimente diferentes combinações de fontes e estilos (tamanho, peso, estilo) para criar um design de texto atraente em uma página web. Utilize diferentes propriedades como `font-family`, `font-size`, `font-weight`, e `font-style` para ver como elas afetam o layout.

2. **Criação de Estilo de Página Completa:**
   - Crie um arquivo CSS que estilize uma página web inteira utilizando apenas as propriedades de texto discutidas nesta lição. Inclua diferentes elementos como títulos, parágrafos e links, aplicando estilos de fonte, cor, espaçamento e controle de linha para criar um design coeso.
  
---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
