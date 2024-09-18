#### Conteúdo Teórico

Em JavaScript, as funções são blocos de código reutilizáveis que realizam tarefas específicas. Elas podem receber informações na forma de **parâmetros** e podem devolver um valor ao final da execução, conhecido como **retorno**.

##### Parâmetros
Os parâmetros são variáveis que você define entre os parênteses na declaração da função. Eles permitem que você passe valores para a função quando ela é chamada, permitindo que a mesma função seja usada para processar diferentes valores.

Exemplo:
```javascript
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
```
No exemplo acima, `nome` é um parâmetro da função `saudacao`. Quando a função é chamada, você pode passar diferentes valores para `nome`, como `saudacao('Maria')` ou `saudacao('João')`.

##### Retorno
O retorno de uma função em JavaScript é o valor que a função envia de volta ao local de onde foi chamada. Para retornar um valor, usamos a palavra-chave `return`.

Exemplo:
```javascript
function soma(a, b) {
    return a + b;
}
```
Aqui, a função `soma` recebe dois parâmetros (`a` e `b`) e retorna a soma deles. Quando você chama `soma(3, 4)`, o resultado é `7`.

#### Conteúdo Prático

Vamos ver um exemplo prático que utiliza tanto parâmetros quanto retorno.

**Exemplo 1: Função de cálculo de área de um retângulo**

```javascript
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

const area = calcularAreaRetangulo(5, 10);
console.log(`A área do retângulo é: ${area}`);
```

Neste exemplo, a função `calcularAreaRetangulo` recebe dois parâmetros (`largura` e `altura`) e retorna a área do retângulo. O valor retornado é então armazenado na variável `area`.

**Exemplo 2: Verificando se um número é par**

```javascript
function ehPar(numero) {
    return numero % 2 === 0;
}

const resultado = ehPar(8);
console.log(`O número é par? ${resultado}`);
```

A função `ehPar` recebe um número como parâmetro e retorna `true` se o número for par e `false` se for ímpar. O valor retornado é armazenado em `resultado` e impresso no console.

#### Exercícios

1. **Função de saudação personalizada:**
   Crie uma função chamada `saudacaoPersonalizada` que receba dois parâmetros: `nome` e `horario`. Se `horario` for "manhã", retorne "Bom dia, [nome]!". Se for "tarde", retorne "Boa tarde, [nome]!". Se for "noite", retorne "Boa noite, [nome]!".

2. **Função de desconto:**
   Crie uma função chamada `calcularDesconto` que receba dois parâmetros: `precoOriginal` e `desconto`. Retorne o valor do preço após o desconto ser aplicado.

3. **Função de verificação de idade:**
   Escreva uma função chamada `verificarIdade` que receba um parâmetro `idade`. Se `idade` for maior ou igual a 18, retorne "Maior de idade". Caso contrário, retorne "Menor de idade".

4. **Função de conversão de temperatura:**
   Crie uma função chamada `converterParaCelsius` que receba uma temperatura em Fahrenheit e retorne o valor convertido para Celsius. A fórmula é `(fahrenheit - 32) * 5/9`.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/Q5-zpqCHav0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn9AUkh5JnY4Cl75LmQJOKpdFU0w)](https://youtu.be/Q5-zpqCHav0?si=iSfwBj3tiRWZ6X_g)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Entender como os parâmetros e o retorno funcionam em funções é fundamental para escrever código reutilizável e modular em JavaScript. Os parâmetros permitem que as funções sejam flexíveis e aplicáveis a diferentes situações, enquanto o retorno possibilita que a função envie um valor de volta para ser utilizado em outra parte do programa. Com essas ferramentas, você pode criar funções que encapsulam lógica e facilitam a manutenção e o desenvolvimento do seu código.
