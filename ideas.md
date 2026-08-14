# Bosque dos Pinheiros — Especificação de reprodução

## Referência de verdade

O arquivo `[BOSQUEDOSPINHEIROS]LP-1.psd` é a fonte visual autoritativa. A implementação deve reproduzir sua composição consolidada de **1400 × 6235 px**, mantendo a ordem das seções, as imagens fotográficas, os recortes, as áreas de cor, a tipografia editorial, os ícones e os textos visíveis. Nenhum asset gerado ou banco de imagens deve substituir os elementos presentes no PSD.

## Direção escolhida

### Design Movement

Editorial imobiliário brasileiro com influência de **luxury real estate brochure** e direção de arte naturalista: fotografia de família, texturas orgânicas e contraste entre terracota queimado, verde-musgo e creme.

### Core Principles

1. **Fidelidade antes de reinvenção:** proporções, ordem, recortes e ritmo vertical seguem o PSD.
2. **Natureza como matéria visual:** imagens de floresta, luz natural e texturas de papel/plaster permanecem protagonistas.
3. **Editorial com conversão discreta:** textos e CTAs mantêm a hierarquia impressa, enquanto os formulários ganham semântica e acessibilidade.
4. **Responsividade sem descaracterização:** em telas menores, a composição preserva a leitura e o foco visual, evitando cortes inesperados.

### Color Philosophy

O terracota profundo funciona como assinatura acolhedora e remete à terra; o verde-musgo ancora a promessa de tranquilidade; o creme sustenta a leitura e a sensação de material impresso. A paleta deve permanecer opaca, quente e natural, sem gradientes digitais ou cores artificiais.

### Layout Paradigm

Uma página vertical contínua, organizada como um **folder editorial de rolagem**. O fluxo alterna blocos assimétricos de fotografia e texto, com o primeiro e o sexto blocos usando formulários como pontos de conversão. A largura-base de 1400 px do PSD deve ser preservada em desktop e adaptada proporcionalmente em mobile.

### Signature Elements

1. Textura de papel/plaster sobre fundos terracota e verde-musgo.
2. Tipografia manuscrita/serifada em frases de respiro, como “pilares” e “Imagine mais tranquilidade”.
3. Separadores finos, ícones lineares e botões creme com cantos discretamente arredondados.

### Interaction Philosophy

As interações devem parecer extensões do material impresso: transições curtas, sobrias e úteis. Formulários exibem foco visível, mensagens de validação claras e CTA acessível; setas da seção fotográfica alternam imagens sem alterar a composição geral.

### Animation

Animações limitadas a opacidade e pequenos deslocamentos verticais, com duração entre 180 e 260 ms. O formulário pode confirmar envio com uma mudança de estado suave. A preferência `prefers-reduced-motion` deve desativar efeitos não essenciais.

### Typography System

A composição do PSD deve ser preservada por meio dos próprios textos rasterizados na arte consolidada. Textos funcionais sobrepostos usam uma serifada editorial próxima à referência para headings e uma sans-serif neutra para campos e mensagens, sempre subordinadas visualmente à arte original.

### Brand Essence

Um loteamento planejado para famílias que querem trocar pressa por natureza, proximidade e qualidade de vida — **acolhedor, contemplativo, confiável**.

### Brand Voice

Headlines soam calmas, sensoriais e afirmativas; CTAs são diretos, mas não agressivos; microcopy reduz fricção e reforça proximidade.

> “Respirar também é viver melhor.”

> “Antecipe-se e descubra um novo capítulo em Guaratinguetá.”

### Wordmark & Logo

O wordmark deve utilizar o logotipo já presente no PSD, sem substituição tipográfica. Caso seja necessário um favicon, ele deve ser derivado do símbolo da árvore/folhagem do próprio logo, preservando sua silhueta e cores.

### Signature Brand Color

**Terracota Bosque — `#7b2918`**, usado como campo dominante da página, com verde-musgo profundo `#263116` como cor de apoio.

## Inventário visual observado

| Bloco | Faixa aproximada | Conteúdo principal |
|---|---:|---|
| 1 | 0–1098 | Hero com família, logo, texto e formulário; selo de lotes |
| 2 | 1095–1805 | Fotografia mãe/criança e manifesto “Respirar também é viver melhor” |
| 3 | 1802–2890 | Quatro diferenciais com ícones e título manuscrito “pilares” |
| 4 | 2887–3739 | “Perto de tudo” com texto, lista de distâncias e fotografia familiar |
| 5 | 3735–4863 | Faixa editorial “Imagine mais tranquilidade” e carrossel fotográfico |
| 6 | 4853–5461 | Fundo de paisagem, texto sobre Guaratinguetá e formulário |
| 7 | 5436–5973 | “Um bairro pensado para evoluir com você” e texto institucional |
| Rodapé | 5964–6240 | Logos, jurídico, WhatsApp e Instagram |

## Decisões técnicas

O caminho prioritário é usar a composição rasterizada do PSD como arte de fundo principal para atingir fidelidade pixel a pixel, com uma camada HTML semântica e transparente sobre os pontos interativos. Os formulários, navegação por âncoras, acessibilidade e responsividade serão implementados fora da arte. A imagem original será hospedada como asset persistente fora do diretório do projeto, conforme as regras de publicação.
