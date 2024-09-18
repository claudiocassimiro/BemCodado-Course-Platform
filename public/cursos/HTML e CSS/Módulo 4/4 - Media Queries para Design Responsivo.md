**Media Queries** são uma ferramenta poderosa em CSS que permitem criar layouts adaptáveis a diferentes tamanhos de tela e dispositivos. Utilizando media queries, você pode aplicar estilos específicos para diversos tamanhos de viewport, garantindo que seu site ou aplicação web seja acessível e visualmente agradável em qualquer dispositivo, seja ele um smartphone, tablet, laptop ou desktop.
#### **Definição:**

Media queries permitem que você defina condições específicas (como largura, altura, resolução de tela, entre outras) para aplicar estilos diferentes com base nessas condições. Isso é fundamental para o desenvolvimento de sites responsivos que se adaptam automaticamente ao tamanho da tela do usuário.
#### **Exemplos de Media Queries:**

1. **Estilos Básicos para Diferentes Tamanhos de Tela:**

   - **Para telas menores que 600px (smartphones):**

     ```css
     @media (max-width: 600px) {
         .container {
             flex-direction: column;
             padding: 10px;
         }

         .menu {
             display: none; /* Esconde o menu em telas pequenas */
         }

         .header, .footer {
             text-align: center;
         }
     }
     ```

   - **Para telas maiores que 768px (tablets e desktops):**

     ```css
     @media (min-width: 768px) {
         .container {
             display: flex;
             justify-content: space-between;
             padding: 20px;
         }

         .menu {
             display: block; /* Mostra o menu em telas maiores */
         }

         .header, .footer {
             text-align: left;
         }
     }
     ```

2. **Exemplo Avançado: Layout Responsivo para Galeria de Imagens:**

   - **HTML Estrutura:**

     ```html
     <div class="gallery">
         <img src="image1.jpg" alt="Imagem 1">
         <img src="image2.jpg" alt="Imagem 2">
         <img src="image3.jpg" alt="Imagem 3">
         <!-- Mais imagens -->
     </div>
     ```

   - **CSS com Media Queries:**

     ```css
     .gallery {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 10px;
     }

     @media (min-width: 600px) {
         .gallery {
             grid-template-columns: repeat(3, 1fr);
         }
     }

     @media (min-width: 1024px) {
         .gallery {
             grid-template-columns: repeat(4, 1fr);
         }
     }
     ```

   Neste exemplo, a galeria de imagens exibe duas colunas em telas menores que 600px, três colunas em telas entre 600px e 1024px, e quatro colunas em telas maiores que 1024px.

3. **Media Queries para Altura de Tela:**

   Também é possível utilizar media queries para aplicar estilos com base na altura da tela. Isso é útil para layouts que precisam se ajustar em dispositivos como tablets, que podem ter uma orientação vertical ou horizontal.

   ```css
   @media (max-height: 500px) {
       .sidebar {
           display: none; /* Esconde a barra lateral em telas muito baixas */
       }

       .content {
           margin: 0; /* Remove margens para otimizar o espaço */
       }
   }
   ```

#### Vídeo de apoio:
[![Watch the video](https://i.ytimg.com/vi/zt5W562mYRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHRaJukq2CDtNLZW7MZwYBBNrn0w)](https://youtu.be/zt5W562mYRo?si=lxa7lqyT-KbGNkuV)
#### **Exercícios Práticos**

1. **Crie um Layout Responsivo para uma Página de Blog:**

   Desenvolva um layout básico para uma página de blog que tenha um cabeçalho, um conteúdo principal e uma barra lateral. Utilize media queries para ajustar o layout de forma que a barra lateral se mova abaixo do conteúdo principal em telas menores.

2. **Otimize uma Página para Vários Dispositivos:**

   Crie uma página simples que contém um cabeçalho, três seções de conteúdo e um rodapé. Use media queries para ajustar a fonte, o espaçamento e o layout conforme a tela do dispositivo muda de um smartphone para um desktop.
### **Conclusão**

Media queries são uma parte fundamental do CSS moderno e essencial para a criação de layouts responsivos. Elas permitem que desenvolvedores ajustem o design de um site ou aplicação com base no tamanho e nas características do dispositivo do usuário, proporcionando uma experiência consistente e otimizada em todos os dispositivos. Ao praticar com exemplos e exercícios, você ganhará confiança para aplicar media queries de forma eficaz em seus projetos.

---

Estes exemplos e exercícios fornecem uma base sólida para entender e aplicar media queries no desenvolvimento de design responsivo, garantindo uma melhor experiência para o usuário final em qualquer dispositivo.

---

### Perguntas e Respostas

Aproveite este momento para esclarecer quaisquer dúvidas sobre HTML, CSS ou qualquer outro tópico abordado no canal de dúvidas sobre [HTML e CSS no Discord](https://discord.com/channels/1224468395462754345/1224469321921859694) da BemCodado.

---
