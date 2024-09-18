#### Conteúdo Teórico

**Algoritmos de Ordenação** e **Busca** são fundamentais na manipulação e organização de dados em várias áreas da computação. Esses algoritmos ajudam a organizar, procurar e recuperar informações de maneira eficiente, sendo aplicados em várias situações, como bancos de dados, sistemas operacionais e algoritmos de inteligência artificial.

##### Algoritmos de Ordenação
Os algoritmos de ordenação reordenam uma coleção de elementos (como números ou strings) em uma ordem específica, geralmente crescente ou decrescente. Existem diversos algoritmos de ordenação, cada um com suas vantagens e desvantagens em termos de complexidade de tempo e espaço.

1. **Bubble Sort**:
   - Um dos algoritmos mais simples.
   - Compara pares adjacentes e troca-os se estiverem na ordem errada.
   - Repetido até que a lista esteja ordenada.
   - Complexidade: O(n²).

2. **Selection Sort**:
   - Procura o menor (ou maior) elemento e o move para o início (ou fim) da lista.
   - Repete o processo até ordenar todos os elementos.
   - Complexidade: O(n²).

3. **Quick Sort**:
   - Algoritmo de divisão e conquista.
   - Escolhe um "pivô" e organiza os elementos em torno dele, separando os menores à esquerda e os maiores à direita.
   - Recursivamente ordena as sublistas.
   - Complexidade: O(n log n) no melhor caso.

4. **Merge Sort**:
   - Também usa a técnica de divisão e conquista.
   - Divide a lista ao meio, ordena as duas metades e depois as combina.
   - Complexidade: O(n log n).

##### Algoritmos de Busca
Os algoritmos de busca são usados para encontrar elementos dentro de uma estrutura de dados. Dois dos principais algoritmos são:

1. **Busca Linear**:
   - Percorre cada elemento de uma lista até encontrar o item procurado.
   - Complexidade: O(n).

2. **Busca Binária**:
   - Requer que a lista esteja ordenada.
   - Divide repetidamente a lista ao meio, eliminando metade dos itens restantes em cada passo.
   - Complexidade: O(log n).

#### Conteúdo Prático

**OBS: Use o [Codepen](https://codepen.io/pen/?editors=0010) para testar os exemplos abaixo:**
##### Exemplo 1: Bubble Sort em JavaScript
```javascript
function bubbleSort(arr) {
    // Pegamos o tamanho da lista de números
    let n = arr.length;
    
    // Vamos repetir o processo de comparar e trocar os números
    for (let i = 0; i < n; i++) {
        // Este outro laço vai comparar dois números de cada vez
        for (let j = 0; j < n - i - 1; j++) {
            // Se o número da frente for maior que o próximo, trocamos eles de lugar
            if (arr[j] > arr[j + 1]) {
                // Guardamos o número maior temporariamente
                let temp = arr[j];
                // Colocamos o número menor na posição do maior
                arr[j] = arr[j + 1];
                // Agora colocamos o número maior na posição do menor
                arr[j + 1] = temp;
            }
        }
    }
    // Depois de organizar tudo, devolvemos a lista ordenada
    return arr;
}

// Esta é a lista de números que queremos ordenar
let array = [5, 3, 8, 4, 2];
// Mostramos a lista organizada no console
console.log(bubbleSort(array));
```
##### Exemplo 2: Busca Binária em JavaScript
```javascript
function buscaBinaria(arr, target) {
    // Definimos o começo da lista (inicio) como o primeiro número
    let inicio = 0;
    // Definimos o fim da lista (fim) como o último número
    let fim = arr.length - 1;

    // Continuamos procurando enquanto o começo for menor ou igual ao fim
    while (inicio <= fim) {
        // Encontramos o meio da lista
        let meio = Math.floor((inicio + fim) / 2);

        // Se o número no meio for igual ao que estamos procurando, encontramos!
        if (arr[meio] === target) {
            return meio; // Devolvemos a posição onde o número está
        } 
        // Se o número do meio for menor que o que queremos, olhamos na parte da frente da lista
        else if (arr[meio] < target) {
            inicio = meio + 1; // Ajustamos o começo para ser logo depois do meio
        } 
        // Se o número do meio for maior, olhamos na parte de trás da lista
        else {
            fim = meio - 1; // Ajustamos o fim para ser logo antes do meio
        }
    }

    // Se não encontramos o número, devolvemos -1 (não está na lista)
    return -1;
}

// Esta é a lista de números que já está em ordem
let arrayOrdenada = [2, 3, 4, 5, 8];
// Queremos encontrar o número 5
console.log(buscaBinaria(arrayOrdenada, 5));
```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/R-Tmmlbibt0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm3BF_Gsk_xSzBZeEjt5qI1ImTDQ)](https://youtu.be/R-Tmmlbibt0?si=ifP2Oj6WL-yDYFuT)
#### Exercícios

1. **Ordenação com Selection Sort**:
   Implemente o algoritmo de Selection Sort para ordenar um array de números.

2. **Busca Linear**:
   Crie uma função que realiza uma busca linear em um array e retorna o índice do número desejado. Caso o número não esteja presente, a função deve retornar -1.

3. **Desafio: Quick Sort**:
   Implemente o algoritmo de Quick Sort em JavaScript e teste-o com diferentes arrays de números.

4. **Desafio: Busca Binária**:
   Use a Busca Binária para encontrar a posição de um elemento em um array de 100 números ordenados de forma crescente. Se o número não estiver presente, retorne -1.

#### Conclusão

Os algoritmos de ordenação e busca são essenciais para a organização e recuperação de dados de forma eficiente. A ordenação de listas e a busca por elementos específicos são tarefas comuns no desenvolvimento de software, e a escolha do algoritmo certo pode fazer uma grande diferença no desempenho de um sistema. Ao praticar esses algoritmos, você desenvolverá habilidades cruciais para otimizar suas soluções.