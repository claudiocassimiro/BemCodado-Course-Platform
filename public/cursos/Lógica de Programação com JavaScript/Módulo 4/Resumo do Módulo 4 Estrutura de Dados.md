
O Módulo 4 do curso aborda estruturas de dados fundamentais em JavaScript, essenciais para o desenvolvimento eficiente e organizado de aplicações. O módulo é dividido em três seções principais, cada uma focando em diferentes aspectos das estruturas de dados:

#### 4.1. Arrays: Criação, Manipulação e Métodos

**Teórico:**
- **Criação de Arrays**: Arrays são coleções ordenadas de itens que podem ser de qualquer tipo de dado.
- **Manipulação de Arrays**: Inclui operações como adicionar, remover e acessar elementos.
- **Métodos Comuns**: Métodos como `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, e `concat()` permitem manipular arrays de várias formas.

**Prático:**

```javascript
// Criação e Manipulação de Arrays
const frutas = ['maçã', 'banana', 'laranja'];
frutas.push('manga'); // Adiciona 'manga' ao final
frutas.pop(); // Remove o último elemento
console.log(frutas); // ['maçã', 'banana', 'laranja']

// Métodos de Arrays
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
```

**Exercícios:**
1. Crie um array com 5 nomes e use `forEach()` para imprimir cada nome.
2. Utilize `splice()` para remover o segundo elemento de um array e adicionar dois novos elementos no mesmo índice.

#### 4.2. Objetos: Definição, Propriedades e Métodos

**Teórico:**
- **Definição de Objetos**: Objetos são coleções de pares chave-valor.
- **Propriedades e Métodos**: Propriedades armazenam valores e métodos armazenam funções que podem operar sobre esses valores.

**Prático:**

```javascript
// Definição e Manipulação de Objetos
const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao: function() {
    return `Olá, meu nome é ${this.nome}`;
  }
};

console.log(pessoa.nome); // João
console.log(pessoa.saudacao()); // Olá, meu nome é João

// Adicionando e Modificando Propriedades
pessoa.email = 'joao@example.com';
console.log(pessoa.email); // joao@example.com
```

**Exercícios:**
1. Crie um objeto representando um carro com propriedades como `marca`, `modelo` e `ano`. Adicione um método para retornar uma descrição completa do carro.
2. Atualize o objeto criado adicionando uma nova propriedade e modifique o valor de uma propriedade existente.

#### 4.3. Estruturas de Dados Avançadas: Map e Set

**Teórico:**
- **Map**: Estrutura de dados que associa chaves a valores e preserva a ordem de inserção.
- **Set**: Estrutura de dados que armazena valores únicos e também preserva a ordem de inserção.

**Prático:**

```javascript
// Map
const mapa = new Map();
mapa.set('nome', 'Ana');
mapa.set('idade', 25);
console.log(mapa.get('nome')); // Ana
console.log(mapa.has('idade')); // true

// Set
const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(2); // Valores duplicados são ignorados
console.log(conjunto); // Set { 1, 2 }
```

**Exercícios:**
1. Crie um `Map` para armazenar os nomes e idades de três pessoas e imprima cada entrada.
2. Utilize um `Set` para armazenar e imprimir uma lista de números sem duplicatas.

#### Mini Conteúdo: Funções de Ordem Superior (HOFs)

**Teórico:**
- **Funções de Ordem Superior (HOFs)**: São funções que podem receber outras funções como argumentos e/ou retornar uma função. Exemplos comuns são `map()`, `filter()`, `reduce()`, e `forEach()`.

**Prático:**

```javascript
// Exemplo de HOFs
const numeros = [1, 2, 3, 4, 5];

// map
const quadrados = numeros.map(num => num * num);
console.log(quadrados); // [1, 4, 9, 16, 25]

// filter
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

// reduce
const soma = numeros.reduce((acc, val) => acc + val, 0);
console.log(soma); // 15

// forEach
numeros.forEach(num => console.log(num)); // 1 2 3 4 5
```

**Exercícios Extras:**
1. Use `map()` para criar um novo array com o triplo de cada número em um array.
2. Use `reduce()` para calcular o produto de todos os números em um array.
3. Use `filter()` para remover todos os números ímpares de um array e imprimir o resultado.

#### Conclusão

O Módulo 4 oferece uma compreensão sólida das principais estruturas de dados em JavaScript, incluindo arrays, objetos e estruturas mais avançadas como `Map` e `Set`. Além disso, o mini conteúdo sobre funções de ordem superior (HOFs) reforça a importância da manipulação funcional de dados. O domínio dessas estruturas e funções é crucial para escrever código eficiente e bem organizado, facilitando a criação de aplicações robustas e escaláveis. Praticar e aplicar esses conceitos ajudará a aprimorar suas habilidades de programação e resolver problemas complexos de maneira mais eficaz.