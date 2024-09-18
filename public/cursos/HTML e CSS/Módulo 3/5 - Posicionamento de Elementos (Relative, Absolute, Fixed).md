**Visão Geral:**

Aprenda como posicionar elementos HTML na página usando as propriedades de posicionamento CSS. Esta lição cobre os diferentes valores da propriedade `position`, como `relative`, `absolute`, `fixed` e `sticky`, e como cada um afeta o fluxo e o layout dos elementos na página.

**Conteúdo:**

- **Propriedade `position`:**
  - **`static`:** Valor padrão que coloca os elementos no fluxo normal do documento. As propriedades `top`, `right`, `bottom` e `left` são ignoradas.
    ```css
    .static-box {
        position: static;
    }
    ```
  - **`relative`:** Posiciona o elemento em relação à sua posição original no fluxo do documento. Permite usar as propriedades `top`, `right`, `bottom` e `left` para deslocar o elemento de sua posição inicial.
    ```css
    .relative-box {
        position: relative;
        top: 10px;
        left: 10px;
    }
    ```
  - **`absolute`:** Remove o elemento do fluxo normal do documento e o posiciona em relação ao seu antecessor posicionado (o mais próximo com qualquer valor de `position` diferente de `static`). Permite usar as propriedades `top`, `right`, `bottom` e `left` para definir sua posição exata.
    ```css
    .absolute-box {
        position: absolute;
        top: 50px;
        left: 50px;
    }
    ```
  - **`fixed`:** Remove o elemento do fluxo normal do documento e o posiciona em relação à janela de visualização. O elemento permanece fixo na tela, independentemente da rolagem da página.
    ```css
    .fixed-box {
        position: fixed;
        bottom: 0;
        right: 0;
    }
    ```
  - **`sticky`:** O elemento é tratado como `relative` até que ele atinja um ponto de rolagem definido com `top`, `right`, `bottom` ou `left`, onde ele se comporta como `fixed`. Isso faz com que o elemento "grude" em sua posição definida quando atinge o ponto especificado.
    ```css
    .sticky-box {
        position: sticky;
        top: 0; /* O elemento se fixará no topo da tela quando rolar para essa posição */
    }
    ```

- **Diferença entre Posicionamentos e Como Usar Cada Um em Diferentes Contextos:**
  - **`static`:** Usado por padrão, não afeta o layout dos elementos e não permite ajustes de posição.
  - **`relative`:** Útil para ajustar a posição de um elemento em relação à sua posição original, frequentemente usado para criar efeitos de sobreposição.
  - **`absolute`:** Ideal para criar layouts complexos onde a posição exata é necessária, frequentemente usado para posicionar elementos em relação a um contêiner pai.
  - **`fixed`:** Ideal para criar cabeçalhos ou barras laterais que permanecem visíveis enquanto o usuário rola a página.
  - **`sticky`:** Ideal para criar elementos que se comportam como `relative` até um certo ponto de rolagem, onde se tornam `fixed`. Útil para menus ou cabeçalhos que permanecem no topo da página após rolar para uma determinada posição.

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Posicionamento CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="fixed-box">
        Cabeçalho Fixo
    </header>
    <main>
        <div class="relative-box">
            Conteúdo com Posicionamento Relativo
        </div>
        <div class="absolute-box">
            Imagem ou Elemento Posicionado Absolutamente
        </div>
        <aside class="sticky-box">
            Menu ou Barra Lateral Sticky
        </aside>
    </main>
</body>
</html>
```

```css
/* styles.css */
.relative-box {
    position: relative;
    left: 10px;
    top: 10px;
    border: 1px solid black;
    padding: 10px;
    background-color: lightblue;
}

.absolute-box {
    position: absolute;
    top: 50px;
    left: 50px;
    border: 1px solid red;
    padding: 10px;
    background-color: lightgreen;
}

.fixed-box {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: lightcoral;
    padding: 10px;
    color: white;
}

.sticky-box {
    position: sticky;
    top: 0;
    background-color: lightgoldenrodyellow;
    padding: 10px;
    border: 1px solid gray;
}
```

**Vídeo de apoio:**
[![Watch the video](https://i.ytimg.com/vi/zPlt84S1L0U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqUwDzBmP1tcHti7QddUyvSQcvIw)](https://www.youtube.com/watch?v=zPlt84S1L0U)

**Exercícios:**
1. **Página com Cabeçalho Fixo e Conteúdo Posicionado:**
   - Crie uma página com um cabeçalho fixo no topo da página, um conteúdo principal com posicionamento relativo, e uma imagem ou outro elemento posicionado absolutamente dentro de um contêiner. Utilize as propriedades `top`, `right`, `bottom`, e `left` para ajustar o posicionamento dos elementos.

2. **Experimento com Posicionamento `sticky`:**
   - Crie um elemento com posicionamento `sticky` e defina uma propriedade `top` para observar como o elemento "gruda" na parte superior da tela ao rolar a página. Experimente diferentes valores para `top` e adicione conteúdo suficiente para permitir a rolagem da página para visualizar o efeito `sticky`.
  
---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
