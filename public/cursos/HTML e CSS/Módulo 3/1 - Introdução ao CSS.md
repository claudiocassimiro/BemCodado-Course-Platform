**Visão Geral:**

Nesta lição, vamos explorar o que é CSS (Cascading Style Sheets) e por que ele é essencial para o desenvolvimento web moderno. Veremos como o CSS trabalha em conjunto com o HTML para estilizar páginas da web e como ele foi evoluindo até chegar ao CSS3.

**Conteúdo:**

- **Definição e Importância do CSS:** CSS é uma linguagem de estilo usada para definir a apresentação e o layout de documentos HTML. Ele permite separar o conteúdo da web da sua apresentação, facilitando a manutenção e o design responsivo das páginas.
  
- **Como o CSS se Integra com o HTML:**
  - **Estilo Embutido:** Estilos aplicados diretamente nos elementos HTML usando o atributo `style`. Por exemplo:
    ```html
    <p style="color: blue;">Texto azul</p>
    ```
  - **Estilo Interno:** Estilos definidos dentro da tag `<style>` no cabeçalho do documento HTML. Eles afetam apenas o documento em que estão incluídos. Exemplo:
    ```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exemplo de Estilo Interno</title>
        <style>
            body {
                background-color: lightgreen;
            }
            h1 {
                color: darkgreen;
                text-align: center;
            }
            p {
                font-family: "Verdana", sans-serif;
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Estilo Interno</h1>
        <p>Este exemplo mostra o uso de CSS interno.</p>
    </body>
    </html>
    ```
  - **Estilo Externo:** Estilos definidos em arquivos CSS separados, que são vinculados ao HTML usando a tag `<link>`. Esse método permite aplicar o mesmo estilo a múltiplos documentos HTML e é a prática recomendada para a maioria dos projetos. Exemplo:
    ```html
    <!-- Arquivo HTML -->
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exemplo de Estilo Externo</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Estilo Externo</h1>
        <p>Este exemplo mostra o uso de CSS externo.</p>
    </body>
    </html>
    ```

    ```css
    /* Arquivo styles.css */
    body {
        background-color: lightcoral;
    }
    h1 {
        color: white;
        text-align: center;
    }
    p {
        font-family: "Courier New", monospace;
        font-size: 22px;
    }
    ```

- **Evolução do CSS:**
  - **CSS1:** Introduzido em 1996, trouxe as primeiras propriedades de estilo para documentos HTML.
  - **CSS2:** Lançado em 1998, adicionou suporte para posicionamento e mídia. Inclui recursos como seletores avançados, pseudo-classes e pseudo-elementos.
  - **CSS3:** Introduzido gradualmente a partir de 1999, adicionou novos módulos e funcionalidades, como Flexbox, Grid Layout, animações e transições, melhorando significativamente as capacidades de layout e design.

- **Principais Funcionalidades Introduzidas no CSS3:**
  - **Flexbox:** Um modelo de layout que facilita a criação de layouts flexíveis e responsivos.
  - **Grid Layout:** Um sistema de layout bidimensional para criar designs complexos com facilidade.
  - **Transições e Animações:** Permitem adicionar efeitos dinâmicos e interativos aos elementos.
  - **Seletores Avançados e Pseudo-Classes:** Melhoram a capacidade de aplicar estilos com base em condições específicas.

**Exemplo:**

```html
<!-- Exemplo básico de CSS embutido -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Introdução ao CSS</title>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: white;
            text-align: center;
        }
        p {
            font-family: "Arial", sans-serif;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Bem-vindo ao CSS3!</h1>
    <p>O CSS permite estilizar suas páginas web de maneira eficiente.</p>
</body>
</html>
```

**Exercícios:**
1. **Criação de Estilos:**
   - Crie um arquivo HTML e aplique estilos usando todos os três métodos: estilo embutido, interno e externo. 
   - Crie um arquivo CSS separado (por exemplo, `styles.css`) e vincule-o ao documento HTML. Aplique estilos como cor de fundo, fontes e tamanhos de texto.

2. **Comparação de Métodos:**
   - Explique as diferenças entre cada método de aplicação de estilos (embutido, interno e externo) e discuta qual método você prefere usar em diferentes cenários e por quê. Considere aspectos como manutenção, reutilização e performance.

3. **Evolução do CSS:**
   - Pesquise e escreva um breve resumo sobre uma funcionalidade específica do CSS3 que você acha interessante e explique como ela pode ser usada para melhorar o design de uma página web.

4. **Aplicação Prática:**
   - Crie uma página web simples que utilize Flexbox e Grid Layout para organizar o conteúdo em uma estrutura responsiva. Inclua diferentes tamanhos de tela para testar a responsividade e adicione algumas animações básicas para aprimorar a experiência do usuário.
  
---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
