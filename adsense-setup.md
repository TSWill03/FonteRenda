# AdSense Setup

Guia rapido para trocar os placeholders pelo snippet real quando o portal estiver pronto.

## 1. Script global

Adicione este script dentro do `<head>` de cada pagina HTML, logo depois do CSS:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

Substitua `ca-pub-XXXXXXXXXXXXXXXX` pelo seu publisher ID.

## 2. Snippet base para cada bloco

Troque cada `<section class="ad-slot" ...>` por:

```html
<ins
  class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  data-ad-slot="1234567890"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## 3. Mapa dos slots

- `index.html`
  `ad-home-top`
  `ad-home-inline-1`
- `ferramenta.html`
  `ad-tool-top`
  `ad-tool-inline-1`
- `artigos/como-conseguir-clientes-no-whatsapp.html`
  `ad-whatsapp-inline-1`
  `ad-whatsapp-sidebar-1`
- `artigos/oferta-simples-para-negocios-locais.html`
  `ad-oferta-inline-1`
  `ad-oferta-sidebar-1`
- `nichos/dentistas.html`
  `ad-dentistas-hub-top`
  `ad-dentistas-hub-inline-1`
- `nichos/restaurantes.html`
  `ad-restaurantes-inline-1`
  `ad-restaurantes-sidebar-1`
- `artigos/dentistas/como-receber-mais-avaliacoes-no-whatsapp.html`
  `ad-dentistas-avaliacoes-inline-1`
  `ad-dentistas-avaliacoes-sidebar-1`
- `artigos/dentistas/landing-page-para-clinica-odontologica.html`
  `ad-dentistas-landing-inline-1`
  `ad-dentistas-landing-sidebar-1`
- `artigos/dentistas/mensagem-para-atrair-pacientes.html`
  `ad-dentistas-mensagem-inline-1`
  `ad-dentistas-mensagem-sidebar-1`
- `artigos/dentistas/agenda-vazia-na-clinica-odontologica.html`
  `ad-dentistas-agenda-inline-1`
  `ad-dentistas-agenda-sidebar-1`
- `artigos/dentistas/confirmacao-de-consulta-no-whatsapp.html`
  `ad-dentistas-confirmacao-inline-1`
  `ad-dentistas-confirmacao-sidebar-1`
- `artigos/dentistas/oferta-para-implante-dentario.html`
  `ad-dentistas-implante-inline-1`
  `ad-dentistas-implante-sidebar-1`
- `artigos/dentistas/oferta-para-ortodontia.html`
  `ad-dentistas-ortodontia-inline-1`
  `ad-dentistas-ortodontia-sidebar-1`
- `artigos/dentistas/checklist-de-conversao-para-clinica.html`
  `ad-dentistas-checklist-inline-1`
  `ad-dentistas-checklist-sidebar-1`
- `artigos/dentistas/como-divulgar-clinica-odontologica-no-google.html`
  `ad-dentistas-google-inline-1`
  `ad-dentistas-google-sidebar-1`

## 4. Ordem recomendada

1. Inserir o script global.
2. Comecar pelos slots de topo e inline da home e do hub de dentistas.
3. Depois ligar os slots inline das paginas com melhor trafego.
4. Por ultimo, ativar os slots laterais.

## 5. ads.txt

Quando tiver seu publisher ID, copie `ads.txt.example` para `ads.txt` e troque o ID placeholder.
