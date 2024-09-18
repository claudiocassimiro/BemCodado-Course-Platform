**1. Introdução a Variáveis**
   - **O que são variáveis?**
     Variáveis são contêineres que armazenam valores para serem utilizados e manipulados ao longo do programa. Elas permitem que você armazene dados de diferentes tipos, como números, textos e objetos.
     
   - **Declaração de variáveis em JavaScript: `var`, `let`, `const`**
     - `var`: Declara uma variável com escopo de função ou global, podendo ser redeclarada e atualizada.
     - `let`: Declara uma variável com escopo de bloco, que pode ser atualizada, mas não redeclarada dentro do mesmo escopo.
     - `const`: Declara uma constante com escopo de bloco. O valor não pode ser alterado após ser atribuído.

   **Exemplo de Código:**
   ```javascript
   var nome = "Ana"; // Pode ser redeclarada e tem escopo global/função
   let idade = 25;   // Pode ser atualizada, mas não redeclarada no mesmo bloco
   const cidade = "São Paulo"; // Constante, valor não pode ser alterado
   ```

**2. Tipos de Dados em JavaScript**
   - **Tipos Primitivos:**
     - `String`: Representa texto. Exemplo: `"Olá, mundo!"`
     - `Number`: Representa números. Exemplo: `42` ou `3.14`
     - `Boolean`: Representa valores verdadeiros ou falsos. Exemplo: `true` ou `false`
     - `Undefined`: Representa uma variável que foi declarada, mas ainda não possui valor atribuído.
     - `Null`: Representa a ausência intencional de valor.
     - `Symbol`: Representa um valor único e imutável, frequentemente usado como identificador único.
     - `BigInt`: Representa números inteiros de precisão arbitrária. Exemplo: `1234567890123456789012345678901234567890n`
     
   - **Tipos de Dados Não Primitivos:**
     - **Objetos:** Coleção de propriedades, onde cada propriedade é composta por um par chave-valor.
     - **Arrays:** Lista ordenada de valores, onde cada valor pode ser acessado por seu índice.
     - **Funções:** Blocos de código reutilizáveis que podem ser chamados em diferentes partes do programa.

   **Exemplo de Código:**
   ```javascript
   let nome = "Carlos";           // String
   let idade = 30;                // Number
   let casado = false;            // Boolean
   let endereco;                  // Undefined
   let salario = null;            // Null
   let id = Symbol("id");         // Symbol
   let numeroGrande = 9007199254740991n; // BigInt

   let pessoa = {                 // Objeto
     nome: "Carlos",
     idade: 30,
     cidade: "Rio de Janeiro"
   };

   let numeros = [1, 2, 3, 4, 5]; // Array

   function saudacao(nome) {          // Função
     return "Olá, " + nome;
   }
   ```

**3. Exemplos Práticos**
   - **Declaração e inicialização de variáveis:**
     ```javascript
     let corFavorita = "azul";
     const PI = 3.14159;
     ```
   - **Conversão de tipos de dados:**
     ```javascript
     let ano = "2024";
     let anoNumero = Number(ano); // Converte string "2024" para número 2024
     console.log(anoNumero + 1);  // Resultado: 2025
     
     let verdade = true;
     let verdadeTexto = String(verdade); // Converte booleano true para string "true"
     console.log(verdadeTexto);  // Resultado: "true"
     ```

**4. Exercícios Práticos**
   1. **Declare variáveis usando `let` e `const`**
   2. **Crie um objeto chamado `pessoa` com propriedades `nome`, `idade`, e `cidade`**
   3. **Converta uma string numérica para o tipo `Number` e realize uma operação aritmética**

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/4Y87KSByqOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtrBBjJOdzP3-KZvjExB_TUtE78A)](https://youtu.be/4Y87KSByqOY?si=TkVe9mxTTXYq1Ra_)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---
