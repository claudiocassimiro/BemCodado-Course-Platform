#### Conteúdo Teórico: 

#### 1. Introdução aos Testes de Software
Testes de software são uma parte fundamental do ciclo de desenvolvimento. Eles garantem que o código funcione conforme o esperado e ajudem a identificar possíveis falhas. Existem vários tipos de testes, cada um com um objetivo específico:

- **Testes Unitários**: Verificam o comportamento de uma unidade isolada de código (funções ou métodos).
- **Testes de Integração**: Avaliam a interação entre diferentes módulos ou componentes de um sistema.
- **Testes de Sistema**: Testam o sistema como um todo, garantindo que ele atende às especificações.
- **Testes de Aceitação**: São feitos para verificar se o sistema está pronto para uso, atendendo aos requisitos do cliente.

#### 2. Estratégias de Testes
Existem abordagens diferentes para a realização de testes:

- **Test-Driven Development (TDD)**: É uma prática de desenvolvimento em que você escreve os testes antes do código. O ciclo segue três etapas: escrever um teste que falha, escrever código para passar o teste, e refatorar o código.
- **Behavior-Driven Development (BDD)**: Similar ao TDD, mas com foco na definição de comportamento do software em linguagem simples, próximo de como o usuário final interage com o sistema.

#### 3. Depuração de Código
Depuração (ou "debugging") é o processo de encontrar e corrigir defeitos no código. A depuração eficaz inclui:

- **Uso de Logs**: Inserir registros no código ajuda a monitorar o comportamento durante a execução.
- **Breakpoints**: Interrompem a execução do código em pontos específicos para examinar o estado do programa.
- **Ferramentas de Depuração**: IDEs e editores modernos possuem ferramentas integradas para facilitar a depuração, como inspecionar variáveis e percorrer o código linha por linha.
  
#### 4. Principais Erros Identificados em Depuração
Alguns dos erros mais comuns que você pode encontrar durante o processo de depuração incluem:

- **Erros de Sintaxe**: São erros na forma como o código foi escrito, como falta de ponto e vírgula ou chaves.
- **Erros de Lógica**: O programa é executado sem falhas, mas o resultado não é o esperado.
- **Erros de Tempo de Execução**: Ocorrem enquanto o programa está sendo executado, como acesso indevido a índices de arrays.

---

### Conteúdo Prático: Escrevendo Testes e Usando Ferramentas de Depuração

#### 1. Exemplo de Testes Unitários com JavaScript (usando Jest)
Vamos criar uma função simples que soma dois números e depois escrever um teste unitário para ela.

```javascript
// Função a ser testada
function soma(a, b) {
  return a + b;
}

// Teste unitário usando Jest
test('soma dois números', () => {
  expect(soma(2, 3)).toBe(5);
});
```

Para rodar esse teste:
1. Instale o Jest usando `npm install jest`.
2. Adicione o script `"test": "jest"` no `package.json`.
3. Execute os testes com `npm test`.

#### 2. Usando Breakpoints para Depurar Código no Chrome DevTools

1. **Abra o DevTools**: Clique com o botão direito na página da web, vá em "Inspecionar" e clique na aba "Sources".
2. **Defina um Breakpoint**: Navegue até o arquivo JavaScript que você deseja depurar, clique em um número de linha para adicionar um breakpoint.
3. **Depure o Código**: Recarregue a página. A execução do código será pausada no ponto do breakpoint, permitindo que você examine o estado do programa (valores de variáveis, fluxo de execução etc.).

#### 3. Depuração Usando Console Logs

Outra forma de depurar é adicionar instruções `console.log` ao código para monitorar o fluxo e os valores de variáveis.

```javascript
function multiplica(a, b) {
  console.log("Multiplicando", a, "e", b);  // Adiciona um log para verificar valores
  return a * b;
}

console.log(multiplica(4, 5)); // Deve imprimir 20
```

---

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/nGrB8DdAivM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWkFH9stvKOjxMIENKS2UW--oQhg)](https://youtu.be/nGrB8DdAivM?si=GKIU9jQ3pI7hwp-E)
[![Watch the video](https://i.ytimg.com/vi/HcDJdKfm5nA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6uplRUvqCMMQGNJ-5J1lLZmLAng)](https://youtu.be/HcDJdKfm5nA?si=q_eIqc-p6CG4ElNP)
### Exercícios

#### 1. Escreva Testes Unitários
Dada a função `subtrai` abaixo, escreva dois testes unitários usando a biblioteca Jest:

```javascript
function subtrai(a, b) {
  return a - b;
}
```

1.1 Teste se a função retorna o valor correto ao subtrair 10 de 15.  
1.2 Teste se a função funciona corretamente ao subtrair números negativos.

#### 2. Encontre e Corrija o Erro
Observe o código a seguir, onde há um erro de lógica:

```javascript
function maiorValor(arr) {
  let maior = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < maior) {
      maior = arr[i];
    }
  }
  return maior;
}

const valores = [3, 7, 1, 9, 5];
console.log(maiorValor(valores));  // O valor retornado não é o esperado
```

2.1 Use `console.log` para identificar onde está o erro no código.  
2.2 Corrija o erro e escreva um teste para garantir que a função funciona corretamente.

#### 3. Depuração com Breakpoints
Pegue o seguinte código e adicione breakpoints para verificar se ele está somando corretamente os elementos do array:

```javascript
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

const numeros = [2, 4, 6, 8];
console.log(somaArray(numeros));  // Deve retornar 20
```

---

### Conclusão

Testes e depuração são processos críticos no desenvolvimento de software que ajudam a garantir a qualidade e a funcionalidade do código. Ao escrever testes unitários, você previne erros futuros e ganha confiança no comportamento do seu código. Por outro lado, técnicas de depuração, como o uso de breakpoints e logs, permitem que você identifique e corrija problemas mais rapidamente.

O ciclo contínuo de **escrever código -> testar -> depurar -> melhorar** é essencial para o desenvolvimento eficiente de soluções robustas.