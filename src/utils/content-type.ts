export enum ContentType {
    // Tipos comuns de Content-Type
    JSON = "application/json", // Dados no formato JSON
    XML = "application/xml", // Dados no formato XML
    HTML = "text/html", // Documento HTML
    TEXT = "text/plain", // Texto simples
    FORM_URLENCODED = "application/x-www-form-urlencoded", // Dados de formulário codificados na URL
    FORM_DATA = "multipart/form-data", // Dados de formulário com upload de arquivos
    JAVASCRIPT = "application/javascript", // Script JavaScript
    CSS = "text/css", // Estilo CSS
    CSV = "text/csv", // Arquivo CSV (valores separados por vírgulas)

    // Tipos de Content-Type relacionados a arquivos
    OCTET_STREAM = "application/octet-stream", // Dados binários arbitrários (download de arquivos)
    PDF = "application/pdf", // Arquivo PDF
    ZIP = "application/zip", // Arquivo ZIP

    // Tipos de Content-Type relacionados a mídia
    PNG = "image/png", // Imagem PNG
    JPEG = "image/jpeg", // Imagem JPEG
    GIF = "image/gif", // Imagem GIF
    WEBP = "image/webp", // Imagem WebP
    MP3 = "audio/mpeg", // Arquivo de áudio MP3
    MP4 = "video/mp4", // Arquivo de vídeo MP4

    // Outros tipos comuns
    EVENT_STREAM = "text/event-stream", // Server-Sent Events (SSE)
    WEBSOCKET = "application/websocket", // Conexão WebSocket
    RTF = "application/rtf", // Documento RTF
    YAML = "application/x-yaml", // Arquivo YAML
    ICO = "image/x-icon" // Ícone (favicon)
}
