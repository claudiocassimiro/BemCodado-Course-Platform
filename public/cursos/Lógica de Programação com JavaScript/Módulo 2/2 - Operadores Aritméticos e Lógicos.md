**1. Operadores Aritméticos**
   - **Adição (+):** Soma dois valores.
   - **Subtração (-):** Subtrai um valor de outro.
   - **Multiplicação (*):** Multiplica dois valores.
   - **Divisão (/):** Divide um valor pelo outro.
   - **Módulo (%):** Retorna o restante da divisão de dois valores.
   - **Incremento (++):** Adiciona 1 ao valor de uma variável.
   - **Decremento (--):** Subtrai 1 do valor de uma variável.

   **Exemplo de Código:**
   ```javascript
   let a = 10;
   let b = 3;

   let soma = a + b;          // 13
   let subtracao = a - b;     // 7
   let multiplicacao = a * b; // 30
   let divisao = a / b;       // 3.333...
   let modulo = a % b;        // 1 (resto da divisão de 10 por 3)
   
   a++;                       // Incrementa a para 11
   b--;                       // Decrementa b para 2
   ```

**2. Operadores Lógicos**
   - **AND (&&):** Retorna `true` se ambas as condições forem verdadeiras.
   - **OR (||):** Retorna `true` se pelo menos uma das condições for verdadeira.
   - **NOT (!):** Inverte o valor booleano da condição.

   **Exemplo de Código:**
   ```javascript
   let x = 5;
   let y = 10;
   let z = 15;

   let condicao1 = (x < y) && (y < z);  // true (5 < 10 e 10 < 15)
   let condicao2 = (x > y) || (y < z);  // true (5 não é maior que 10, mas 10 é menor que 15)
   let condicao3 = !(x < y);            // false (inversão de true)
   ```

**3. Precedência de Operadores**
   - A precedência dos operadores determina a ordem em que as operações são executadas em uma expressão.
   - **Ordem de Precedência (do maior para o menor):**
     1. **Parênteses:** `( )` – Utilizados para alterar a ordem padrão de avaliação.
     2. **Incremento/Decremento:** `++`, `--`
     3. **Multiplicação/Divisão/Módulo:** `*`, `/`, `%`
     4. **Adição/Subtração:** `+`, `-`
     5. **Operadores Lógicos:** `!`, `&&`, `||`

   **Exemplo de Código:**
   ```javascript
   let resultado = (10 + 5) * 2; // Parênteses primeiro, depois multiplicação: 15 * 2 = 30
   let valor = 10 + 5 * 2;       // Multiplicação primeiro, depois adição: 10 + 10 = 20
   let logico = (10 > 5) && (5 < 2) || (2 == 2); // true && false || true -> false || true -> true
   ```

**4. Exemplos Práticos**
   - **Operações Matemáticas Simples:**
     ```javascript
     let largura = 8;
     let altura = 6;
     let area = largura * altura;       // 48 (multiplicação)
     let perimetro = 2 * (largura + altura); // 28 (adição e multiplicação)
     ```

   - **Utilização de Operadores Lógicos em Expressões Condicionais:**
     ```javascript
     let idade = 20;
     let possuiCarteira = true;

     if (idade >= 18 && possuiCarteira) {
       console.log("Pode dirigir.");
     } else {
       console.log("Não pode dirigir.");
     }
     ```

**5. Exercícios Práticos**
   1. **Crie uma expressão que utilize todos os operadores aritméticos**
   2. **Utilize operadores lógicos para verificar múltiplas condições**

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/hZG9ODUdxHo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfYU_oe4-ApiYhsq9F_QcdOE7pQA)](https://youtu.be/hZG9ODUdxHo?si=Dv5LlrO6WlSnf6Et)

[![Watch the video](https://i.ytimg.com/vi/BP63NhITvao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeiIYiIA0Xx2vrYpLhzkp2vDw-Tw)](https://www.youtube.com/watch?v=BP63NhITvao)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---
