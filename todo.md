# Tarefas — OG Image

- [x] Definir enquadramento social 1200 × 630 px usando a arte original do PSD.
- [x] Gerar e hospedar o asset OG Image em formato otimizado.
- [x] Integrar `og:image`, `twitter:image`, dimensões e texto alternativo no HTML.
- [x] Validar o build e salvar um checkpoint atualizado.

## Correção da OG Image no WhatsApp

- [x] Confirmar resposta pública da URL da OG Image sem bloqueio ou redirecionamento incompatível.
- [x] Ajustar os metadados para usar uma URL pública final e rastreável.
- [x] Validar o HTML publicado e orientar a atualização do cache da prévia.

## Atualização do favicon

- [x] Recortar o símbolo original e gerar favicon otimizado.
- [x] Integrar favicon e apple-touch-icon no HTML.
- [x] Validar os arquivos publicados e salvar checkpoint.

## Validação em modo escuro

- [x] Testar favicon e apple-touch-icon em dark mode.
- [x] Testar OG Image e metadados em dark mode no desktop e mobile.
- [x] Registrar resultado e corrigir se houver falha de contraste ou carregamento.

## Redirecionamento dos formulários para WhatsApp

- [x] Confirmar o número internacional e a mensagem pré-preenchida.
- [x] Ajustar os dois formulários para abrir o WhatsApp com os dados enviados.
- [x] Validar o fluxo em desktop e mobile e salvar checkpoint.

## Deploy na Cloudflare

- [x] Inspecionar a conta e as ferramentas Cloudflare disponíveis.
- [x] Preparar o build estático para publicação.
- [x] Publicar e validar a URL, HTML e assets no domínio Cloudflare.
- [x] Atualizar URLs absolutas de OG Image e canonical para o domínio Cloudflare.

## Atualização do título da hero

- [x] Confirmar o texto e a quebra editorial em três linhas.
- [x] Atualizar a arte principal mantendo tipografia e estrutura originais.
- [x] Validar desktop e mobile e publicar a revisão.

## Pacote portátil para o cliente

- [x] Remover a dependência de `/manus-storage/` da distribuição estática.
- [x] Incluir a arte principal, favicon e OG Image no pacote final.
- [x] Validar o pacote em servidor estático independente.
- [x] Gerar arquivo ZIP e instruções de publicação para o cliente.

## Integração de webhook dos formulários

- [ ] Verificar a compatibilidade CORS e o formato de requisição do endpoint.
- [ ] Enviar os dados dos dois formulários ao webhook antes de abrir o WhatsApp.
- [ ] Validar o fluxo sem registrar leads de teste no endpoint.

## ZIP do projeto-fonte completo

- [x] Montar o arquivo-fonte sem dependências reconstruíveis e caches locais.
- [x] Incluir instruções de instalação, build e publicação.
- [x] Validar o conteúdo do ZIP e entregar junto ao pacote estático.
