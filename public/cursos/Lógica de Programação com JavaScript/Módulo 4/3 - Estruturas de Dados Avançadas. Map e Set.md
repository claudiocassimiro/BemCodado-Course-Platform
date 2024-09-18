#### Conteúdo Teórico

**1. Map:**

O `Map` é uma estrutura de dados que armazena pares chave-valor. Diferentemente dos objetos, que também armazenam pares chave-valor, as chaves no `Map` podem ser de qualquer tipo, não apenas strings ou símbolos. Além disso, o `Map` mantém a ordem de inserção das chaves.

- **Criação de Map:**
  ```javascript
  let mapa = new Map();
  ```

- **Adicionando Itens:**
  ```javascript
  mapa.set('nome', 'João');
  mapa.set(1, 'um');
  mapa.set(true, 'verdadeiro');
  ```

- **Acessando Itens:**
  ```javascript
  console.log(mapa.get('nome')); // "João"
  ```

- **Verificando a Existência de uma Chave:**
  ```javascript
  console.log(mapa.has(1)); // true
  ```

- **Removendo Itens:**
  ```javascript
  mapa.delete('nome');
  ```

- **Iterando sobre Map:**
  ```javascript
  mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
  });
  ```

- **Tamanho do Map:**
  ```javascript
  console.log(mapa.size); // Número de pares chave-valor
  ```

**2. Set:**

O `Set` é uma coleção de valores únicos. Não permite valores duplicados e não possui um índice para acessar seus elementos. Assim como o `Map`, o `Set` mantém a ordem de inserção dos valores.

- **Criação de Set:**
  ```javascript
  let conjunto = new Set();
  ```

- **Adicionando Itens:**
  ```javascript
  conjunto.add('apple');
  conjunto.add('banana');
  conjunto.add(1);
  ```

- **Verificando a Existência de um Valor:**
  ```javascript
  console.log(conjunto.has('apple')); // true
  ```

- **Removendo Itens:**
  ```javascript
  conjunto.delete('banana');
  ```

- **Iterando sobre Set:**
  ```javascript
  conjunto.forEach(valor => {
    console.log(valor);
  });
  ```

- **Tamanho do Set:**
  ```javascript
  console.log(conjunto.size); // Número de valores únicos
  ```

**Vídeo de Apoio:**
[![Watch the video](https://i.ytimg.com/vi/HhaACh5_ey4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7P_VDRH2ctmiv7tf9MFCIFfmRTQ)](https://youtu.be/HhaACh5_ey4?si=xoIBbmuE9WazsJ3O)
[![Watch the video](https://i.ytimg.com/vi/Ohf0wDJp9O4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA55YrthFDI9ek_yKU44Biw88Isag)](https://youtu.be/Ohf0wDJp9O4?si=z2tt4zm1W8W3H1aR)
#### Conteúdo Prático

**1. Exemplo de Uso do Map:**

```javascript
// Criando um Map com informações de um usuário
let usuario = new Map();
usuario.set('nome', 'Ana');
usuario.set('idade', 28);
usuario.set('email', 'ana@example.com');

// Acessando e modificando dados
console.log(usuario.get('nome')); // "Ana"
usuario.set('idade', 29);
console.log(usuario.get('idade')); // 29

// Iterando sobre o Map
usuario.forEach((valor, chave) => {
  console.log(`${chave}: ${valor}`);
});
```

**2. Exemplo de Uso do Set:**

```javascript
// Criando um Set com algumas frutas
let frutas = new Set();
frutas.add('maçã');
frutas.add('banana');
frutas.add('laranja');

// Tentando adicionar um valor duplicado
frutas.add('banana');

// Iterando sobre o Set
frutas.forEach(fruta => {
  console.log(fruta);
});

// Verificando o tamanho
console.log(frutas.size); // 3
```

#### Exercícios

1. **Exercício com Map:**
   - Crie um `Map` para armazenar informações sobre livros, onde a chave é o título do livro e o valor é o autor. Adicione pelo menos três livros e autores. Depois, escreva um código para exibir todos os livros e seus autores.
   
2. **Exercício com Set:**
   - Crie um `Set` contendo diferentes tipos de frutas. Adicione algumas frutas duplicadas e verifique se o `Set` contém apenas valores únicos. Em seguida, remova uma fruta e exiba todos os itens restantes no `Set`.

3. **Desafio Avançado com Map e Set:**
   - Crie um `Map` para armazenar um inventário de produtos em um armazém, onde a chave é o nome do produto e o valor é um `Set` com os códigos das lotes disponíveis. Adicione vários produtos com diferentes lotes. Em seguida, escreva uma função que recebe um nome de produto e retorna todos os códigos de lotes disponíveis para esse produto.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre Lógica de programação, JavaScript ou qualquer outro tópico abordado no canal de dúvidas sobre [JavaScript no Discord](https://discord.com/channels/1224468395462754345/1224468875840851968) da BemCodado.

---

#### Conclusão

Neste módulo, exploramos as estruturas de dados avançadas `Map` e `Set`, que oferecem funcionalidades poderosas para gerenciar coleções de dados de forma eficiente e com características únicas. O `Map` fornece uma maneira de armazenar pares chave-valor com chaves de qualquer tipo e mantém a ordem de inserção, enquanto o `Set` garante a exclusividade dos valores e também mantém a ordem de inserção. Compreender e utilizar essas estruturas permite criar aplicações mais robustas e eficientes, aproveitando as vantagens de cada uma para resolver problemas específicos relacionados ao armazenamento e manipulação de dados. A prática com `Map` e `Set` é essencial para se tornar proficiente em JavaScript e aprimorar suas habilidades de desenvolvimento.
