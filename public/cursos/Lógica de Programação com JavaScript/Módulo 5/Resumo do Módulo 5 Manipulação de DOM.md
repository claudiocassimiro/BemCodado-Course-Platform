#### 5.1. **Introdução ao DOM e Seleção de Elementos**

O **DOM (Document Object Model)** é uma interface que permite acessar e manipular a estrutura de um documento HTML como objetos. Através do DOM, podemos modificar a estrutura, estilo e conteúdo de uma página web.

**Seleção de Elementos:**
Para manipular elementos, o primeiro passo é selecioná-los. As principais maneiras de selecionar elementos em JavaScript incluem:
- `document.getElementById(id)`: Seleciona um elemento pelo seu ID.
- `document.querySelector(selector)`: Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido.
- `document.querySelectorAll(selector)`: Seleciona todos os elementos que correspondem ao seletor CSS.

#### 5.2. **Manipulação de Propriedades e Atributos**

Uma vez selecionado um elemento, você pode alterar suas propriedades e atributos, como alterar o texto, adicionar classes CSS, mudar o estilo, ou modificar qualquer outro atributo HTML.

**Exemplos:**
- `element.innerHTML`: Modifica o conteúdo HTML de um elemento.
- `element.classList.add('classe')`: Adiciona uma classe CSS a um elemento.
- `element.setAttribute('atributo', 'valor')`: Define ou altera um atributo do elemento.

#### 5.3. **Criação e Remoção de Elementos**

Podemos dinamicamente criar novos elementos ou remover elementos existentes da página.

**Criação de Elementos:**
- `document.createElement('div')`: Cria um novo elemento.
- `element.appendChild(novoElemento)`: Insere um novo elemento como filho de um elemento existente.

**Remoção de Elementos:**
- `element.removeChild(child)`: Remove um elemento filho.

#### 5.4. **Eventos e Manipulação de Eventos**

**Eventos** são ações realizadas pelos usuários (como cliques, envio de formulário, ou teclas pressionadas). Manipular eventos permite reagir às ações dos usuários para alterar o comportamento ou interface da página.

**Exemplo de manipulação de eventos:**
- `element.addEventListener('click', function)`: Associa uma função para ser executada quando o evento de clique ocorre.

#### 5.5. **Atualização Dinâmica de Conteúdo**

A atualização dinâmica permite modificar o conteúdo de uma página web sem recarregá-la. Isso pode ser feito em resposta a eventos ou interações do usuário.

**Exemplo de atualização dinâmica:**
```js
document.querySelector('#botao').addEventListener('click', () => {
    document.querySelector('#conteudo').innerText = 'Novo conteúdo atualizado!';
});
```

#### 5.6. **Trabalhando com Formulários e Validações**

Formulários são a principal maneira de coletar dados dos usuários, e as validações garantem que os dados fornecidos estejam no formato correto antes de serem enviados.

**Validações típicas:**
- Verificar se os campos obrigatórios foram preenchidos.
- Validar se o formato do e-mail está correto usando expressões regulares.
- Comparar senhas ou outros campos de confirmação.

---

### Exercícios Extras

1. **Seleção de Elementos:** Crie uma página com três botões. Quando o primeiro for clicado, exiba uma mensagem em um parágrafo. O segundo botão deve alterar a cor de fundo da página, e o terceiro deve esconder uma imagem.
   
2. **Manipulação de Atributos:** Crie uma página com uma imagem e dois botões. Um botão deve alterar a imagem para uma diferente, enquanto o outro deve restaurar a imagem original.

3. **Criação de Elementos:** Em um campo de texto, permita que o usuário adicione novos itens a uma lista não ordenada ao pressionar um botão.

4. **Validação de Formulário:** Crie um formulário com campos de nome, e-mail e senha. Implemente uma validação para garantir que todos os campos estejam preenchidos, que o e-mail seja válido e que a senha tenha pelo menos 8 caracteres.

---

### Conclusão

Neste módulo, você aprendeu a manipular a estrutura e o conteúdo de páginas web utilizando o DOM. Através da seleção de elementos, alteração de atributos, criação e remoção dinâmica de elementos, e resposta a eventos, você tem as ferramentas para criar experiências dinâmicas e interativas. Além disso, entender como trabalhar com formulários e validações é fundamental para garantir a qualidade e integridade dos dados enviados pelos usuários.