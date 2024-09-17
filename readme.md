
# Podcast Manager 💡

## DESCRIÇÃO 📜
Podcast Manager é um aplicativo inspirado no estilo da Netflix, projetado para centralizar diferentes episódios de podcasts em vídeo, organizados por categorias específicas. O objetivo principal é permitir aos usuários encontrar e explorar podcasts de forma rápida e eficiente.

---

## FUNCIONALIDADES 🚧⚙️
### Lista de Funcionalidades:
- **Listar episódios por categoria**:
    - Categorias disponíveis: `Saúde`, `Fitness`, `Mentalidade`, `Humor`.
- **Filtrar episódios por nome de podcast**:
    - Exemplo: Retornar todos os episódios de um podcast específico, como "Flow".

---

## COMO FUNCIONA ❓

### Endpoints da API:
1. **GET** `/episodes`  
   - **Descrição**: Retorna uma lista de episódios, organizados por categorias.
   - **Resposta** (Exemplo):
     ```json
     [
       {
         "podcastName": "flow",
         "episode": "CBUM - Flow #319",
         "videoId": "pQSuQmUfS30",
         "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
         "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
         "category": ["saúde", "esporte", "bodybuilder"]
       },
       {
         "podcastName": "flow",
         "episode": "RUBENS BARRICHELLO - Flow #339",
         "videoId": "4KDGTdiOV4I",
         "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
         "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
         "category": ["esporte", "corrida"]
       }
     ]
     ```

2. **GET** `/episodes?podcastName={podcastName}`  
   - **Descrição**: Retorna uma lista de episódios filtrados pelo nome do podcast.
   - **Exemplo de Parâmetro**: `?podcastName=flow`


---

## TECNOLOGIAS UTILIZADAS 🛠️

O projeto **Podcast Manager** utiliza algumas tecnologias. Aqui está uma visão geral das principais tecnologias utilizadas:

### **Linguagens e Ferramentas Principais:**
- **[TypeScript](https://www.typescriptlang.org/)**: Utilizado para garantir tipagem estática e desenvolvimento robusto.
- **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript no servidor.

### **Ferramentas de Desenvolvimento:**
- **[`typescript`](https://www.npmjs.com/package/typescript)**: Compilador para TypeScript.
- **[`tsx`](https://www.npmjs.com/package/tsx)**: Ferramenta para execução e desenvolvimento com suporte a TypeScript.
- **[`tsup`](https://github.com/egoist/tsup)**: Ferramenta de bundling para compilar e empacotar código TypeScript.
- **[`esbuild`](https://esbuild.github.io/)**: Empacotador e minificador rápido para JavaScript e TypeScript.

### **Scripts de Build e Execução:**
- **`npm run start:dev`**: Executa o servidor em modo desenvolvimento com suporte a variáveis de ambiente.
- **`npm run start:watch`**: Executa o servidor com suporte a recarga automática em modo desenvolvimento.
- **`npm run dist`**: Compila o código TypeScript para JavaScript.
- **`npm run start:dist`**: Executa o código compilado a partir da pasta `dist`.


---

## COMO CONFIGURAR E EXECUTAR O PROJETO 🚀

### Pré-requisitos:
- **Node.js** (versão 14 ou superior)
- **NPM** ou **Yarn**

### Passos para executar:
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   cd podcast-manager
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

### Teste os endpoints:
Utilize o **Postman** , **Thunder Client** (Extensão do VScode) ou seu próprio navegador para testar os endpoints mencionados acima.

---

## FUTURAS MELHORIAS 🛠️
- Adicionar suporte a autenticação de usuário.
- Implementar sistema de favoritos.
- Melhorar a interface de filtragem, permitindo busca por múltiplas categorias e palavras-chave.
- Implementar integração com plataformas de podcast (YouTube, Spotify, etc.).
- Implementação do Front-end.

---

## CONTRIBUIÇÃO 🤝
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar PRs para melhorar o projeto.

---

## LICENÇA 📄
Este projeto está licenciado sob os termos da licença MIT.

---
