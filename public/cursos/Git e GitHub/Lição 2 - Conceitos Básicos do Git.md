
---
### Introdução

Bem-vindx ao material do webinar sobre os conceitos básicos do Git! Hoje, exploraremos repositórios locais e remotos, commits, histórico de alterações e como desfazer mudanças.

---

### Repositórios Locais e Remotos

#### Inicializando um Repositório Local

- **Comando**: `git init`
- **Exemplo**:
  ```bash
  // Os comandos abaixo estão sendo executados no terminal bash
  mkdir meu_projeto
  cd meu_projeto
  git init
  ```

Vídeo no youtube sobre como criar um repositório local: [![Watch the video](https://i.ytimg.com/vi/QBG-02ly604/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBl18c6nf2FyL5sWJCeO_QnIKhnzQ)](https://www.youtube.com/watch?v=QBG-02ly604)
#### Adicionando um Repositório Remoto

- **Comando**: `git remote add origin <URL-do-repositório>`
- **Exemplo**:
  ```bash
  // https://github.com/usuario/meu_projeto.git - é um repositório fictício
  git remote add origin https://github.com/usuario/meu_projeto.git
  ```

Vídeo no youtube demonstrando como linkar um repositório local com um remoto: [![Watch the video](https://i.ytimg.com/vi/g2uviTb8ZpE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBeOj3LuYCXbsmVNI04BOhA4GX7w)](https://www.youtube.com/watch?v=g2uviTb8ZpE)
#### Clonando um Repositório Remoto

- **Comando**: `git clone <URL-do-repositório>`
- **Exemplo**:
  ```bash
  // https://github.com/usuario/meu_projeto.git - é um repositório fictício
  git clone https://github.com/usuario/meu_projeto.git
  ```

 [![Watch the video](https://i.ytimg.com/vi/lTf0v8RKAAo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNrT4Ldu9L4JxJuXmo1V9TOlp57g)](https://www.youtube.com/watch?v=lTf0v8RKAAo)
#### Exercício Prático 1

1. Crie um novo diretório chamado `exemplo_git`.
2. Inicialize um repositório Git nesse diretório.
3. Crie um repositório de mesmo nome no GitHub.
4. Adicione o remote do repositório remoto no seu repositório local.
5. Clone um repositório público do GitHub.

---
### Commits e Histórico de Alterações

#### Realizando um Commit

- **Comandos**:
  ```bash
  git add .
  git commit -m "Mensagem do commit"
  ```
- **Exemplo**:
  ```bash
  echo "Hello, Git!" > README.md
  git add README.md
  git commit -m "Adiciona arquivo README.md"
  ```

#### Visualizando o Histórico de Alterações

- **Comando**: `git log`
- **Exemplo**:
  ```bash
  git log
  ```

#### Desfazendo Alterações

- **Comando**: `git checkout -- <arquivo>`
- **Exemplo**:
  ```bash
  echo "Nova linha" >> README.md
  git checkout -- README.md
  ```

- **Comando**: `git reset`
- **Exemplo**:
  ```bash
  git reset HEAD~1
  ```

#### Exercício Prático 2

1. Crie um arquivo chamado `index.html` e adicione algum conteúdo.
2. Faça o commit do arquivo no repositório.
3. Adicione mais conteúdo ao `index.html` e visualize o histórico de commits.
4. Desfaça a última alteração usando `git checkout` e `git reset`.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre controle de versão, Git ou qualquer outro tópico abordado no canal de dúvidas sobre [Git e Github no Discord](https://discord.com/channels/1224468395462754345/1224469178677723148) da BemCodado.

---

### Encerramento

Obrigado por participar do webinar hoje. Espero que tenham adquirido um entendimento sólido dos conceitos básicos do Git. Até a próxima!

---

### Recursos Adicionais

- **Documentação Oficial do Git**: [git-scm.com/doc](https://git-scm.com/doc)
- **Comunidade de Aprendizado BemCodado**: [Link para comunidade](https://discord.gg/fvDYw2R2tX)

---