#### **Objetivos da Lição**

- **Aprender a Estrutura Básica de um Documento HTML**: Discutiremos a estrutura fundamental de um documento HTML, incluindo as tags essenciais e como elas se combinam para formar a base de qualquer página web. Aprender a estrutura é essencial para qualquer desenvolvedor web, pois é o ponto de partida para a criação de sites.

#### **O que Aprenderemos**

1. **Estrutura de um Documento HTML**: Compreenderemos a organização básica de um documento HTML, incluindo o papel de cada tag essencial e como elas colaboram para formar a estrutura de uma página web.

**Conteúdo:**

Todo documento HTML segue uma estrutura básica que consiste em um conjunto de elementos (ou "tags") que definem o conteúdo e a estrutura da página.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página -->
    <h1>Bem-vindo ao Curso de HTML!</h1>
    <p>Este é o parágrafo de introdução.</p>
</body>
</html>
```

- **`<!DOCTYPE html>`**: Declara o tipo de documento como HTML5.
- **`<html lang="pt-br">`**: Elemento raiz que encapsula todo o conteúdo da página. O atributo `lang` define o idioma do conteúdo.
- **`<head>`**: Contém metadados sobre o documento, como o conjunto de caracteres, o título da página, links para arquivos CSS, scripts, etc.
- **`<meta charset="UTF-8">`**: Define o conjunto de caracteres para o documento.
- **`<title>`**: Define o título da página que aparece na aba do navegador.
- **`<body>`**: Contém o conteúdo visível da página, como texto, imagens, links, etc.

---

### **Morfologia de uma Tag HTML**

Cada elemento HTML, ou "tag", possui uma estrutura específica que segue uma sintaxe definida. Compreender a morfologia de uma tag é fundamental para entender como elas funcionam e como podem ser utilizadas corretamente em um documento HTML.

**Estrutura de uma Tag HTML:**

Uma tag HTML pode ser dividida em três partes principais:

1. **Abertura da Tag:** A tag de abertura é delimitada por `<` e `>` e contém o nome do elemento, que define o tipo de conteúdo ou a função da tag. Exemplos incluem `<p>`, `<h1>`, `<div>`, etc.

2. **Conteúdo da Tag:** Este é o conteúdo que a tag engloba. Pode ser texto, outros elementos HTML, ou pode estar vazio, dependendo do tipo de tag.

3. **Fechamento da Tag:** A tag de fechamento é similar à de abertura, mas é precedida por uma barra (`/`). Ela indica o fim do elemento. Exemplo: `</p>`, `</h1>`, `</div>`.

**Exemplo de Tag Completa:**

```html
<p>Este é um parágrafo.</p>
```

- `<p>`: Tag de abertura que indica o início de um parágrafo.
- `Este é um parágrafo.`: Conteúdo do parágrafo.
- `</p>`: Tag de fechamento que indica o fim do parágrafo.

**Tags Auto-fechadas:**

Algumas tags HTML não possuem conteúdo e são auto-fechadas. Elas combinam a abertura e o fechamento em uma única tag. Exemplos incluem `<img>`, `<br>`, e `<hr>`.

```html
<img src="imagem.png" alt="Descrição da Imagem">
```

- `<img src="imagem.png" alt="Descrição da Imagem">`: Tag de imagem auto-fechada. Contém atributos `src` (source) e `alt` (texto alternativo).

**Atributos de Tag:**

Atributos fornecem informações adicionais sobre um elemento HTML. Eles são sempre especificados na tag de abertura e consistem em um par de nome e valor.

```html
<a href="https://www.example.com" target="_blank">Visite nosso site</a>
```

- **`href="https://www.example.com"`**: Atributo `href` especifica o destino do link.
- **`target="_blank"`**: Atributo `target` define onde o link será aberto (`_blank` abre em uma nova aba).

**Vídeo de apoio:** [![Watch the video](https://i.ytimg.com/vi/oZvuH9_IvwI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALvoq7CQB5_5xeTBNbgPlsokZf4A)](https://www.youtube.com/watch?v=oZvuH9_IvwI)
**Exercícios Práticos:**

1. **Explorando Tags HTML:**
   - **Exercício:** Crie uma página HTML que utilize diferentes tipos de tags (como `<p>`, `<h1>`, `<ul>`, `<img>`, `<a>`) e explique o propósito de cada uma no código comentado.
   - **Dica:** Adicione comentários no seu código HTML para descrever o uso de cada tag. Exemplo: `<!-- Este é um parágrafo -->`.

2. **Prática com Atributos:**
   - **Exercício:** Crie uma página HTML que inclua pelo menos três imagens diferentes, usando a tag `<img>`. Para cada imagem, use os atributos `src`, `alt`, `width`, e `height` corretamente.
   - **Dica:** Verifique como a página é exibida em diferentes tamanhos de tela ajustando os atributos `width` e `height`.

3. **Trabalhando com Links:**
   - **Exercício:** Crie uma lista de links (usando a tag `<a>`) para cinco sites que você visita com frequência. Utilize diferentes atributos de `target` para cada link.
   - **Dica:** Tente abrir alguns links na mesma janela e outros em novas abas para ver como o atributo `target` funciona.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---

### **Conclusão:**

Compreender a morfologia das tags HTML é crucial para escrever código HTML eficiente e sem erros. Tags bem estruturadas e o uso correto de atributos melhoram a acessibilidade, o SEO e a experiência do usuário. Continue praticando criando diferentes elementos HTML para se familiarizar com suas funcionalidades e usos.

---

Esses exercícios adicionais ajudarão os alunos a praticar a construção de elementos HTML com uma compreensão mais profunda da morfologia e da sintaxe correta das tags HTML.
