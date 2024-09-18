#### Conteúdo Teórico

A **análise de complexidade de algoritmos** é uma maneira de medir e comparar a eficiência dos algoritmos em termos de **tempo** e **espaço** consumidos. O objetivo é estimar o comportamento do algoritmo à medida que o tamanho da entrada cresce.

Existem duas principais medidas de complexidade:

1. **Complexidade de Tempo**: Quantidade de tempo (ou número de operações) que um algoritmo leva para ser executado, dado um tamanho de entrada `n`.
   
2. **Complexidade de Espaço**: Quantidade de memória que o algoritmo usa durante a execução, além da memória da entrada.

A notação mais comum para descrever a complexidade de um algoritmo é a **notação Big-O**, que expressa o crescimento da quantidade de operações em relação ao tamanho da entrada. Algumas das classes de complexidade mais comuns são:

- **O(1)** – Tempo constante: O algoritmo sempre executa no mesmo tempo, independentemente do tamanho da entrada.
- **O(log n)** – Logarítmico: O tempo de execução cresce de forma logarítmica conforme o tamanho da entrada aumenta.
- **O(n)** – Linear: O tempo de execução cresce proporcionalmente ao tamanho da entrada.
- **O(n²)** – Quadrático: O tempo de execução cresce ao quadrado conforme o tamanho da entrada.
- **O(2ⁿ)** – Exponencial: O tempo de execução dobra a cada aumento unitário no tamanho da entrada.

#### Exemplos de Complexidade:

- **O(1)**: Acesso direto a um elemento em um array.
- **O(n)**: Percorrer uma lista de elementos uma vez.
- **O(n²)**: Algoritmos de ordenação como o Bubble Sort.
- **O(log n)**: Algoritmos de busca binária.

#### Conteúdo Prático

Vamos analisar alguns algoritmos simples para entender suas complexidades.

1. **Exemplo 1: Complexidade O(1)**

Neste exemplo, estamos acessando diretamente o primeiro elemento de um array. Essa operação tem complexidade constante, pois é realizada em tempo fixo.

```javascript
function acessarPrimeiroElemento(array) {
    return array[0]; // Sempre retorna o primeiro elemento, independentemente do tamanho do array.
}
```

2. **Exemplo 2: Complexidade O(n)**

Aqui, percorremos uma lista de números e somamos seus valores. O número de operações cresce linearmente com o tamanho da lista.

```javascript
function somarNumeros(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]; // Soma cada elemento da lista.
    }
    return soma;
}
```

3. **Exemplo 3: Complexidade O(n²)**

Neste exemplo, temos um algoritmo que compara todos os elementos de um array com todos os outros elementos. Isso resulta em uma complexidade quadrática, já que o número de operações cresce com o quadrado do tamanho do array.

```javascript
function compararElementos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]); // Compara cada par de elementos.
        }
    }
}
```

4. **Exemplo 4: Complexidade O(log n)**

No caso de uma busca binária, a cada passo, o tamanho da entrada é dividido pela metade, resultando em uma complexidade logarítmica.

```javascript
function buscaBinaria(array, valor) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);

        if (array[meio] === valor) {
            return meio; // Elemento encontrado.
        } else if (array[meio] < valor) {
            esquerda = meio + 1; // Busca na metade direita.
        } else {
            direita = meio - 1; // Busca na metade esquerda.
        }
    }
    return -1; // Elemento não encontrado.
}
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/zXBaLEGv0iM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS6Piq3l5uxe3X4zvnLriwWsCaIA)](https://youtu.be/zXBaLEGv0iM?si=voa1FZwkPCkaMGCQ)
#### Exercícios

1. Implemente uma função que retorne o maior número de um array e determine sua complexidade.
2. Escreva um algoritmo que percorra uma matriz `NxN` e calcule a soma de todos os seus elementos. Qual é a complexidade desse algoritmo?
3. Crie um algoritmo de ordenação simples (como o Bubble Sort) e analise sua complexidade de tempo.
4. Implemente a busca binária em um array ordenado e comprove sua complexidade logarítmica.
5. Crie uma função que adicione um elemento a um array e analise sua complexidade de tempo.

#### Conclusão

Entender a **análise de complexidade de algoritmos** é essencial para escolher as melhores soluções para um problema, especialmente ao lidar com grandes volumes de dados. Otimizar algoritmos pode melhorar significativamente o desempenho de um sistema, tornando-o mais escalável e eficiente. Por meio da prática e da análise cuidadosa, é possível desenvolver a intuição necessária para criar algoritmos que atendam às demandas de tempo e espaço de maneira eficaz.