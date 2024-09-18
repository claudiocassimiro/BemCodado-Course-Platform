**Conteúdo Teórico:**

**1. Modelagem de Problemas:**
Modelagem é o processo de criar representações simplificadas e abstratas de um problema do mundo real para facilitar a compreensão e a resolução. A modelagem ajuda a visualizar e entender a estrutura e os comportamentos de um sistema ou problema.

- **Objetivo:** Simplificar a complexidade do mundo real e tornar o problema mais gerenciável ao criar um modelo que representa a essência do problema.
- **Exemplo:** Criar um modelo de um sistema de tráfego que inclui carros, semáforos e estradas para entender e otimizar o fluxo de tráfego.

**2. Simulação de Problemas:**
Simulação é a execução de um modelo para observar seu comportamento e fazer previsões. A simulação permite testar diferentes cenários e avaliar como as mudanças afetam o sistema, ajudando na tomada de decisões.

- **Objetivo:** Avaliar o desempenho e o comportamento de um modelo sob diferentes condições, identificando problemas e oportunidades de melhoria antes da implementação real.
- **Exemplo:** Simular o comportamento de um robô em um ambiente virtual para testar sua capacidade de evitar obstáculos antes de colocá-lo em um ambiente real.

---

**Conteúdo Prático:**

**1. Modelagem de Problemas com Objetos:**
Vamos criar um modelo simples de um sistema bancário utilizando objetos em JavaScript.

```javascript
// Modelo de Conta Bancária
class ContaBancaria {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente');
    } else {
      this.saldo -= valor;
      console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
    }
  }
}

// Criar uma conta e realizar operações
const conta = new ContaBancaria(12345, 1000);
conta.depositar(200);
conta.sacar(150);
conta.sacar(1200); // Tentativa de saque com saldo insuficiente
```

**2. Simulação de um Sistema de Pedidos:**
Vamos simular um sistema de pedidos onde calculamos o total de uma compra com diferentes itens e aplicamos descontos.

```javascript
// Função para calcular o total de uma compra
function calcularTotal(pedidos, desconto) {
  let total = 0;
  for (const pedido of pedidos) {
    total += pedido.preco * pedido.quantidade;
  }
  total -= total * (desconto / 100);
  return total;
}

// Simulação
const pedidos = [
  { item: 'Camisa', preco: 50, quantidade: 2 },
  { item: 'Calça', preco: 80, quantidade: 1 }
];

const desconto = 10; // Desconto de 10%
const totalCompra = calcularTotal(pedidos, desconto);
console.log(`Total da compra com desconto: R$${totalCompra}`);
```

---

**Exercícios:**

1. **Modelagem de Sistema de Biblioteca:**
   - Crie um modelo simplificado para um sistema de biblioteca usando classes. O modelo deve incluir livros e usuários, com métodos para emprestar e devolver livros. Descreva as propriedades e métodos necessários.

2. **Simulação de Estoque de Loja:**
   - Simule o gerenciamento de estoque de uma loja. Crie uma função para atualizar o estoque com base em vendas e adições de novos produtos. Teste a função com diferentes cenários de vendas e reabastecimento.

---

**Conclusão:**

A modelagem e a simulação são ferramentas poderosas para entender e resolver problemas complexos. A modelagem simplifica e representa o problema de maneira compreensível, enquanto a simulação permite testar e analisar o comportamento do modelo em diferentes condições. Essas técnicas ajudam a prever resultados, otimizar soluções e tomar decisões mais informadas antes de implementar a solução no mundo real. Aplicar modelagem e simulação no desenvolvimento de software e na resolução de problemas pode levar a soluções mais eficazes e eficientes.