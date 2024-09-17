# Podcast Menager💡
    

### DESCRIÇÃO 📜
    Um app ao estilo netflix, aonde possa centralizar diferentes episódios separados por categoria.

### DOMINIO 📌
    Podcast feitos em videos

### FEATURES 🚧⚙️
    - Listar os episodios em seções de categorias
        - [saude, fitness, mentalidade, humor]
    - Filtrar episodios por nome de podcast


## COMO ? 

#### FEATURES: 🚧⚙️
    - Listar os episodios em seções de categorias
### COMO VOU IMPLEMENTAR:
    GET: Retorna lista de episodios; 



```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover:"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saude","esporte","bodybuilder"]

},
{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover:"https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["esporte","corrida"]

}]
```

 GET: Retorna lista de episodios baseados num parametro enviado pelo cliente do nome do podcast; 