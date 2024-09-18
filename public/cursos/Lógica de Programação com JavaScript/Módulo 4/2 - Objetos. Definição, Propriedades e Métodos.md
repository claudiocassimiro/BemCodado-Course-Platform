#### Conteúdo Teórico

**O que são Objetos?**
Objetos são uma estrutura fundamental em JavaScript que permitem armazenar coleções de dados e funcionalidades em uma única entidade. Eles são compostos por pares chave-valor, onde a chave é uma string (ou símbolo) e o valor pode ser qualquer tipo de dado, incluindo outros objetos. Objetos são amplamente utilizados para representar entidades complexas, como usuários, produtos e configurações.

**Definição e Criação de Objetos:**
Objetos podem ser criados de várias formas em JavaScript:
- **Sintaxe Literal:**
  ```javascript
  let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  ```
- **Usando o Construtor `Object`:**
  ```javascript
  let carro = new Object();
  carro.marca = "Ford";
  carro.modelo = "Fusion";
  carro.ano = 2020;
  ```

**Propriedades de Objetos:**
Propriedades são pares chave-valor em um objeto. As chaves (ou propriedades) são sempre strings (ou símbolos), e os valores podem ser de qualquer tipo:
- **Acessar Propriedades:**
  ```javascript
  console.log(pessoa.nome); // "João"
  console.log(pessoa["idade"]); // 30
  ```
- **Adicionar ou Modificar Propriedades:**
  ```javascript
  pessoa.email = "joao@example.com";
  pessoa.idade = 31;
  ```

**Métodos de Objetos:**
Métodos são funções que estão associadas a um objeto. Eles são definidos como valores de propriedades e podem ser chamados para realizar ações:
- **Definindo Métodos:**
  ```javascript
  let carro = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2020,
    exibirInfo: function() {
      return `${this.marca} ${this.modelo} (${this.ano})`;
    }
  };
  ```
- **Chamando Métodos:**
  ```javascript
  console.log(carro.exibirInfo()); // "Ford Fusion (2020)"
  ```

**Herança e Prototype:**
- **Prototype:** Todos os objetos em JavaScript têm um protótipo, que é um outro objeto do qual herdam propriedades e métodos.
  ```javascript
  let animal = {
    tipo: "mamífero",
    comer: function() {
      console.log("Comendo...");
    }
  };

  let cachorro = Object.create(animal);
  cachorro.nome = "Rex";
  cachorro.latir = function() {
    console.log("Au Au!");
  };
  ```

#### Conteúdo Prático

**Criando e Manipulando Objetos:**

```javascript
// Definindo um objeto literal
let livro = {
  titulo: "JavaScript para Iniciantes",
  autor: "Maria Silva",
  ano: 2021,
  detalhes: function() {
    return `${this.titulo} por ${this.autor}, publicado em ${this.ano}`;
  }
};

// Acessando e modificando propriedades
console.log(livro.titulo); // "JavaScript para Iniciantes"
livro.ano = 2022;
console.log(livro.detalhes()); // "JavaScript para Iniciantes por Maria Silva, publicado em 2022"

// Definindo um objeto usando o construtor
let estudante = new Object();
estudante.nome = "Carlos";
estudante.idade = 22;
estudante.estudar = function() {
  console.log(`${this.nome} está estudando.`);
};

// Chamando métodos
estudante.estudar(); // "Carlos está estudando."

// Usando prototype para herança
let veiculo = {
  tipo: "carro",
  mover: function() {
    console.log("Movendo...");
  }
};

let moto = Object.create(veiculo);
moto.modelo = "Honda";
moto.exibirModelo = function() {
  console.log(`Modelo: ${this.modelo}`);
};

moto.mover(); // "Movendo..."
moto.exibirModelo(); // "Modelo: Honda"
```

#### Exercícios

1. **Criação e Manipulação de Objetos:**
   - Crie um objeto chamado `livro` com as propriedades `titulo`, `autor` e `ano`. Adicione um método chamado `resumo` que retorna uma string com essas informações formatadas.
   - Modifique o ano do livro e adicione uma nova propriedade chamada `categoria`.

2. **Métodos de Objetos:**
   - Crie um objeto `produto` com as propriedades `nome`, `preco` e `categoria`. Adicione um método `desconto` que aplica um desconto percentual ao preço e retorna o preço final.
   - Crie um novo objeto chamado `eletronico` que herda de `produto` e adicione uma nova propriedade `garantia`.

3. **Desafio de Prototype:**
   - Defina um objeto `animal` com uma propriedade `nome` e um método `fazerSom`. Crie um novo objeto `gato` que herda de `animal`, adicione uma propriedade `raca` e sobrescreva o método `fazerSom` para retornar um som característico de gato.

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/n5uiJr-v0KQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqL4VyYJBuUbAZ1b4Lpf3NKyketg)](https://youtu.be/n5uiJr-v0KQ?si=pLdFbtI5oN3qAoOv)

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Neste módulo, exploramos a definição e o uso de objetos em JavaScript, incluindo a criação de objetos literais e a utilização do construtor `Object`. Aprendemos a manipular propriedades e métodos, bem como a importância da herança através do prototype. Compreender e dominar os objetos é crucial para organizar e estruturar dados em JavaScript, permitindo a modelagem de entidades complexas e a criação de soluções mais robustas e escaláveis. A prática desses conceitos ajudará a desenvolver uma base sólida para resolver problemas de programação e criar aplicações mais sofisticadas.
