#### 3.1. Definição e Chamada de Funções

As funções são blocos de código reutilizáveis que executam uma tarefa específica. Em JavaScript, você pode definir uma função usando a palavra-chave `function` seguida pelo nome da função, parâmetros opcionais e um bloco de código.

**Exemplo:**

```javascript
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

// Chamada da função
saudacao("Maria");
```

**Descrição:**
Neste exemplo, a função `saudacao` recebe um parâmetro `nome` e imprime uma mensagem de saudação. Para utilizar a função, você a chama pelo nome e passa os argumentos necessários.

**Exercício Extra:**

Crie uma função chamada `multiplicar` que receba dois números como parâmetros e retorne o produto desses números.

```javascript
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(3, 4)); // 12
```

#### 3.2. Parâmetros e Retorno de Funções

Funções podem receber parâmetros, que são valores fornecidos à função durante sua chamada. Além disso, uma função pode retornar um valor utilizando a palavra-chave `return`.

**Exemplo:**

```javascript
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 7);
console.log(resultado); // 12
```

**Descrição:**
A função `somar` recebe dois parâmetros, `a` e `b`, e retorna a soma desses valores. O valor de retorno é capturado na variável `resultado`.

**Exercício Extra:**

Crie uma função chamada `calcularMedia` que receba três números como parâmetros e retorne a média desses números.

```javascript
function calcularMedia(x, y, z) {
    return (x + y + z) / 3;
}

console.log(calcularMedia(8, 9, 10)); // 9
```

#### 3.3. Funções Anônimas e Arrow Functions

Funções anônimas são funções sem nome, geralmente usadas como argumentos para outras funções. As Arrow Functions (`=>`) são uma forma mais curta de escrever funções anônimas, introduzida no ES6.

**Exemplo de Função Anônima:**

```javascript
let somar = function(a, b) {
    return a + b;
};

console.log(somar(2, 3)); // 5
```

**Exemplo de Arrow Function:**

```javascript
let subtrair = (a, b) => a - b;

console.log(subtrair(10, 5)); // 5
```

**Descrição:**
As Arrow Functions oferecem uma sintaxe mais concisa. Elas também têm um comportamento diferente no que se refere ao `this`, que é definido de forma léxica (ou seja, pelo contexto onde a função foi definida).

**Exercício Extra:**

Crie uma Arrow Function chamada `dobrar` que receba um número e retorne o dobro desse número.

```javascript
let dobrar = n => n * 2;

console.log(dobrar(6)); // 12
```

#### 3.4. Escopo de Variáveis e Closure

**Escopo de Variáveis:**
O escopo determina onde as variáveis estão disponíveis para uso. Em JavaScript, temos dois tipos principais de escopo: local e global. O escopo global refere-se ao código fora de qualquer função, enquanto o escopo local é restrito ao bloco de código onde a variável é definida.

**Exemplo:**

```javascript
let global = "Estou no escopo global";

function verificarEscopo() {
    let local = "Estou no escopo local";
    console.log(global); // Acessa a variável global
    console.log(local);  // Acessa a variável local
}

verificarEscopo();
console.log(local); // Erro! local não está definido no escopo global
```

**Closure:**
Closures são funções que lembram o ambiente onde foram criadas. Elas têm acesso às variáveis do escopo externo mesmo após a função externa ter sido executada.

**Exemplo:**

```javascript
function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

let contador1 = criarContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

let contador2 = criarContador();
console.log(contador2()); // 1
```

**Descrição:**
No exemplo, `criarContador` retorna uma função que mantém o acesso à variável `contador`, mesmo após a execução de `criarContador`. Isso é o que caracteriza um closure.

**Exercício Extra:**

Crie uma função chamada `criarSaudacao` que receba um nome e retorne uma função que, quando chamada, exiba uma saudação com o nome fornecido.

```javascript
function criarSaudacao(nome) {
    return function() {
        console.log(`Olá, ${nome}!`);
    };
}

let saudacaoMaria = criarSaudacao("Maria");
saudacaoMaria(); // Olá, Maria!
```

### Conclusão

O Módulo 3 abordou conceitos fundamentais de funções em JavaScript, explorando desde a definição e chamada de funções até aspectos mais avançados, como closures e arrow functions. Com a prática desses conceitos, você estará melhor equipado para escrever código modular, reutilizável e eficiente. O domínio das funções é essencial para qualquer desenvolvedor, pois elas são a base para a construção de lógicas complexas e a organização do código em qualquer aplicação.