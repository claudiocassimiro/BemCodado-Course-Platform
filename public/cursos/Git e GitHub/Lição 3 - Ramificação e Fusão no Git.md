
---
### Introdução

Bem vindx ao material do webinar, vamos explorar os conceitos de ramificação e fusão no Git, fundamentais para o trabalho colaborativo e o desenvolvimento de software em equipe.

---

### Criação e Gerenciamento de Branches

#### Criando uma Nova Branch

- **Comando**: `git branch <nome-da-branch>`
- **Exemplo**:
  ```bash
  git branch feature-nova
  ```

#### Excluindo Branches

- **Comando**: `git branch -d <nome-da-branch>`
- **Exemplo**:
  ```bash
  git branch -d feature-nova
  ```

#### Navegação entre Branches

- **Comando**: `git checkout <nome-da-branch>`
- **Exemplo**:
  ```bash
  git checkout feature-nova
  ```

Vídeo no youtube demonstrando como trabalhar com branchs: [![Watch the video](https://i.ytimg.com/vi/yQHgtes_K5Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaEhIMBj8CSOmvSEfGETADVDMM1g)](https://www.youtube.com/watch?v=yQHgtes_K5Q)
#### Exercício Prático 1

1. Crie uma nova branch chamada `feature1`.
2. Faça checkout para essa nova branch.
3. Crie um arquivo chamado `feature.txt` e adicione algum texto.
4. Volte para a branch principal (`main`) e exclua a branch `feature1`.

---
### Fusão de Branches (Merge)

#### Realizando a Fusão de Branches

- **Comando**: `git merge <nome-da-branch>`
- **Exemplo**:
  ```bash
  git merge feature-nova
  ```

#### Resolvendo Conflitos de Merge

1. Durante o merge, se houver conflitos, o Git indicará os arquivos em conflito.
2. Abra os arquivos indicados e edite para resolver os conflitos.
3. Após resolver os conflitos, adicione os arquivos editados:
   ```bash
   git add <arquivo>
   ```
4. Complete o merge:
   ```bash
   git commit
   ```

Vídeo no youtube demonstrando como fazer merge e resolver conflitos em branchs: [![Watch the video](https://i.ytimg.com/vi/dGEMPkArBcg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAFHINFrcGwSRWVsTN1VkIjLaMgg)](https://www.youtube.com/watch?v=dGEMPkArBcg)
#### Exercício Prático 2

1. Crie duas branches chamadas `featureA` e `featureB` a partir da branch `main`.
2. Faça mudanças diferentes no mesmo arquivo em ambas as branches.
3. Faça merge da branch `featureA` na `main`.
4. Tente fazer merge da branch `featureB` na `main` e resolva qualquer conflito que ocorrer.

---
### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre controle de versão, Git ou qualquer outro tópico abordado no canal de dúvidas sobre [Git e Github no Discord](https://discord.com/channels/1224468395462754345/1224469178677723148) da BemCodado.

---
### Encerramento

Obrigado por participar do webinar hoje. Espero que tenham adquirido um entendimento sólido sobre ramificação e fusão no Git. Até a próxima!

---
### Recursos Adicionais

- **Documentação Oficial do Git**: [git-scm.com/doc](https://git-scm.com/doc)
- **Comunidade de Aprendizado BemCodado**: [Link para comunidade](https://discord.gg/fvDYw2R2tX)

---
