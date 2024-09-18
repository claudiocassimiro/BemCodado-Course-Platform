#### Conteúdo Teórico

Problemas clássicos e desafios de lógica são utilizados para testar a capacidade de raciocínio, abstração e resolução de problemas através de algoritmos. Esses problemas são frequentemente usados em entrevistas de emprego, competições de programação e no aprendizado de estruturas de dados e algoritmos.

Alguns dos problemas mais comuns envolvem conceitos de ordenação, busca, otimização e estratégias matemáticas. Resolver esses problemas requer pensamento crítico e o uso eficiente de estruturas de dados e algoritmos.

**Exemplos de problemas clássicos:**

1. **O Problema da Torre de Hanói**: É um problema matemático onde discos de tamanhos diferentes precisam ser movidos de uma torre para outra, respeitando certas regras.
   
2. **Problema dos N Rainhas**: O objetivo é colocar N rainhas em um tabuleiro de xadrez de tamanho N×N de forma que nenhuma delas se ataque.

3. **Problema da Mochila (Knapsack Problem)**: Dado um conjunto de itens, cada um com peso e valor, determine os itens que devem ser colocados em uma mochila de capacidade limitada para maximizar o valor total.

4. **Número Primo**: Um desafio lógico onde é necessário determinar se um número é primo ou não, ou gerar uma sequência de números primos.

Esses desafios exigem um bom entendimento de lógica, matemática, estruturas de dados e técnicas algorítmicas, como recursão, força bruta, backtracking, e programação dinâmica.

#### Conteúdo Prático

**OBS: Use o [Codepen](https://codepen.io/pen/?editors=0010) para testar os exemplos abaixo:**

Vamos ver exemplos de como resolver alguns desses problemas usando JavaScript.

**Problema 1: Torre de Hanói**

O problema da Torre de Hanói consiste em mover discos entre três pinos. A regra é que você pode mover apenas um disco por vez e um disco maior não pode ser colocado sobre um menor.

```javascript
function torreDeHanoi(n, origem, destino, auxiliar) {
    // Caso base: se houver apenas um disco, move para o destino
    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
        return;
    }
    // Mova n-1 discos da origem para o auxiliar
    torreDeHanoi(n - 1, origem, auxiliar, destino);
    // Mova o disco restante da origem para o destino
    console.log(`Mover disco ${n} de ${origem} para ${destino}`);
    // Mova os n-1 discos do auxiliar para o destino
    torreDeHanoi(n - 1, auxiliar, destino, origem);
}

torreDeHanoi(3, 'A', 'C', 'B');
```

**Problema 2: Verificar Número Primo**

Para verificar se um número é primo, é necessário garantir que ele não é divisível por nenhum número além de 1 e dele mesmo.

```javascript
function ehPrimo(n) {
    // Números menores que 2 não são primos
    if (n < 2) {
        return false;
    }
    // Verifica se o número é divisível por qualquer outro número
    // Math.sqrt serve para buscar a raiz quadrada de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(7)); // Resultado: true
```

#### Exercícios

1. **Fibonacci Iterativo**: Implemente uma versão iterativa do cálculo da sequência de Fibonacci.

2. **Problema do Caminho Mínimo**: Dado um grid NxN, implemente um algoritmo que encontre o caminho de menor custo do canto superior esquerdo ao canto inferior direito, onde cada célula do grid tem um valor de custo associado.

3. **Número Perfeito**: Um número perfeito é aquele em que a soma de seus divisores, exceto ele mesmo, é igual ao número. Implemente uma função que verifique se um número é perfeito.

4. **N Rainhas**: Escreva um algoritmo que resolva o problema das N rainhas em um tabuleiro de xadrez NxN.

5. **Mochila 0-1**: Resolva o problema da mochila com programação dinâmica, onde é necessário maximizar o valor de itens colocados em uma mochila de capacidade limitada.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/JJ3q59S8vSY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVx4CRGjsO73X1mUyNk7YR5g4NDw)](https://youtu.be/JJ3q59S8vSY?si=ZfjYXCsyQM8VuYTp)
[![Watch the video](https://i.ytimg.com/vi/hGkS4_OD3vk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbeyYOoMF_TEJIwnvv6kmta0r7Ng)](https://youtu.be/hGkS4_OD3vk?si=4O8NVviA1S56EVS_)
#### Conclusão

Problemas clássicos e desafios de lógica são uma excelente maneira de melhorar suas habilidades de raciocínio e domínio de algoritmos. Eles promovem a prática de técnicas importantes como recursão, busca exaustiva, otimização e programação dinâmica. Ao resolver esses problemas, você estará preparado para enfrentar desafios mais complexos no desenvolvimento de software e em entrevistas de emprego.