# Validação de favicon e OG Image em modo escuro

Data da verificação: 2026-08-14.

A landing page publicada mantém a composição visual terracota e verde-musgo sem regras `prefers-color-scheme` que invertam ou ocultem a arte. O favicon usa fundo terracota com símbolo creme de alto contraste, portanto permanece legível sobre abas e barras escuras. A OG Image é um JPEG fixo de 1200 × 630 px e não depende do tema do dispositivo, logo a prévia social permanece a mesma no modo claro e escuro.

Na sessão de navegador publicada, os assets retornaram `200` com os tipos esperados: `favicon.png`, `favicon-32.png`, `favicon-16.png` e `apple-touch-icon.png` como `image/png`; `og-bosque-dos-pinheiros.jpg?v=2` como `image/jpeg`. Os metadados `og:image`, `og:image:secure_url` e `twitter:image` apontaram para a mesma URL pública.

Conclusão: **favicon e OG Image funcionando corretamente em modo escuro**, sem correção de código necessária. A única limitação é o cache de previews de mensageiros, que pode exigir compartilhar novamente a URL com `?og=2` caso uma prévia antiga continue armazenada.
