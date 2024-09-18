#### Conteúdo Teórico

Em JavaScript, o **escopo de variáveis** e **closure** são conceitos fundamentais que definem como e onde as variáveis podem ser acessadas dentro do código, além de como funções lidam com essas variáveis.

##### Escopo de Variáveis

O **escopo** de uma variável refere-se ao contexto em que essa variável é declarada e onde ela pode ser acessada. Existem três tipos principais de escopo em JavaScript:

1. **Escopo Global**: Variáveis declaradas no escopo global podem ser acessadas de qualquer parte do código.
   ```javascript
   var globalVar = "Eu sou global!";
   
   function exemplo() {
       console.log(globalVar); // "Eu sou global!"
   }
   
   exemplo();
   ```

2. **Escopo de Função**: Variáveis declaradas dentro de uma função só podem ser acessadas dentro dessa função.
   ```javascript
   function exemplo() {
       var funcVar = "Eu sou local!";
       console.log(funcVar); // "Eu sou local!"
   }
   
   exemplo();
   // console.log(funcVar); // Erro: funcVar não está definida
   ```

3. **Escopo de Bloco**: Introduzido com `let` e `const` no ES6, as variáveis declaradas com essas palavras-chave dentro de um bloco (`{}`) só podem ser acessadas dentro desse bloco.
   ```javascript
   if (true) {
       let blocoVar = "Eu estou no bloco!";
       console.log(blocoVar); // "Eu estou no bloco!"
   }
   
   // console.log(blocoVar); // Erro: blocoVar não está definida
   ```

##### Closure

Um **closure** ocorre quando uma função "lembra" o ambiente em que foi criada, mesmo após esse ambiente ter deixado de existir. Em outras palavras, uma função interna tem acesso às variáveis da função externa, mesmo depois que a função externa terminou de executar.

Exemplo básico de closure:
```javascript
function saudacao(nome) {
    return function() {
        console.log(`Olá, ${nome}!`);
    };
}

const saudacaoParaCarlos = saudacao("Carlos");
saudacaoParaCarlos(); // "Olá, Carlos!"
```
Neste exemplo, a função interna retorna uma função anônima que ainda "lembra" da variável `nome`, mesmo após a execução de `saudacao`.

#### Conteúdo Prático

Vamos aplicar esses conceitos em alguns exemplos práticos.

**Exemplo 1: Escopo Global e de Função**

```javascript
var saudacao = "Olá";

function cumprimentar() {
    var nome = "João";
    console.log(saudacao + ", " + nome); // "Olá, João"
}

cumprimentar();
// console.log(nome); // Erro: nome não está definida
```
Aqui, `saudacao` é uma variável global, enquanto `nome` é uma variável local acessível apenas dentro da função `cumprimentar`.

**Exemplo 2: Escopo de Bloco**

```javascript
function exemploBloco() {
    let x = 10;
    if (x > 5) {
        let y = 20;
        console.log(x + y); // 30
    }
    // console.log(y); // Erro: y não está definida
}

exemploBloco();
```
A variável `y` está limitada ao bloco `if`, portanto, não pode ser acessada fora dele.

**Exemplo 3: Closure em Ação**

```javascript
function contador() {
    let contagem = 0;
    return function() {
        contagem++;
        console.log(contagem);
    };
}

const meuContador = contador();
meuContador(); // 1
meuContador(); // 2
meuContador(); // 3
```
No exemplo acima, a função interna "lembra" da variável `contagem`, permitindo que a função continue incrementando o valor a cada chamada.

#### Exercícios

1. **Identificar escopos:**
   Observe o código abaixo e identifique quais variáveis estão em escopo global, de função e de bloco:
   ```javascript
   var a = 1;
   
   function exemplo() {
       var b = 2;
       if (true) {
           let c = 3;
           console.log(a); // ?
           console.log(b); // ?
           console.log(c); // ?
       }
       // console.log(c); // ?
   }
   
   exemplo();
   ```

2. **Criar um closure:**
   Escreva uma função que retorne outra função, onde a função interna faça uso de uma variável da função externa, demonstrando o conceito de closure.

3. **Manipular escopo de bloco:**
   Altere o código abaixo para que a variável `resultado` seja acessível fora do bloco `if`, sem remover o `let`:
   ```javascript
   if (true) {
       let resultado = 10 * 2;
   }
   console.log(resultado); // Altere o código para que isso funcione
   ```

4. **Contador com closure:**
   Crie uma função `criarContador` que retorne duas funções: uma para incrementar e outra para decrementar o contador. Ambas devem compartilhar o mesmo valor de contagem, demonstrando o uso de closure.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/xR20SDthG8U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEt7DJGDh8dDA_VKmoj3hFx89jBA)](https://youtu.be/xR20SDthG8U?si=n0lvPPo85vRlDsC_)
[![Watch the video](https://i.ytimg.com/vi/xME2TcbxiNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-O54z3Bo3QvQG_CwTMzJ44QH1VA)](https://youtu.be/xME2TcbxiNo?si=NdTacffBsuxgHuKH)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Entender o escopo de variáveis e closure é essencial para escrever código JavaScript eficiente e livre de erros. O escopo determina onde as variáveis podem ser acessadas, enquanto closures permitem que funções internas mantenham acesso a variáveis de seu contexto externo. Esses conceitos são amplamente utilizados na programação JavaScript, especialmente em funções anônimas, callbacks, e na construção de módulos ou bibliotecas. Com a prática, você poderá utilizar o escopo e closures para criar soluções poderosas e flexíveis no seu código.
