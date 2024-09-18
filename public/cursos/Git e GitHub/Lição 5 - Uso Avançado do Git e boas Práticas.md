---

**Introdução:**
- Bem vindx ao material do webinar, exploraremos técnicas avançadas de uso do Git, incluindo tags e releases, gerenciamento de arquivos com `.gitignore` e `.gitattributes`, e boas práticas de workflow.

---

#### 1. Tags e Releases

**Conceito de Tags e Releases:**

- **Tags:** Marcadores utilizados para identificar versões específicas no repositório.
- **Releases:** Versões publicadas do projeto, geralmente associadas a tags.

**Exemplo de Criação de Tags:**

```bash
# Cria uma tag anotada
git tag -a v1.0 -m "Versão 1.0"

# Lista todas as tags
git tag

# Envia a tag para o repositório remoto
git push origin v1.0
```

**Publicação de Releases no GitHub:**

1. Acesse a página do repositório no GitHub.
2. Vá para a aba "Releases".
3. Clique em "Draft a new release".
4. Selecione a tag que deseja associar.
5. Preencha as informações e publique.

**Exercício Prático:**

1. Crie uma tag `v1.0` no seu repositório local.
2. Publique esta tag no GitHub e crie uma release associada.

---

#### 2. Git Ignore e Git Attributes

**Usando `.gitignore`:**

- **Objetivo:** Evitar que arquivos indesejados sejam adicionados ao repositório.
- **Exemplo de `.gitignore`:**

```plaintext
# Ignora arquivos de log
*.log

# Ignora diretório de dependências
node_modules/

# Ignora arquivos temporários do sistema
*.swp
```

**Usando `.gitattributes`:**

- **Objetivo:** Definir atributos de arquivos para especificar o comportamento do Git.
- **Exemplo de `.gitattributes`:**

```plaintext
# Define arquivos de texto para tratamento de final de linha
*.txt text

# Define arquivos binários
*.png binary
```

**Exercício Prático:**

1. Crie um arquivo `.gitignore` no seu repositório e adicione regras para ignorar arquivos `.log` e o diretório `node_modules/`.
2. Crie um arquivo `.gitattributes` e adicione regras para tratar arquivos `.txt` como texto e arquivos `.png` como binários.

---

#### 3. Boas Práticas de Workflow com Git

**Git Flow e Outros Modelos:**

- **Git Flow:** Modelo de workflow que define uma estrutura para ramificação e fusão.
- **Outros Modelos:** GitHub Flow, GitLab Flow.

**Melhores Práticas para Mensagens de Commit:**

- **Mensagens Significativas:** Resumem a alteração de forma clara.
- **Estrutura Recomendada:**
  - Linha 1: Título breve
  - Linha 2: Linha em branco
  - Linha 3: Descrição detalhada

**Exemplo de Mensagem de Commit:**

```plaintext
Adicionar função de login

Implementação da função de login com autenticação de dois fatores.
```

**Exercício Prático:**

1. Adote o Git Flow em um projeto de teste e pratique a criação e fusão de branches.
2. Faça commits com mensagens significativas seguindo a estrutura recomendada.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre controle de versão, Git ou qualquer outro tópico abordado no canal de dúvidas sobre [Git e Github no Discord](https://discord.com/channels/1224468395462754345/1224469178677723148) da BemCodado.

---

### Recursos Adicionais:

- Documentação oficial do Git: [Git Documentation](https://git-scm.com/doc)
- Tutorial sobre Git Flow: [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

### Referências:

- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/)

### Conclusão:

Esperamos que este material ajude você a dominar o uso avançado do Git e a implementar boas práticas em seus projetos de desenvolvimento de software. Boa sorte e bons estudos!

---

**Nota:** Este material é complementar ao conteúdo apresentado no webinar e deve ser usado como guia de referência durante seus estudos.
