**1. Estrutura Condicional `if` e `else`**
   - **Sintaxe e Uso:**
     O `if` permite executar um bloco de código apenas se uma condição for verdadeira. O `else` complementa o `if`, permitindo que um bloco de código alternativo seja executado caso a condição seja falsa.
     
     ```javascript
     let numero = 10;

     if (numero > 0) {
         console.log("O número é positivo.");
     } else if (numero < 0) {
         console.log("O número é negativo.");
     } else {
         console.log("O número é zero.");
     }
     ```

   - **Aninhamento de `if` e `else`:**
     `if` e `else` podem ser aninhados para testar múltiplas condições em série.

     ```javascript
     let idade = 20;

     if (idade < 12) {
         console.log("Criança");
     } else if (idade < 18) {
         console.log("Adolescente");
     } else if (idade < 60) {
         console.log("Adulto");
     } else {
         console.log("Idoso");
     }
     ```

**2. Estrutura Condicional `switch`**
   - **Quando Usar `switch` versus `if-else`:**
     O `switch` é ideal quando você precisa comparar uma única variável contra diferentes valores. Ele é mais legível e organizado em casos com múltiplas comparações simples, enquanto `if-else` é mais flexível para condições complexas.

   - **Sintaxe e Exemplos de Uso:**
     
     ```javascript
     let cor = "verde";

     switch (cor) {
         case "vermelho":
             console.log("Pare!");
             break;
         case "amarelo":
             console.log("Atenção!");
             break;
         case "verde":
             console.log("Siga!");
             break;
         default:
             console.log("Cor desconhecida.");
     }
     ```

**3. Exemplos Práticos**
   - **Aplicação de `if-else` para Validação de Entrada de Dados:**
     
     ```javascript
     let senha = "12345";

     if (senha.length >= 6) {
         console.log("Senha válida.");
     } else {
         console.log("Senha muito curta. Deve ter pelo menos 6 caracteres.");
     }
     ```

   - **Uso de `switch` para Seleção de Opções de Menu:**
     
     ```javascript
     let opcaoMenu = 2;

     switch (opcaoMenu) {
         case 1:
             console.log("Você selecionou a opção 1: Iniciar Jogo");
             break;
         case 2:
             console.log("Você selecionou a opção 2: Carregar Jogo");
             break;
         case 3:
             console.log("Você selecionou a opção 3: Configurações");
             break;
         default:
             console.log("Opção inválida.");
     }
     ```

**4. Exercícios Práticos**
   1. Crie uma função que recebe um número e retorna se ele é positivo, negativo ou zero.
   2. Use um `switch` para converter uma nota de letra (A, B, C, D, F) para um valor numérico.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/5fgez5qIyoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGI_KR1tjt9Re7aXIkIhavK179Rg)](https://youtu.be/5fgez5qIyoc?si=yNbi_l16A01VIa96)

[![Watch the video](https://i.ytimg.com/vi/3VzdNWTu1mQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm6QBhnUvryp_DikBLzsOXiVXVVA)](https://youtu.be/3VzdNWTu1mQ?si=txzoQsaRiICyBs1p)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---
