# Bosque dos Pinheiros — Código-fonte

Este pacote contém o projeto React/Vite completo da landing page. Ele foi preparado para edição e reconstrução; as dependências não acompanham o ZIP porque podem ser instaladas novamente a partir de `package.json` e `pnpm-lock.yaml`.

## Requisitos

- Node.js 22 ou superior.
- pnpm 10 ou superior.

## Instalação e desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build de produção

```bash
pnpm build
```

O resultado de publicação será criado em `dist/public`. Para o servidor do cliente, use preferencialmente o ZIP estático separado, pois ele já contém a arte principal, favicon e OG Image como arquivos locais.

## Estrutura relevante

| Caminho | Finalidade |
|---|---|
| `client/src/pages/Home.tsx` | Landing page, formulários e integração do webhook |
| `client/src/index.css` | Estilos responsivos e hotspots sobre a arte |
| `client/public/` | Ícones e OG Image base |
| `server/` | Servidor mínimo de compatibilidade para o build |
| `package.json` | Scripts e dependências do projeto |

## Formulários e webhook

Os dois formulários enviam os campos `name`, `email` e `phone` ao webhook configurado e, em seguida, abrem o WhatsApp **(12) 99626-8245**. O endpoint atual aceita o domínio Cloudflare publicado. Se o projeto for hospedado em outro domínio, adicione essa origem às regras CORS do webhook para permitir a confirmação de envio no navegador.

## Arte principal

O código-fonte usa a cópia publicada na Cloudflare como fallback. O pacote estático separado (`entrega-cliente-bosque-dos-pinheiros.zip`) possui a imagem local e é o arquivo indicado para a publicação convencional em servidor.
