**1. Estrutura de Repetição `for`**
   - **Sintaxe e Uso:**
     O loop `for` é usado quando sabemos antecipadamente quantas vezes queremos que o loop seja executado. Ele é comumente utilizado para percorrer arrays, strings ou para executar uma tarefa repetida um número específico de vezes.

     **Sintaxe básica:**
     ```javascript
     for (inicialização; condição; incremento) {
         // Código a ser executado repetidamente
     }
     ```

     **Exemplo:**
     ```javascript
     // Percorrendo um array de números
     const numeros = [1, 2, 3, 4, 5];
     for (let i = 0; i < numeros.length; i++) {
         console.log(numeros[i]);
     }
     ```

   - **Utilização em iterações de arrays e objetos:**
     O `for` é ideal para iterar sobre arrays. No caso de objetos, podemos usar o `for...in` para iterar sobre as propriedades de um objeto.

     **Exemplo de iteração em objeto:**
     ```javascript
     const pessoa = { nome: 'Ana', idade: 28, cidade: 'São Paulo' };
     for (let chave in pessoa) {
         console.log(`${chave}: ${pessoa[chave]}`);
     }
     ```

**2. Estrutura de Repetição `while` e `do-while`**
   - **Diferenças entre `while` e `do-while`:**
     Ambos os loops `while` e `do-while` são usados quando o número de iterações não é conhecido antecipadamente e depende de uma condição que pode mudar durante a execução.

     - O loop `while` verifica a condição antes de executar o bloco de código, ou seja, pode não executar o bloco nenhuma vez se a condição inicial for falsa.
     - O loop `do-while` garante que o bloco de código seja executado pelo menos uma vez, pois verifica a condição após a execução do bloco.

     **Sintaxe e Exemplo de `while`:**
     ```javascript
     let contador = 0;
     while (contador < 5) {
         console.log(`Contador: ${contador}`);
         contador++;
     }
     ```

     **Sintaxe e Exemplo de `do-while`:**
     ```javascript
     let numero;
     do {
         numero = prompt("Digite um número maior que 10:");
     } while (numero <= 10);
     console.log(`Você digitou o número: ${numero}`);
     ```

**3. Exemplos Práticos**
   - **Uso de `for` para percorrer arrays:**
     ```javascript
     const frutas = ['Maçã', 'Banana', 'Laranja'];
     for (let i = 0; i < frutas.length; i++) {
         console.log(frutas[i]);
     }
     ```

   - **Exemplo de validação de entrada de usuário usando `while`:**
     ```javascript
     let senha;
     while (senha !== '1234') {
         senha = prompt('Digite a senha:');
         if (senha !== '1234') {
             console.log('Senha incorreta. Tente novamente.');
         }
     }
     console.log('Acesso concedido!');
     ```

**4. Exercícios Práticos**
   1. Implemente um laço `for` que imprime números de 1 a 100.
   2. Crie um loop `while` que pergunta ao usuário um número até que ele digite o número 10.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/5rZqYPKIwkY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU7vgdvgN_IiJUMGi6DStwtCzZuQ)](https://youtu.be/5rZqYPKIwkY?si=-IIiIMChtIz7wzSQ)

[![Watch the video](https://i.ytimg.com/vi/eX-lkN_Zahc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXjaBoZjci6aMLV23uAGP9R9sK1w)](https://youtu.be/eX-lkN_Zahc?si=uWH5EBDKOLviNQsZ)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---
