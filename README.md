# FonteRenda

Portal estatico preparado para crescer com trafego organico e receber anuncios no futuro.

## Estrutura atual

- `index.html`: home editorial do portal.
- `ferramenta.html`: ferramenta gratuita para gerar oferta, mensagem e plano.
- `artigos/`: paginas de conteudo para busca organica.
- `nichos/`: paginas focadas em segmentos especificos.
- `styles.css`: visual compartilhado do portal.
- `script.js`: logica da ferramenta.
- `favicon.svg`: favicon do projeto.
- `adsense-setup.md`: mapa exato dos slots de anuncio e snippet base.
- `ads.txt.example`: modelo de ads.txt para quando houver publisher ID.
- `fila-editorial-dentistas.md`: fila de publicacao do cluster principal.

## Como abrir localmente

1. Abra `index.html` no navegador.
2. Se quiser navegar como site real, rode `python -m http.server 8765 --bind 127.0.0.1`.
3. Acesse `http://127.0.0.1:8765`.

## Como usar a ferramenta

1. Entre em `ferramenta.html`.
2. Preencha marca, servico, publico, dor e objetivo.
3. Copie os blocos gerados para outreach, paginas ou CTAs.

## Espacos para anuncio

- A home e as paginas internas ja tem blocos visuais reservados para anuncios.
- Quando o site estiver pronto para monetizacao, troque esses blocos pelo snippet do AdSense.
- Antes disso, foque em publicar conteudo original e aumentar trafego.

## Proximos passos recomendados

1. Criar mais artigos e paginas de nicho usando a mesma estrutura.
2. Publicar em um dominio proprio.
3. Conectar Search Console e acompanhar paginas indexadas.
4. Solicitar AdSense quando o portal tiver conteudo e visitas consistentes.
