#### **Objetivo da Lição:**
Entender como definir e chamar funções em JavaScript, a base da modularização de código. Ao final desta lição, os alunos serão capazes de criar funções reutilizáveis e invocá-las corretamente no seu código.

---
#### **Conteúdo da Lição:**

##### **1. O que é uma Função em JavaScript?**
- **Conceito:** Uma função é um bloco de código projetado para realizar uma tarefa específica. Ela pode ser reutilizada ao longo do código, o que ajuda a modularizar e organizar a lógica da aplicação.
- **Por que usar funções?** Para evitar repetição de código, melhorar a legibilidade e facilitar a manutenção.

##### **2. Sintaxe Básica para Definir uma Função**
- **Declaração de uma função:**
  ```javascript
  function nomeDaFuncao() {
      // Código a ser executado
  }
  ```
  - **`function`:** Palavra-chave para declarar uma função.
  - **`nomeDaFuncao`:** Identificador que nomeia a função.
  - **`{}`:** Bloco de código que contém as instruções a serem executadas.

- **Exemplo Prático:**
  ```javascript
  function cumprimentar() {
      console.log("Olá, mundo!");
  }
  ```
  - Esta função, quando chamada, imprimirá "Olá, mundo!" no console.

##### **3. Chamada de Funções**
- **Como chamar uma função:** 
  - Basta usar o nome da função seguido de parênteses:
    ```javascript
    nomeDaFuncao();
    ```
- **Exemplo Prático:**
  ```javascript
  cumprimentar(); // Chama a função e imprime "Olá, mundo!"
  ```

##### **4. Funções com Parâmetros**
- **Definindo uma função com parâmetros:**
  - Parâmetros são valores que você pode passar para a função para que ela trabalhe com dados diferentes.
  - **Exemplo:**
    ```javascript
    function cumprimentar(nome) {
        console.log("Olá, " + nome + "!");
    }
    ```
- **Chamada da função com argumentos:**
  - Quando chamar a função, você pode passar um valor (ou argumento) para o parâmetro:
    ```javascript
    cumprimentar("Maria"); // Imprime "Olá, Maria!"
    ```

##### **5. Funções com Retorno**
- **Retornando valores de uma função:**
  - Algumas funções realizam cálculos ou outras operações e devolvem um valor. Isso é feito usando a palavra-chave `return`.
  - **Exemplo:**
    ```javascript
    function soma(a, b) {
        return a + b;
    }
    ```
- **Utilizando o valor retornado:**
  - O valor retornado pode ser armazenado em uma variável ou utilizado diretamente:
    ```javascript
    let resultado = soma(5, 3);
    console.log(resultado); // Imprime 8
    ```

##### **6. Conceitos de Funções Nomeadas e Anônimas**
- **Funções Nomeadas:**
  - Funções que possuem um nome definido (como os exemplos anteriores).
- **Funções Anônimas (introdução rápida):**
  - Funções sem nome, muitas vezes usadas como valores de variáveis ou parâmetros para outras funções.

##### **7. Boas Práticas na Definição e Chamada de Funções**
- **Nomenclatura:** Use nomes descritivos que indicam a ação ou o propósito da função.
- **Tamanho:** Mantenha as funções curtas e específicas para realizar uma única tarefa.
- **Reutilização:** Escreva funções genéricas que possam ser reutilizadas em diferentes partes do código.

---

#### **Exercícios Práticos:**

1. **Crie uma Função Simples:**
   - Defina uma função `mostrarMensagem` que imprime uma mensagem personalizada no console. Chame essa função para mostrar a mensagem "Bem-vindo ao curso de JavaScript!".

2. **Função com Parâmetro:**
   - Defina uma função `saudar` que recebe um nome como parâmetro e imprime "Olá, [nome]!" no console.

3. **Função com Retorno:**
   - Crie uma função `multiplicar` que recebe dois números como parâmetros, multiplica-os e retorna o resultado. Em seguida, chame a função e mostre o resultado no console.

---

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/g4zT5GHljbM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzJzh2ibypDCaxos0QxYHtTz1PUg)](https://youtu.be/g4zT5GHljbM?si=jLrkdtOXLDpLqVJy)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### **Conclusão:**
Esta lição estabeleceu os fundamentos para o uso de funções em JavaScript. A definição e chamada de funções são cruciais para a criação de código modular e reutilizável. Nas próximas lições, exploraremos como funções podem ser aprimoradas com parâmetros, retornos, e como a modularização facilita o desenvolvimento de projetos maiores.
