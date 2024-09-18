### **6 - Frameworks CSS Populares**

Frameworks CSS são ferramentas que fornecem estilos predefinidos e componentes reutilizáveis, permitindo que os desenvolvedores criem sites responsivos e atraentes de maneira rápida e eficiente. Dois dos frameworks mais utilizados são o **Bootstrap** e o **Foundation**.

#### **Bootstrap** [link](https://getbootstrap.com/)

- **Definição:**  
  Bootstrap é um dos frameworks front-end mais populares, desenvolvido pelo Twitter. Ele oferece uma vasta gama de componentes pré-estilizados, como botões, formulários, tabelas, e um sistema de grid responsivo que facilita a criação de layouts flexíveis. Além disso, o Bootstrap suporta a personalização completa, permitindo que os desenvolvedores ajustem o estilo conforme necessário.

- **Principais Funcionalidades do Bootstrap:**
  - Sistema de grid responsivo.
  - Componentes de UI predefinidos (botões, modais, carrosséis, etc.).
  - Estilos e temas personalizáveis.
  - Suporte para JavaScript para adicionar funcionalidades interativas.

- **Exemplo de Uso de Grid Bootstrap:**

  O sistema de grid do Bootstrap é baseado em flexbox e permite a criação de layouts responsivos que se ajustam a diferentes tamanhos de tela.

  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <title>Exemplo de Grid Bootstrap</title>
  </head>
  <body>
      <div class="container">
          <div class="row">
              <div class="col-md-6">Coluna 1</div>
              <div class="col-md-6">Coluna 2</div>
          </div>
          <div class="row">
              <div class="col-md-4">Coluna 3</div>
              <div class="col-md-4">Coluna 4</div>
              <div class="col-md-4">Coluna 5</div>
          </div>
      </div>
  </body>
  </html>
  ```

  **Explicação:**
  - `.container`: Um contêiner responsivo que se adapta ao tamanho da tela.
  - `.row`: Define uma linha no grid.
  - `.col-md-*`: Define colunas responsivas que ocupam uma fração do espaço disponível, dependendo do tamanho da tela. Por exemplo, `col-md-6` ocupa metade da largura da linha em telas médias (≥768px).

- **Exemplo de Uso de Componentes Bootstrap:**

  Aqui está um exemplo de um formulário simples usando componentes de formulário do Bootstrap.

  ```html
  <div class="container">
      <form>
          <div class="form-group">
              <label for="exampleInputEmail1">Endereço de Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
              <small id="emailHelp" class="form-text text-muted">Nós nunca compartilharemos seu email com ninguém.</small>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  </div>
  ```

#### **Foundation** [link](https://get.foundation/) 

- **Definição:**  
  Foundation é um framework CSS avançado criado pela ZURB, focado em design responsivo e acessibilidade. Ele é altamente personalizável e inclui uma série de componentes úteis para construção de layouts flexíveis e funcionais. Foundation é conhecido por sua flexibilidade e capacidade de adaptação a projetos de qualquer escala.

- **Principais Funcionalidades do Foundation:**
  - Sistema de grid flexível e responsivo.
  - Componentes de UI otimizados para acessibilidade.
  - Suporte a Sass para customização avançada.
  - Suporte para JavaScript para adicionar funcionalidades dinâmicas.

- **Exemplo de Uso de Botões Foundation:**

  Foundation oferece uma variedade de estilos de botões que são fáceis de usar e estilizar.

  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css">
      <title>Exemplo de Botões Foundation</title>
  </head>
  <body>
      <div class="grid-container">
          <a href="#" class="button">Botão Padrão</a>
          <a href="#" class="button alert">Botão de Alerta</a>
          <a href="#" class="button success">Botão de Sucesso</a>
          <a href="#" class="button secondary">Botão Secundário</a>
      </div>
  </body>
  </html>
  ```

  **Explicação:**
  - `.button`: Classe base para estilizar um botão.
  - `.alert`, `.success`, `.secondary`: Classes adicionais que modificam o estilo padrão do botão para indicar diferentes ações ou estados.

- **Exemplo de Uso de Grid Foundation:**

  O sistema de grid do Foundation é flexível e fácil de usar, permitindo o controle preciso do layout responsivo.

  ```html
  <div class="grid-container">
      <div class="grid-x grid-margin-x">
          <div class="cell small-6 medium-4 large-3">Coluna 1</div>
          <div class="cell small-6 medium-4 large-3">Coluna 2</div>
          <div class="cell small-6 medium-4 large-3">Coluna 3</div>
          <div class="cell small-6 medium-4 large-3">Coluna 4</div>
      </div>
  </div>
  ```

  **Explicação:**
  - `.grid-container`: Contêiner que centraliza e limita a largura máxima do conteúdo.
  - `.grid-x`: Define uma linha no grid.
  - `.cell`: Define uma célula dentro da linha, que pode variar de tamanho conforme a largura da tela.

#### Vídeos de apoio:
[![Watch the video](https://i.ytimg.com/vi/mVgrenJX5dI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvrib6HDwFKVjtQAyda4il3lca2g)](https://youtu.be/mVgrenJX5dI?si=hmxu4gyc1dsNITPE)
[![Watch the video](https://i.ytimg.com/vi/3Ca9wj1_OJ8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_giAAtAFigIMCAAQARg7IFsocjAP&rs=AOn4CLDDEJaGMbZJqM878ZBcU16FdoKcGA)](https://youtu.be/3Ca9wj1_OJ8?si=0kNyv25jMLvkYe-z)
#### **Exercícios Práticos**

1. **Criação de Layout Responsivo com Bootstrap:**

   Desenvolva uma página de portfólio utilizando o Bootstrap que inclua um cabeçalho, uma área principal com três colunas de projetos e um rodapé. Use o sistema de grid do Bootstrap para tornar o layout responsivo.

2. **Página de Produto Usando Foundation:**

   Crie uma página de produto para um site de e-commerce utilizando o Foundation. A página deve ter um cabeçalho, uma imagem de produto à esquerda e uma descrição do produto à direita. Utilize o grid do Foundation para ajustar o layout conforme o tamanho da tela.

3. **Formulário de Contato Avançado:**

   Usando o Bootstrap, crie um formulário de contato que inclua campos para nome, email, número de telefone e uma área de texto para a mensagem. Utilize componentes Bootstrap para adicionar validação visual e estilos responsivos ao formulário.

4. **Navbar Responsiva com Foundation:**

   Desenvolva uma barra de navegação responsiva utilizando o Foundation que se transforme em um menu “hambúrguer” em dispositivos móveis. A barra de navegação deve conter links para diferentes seções de um site fictício.

### **Conclusão**

Os frameworks CSS como Bootstrap e Foundation facilitam muito o desenvolvimento de sites responsivos e acessíveis. Eles fornecem uma base sólida de estilos e componentes reutilizáveis que permitem aos desenvolvedores focar mais na funcionalidade e menos no estilo de base. Praticar com esses frameworks ajuda a entender melhor o design responsivo e a construir sites mais dinâmicos e acessíveis.

---

Com essas melhorias e exemplos mais detalhados, o conteúdo sobre Frameworks CSS Populares fica mais completo e prático, facilitando o aprendizado e a aplicação dos conceitos em projetos reais.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
