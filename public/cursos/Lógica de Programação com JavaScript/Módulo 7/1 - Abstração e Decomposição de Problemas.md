**Conteúdo Teórico:**

**1. Abstração:**
Abstração é o processo de esconder detalhes complexos e se concentrar nas características essenciais de um problema. Em programação, isso significa simplificar um problema complexo em partes mais manejáveis, usando conceitos gerais e ignore detalhes específicos que não são relevantes para a solução imediata. 

- **Objetivo:** Facilitar a compreensão e a resolução de problemas complexos ao reduzir a complexidade ao focar apenas no que é necessário.
- **Exemplo:** Usar uma função que realiza uma tarefa complexa sem precisar conhecer os detalhes internos dessa função.

**2. Decomposição:**
Decomposição é o processo de dividir um problema grande em problemas menores e mais simples. A ideia é quebrar um problema complexo em partes mais gerenciáveis que podem ser resolvidas individualmente e, em seguida, combinar as soluções dessas partes para resolver o problema original.

- **Objetivo:** Tornar problemas grandes e complexos mais fáceis de resolver ao dividir o problema em partes menores e mais fáceis de entender.
- **Exemplo:** Dividir o desenvolvimento de um aplicativo em partes como design da interface, manipulação de dados e lógica de negócios.

---

**Conteúdo Prático:**

**1. Abstração em Funções:**
Vamos considerar a abstração no contexto de funções. Criamos uma função que realiza uma tarefa complexa sem nos preocuparmos com os detalhes internos quando a usamos.

```javascript
// Função que calcula a média de um array de números
function calcularMedia(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma / numeros.length;
}

// Usamos a função sem precisar conhecer os detalhes de como a média é calculada
const notas = [8, 9, 7, 10, 6];
const mediaNotas = calcularMedia(notas);
console.log(`A média das notas é ${mediaNotas}`);
```

**2. Decomposição em Tarefas:**
Vamos decompor um problema em tarefas menores. Suponha que queremos desenvolver um sistema de gerenciamento de contatos.

**Passos para Decomposição:**

1. **Entrada de Dados:** Criação de uma interface para adicionar novos contatos.
2. **Armazenamento:** Salvar contatos em uma lista ou banco de dados.
3. **Consulta:** Permitir a busca e visualização de contatos.
4. **Edição e Remoção:** Funcionalidades para editar ou remover contatos.

Cada parte pode ser desenvolvida separadamente e depois integrada.

---

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/pRpjYrdb9UY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIE0oOzAP&rs=AOn4CLAyAW1jA1qCUGJ83eTZYdTNiVfc3w)](https://youtu.be/pRpjYrdb9UY?si=CHz7ycik_EXVJVVX)

**Exercícios:**

1. **Abstração com Funções:**
   - Crie uma função `converterTemperatura` que converte temperaturas de Celsius para Fahrenheit e vice-versa. A função deve abstrair o processo de conversão para que o usuário não precise entender a fórmula de conversão diretamente.

2. **Decomposição de Problema:**
   - Suponha que você está desenvolvendo um jogo simples. Decomponha o desenvolvimento do jogo em partes menores, como criação do personagem, implementação das regras do jogo, e controle de pontuação. Descreva brevemente o que cada parte deve fazer.

---

**Conclusão:**

Abstração e decomposição são técnicas fundamentais no pensamento computacional e na resolução de problemas complexos. A abstração ajuda a simplificar e focar no que é essencial, enquanto a decomposição permite dividir um problema grande em partes menores e mais manejáveis. Essas técnicas não só facilitam a resolução de problemas, mas também ajudam a criar códigos mais limpos e organizados. Aplicar essas técnicas ajudará você a abordar problemas complexos de maneira estruturada e eficaz, promovendo soluções mais eficientes e compreensíveis.