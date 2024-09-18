#### Conteúdo Teórico

**1. Definição de Funções de Ordem Superior (HOFs):**

Funções de Ordem Superior (HOFs) são funções que podem receber outras funções como argumentos e/ou retornar uma função como resultado. Em JavaScript, funções são tratadas como cidadãos de primeira classe, o que significa que podem ser passadas como argumentos para outras funções, retornadas de funções e atribuídas a variáveis.

**2. Exemplos Comuns de HOFs em JavaScript:**

- **`map()`**: Aplica uma função a cada item de um array e retorna um novo array com os resultados.
  ```javascript
  const numeros = [1, 2, 3, 4];
  const quadrados = numeros.map(x => x * x);
  console.log(quadrados); // [1, 4, 9, 16]
  ```

- **`filter()`**: Filtra os itens de um array com base em uma condição e retorna um novo array contendo apenas os itens que passam na condição.
  ```javascript
  const numeros = [1, 2, 3, 4, 5];
  const pares = numeros.filter(x => x % 2 === 0);
  console.log(pares); // [2, 4]
  ```

- **`reduce()`**: Reduz todos os itens de um array a um único valor, aplicando uma função de acumulação.
  ```javascript
  const numeros = [1, 2, 3, 4];
  const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  console.log(soma); // 10
  ```

- **`forEach()`**: Executa uma função em cada item de um array. Não retorna um novo array.
  ```javascript
  const frutas = ['maçã', 'banana', 'laranja'];
  frutas.forEach(fruta => console.log(fruta));
  // maçã
  // banana
  // laranja
  ```

#### Conteúdo Prático

**1. Usando `map()` para Transformar Dados:**

```javascript
const nomes = ['ana', 'joão', 'maria'];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos); // ['ANA', 'JOÃO', 'MARIA']
```

**2. Usando `filter()` para Filtrar Dados:**

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const maioresQueTres = numeros.filter(numero => numero > 3);
console.log(maioresQueTres); // [4, 5, 6]
```

**3. Usando `reduce()` para Agregar Dados:**

```javascript
const valores = [10, 20, 30, 40];
const produto = valores.reduce((acc, val) => acc * val, 1);
console.log(produto); // 240000
```

**4. Usando `forEach()` para Executar Funções em Cada Item:**

```javascript
const nomes = ['Alice', 'Bob', 'Charlie'];
nomes.forEach(nome => {
  console.log(`Olá, ${nome}!`);
});
// Olá, Alice!
// Olá, Bob!
// Olá, Charlie!
```

#### Exercícios

1. **Exercício com `map()`:**
   - Crie um array de números e use `map()` para criar um novo array contendo o dobro de cada número.

2. **Exercício com `filter()`:**
   - Dado um array de objetos representando pessoas (com propriedades `nome` e `idade`), use `filter()` para criar um novo array contendo apenas as pessoas com mais de 18 anos.

3. **Exercício com `reduce()`:**
   - Crie um array de strings e use `reduce()` para concatenar todas as strings em uma única string.

4. **Exercício com `forEach()`:**
   - Dado um array de nomes, use `forEach()` para criar uma string que contenha todos os nomes separados por vírgula.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/seo2Fmx9UMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcfeGK4QH5fPlJ4hMiTfc0X8QQ9A)](https://youtu.be/seo2Fmx9UMk?si=CJD8Xkvvg4-GDtxg)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

As Funções de Ordem Superior (HOFs) são ferramentas essenciais para o desenvolvimento em JavaScript, permitindo escrever código mais conciso e expressivo. Funções como `map()`, `filter()`, `reduce()` e `forEach()` são amplamente utilizadas para manipular e processar arrays de maneira eficiente. Compreender como usar HOFs pode simplificar operações complexas e tornar o código mais legível e mantível. Praticar o uso dessas funções é crucial para se tornar um desenvolvedor JavaScript proficiente e aproveitar ao máximo as capacidades da linguagem.
