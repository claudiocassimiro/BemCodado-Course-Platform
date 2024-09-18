### Recursão e Algoritmos Recursivos

#### Conteúdo Teórico

Recursão é uma técnica em programação onde uma função chama a si mesma para resolver problemas que podem ser quebrados em subproblemas menores. É particularmente útil quando um problema pode ser definido em termos menores dele mesmo.

Na recursão, dois pontos importantes devem ser observados:

1. **Caso Base**: É a condição que interrompe a recursão. Sem isso, a função recursiva chamaria a si mesma infinitamente.
2. **Caso Recursivo**: É a parte da função que continua chamando a si mesma, movendo-se em direção ao caso base.

A recursão pode ser uma maneira elegante de resolver certos problemas, como cálculo de fatoriais, sequências de Fibonacci, ou até mesmo a navegação em estruturas de dados como árvores.

#### Exemplo Clássico: Fatorial

**OBS: Use o [Codepen](https://codepen.io/pen/?editors=0010) para testar os exemplos abaixo:**

O cálculo do fatorial de um número `n` pode ser feito de forma recursiva, onde `n! = n * (n-1)!`. O caso base é quando `n = 1`, pois o fatorial de 1 é 1.

```javascript
function fatorial(n) {
    // Caso base: se n for 1, retorna 1
    if (n === 1) {
        return 1;
    }
    // Caso recursivo: chama a função novamente com n-1
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Resultado: 120
```

#### Exemplo Clássico: Sequência de Fibonacci

Outro exemplo comum de recursão é o cálculo da sequência de Fibonacci, onde cada número é a soma dos dois anteriores. A fórmula é: `F(n) = F(n-1) + F(n-2)` com os casos base sendo `F(0) = 0` e `F(1) = 1`.

```javascript
function fibonacci(n) {
    // Caso base: se n for 0 ou 1, retorna o próprio n
    if (n === 0 || n === 1) {
        return n;
    }
    // Caso recursivo: soma dos dois anteriores
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Resultado: 8
```

#### Vantagens e Desvantagens da Recursão

- **Vantagens**: Recursão pode tornar o código mais simples e mais próximo da definição matemática de alguns problemas.
- **Desvantagens**: Em certos casos, pode levar a um maior consumo de memória e ser menos eficiente que abordagens iterativas.

#### Conteúdo Prático

Vamos ver um exemplo mais prático de recursão.

**Problema: Somatório Recursivo**

Dado um número `n`, queremos calcular a soma de todos os números de 1 até `n`. Usando recursão, podemos definir isso como: `soma(n) = n + soma(n-1)`.

```javascript
function somatorio(n) {
    // Caso base: se n for 1, a soma é 1
    if (n === 1) {
        return 1;
    }
    // Caso recursivo: chama a função com n-1 e soma o valor de n
    return n + somatorio(n - 1);
}

console.log(somatorio(5)); // Resultado: 15
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/NKymAD4pJZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAG7scu6fd3TpCyPQD-qflDs2FzQA)](https://youtu.be/NKymAD4pJZI?si=3XAXLojOa8pAHZ8C)
#### Exercícios

1. **Fatorial Recursivo**: Implemente uma função recursiva que calcule o fatorial de um número `n`.
   
2. **Soma de um Array**: Dado um array de números, implemente uma função recursiva que retorne a soma de todos os elementos do array.

3. **Sequência de Fibonacci**: Implemente uma função recursiva para calcular o n-ésimo número da sequência de Fibonacci.

4. **Inversão de String**: Implemente uma função recursiva que receba uma string e a inverta.

#### Conclusão

Recursão é uma ferramenta poderosa que permite resolver problemas complexos de forma simples e elegante, dividindo-os em subproblemas menores. Apesar de sua simplicidade em certos cenários, deve-se ter cuidado com o uso excessivo, pois pode levar a problemas de desempenho. Ao dominar recursão, você poderá aplicar esse conceito em diversos contextos, como algoritmos de busca, manipulação de dados e até mesmo inteligência artificial.