#### Conteúdo Teórico

Em JavaScript, funções anônimas e arrow functions são duas formas poderosas e flexíveis de definir funções. Ambas permitem que você crie funções de maneira concisa e as utilize em contextos onde uma função nomeada não é necessária.

##### Funções Anônimas
Uma **função anônima** é uma função que não possui um nome definido. Elas são geralmente utilizadas em casos onde a função é passada como argumento para outra função ou usada imediatamente após ser criada.

Exemplo de função anônima:
```javascript
const saudacao = function(nome) {
    return `Olá, ${nome}!`;
};

console.log(saudacao("Carlos"));
```
Aqui, a função `function(nome) { return `Olá, ${nome}!`; }` é anônima e atribuída à constante `saudacao`.

##### Arrow Functions
**Arrow functions** (funções de seta) são uma maneira mais curta de escrever funções anônimas introduzida no ES6. Elas são frequentemente usadas devido à sua sintaxe concisa e à forma como tratam o `this`.

Sintaxe básica de uma arrow function:
```javascript
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
```

Se a função tiver apenas um parâmetro, você pode omitir os parênteses:
```javascript
const saudacao = nome => {
    return `Olá, ${nome}!`;
};
```

E se a função tiver apenas uma linha de código, você pode omitir as chaves e a palavra-chave `return`:
```javascript
const saudacao = nome => `Olá, ${nome}!`;
```

Arrow functions têm algumas diferenças em relação às funções tradicionais:
1. Elas não têm o seu próprio `this`; em vez disso, herdam o `this` do escopo em que foram definidas.
2. Elas são sempre anônimas.
3. Não podem ser usadas como métodos de objetos se você precisar referenciar `this` internamente.

#### Conteúdo Prático

Vamos ver como as funções anônimas e as arrow functions podem ser utilizadas na prática.

**Exemplo 1: Usando uma função anônima em um array**

```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]
```

Neste exemplo, uma função anônima é passada para o método `map` para dobrar os valores do array.

**Exemplo 2: Usando uma arrow function para filtrar números pares**

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // [2, 4]
```

Aqui, uma arrow function é usada com o método `filter` para retornar apenas os números pares.

**Exemplo 3: Usando uma arrow function com `this`**

```javascript
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

const pessoa = new Pessoa();
```

Neste caso, a arrow function permite que o valor de `this` dentro do `setInterval` se refira ao objeto `Pessoa`, aumentando a idade a cada segundo.

#### Exercícios

1. **Transformar uma função tradicional em arrow function:**
   Dada a função abaixo, reescreva-a como uma arrow function:
   ```javascript
   function multiplicar(a, b) {
       return a * b;
   }
   ```

2. **Função anônima em um evento:**
   Crie uma função anônima que seja usada para exibir uma mensagem no console quando um botão na página HTML for clicado. O texto do botão deve ser alterado para "Clicado!" quando clicado.

3. **Filtrar nomes longos:**
   Usando `filter` e arrow functions, crie um código que filtre e retorne apenas os nomes com mais de 5 caracteres de um array de nomes.

4. **Criar uma função de soma com arrow functions:**
   Escreva uma arrow function que receba dois números como parâmetros e retorne a soma deles.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/2EAfSeKZNiQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPyLPj7TVH-RlJnMdusj-wQm9HHA)](https://youtu.be/2EAfSeKZNiQ?si=SpNJJcuBLnaIH6W8)
[![Watch the video](https://i.ytimg.com/vi/S5Mn0qQzJ-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtQTJPpMdNkfLmNKZzSnCiB7_gjw)](https://youtu.be/S5Mn0qQzJ-0?si=YT85mP86Om7KNI8f)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Funções anônimas e arrow functions são ferramentas essenciais em JavaScript moderno, permitindo uma maneira concisa e flexível de definir funções. As funções anônimas são úteis quando você precisa de uma função temporária, enquanto as arrow functions oferecem uma sintaxe simplificada, especialmente em casos de funções curtas e uso de `this`. Com a prática, você poderá escolher a abordagem mais adequada para cada situação, criando códigos mais limpos e eficientes.
