export enum StatusCode {
    // 1xx Informational responses
    CONTINUE = 100, // A solicitação foi recebida e o cliente pode continuar
    SWITCHING_PROTOCOLS = 101, // O servidor está mudando o protocolo conforme solicitado
    PROCESSING = 102, // A solicitação está sendo processada (WebDAV)

    // 2xx Success
    OK = 200, // A solicitação foi bem-sucedida
    CREATED = 201, // A solicitação foi bem-sucedida e um novo recurso foi criado
    ACCEPTED = 202, // A solicitação foi recebida, mas ainda não foi processada
    NON_AUTHORITATIVE_INFORMATION = 203, // Informação de uma fonte não-autoritária
    NO_CONTENT = 204, // A solicitação foi bem-sucedida, mas sem conteúdo para retornar
    RESET_CONTENT = 205, // A solicitação foi bem-sucedida e o cliente deve reinicializar a visualização
    PARTIAL_CONTENT = 206, // Resposta com parte do conteúdo solicitado
    MULTI_STATUS = 207, // Multiplos status para diferentes operações (WebDAV)
    ALREADY_REPORTED = 208, // O recurso já foi mencionado no corpo da resposta (WebDAV)
    IM_USED = 226, // O recurso foi gerado por uma resposta Instância Manipulável

    // 3xx Redirection
    MULTIPLE_CHOICES = 300, // Há várias opções para o recurso solicitado
    MOVED_PERMANENTLY = 301, // O recurso foi movido permanentemente para uma nova URL
    FOUND = 302, // O recurso foi encontrado em uma URL temporária
    SEE_OTHER = 303, // O cliente deve usar uma outra URL para acessar o recurso
    NOT_MODIFIED = 304, // O recurso não foi modificado desde a última solicitação
    USE_PROXY = 305, // O recurso só pode ser acessado através de um proxy
    SWITCH_PROXY = 306, // Código obsoleto
    TEMPORARY_REDIRECT = 307, // O recurso está temporariamente disponível em uma outra URL
    PERMANENT_REDIRECT = 308, // O recurso foi movido permanentemente para uma nova URL (sem mudança de método)

    // 4xx Client errors
    BAD_REQUEST = 400, // A solicitação está malformada ou incorreta
    UNAUTHORIZED = 401, // Autenticação é necessária para acessar o recurso
    PAYMENT_REQUIRED = 402, // Código reservado para uso futuro (geralmente relacionado a pagamentos)
    FORBIDDEN = 403, // O servidor entendeu a solicitação, mas se recusa a autorizá-la
    NOT_FOUND = 404, // O recurso solicitado não foi encontrado
    METHOD_NOT_ALLOWED = 405, // O método HTTP usado não é permitido para o recurso solicitado
    NOT_ACCEPTABLE = 406, // O recurso não pode ser entregue no formato solicitado
    PROXY_AUTHENTICATION_REQUIRED = 407, // Autenticação no proxy é necessária
    REQUEST_TIMEOUT = 408, // O servidor expirou o tempo de espera para a solicitação
    CONFLICT = 409, // Conflito com o estado atual do recurso
    GONE = 410, // O recurso solicitado não está mais disponível e não retornará
    LENGTH_REQUIRED = 411, // O cabeçalho de Comprimento do Conteúdo é obrigatório
    PRECONDITION_FAILED = 412, // A precondição no cabeçalho da solicitação foi avaliada como falsa
    PAYLOAD_TOO_LARGE = 413, // O corpo da solicitação é maior do que o servidor permite
    URI_TOO_LONG = 414, // O URI da solicitação é muito longo para o servidor processar
    UNSUPPORTED_MEDIA_TYPE = 415, // O tipo de mídia não é suportado pelo servidor
    RANGE_NOT_SATISFIABLE = 416, // O cliente solicitou uma parte do arquivo que o servidor não pode fornecer
    EXPECTATION_FAILED = 417, // O servidor não pode atender aos requisitos do campo de cabeçalho Expect
    IM_A_TEAPOT = 418, // "Eu sou um bule de chá" (RFC 2324, usado em brincadeiras)
    MISDIRECTED_REQUEST = 421, // A solicitação foi direcionada para um servidor que não pode produzir uma resposta
    UNPROCESSABLE_ENTITY = 422, // A solicitação está bem-formada, mas não pode ser processada (WebDAV)
    LOCKED = 423, // O recurso está bloqueado (WebDAV)
    FAILED_DEPENDENCY = 424, // Falha na dependência de outra solicitação (WebDAV)
    TOO_EARLY = 425, // O servidor não está disposto a arriscar processar uma solicitação repetida
    UPGRADE_REQUIRED = 426, // O cliente deve trocar para um protocolo diferente
    PRECONDITION_REQUIRED = 428, // O servidor exige que a solicitação tenha condições prévias
    TOO_MANY_REQUESTS = 429, // O cliente enviou muitas solicitações em um curto período de tempo
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431, // Os campos de cabeçalho da solicitação são muito grandes
    UNAVAILABLE_FOR_LEGAL_REASONS = 451, // O recurso não está disponível por razões legais

    // 5xx Server errors
    INTERNAL_SERVER_ERROR = 500, // O servidor encontrou uma situação que não sabe lidar
    NOT_IMPLEMENTED = 501, // O servidor não tem a funcionalidade necessária para atender a solicitação
    BAD_GATEWAY = 502, // O servidor recebeu uma resposta inválida ao tentar cumprir a solicitação
    SERVICE_UNAVAILABLE = 503, // O servidor está temporariamente indisponível, geralmente devido a manutenção
    GATEWAY_TIMEOUT = 504, // O servidor, agindo como um gateway, não recebeu resposta a tempo
    HTTP_VERSION_NOT_SUPPORTED = 505, // O servidor não suporta a versão HTTP usada na solicitação
    VARIANT_ALSO_NEGOTIATES = 506, // Erro interno de negociação de conteúdo
    INSUFFICIENT_STORAGE = 507, // O servidor não pode armazenar a representação necessária para completar a solicitação (WebDAV)
    LOOP_DETECTED = 508, // O servidor detectou um loop infinito ao processar a solicitação (WebDAV)
    NOT_EXTENDED = 510, // A solicitação requer mais extensões para ser processada
    NETWORK_AUTHENTICATION_REQUIRED = 511 // Autenticação de rede é necessária
}
