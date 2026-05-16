# SITE DNA — LUAN BATERIAS

**Nicho:** Varejo automotivo de baterias — loja física com entrega e instalação em domicílio na região de Santa Cruz, Rio de Janeiro. Sub-nicho: comércio local de peças automotivas com forte componente de serviço (delivery técnico).
**Posicionamento:** Dark mode absoluto com energia amarela como fio condutor visual. O site transmite urgência resolvida — "seu carro parou, nós chegamos". A estética é de oficina premium: preto fosco, tipografia condensada bold, movimento constante (tickers, marquees, vídeo de fundo) e zero espaço vazio sem função. A sensação é de confiança técnica com agilidade de startup.
**Stack Técnica:** HTML5 sem framework | CSS3 custom puro (zero Tailwind/Bootstrap) | Google Fonts: Barlow Condensed (400, 700, 900) + Montserrat (400, 500, 700) | Schema.org @graph unificado (AutoRepair + WebSite + WebPage + FAQPage) | Google Tag Manager | Cookie Banner Universal AG5 v2.1.0
**Data de criação:** 2025-01-01 (datePublished no Schema) / Última modificação: 2026-03-31

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

| Token CSS | Valor Exato | Onde é usado especificamente |
|---|---|---|
| `--bg-primary` | `#0A0A0A` | Fundo do body, hero overlay base, drawer mobile, cards de bateria |
| `--bg-secondary` | `#111111` | Seções alternadas (#impacto, #depoimentos, #localizacao), fundo de ícones, counter-item, contact-form |
| `--accent` | `#FFCC00` | Amarelo energia — títulos .text-accent, bordas, botões primários, ícones, números de serviço, estrelas, ticker-bar, bolinhas do footer |
| `--accent-hover` | `#E8A800` | Hover de .btn-primary, sombras sutis |
| `--text-primary` | `#FFFFFF` | Texto principal, headings, links |
| `--text-secondary` | `#888888` | Parágrafos .text-muted, descrições, labels secundários |
| `--border` | `#2A2A2A` | Bordas de cards, divisórias, footer, inputs em repouso |
| `--font-display` | `'Barlow Condensed', sans-serif` | Todos os h1-h3, .logo, .btn, .section-title, .service-num, .counter-value, .author, ticker, nav-links |
| `--font-body` | `'Inter', sans-serif` | Parágrafos, descrições, formulário — NOTA: no HTML carrega Montserrat, no CSS declara Inter (divergência real) |
| `--container-width` | `1200px` | Max-width do .container |
| `--transition` | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` | Transição global padrão para hover, focus, transform |

> **Curva de easing global:** `cubic-bezier(0.16, 1, 0.3, 1)` — usada em `--transition`, animações de drawer, reveals, e todos os hover states. É um ease-out expo suavizado.

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|---|---|---|---|---|---|---|---|
| `.hero-title` | Barlow Condensed | 900 | `clamp(3.5rem, 9vw, 10vw)` | 0.9 | normal | uppercase | `#FFFFFF` |
| `.hero-subtitle` | Inter (Montserrat no load) | 400 | `clamp(1.1rem, 2vw, 1.4rem)` | 1.6 | normal | none | `#FFFFFF` |
| `.section-title` | Barlow Condensed | 900 | `clamp(2rem, 5vw, 4rem)` | 1 | normal | uppercase | `#FFFFFF` |
| `.btn` | Barlow Condensed | 700 | 1.1rem | normal | normal | uppercase | varia |
| `.btn` (hero) | Barlow Condensed | 700 | 1.2rem | normal | normal | uppercase | varia |
| `.nav-links a` | Barlow Condensed | 700 | inherit | normal | normal | uppercase | inherit |
| `.ticker-bar` | Barlow Condensed | 900 | 1.2rem | normal | normal | uppercase | `#0A0A0A` |
| `.service-num` | Barlow Condensed | 900 | 5rem (3rem mobile) | 1 | normal | uppercase | `#FFCC00` (opacity 0.15) |
| `.service-content h3` | Barlow Condensed | 900 | 2rem | normal | normal | uppercase | `#FFFFFF` |
| `.service-desc` | Inter | 400 | 1.1rem | normal | normal | none | `#888888` |
| `.counter-value` | Barlow Condensed | 900 | 4rem | 1 | normal | uppercase | `#FFCC00` |
| `.counter-label` | Inter | 700 | 0.9rem | normal | normal | uppercase | `#888888` |
| `.battery-name` | Barlow Condensed | 700 | 0.9rem | normal | 2px | uppercase | `#888888` |
| `.author` | Barlow Condensed | 700 | inherit | normal | normal | uppercase | `#FFCC00` |
| `.rating` | Barlow Condensed | 900 | 1.1rem | 1.2 | normal | none | `#FFCC00` |
| `.reviews-count` | Inter | 400 | 0.75rem | 1.2 | 1px | uppercase | `#888888` |
| `.mention-handle` | Barlow Condensed | 700 | 1.8rem | normal | normal | none | `#FFCC00` |
| `.mention-label` | Inter | 600 | 0.9rem | normal | normal | uppercase | `#888888` |
| `.faq-item summary` | Inter | 700 | inherit | normal | normal | none | `#FFFFFF` |
| `.faq-item p` | Inter | 400 | inherit | normal | normal | none | `#888888` |
| `.form-group label` | Inter | 700 | 0.85rem | normal | 1px | uppercase | `#888888` |
| `.form-group input/textarea/select` | Inter | 400 | 1rem | normal | normal | none | `#FFFFFF` |
| `.footer-col h4` | Barlow Condensed | 700 | 1.1rem | normal | 1px | uppercase | `#FFFFFF` |
| `.footer-col ul li a` | Inter | 400 | 0.95rem | normal | normal | none | `#888888` |
| `.footer-copyright p` | Inter | 400 | 0.8rem | normal | normal | none | `#FFFFFF` (opacity 0.5) |
| `.footer-legal-link` | Inter | 400 | 0.75rem | normal | normal | none | `#888888` (opacity 0.5) |
| `.drawer-nav ul li a` | Barlow Condensed | 700 | 1.8rem | normal | normal | uppercase | `#FFFFFF` (opacity 0.7) |
| `.drawer-footer p` | Inter | 400 | 0.8rem | normal | 2px | uppercase | `#888888` |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor `rgba()` | Uso Específico | Contexto |
|---|---|---|
| `rgba(10, 10, 10, 0.95)` | `.navbar.scrolled` backdrop | Navbar fixa ao scrollar |
| `rgba(10, 10, 10, 0.98)` | `.navbar.scrolled` mobile | Versão mobile mais opaca |
| `rgba(10, 10, 10, 0.92)` | Hero overlay stop a 55% | Gradiente do vídeo |
| `rgba(10, 10, 10, 0.75)` | Hero overlay stop a 75% | Gradiente do vídeo |
| `rgba(10, 10, 10, 0.3)` | Hero overlay stop a 90% | Gradiente do vídeo |
| `rgba(0, 0, 0, 0.4)` | `.sound-toggle` background | Botão de som no hero |
| `rgba(255, 255, 255, 0.2)` | `.sound-toggle` border | Borda sutil do botão |
| `rgba(255, 255, 255, 0.1)` | `.sound-toggle:hover` background | Hover do botão |
| `rgba(255, 204, 0, 0.05)` | Fill do SVG do raio decorativo | `.hero-bolt-decor svg path` |
| `rgba(255, 204, 0, 0.1)` | `.battery-card::before` radial gradient | Efeito de brilho no hover |
| `rgba(255, 204, 0, 0.1)` | `.footer-decoration` gradient | Linha dourada no topo do footer |
| `rgba(255, 204, 0, 0.12)` | `cookie-banner.css` border-top | Borda do banner de cookies |
| `rgba(255, 204, 0, 0.28)` | `cookie-banner.css` toast border | Borda do toast |
| `rgba(255, 204, 0, 0.3)` | `.footer-contact-icon` background | Ícone de contato no footer |
| `rgba(255, 204, 0, 0.4)` | `.footer-decoration` center stop | Linha dourada do footer |
| `rgba(255, 255, 255, 0.05)` | `.google-badge` background | Badge do Google Reviews |
| `rgba(255, 255, 255, 0.05)` | `.drawer-header` border-bottom | Separador do drawer |
| `rgba(255, 255, 255, 0.05)` | `.drawer-footer` border-top | Separador do drawer |
| `rgba(255, 255, 255, 0.08)` | `.ck-modal__close` background | Botão fechar do modal cookie |
| `rgba(255, 255, 255, 0.1)` | `.social-icon` border | Borda dos ícones sociais |
| `rgba(255, 255, 255, 0.1)` | Footer `border-top` | Borda superior do footer |
| `rgba(255, 255, 255, 0.12)` | `cookie-banner.css` border | Borda do banner de cookies |
| `rgba(255, 255, 255, 0.2)` | `::placeholder` color | Placeholders do formulário |
| `rgba(0, 0, 0, 0.22)` | `cookie-banner.css` box-shadow | Sombra do banner |
| `rgba(0, 0, 0, 0.25)` | `cookie-banner.css` toast shadow | Sombra do toast |
| `rgba(0, 0, 0, 0.3)` | `.contact-form` box-shadow | Sombra do formulário |
| `rgba(0, 0, 0, 0.55)` | `.ck-modal__overlay` | Overlay do modal cookie |
| `rgba(255, 204, 0, 0.02)` | Input focus background | Fundo sutil no focus |

### 1.4 Estilo Geral

O site adota uma arquitetura visual de **dark mode absoluto e irreversível** — não há toggle de tema, o preto é a filosofia, não uma opção. O espaçamento é generoso e vertical: 100px de padding em seções desktop, reduzindo para 60px no mobile. A lógica visual é de **contraste máximo com economia de cor**: quase tudo é preto/cinza/branco, e o amarelo `#FFCC00` aparece apenas como acento energético em momentos de conversão (CTAs, números, destaques). O container base é `.container { width: 90%; max-width: 1200px; margin: 0 auto; }`, garantindo margens fluidas. Não há sombras em cards exceto no formulário de contato (`0 20px 40px rgba(0,0,0,0.3)`), mantendo a estética plana e industrial. O vídeo de hero com gradiente ultra-extenso (7 stops de opacidade) é o elemento mais sofisticado do layout, criando uma transição suave da escuridão total à imagem em movimento.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

---

### SEÇÃO 1 — NAVBAR

**Estrutura:**
```
<nav id="navbar" class="navbar"> → position: fixed; top: 0; width: 100%; z-index: 1000; padding: 20px 0; background: transparent;
  <div class="container nav-container"> → display: flex; justify-content: space-between; align-items: center;
    <a href="#" class="logo"> → display: flex; align-items: center; opacity: 1;
      <img src="assests/logo-luan-baterias..." class="logo-img" width="164" height="79"> → height: 79px; width: auto; object-fit: contain;
    <ul class="nav-links"> → display: flex; align-items: center; gap: 30px;
      <li><a href="#hero">Início</a></li>
      ...
      <li><a href="#contato" class="btn btn-outline">Fale Conosco</a></li>
    <button class="mobile-menu-btn" aria-label="Abri Menu Lateral"> → display: none (desktop); flex-direction: column; gap: 6px;
      <span></span> × 3 → width: 30px; height: 2px; background: var(--text-primary);
```

**Fundo:**
- Layer 0 — base: `background: transparent` (estado inicial)
- Layer 1 — overlay (scroll): `.navbar.scrolled` → `background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); padding: 15px 0;`
- Layer 2 — conteúdo: z-index: 1000

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Logo | `.logo-img` | left | 164×79 nativo | `height: 79px; width: auto; object-fit: contain` |
| Hamburger | `.mobile-menu-btn span` | right | 30×2 cada | `background: var(--text-primary); transition: var(--transition)` |
| Nav CTA | `.nav-links .btn-outline` | right | padding 15×35 | `border: 2px solid var(--text-primary); color: var(--text-primary)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Nenhuma animação própria — transição de background/padding via `.navbar.scrolled` | transparent, 20px padding | rgba(10,10,10,0.95), 15px padding | 0.3s | cubic-bezier(0.16, 1, 0.3, 1) | scrollY > 50 via JS | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.nav-links a` | :hover | — | — | — | `color: var(--accent)` | 0.3s var(--transition) |
| `.mobile-menu-btn span` | :hover | — | — | — | background muda | 0.3s var(--transition) |

**Diferenciador Visual:**
A navbar não possui fundo no topo da página — ela "flutua" sobre o vídeo do hero, só materializando-se após 50px de scroll com blur de 10px. Isso cria uma sensação de imersão cinematográfica que uma navbar sólida desde o início destruiria.

---

### SEÇÃO 2 — HERO

**Estrutura:**
```
<header id="hero" class="hero"> → position: relative; height: 100vh; display: flex; align-items: center; overflow: hidden;
  <div class="hero-bg"> → position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
    <video autoplay muted loop playsinline class="hero-video"> → width: 100%; height: 100%; object-fit: cover; object-position: 100% center;
    <div class="hero-overlay"></div> → gradiente de 7 stops (ver abaixo)
  <button id="sound-toggle" class="sound-toggle"> → position: absolute; bottom: 30px; left: 5%; z-index: 100;
  <div class="container hero-content"> → position: relative; z-index: 2;
    <h1 class="hero-title animate-on-load">ENERGIA QUE <br><span class="text-accent">LIGA SEU CARRO.</span></h1>
    <h2 class="hero-subtitle animate-on-load">...</h2>
    <div class="hero-ctas animate-on-load">
      <a href="https://wa.me/..." class="btn btn-primary">CHAMAR NO WHATSAPP AGORA</a>
      <a href="#servicos" class="btn btn-outline">Ver Serviços</a>
    </div>
  <div class="hero-bolt-decor"> → position: absolute; right: 5%; top: 50%; width: 30vw; height: 60vh; z-index: 1;
    <svg viewBox="0 0 100 100" preserveAspectRatio="none"> → fill="rgba(255, 204, 0, 0.05)"
```

**Fundo:**
- Layer 0 — base: `<video>` MP4 autoplay muted loop playsinline, `object-position: 100% center` (desktop) / `center` (mobile)
- Layer 1 — overlay `.hero-overlay`: `linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 15%, rgba(10,10,10,0.98) 35%, rgba(10,10,10,0.92) 55%, rgba(10,10,10,0.75) 75%, rgba(10,10,10,0.3) 90%, transparent 100%)`
- Layer 2 — decorativo: `.hero-bolt-decor` SVG raio amarelo com `animation: boltPulse 2s ease-in-out infinite`
- Layer 3 — conteúdo: `.hero-content` z-index: 2

**Mobile overlay override:** `background: radial-gradient(circle, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.95) 100%)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Vídeo | `.hero-video` | absolute, fullscreen | 100%×100% | `object-fit: cover; object-position: 100% center` |
| Overlay | `.hero-overlay` | absolute, fullscreen | 100%×100% | linear-gradient 7 stops |
| Sound Toggle | `.sound-toggle` | absolute, bottom: 30px, left: 5% | 45×45px | `border-radius: 50%; backdrop-filter: blur(5px)` |
| Raio decorativo | `.hero-bolt-decor` | absolute, right: 5%, top: 50% | 30vw×60vh | `pointer-events: none; z-index: 1` |
| Título | `.hero-title` | relative | clamp(3.5rem, 9vw, 10vw) | `line-height: 0.9; opacity: 0; transform: translateY(10px)` |
| Subtítulo | `.hero-subtitle` | relative | max-width: 700px | `opacity: 0; transform: translateY(10px)` |
| CTAs | `.hero-ctas` | relative | flex-wrap | `opacity: 0; transform: translateY(20px)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `boltPulse` | `translateY(-50%) scale(1); opacity: 0.05` | `translateY(-50%) scale(1.08); opacity: 0.1` (50%) | 2s | ease-in-out | infinite (page load) | — |
| `.animate-on-load.active` | `opacity: 0; translateY(10px)` (título/sub) / `translateY(20px)` (CTAs) | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | DOMContentLoaded + JS stagger | 200ms, 350ms, 500ms |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.sound-toggle` | :hover | — | — | `border-color: var(--accent)` | `color: var(--accent); background: rgba(255,255,255,0.1)` | 0.3s var(--transition) |
| `.btn-primary` | :hover | `translateY(-3px)` | — | — | `background: var(--accent-hover)` | 0.3s var(--transition) |
| `.btn-outline` | :hover | — | — | — | `background: var(--text-primary); color: var(--bg-primary)` | 0.3s var(--transition) |

**Diferenciador Visual:**
O gradiente do hero possui **7 stops** em transição horizontal — não é um simples fade-to-black, é uma curva de opacidade calculada que permite o vídeo aparecer suavemente apenas na borda direita, enquanto o texto respira em território 100% escuro à esquerda. No mobile, o gradiente inverte para radial, centrando a atenção. O SVG de raio amarelo com opacidade 0.05 é um watermark animado que pulsa sutilmente — quase invisível, mas presente.

---

### SEÇÃO 3 — TICKER BAR

**Estrutura:**
```
<section class="ticker-bar"> → background: var(--accent); color: var(--bg-primary); padding: 15px 0; overflow: hidden; white-space: nowrap;
  <div class="ticker-track"> → display: flex !important; flex-direction: row !important; width: max-content !important; animation: animTicker 30s linear infinite;
    <span>LUAN BATERIAS • SANTA CRUZ • ENTREGA RÁPIDA • TESTE GRÁTIS • PARCEIRA MOURA • HELIAR • DESDE 2009 • </span> × 6 (duplicados para loop)
```

**Fundo:**
- Layer 0 — base: `background: var(--accent)` (#FFCC00)
- Layer 1 — conteúdo: texto preto em movimento contínuo

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Track | `.ticker-track` | flex | max-content | `animation: animTicker 30s linear infinite` |
| Span | `.ticker-track span` | inline-flex | flex-shrink: 0 | `padding-right: 50px` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `animTicker` | `translateX(0)` | `translateX(-50%)` | 30s | linear | infinite (page load) | — |

**Micro-interações:**
Nenhuma — ticker puro CSS, sem interação.

**Diferenciador Visual:**
O ticker usa **6 repetições idênticas** do texto para garantir loop infinito sem quebra visual. A direção é invertida em relação aos outros carrosséis (ticker vai para esquerda, marcas e depoimentos também, mas com durações diferentes: 30s, 40s, 35s). A altura mínima de 58px evita CLS.

---

### SEÇÃO 4 — IMPACTO (SEU CARRO PAROU?)

**Estrutura:**
```
<section id="impacto" class="section bg-secondary"> → padding: 100px 0; background: #111111;
  <div class="container split-layout"> → display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
    <div class="impact-text reveal"> → opacity: 0; transform: translateY(30px);
      <h2 class="section-title">SEU CARRO PAROU? <br><span class="text-accent">NÃO SE DESESPERE.</span></h2>
      <p class="text-muted">...</p>
      <div class="impact-solution"> → display: flex; flex-direction: column; gap: 30px; margin-top: 40px;
        <div class="solution-item"> → display: flex; gap: 20px;
          <span class="solution-icon"> → min-width: 60px; height: 60px; background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--accent);
          <div><h3>Diagnóstico Transparente</h3><p>...</p></div>
    <div class="impact-image reveal">
      <img src="assests/carro_parado_problema_bateria.png" width="600" height="450" loading="lazy">
```

**Fundo:**
- Layer 0 — base: `background-color: var(--bg-secondary)` (#111111)
- Layer 1 — conteúdo: grid de duas colunas

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Ícone solução | `.solution-icon` | left do flex | 60×60px | `min-width: 60px; border: 1px solid var(--accent)` |
| Imagem | `.impact-image img` | right | 100%×450px | `object-fit: cover; border-left: 5px solid var(--accent)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver threshold 0.2 | — |

**Micro-interações:**
Nenhuma específica nesta seção.

**Diferenciador Visual:**
A imagem possui uma **borda esquerda de 5px sólida amarela** — é o único elemento de imagem no site que recebe tratamento de borda, funcionando como uma "citação visual" que conecta o problema (carro parado) à solução (a marca).

---

### SEÇÃO 5 — MARCAS (CARROSSEL INFINITO)

**Estrutura:**
```
<section id="marcas-carousel" class="section bg-primary overflow-hidden"> → padding: 100px 0; background: #0A0A0A;
  <h2 class="section-title reveal" style="text-align: center; margin-bottom: 60px;">AS MELHORES <span class="text-accent">MARCAS</span></h2>
  <div class="carousel-track-wrapper reveal"> → position: relative; padding: 20px 0; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    <div class="carousel-track"> → display: flex !important; gap: 30px !important; animation: animBrands 40s linear infinite; width: max-content !important;
      <div class="battery-card"> → background: var(--bg-secondary); padding: 40px; border: 1px solid var(--border); min-width: 320px; height: 240px;
        <img src="..." width="200" height="200" loading="lazy"> → max-width: 180px; height: auto;
        <span class="battery-name">Moura</span>
      </div> × 8 (4 originais + 4 duplicados para loop)
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-primary)` (#0A0A0A)
- Layer 1 — mask: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` — fade nas bordas
- Layer 2 — conteúdo: track em movimento

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Wrapper | `.carousel-track-wrapper` | relative | 100% | `mask-image: linear-gradient(...)` |
| Track | `.carousel-track` | flex row | max-content | `animation: animBrands 40s linear infinite` |
| Card | `.battery-card` | flex column | 320px min-width × 240px | `border: 1px solid var(--border); position: relative` |
| Glow | `.battery-card::before` | absolute, centered | 200%×200% | `radial-gradient(circle, rgba(255,204,0,0.05) 0%, transparent 70%)` |
| Imagem | `.battery-card img` | centered | max-width: 180px | `z-index: 2; transition: transform 0.5s cubic-bezier(...)` |
| Nome | `.battery-name` | bottom | margin-top: 20px | `letter-spacing: 2px; z-index: 2` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `animBrands` | `translateX(0)` | `translateX(-50%)` | 40s | linear | infinite (page load) | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.battery-card` | :hover | — | — | — | `::before` opacity 0→1 | 0.3s var(--transition) |
| `.battery-card img` | :hover | `scale(1.1) rotate(2deg)` | — | — | — | 0.5s cubic-bezier(0.16, 1, 0.3, 1) |
| `.battery-name` | :hover | — | — | — | `color: var(--accent)` | 0.3s var(--transition) |

**Diferenciador Visual:**
O **mask-image** com fade de 10% nas bordas cria uma transição suave onde os cards "aparecem" e "desaparecem" gradualmente, em vez de entrarem/saírem abruptamente. O efeito de brilho radial no hover (`::before` com radial-gradient) é um halo dourado sutil que só se manifesta na interação.

---

### SEÇÃO 6 — SERVIÇOS

**Estrutura:**
```
<section id="servicos" class="section"> → padding: 100px 0;
  <div class="container">
    <h2 class="section-title reveal">NOSSOS <span class="text-accent">SERVIÇOS</span></h2>
    <div class="services-list"> → margin-top: 60px;
      <div class="service-item reveal" data-delay="0"> → display: flex; align-items: flex-start; gap: 40px; padding: 40px 0; border-bottom: 1px solid var(--border); cursor: pointer;
        <span class="service-num">01</span> → font-size: 5rem; color: var(--accent); opacity: 0.15; min-width: 100px;
        <div class="service-content">
          <h3>Troca de Bateria</h3>
          <p class="service-desc">...</p>
          <div class="service-details"> → max-height: 0; overflow: hidden; transition: 0.5s ease;
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-primary)` (#0A0A0A, herdado do body)
- Layer 1 — conteúdo: lista vertical com divisórias

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Número | `.service-num` | left do flex | min-width: 100px | `font-size: 5rem; opacity: 0.15; transition: var(--transition)` |
| Detalhes | `.service-details` | abaixo do título | 0→100px max-height | `overflow: hidden; transition: 0.5s ease` |
| Item | `.service-item` | full width | padding: 40px 0 | `border-bottom: 1px solid var(--border); cursor: pointer` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | data-delay: 0, 120, 240, 360, 480, 600, 720, 840ms |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.service-item` | :hover | — | — | — | `padding-left: 20px` | 0.3s var(--transition) |
| `.service-num` | :hover | `translateX(10px)` | — | — | `opacity: 0.15 → 0.8` | 0.3s var(--transition) |
| `.service-content h3` | :hover | — | — | — | `color: var(--accent)` | 0.3s var(--transition) |
| `.service-details` | :hover | — | — | — | `max-height: 0 → 100px; margin-top: 0 → 15px` | 0.5s ease |

**Diferenciador Visual:**
O accordion hover é puro CSS — não usa JS. A propriedade `max-height: 0 → 100px` com `overflow: hidden` cria uma revelação suave de detalhes ao passar o mouse. O número gigante (5rem) com opacidade 0.15 funciona como um **watermark tipográfico funcional**: invisível em repouso, energizado no hover.

---

### SEÇÃO 7 — GALERIA (GRID)

**Estrutura:**
```
<section class="section-encantamento bg-secondary"> → background: #111111;
  <div class="grid-gallery"> → display: grid; grid-template-columns: repeat(4, 1fr); height: 400px;
    <div class="gallery-item reveal"> → overflow: hidden;
      <img src="..." width="400" height="400" loading="lazy"> → width: 100%; height: 100%; aspect-ratio: 1/1; object-fit: cover; transition: 0.6s ease;
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-secondary)` (#111111)
- Layer 1 — conteúdo: grid de 4 colunas, altura fixa 400px

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.grid-gallery` | relative | 100%×400px | `grid-template-columns: repeat(4, 1fr)` |
| Item | `.gallery-item` | relative | 1fr×400px | `overflow: hidden` |
| Imagem | `.gallery-item img` | fill | 100%×100% | `aspect-ratio: 1/1; object-fit: cover; transition: 0.6s ease` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.gallery-item img` | :hover | `scale(1.1)` | — | — | — | 0.6s ease |

**Diferenciador Visual:**
Grid de altura fixa (400px) com imagens em aspect-ratio 1:1 — no mobile (max-width: 992px) vira 2 colunas com altura auto. O zoom de 1.1 no hover é contido pelo `overflow: hidden` do pai, criando um efeito de "janela" sem expandir o layout.

---

### SEÇÃO 8 — SOBRE + CONTADORES

**Estrutura:**
```
<section id="sobre" class="section">
  <div class="container">
    <div class="split-layout"> → grid 1fr 1fr
      <div class="about-content reveal">
        <h2 class="section-title">TRADIÇÃO E <span class="text-accent">CONFIANÇA.</span></h2>
        <p>...</p>
        <p class="text-muted">...</p>
        <div class="social-mention mt-2"> → border-left: 2px solid var(--accent); padding-left: 20px;
          <span class="mention-label">Siga-nos no Instagram:</span>
          <a href="..." class="mention-handle">@luanbateriasoficial</a>
          <div class="social-links-minimal mt-1"> → display: flex; gap: 15px;
      <div class="counters-grid"> → display: grid; grid-template-columns: 1fr 1fr; gap: 30px;
        <div class="counter-item reveal"> → background: var(--bg-secondary); padding: 40px; text-align: center; border-bottom: 4px solid var(--accent);
          <span class="counter-value" data-target="228">0</span> → font-size: 4rem; color: var(--accent);
          <span class="counter-label">Avaliações Google</span>
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-primary)` (#0A0A0A)
- Layer 1 — conteúdo: split layout com texto à esquerda e grid 2×2 de contadores à direita

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Social mention | `.social-mention` | below text | full width | `border-left: 2px solid var(--accent); padding-left: 20px` |
| Handle | `.mention-handle` | inline | — | `font-size: 1.8rem; color: var(--accent); font-weight: 700` |
| Counter grid | `.counters-grid` | right column | 2×2 grid | `gap: 30px` |
| Counter item | `.counter-item` | grid cell | padding: 40px | `border-bottom: 4px solid var(--accent); text-align: center` |
| Counter value | `.counter-value` | block | font-size: 4rem | `font-family: var(--font-display); color: var(--accent); line-height: 1` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `animateCounter` (JS) | 0 | data-target (228, 4.8, 2009, 100) | 1800ms | `1 - Math.pow(2, -10 * progress)` (EaseOutExpo) | IntersectionObserver threshold 0.5 | — |
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | — |

**Micro-interações:**
Nenhuma específica nesta seção.

**Diferenciador Visual:**
Os contadores usam **EaseOutExpo** via `requestAnimationFrame` — não é uma contagem linear, é uma desaceleração suave que dá peso aos números. A lógica JS distingue inteiros (adiciona "+" se < 2000) de decimais (fixa 1 casa). O `data-target="2009"` é tratado como ano, sem sufixo "+".

---

### SEÇÃO 9 — DEPOIMENTOS (MARQUEE)

**Estrutura:**
```
<section id="depoimentos" class="section bg-secondary overflow-hidden">
  <div class="container">
    <div class="testimonial-header reveal">
      <div class="google-badge"> → display: flex; gap: 15px; background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 50px; border: 1px solid var(--border);
        <svg class="google-logo" width="40" height="40">...</svg>
        <div class="google-info">
          <span class="rating">4.8 ★ / 5.0</span>
          <span class="reviews-count">+220 avaliações no Google Maps</span>
        </div>
      </div>
      <h2 class="section-title">O QUE DIZEM <span class="text-accent">NOSSOS CLIENTES</span></h2>
    </div>
  </div>
  <div class="marquee-testimonials"> → padding: 40px 0; background: var(--bg-secondary);
    <div class="marquee-track"> → display: flex !important; gap: 30px !important; animation: animReviews 35s linear infinite; width: max-content !important;
      <div class="testimonial-card"> → min-width: 350px; background: var(--bg-primary); padding: 30px; border: 1px solid var(--border); flex-shrink: 0;
        <div class="card-header"> → display: flex; justify-content: space-between;
          <div class="stars">★★★★★</div>
          <svg width="20" height="20">...</svg> (logo Google inline)
        </div>
        <p>"Nota 1000!..."</p>
        <span class="author">Thiago Roque</span>
      </div> × 10 (5 originais + 5 duplicados)
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-secondary)` (#111111)
- Layer 1 — badge: pill arredondada com fundo semitransparente
- Layer 2 — marquee: track em movimento contínuo

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Google badge | `.google-badge` | inline-flex | fit-content | `border-radius: 50px; border: 1px solid var(--border); animation: fadeIn 0.8s ease-out` |
| Marquee track | `.marquee-track` | flex row | max-content | `gap: 30px !important; animation: animReviews 35s linear infinite` |
| Card | `.testimonial-card` | flex-shrink: 0 | min-width: 350px | `background: var(--bg-primary); border: 1px solid var(--border); padding: 30px` |
| Stars | `.stars` | left header | — | `color: var(--accent); margin-bottom: 15px` |
| Author | `.author` | bottom | — | `font-weight: 700; text-transform: uppercase; color: var(--accent)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `animReviews` | `translateX(0)` | `translateX(-50%)` | 35s | linear | infinite (page load) | — |
| `fadeIn` | `opacity: 0` | `opacity: 1` | 0.8s | ease-out | page load | — |

**Micro-interações:**
Nenhuma nos cards de depoimento — são estáticos no marquee.

**Diferenciador Visual:**
O marquee de depoimentos usa **5 cards originais + 5 duplicados** (10 total). Cada card contém o **logo SVG do Google inline** (4 paths com cores oficiais: #4285F4, #34A853, #FBBC05, #EA4335), não é uma imagem — é vetor puro. A badge do Google no topo é uma pill com `border-radius: 50px`, criando um selo de credibilidade orgânico.

---

### SEÇÃO 10 — FAQ

**Estrutura:**
```
<section id="faq" class="section">
  <div class="container">
    <h2 class="section-title reveal">PERGUNTAS <span class="text-accent">FREQUENTES</span></h2>
    <div class="faq-grid"> → max-width: 800px; margin: 40px auto 0; display: flex; flex-direction: column; gap: 20px;
      <details class="faq-item reveal"> → background: var(--bg-secondary); border: 1px solid var(--border);
        <summary>Qual o tempo médio de entrega?</summary> → padding: 20px; font-weight: 700; cursor: pointer; list-style: none; display: flex; justify-content: space-between;
        <p>Em Santa Cruz e regiões próximas...</p> → padding: 0 20px 20px; color: var(--text-secondary);
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-primary)` (#0A0A0A)
- Layer 1 — conteúdo: coluna centralizada, max-width 800px

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.faq-grid` | center | max-width: 800px | `margin: 40px auto 0; gap: 20px` |
| Item | `.faq-item` | full width | — | `background: var(--bg-secondary); border: 1px solid var(--border)` |
| Summary | `.faq-item summary` | full width | padding: 20px | `list-style: none; display: flex; justify-content: space-between` |
| Indicador | `.faq-item summary::after` | right | — | `content: '+'; color: var(--accent); font-size: 1.5rem` |
| Aberto | `.faq-item[open] summary::after` | right | — | `content: '-'` |
| Resposta | `.faq-item p` | below | padding: 0 20px 20px | `color: var(--text-secondary)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.faq-item summary` | :hover | — | — | — | cursor: pointer | — |
| Indicador `::after` | [open] | — | — | — | `content: '-'` (troca de '+' para '-') | instantâneo |

**Diferenciador Visual:**
O FAQ usa **elementos `<details>` nativos do HTML5** — zero JavaScript para o accordion. O indicador `+` / `-` é puro CSS via `::after`. A transição de abertura é a animação nativa do browser, não customizada.

---

### SEÇÃO 11 — LOCALIZAÇÃO

**Estrutura:**
```
<section id="localizacao" class="section bg-secondary">
  <div class="container split-layout">
    <div class="location-info reveal">
      <h2 class="section-title">ONDE <span class="text-accent">ESTAMOS</span></h2>
      <div class="info-list"> → display: flex; flex-direction: column; gap: 25px;
        <div class="info-item"> → display: flex; gap: 15px;
          <span class="info-icon"> → color: var(--accent); min-width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center;
          <p>R. do Império, 166 - Santa Cruz...</p>
      <a href="..." class="btn btn-primary mt-2">Como Chegar</a>
    <div class="location-map reveal">
      <iframe src="..." width="100%" height="450" style="border:0;"> → filter: grayscale(1) invert(0.9);
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-secondary)` (#111111)
- Layer 1 — conteúdo: split layout com info à esquerda e mapa à direita

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Ícone info | `.info-icon` | left do flex | 30×30px | `color: var(--accent); min-width: 30px; display: inline-flex` |
| Mapa | `.location-map` | right column | 100%×450px | `filter: grayscale(1) invert(0.9)` |
| iframe | `iframe` | fill | width: 100%; height: 450 | `border: 0; loading: lazy; referrerpolicy: no-referrer-when-downgrade` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.info-item a` | :hover | — | — | — | `color: var(--accent)` (via `.hover:text-accent` inline) | 0.3s var(--transition) |

**Diferenciador Visual:**
O mapa do Google é **estilizado via CSS filter**: `grayscale(1) invert(0.9)` — isso converte o mapa colorido em uma versão dark mode que combina com o resto do site. É uma solução elegante que evita o uso de APIs pagas do Google Maps para estilização.

---

### SEÇÃO 12 — CONTATO / FORMULÁRIO

**Estrutura:**
```
<section id="contato" class="section">
  <div class="container split-layout">
    <div class="cta-text reveal">
      <h2 class="section-title">PEÇA SUA <span class="text-accent">BATERIA AGORA.</span></h2>
      <p>...</p>
      <div class="instagram-cta mt-1">...</div>
    </div>
    <div class="contact-form-wrapper reveal">
      <form id="contact-form" class="contact-form"> → background: var(--bg-secondary); padding: 50px; border-top: 4px solid var(--accent); box-shadow: 0 20px 40px rgba(0,0,0,0.3); position: relative;
        <div class="form-group grid-2"> → display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
          <label for="name">Nome Completo</label>
          <input type="text" id="name" name="name" required placeholder="...">
        ...
        <button type="submit" class="btn btn-primary w-full">
          <span>Ligar para Consultor via WhatsApp</span>
          <svg width="20" height="20">...</svg>
        </button>
      </form>
    </div>
```

**Fundo:**
- Layer 0 — base: `background: var(--bg-primary)` (#0A0A0A)
- Layer 1 — formulário: `background: var(--bg-secondary); border-top: 4px solid var(--accent)`
- Layer 2 — decoração: `::before` com triângulo gradiente no canto superior direito

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Formulário | `.contact-form` | right column | padding: 50px | `border-top: 4px solid var(--accent); box-shadow: 0 20px 40px rgba(0,0,0,0.3)` |
| Decoração | `.contact-form::before` | absolute, top-right | 60×60px | `background: linear-gradient(135deg, transparent 50%, rgba(255,204,0,0.1) 50%)` |
| Grid 2 col | `.grid-2` | inside form | 1fr 1fr | `gap: 20px` (mobile: 1 col em max-width: 600px) |
| Input | `.form-group input/textarea/select` | full width | padding: 15px | `background: var(--bg-primary); border: 1px solid var(--border); border-radius: 0` |
| Select arrow | `.form-group select` | full width | padding-right: 45px | `appearance: none; background-image: url("data:image/svg+xml,...chevron amarelo...")` |
| Submit | `.contact-form button[type="submit"]` | full width | padding: 20px | `font-size: 1.2rem; letter-spacing: 1px; gap: 15px` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal.active` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `input/textarea/select` | :focus | — | — | `border-color: var(--accent)` | `background: rgba(255,204,0,0.02); outline: none` | 0.3s var(--transition) |
| `::placeholder` | — | — | — | — | `color: rgba(255,255,255,0.2)` | — |
| Submit button svg | :hover | `rotate(15deg) scale(1.2)` | — | — | — | 0.3s ease |

**Diferenciador Visual:**
O formulário não envia dados para servidor — ele **redireciona para WhatsApp** com mensagem pré-formatada (padrão AG5). O select customizado usa um SVG inline codificado em base64 como background-image para a seta amarela. O triângulo decorativo no canto (`::before` com gradiente 135deg) é uma assinatura sutil de "documento oficial".

---

### SEÇÃO 13 — FOOTER

**Estrutura:**
```
<footer class="footer"> → padding: 80px 0 40px; position: relative; overflow: hidden; border-top: 1px solid rgba(255,204,0,0.1);
  <div class="footer-decoration"></div> → position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(255,204,0,0.4), transparent);
  <div class="container">
    <div class="footer-grid"> → display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 40px;
      <div class="footer-col"> → Logo + descrição + social icons
      <div class="footer-col"> → Navegação (h4 + ul com bullets)
      <div class="footer-col"> → Marcas Parceiras
      <div class="footer-col" id="contato"> → Contato (endereço, telefone, Google Maps link)
    <div class="footer-bottom">
      <div class="footer-credits-row"> → copyright + crédito AG5
      <div class="footer-legal-links"> → Termos | Privacidade | Preferências de Cookies (com toggle visual inline)
```

**Fundo:**
- Layer 0 — base: `background-color: var(--bg-primary)` (#0A0A0A)
- Layer 1 — linha decorativa: `.footer-decoration` → gradiente horizontal dourado de 1px
- Layer 2 — conteúdo: grid de 4 colunas

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Linha decorativa | `.footer-decoration` | absolute, top | 100%×1px | `background: linear-gradient(to right, transparent, rgba(255,204,0,0.4), transparent)` |
| Grid | `.footer-grid` | relative | 4 colunas | `grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 40px` |
| Título coluna | `.footer-col h4` | top | inline-block | `font-size: 1.1rem; letter-spacing: 1px; position: relative` |
| Underline | `.footer-col h4::after` | absolute, bottom | 30×2px | `background: var(--accent); bottom: -8px` |
| Bullet | `.bullet` | left do link | 6×6px | `border-radius: 50%; background: rgba(255,204,0,0.3); transition: var(--transition)` |
| Social icon | `.social-icon` | inline-flex | 40×40px | `border-radius: 50%; border: 1px solid rgba(255,255,255,0.1)` |
| Contact icon | `.footer-contact-icon` | left | 36×36px | `background: rgba(255,204,0,0.1); border-radius: 8px; color: var(--accent)` |
| Cookie toggle | inline no `#ck-prefs-link` | inline | 28×14px | `background: rgba(255,255,255,0.05); border-radius: 10px; border: 1px solid rgba(255,255,255,0.1)` |

**Animação:**
Nenhuma animação própria — herda `.reveal` global (não aplicada no footer).

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.footer-col ul li a` | :hover | `translateX(5px)` | — | — | `color: var(--accent)` | 0.3s var(--transition) |
| `.bullet` | :hover | — | `0 0 8px var(--accent)` | — | `background: var(--accent)` | 0.3s var(--transition) |
| `.social-icon` | :hover | `translateY(-3px)` | — | `border-color: var(--accent)` | `background: var(--accent); color: var(--bg-primary)` | 0.3s var(--transition) |
| `.footer-contact-item` | :hover | — | — | — | `color: var(--text-primary)` | 0.3s var(--transition) |
| `.footer-contact-icon` | :hover (via pai) | — | — | — | `background: var(--accent); color: var(--bg-primary)` | 0.3s var(--transition) |
| `.footer-legal-link` | :hover | — | — | — | `opacity: 0.5 → 1; color: var(--accent)` | 0.3s var(--transition) |

**Diferenciador Visual:**
O footer tem **4 colunas assimétricas** (1.5fr / 1fr / 1fr / 1.2fr) — não é grid simétrico. O link de "Preferências de Cookies" contém um **toggle visual inline** construído com spans aninhados (não é um input real, é puramente decorativo/indicativo). Cada link de navegação tem uma bolinha dourada (`span.bullet`) que brilha no hover com `box-shadow: 0 0 8px var(--accent)`.

---

## 3. COMPONENTES REUTILIZÁVEIS

### 3.1 Botões

```css
/* ─── BOTÃO BASE ─── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition);
  border: none;
}

/* ─── BOTÃO PRIMÁRIO (Amarelo) ─── */
.btn-primary {
  background-color: var(--accent);
  color: var(--bg-primary);
}
.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-3px);
}

/* ─── BOTÃO OUTLINE (Branco) ─── */
.btn-outline {
  background-color: transparent;
  border: 2px solid var(--text-primary);
  color: var(--text-primary);
}
.btn-outline:hover {
  background-color: var(--text-primary);
  color: var(--bg-primary);
}

/* ─── BOTÃO FULL WIDTH ─── */
.w-full {
  width: 100%;
  justify-content: center;
}

/* ─── BOTÃO FLUTUANTE WHATSAPP ─── */
.btn-flutuante-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease;
  animation: pulse-whatsapp 2s infinite;
}
.btn-flutuante-whatsapp:hover {
  transform: scale(1.1);
  color: #FFF;
}
.btn-flutuante-whatsapp .badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #ff0000;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  border: 2px solid #25D366;
}
```

### 3.2 Cards

```css
/* ─── CARD DE BATERIA (Carrossel) ─── */
.battery-card {
  background: var(--bg-secondary);
  padding: 40px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  height: 240px;
  flex-shrink: 0;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.battery-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 204, 0, 0.05) 0%, transparent 70%);
  opacity: 0;
  transition: var(--transition);
}
.battery-card:hover::before {
  opacity: 1;
}
.battery-card img {
  max-width: 180px;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}
.battery-card:hover img {
  transform: scale(1.1) rotate(2deg);
}
.battery-name {
  margin-top: 20px;
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-size: 0.9rem;
  letter-spacing: 2px;
  z-index: 2;
}
.battery-card:hover .battery-name {
  color: var(--accent);
}

/* ─── CARD DE DEPOIMENTO ─── */
.testimonial-card {
  min-width: 350px;
  background: var(--bg-primary);
  padding: 30px;
  border: 1px solid var(--border);
  flex-shrink: 0;
}
.testimonial-card p {
  font-style: italic;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

/* ─── CARD DE CONTADOR ─── */
.counter-item {
  background: var(--bg-secondary);
  padding: 40px;
  text-align: center;
  border-bottom: 4px solid var(--accent);
}
```

### 3.3 Elementos Flutuantes Fixos

```css
/* ─── BOTÃO WHATSAPP FIXO ─── */
.btn-flutuante-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease;
  animation: pulse-whatsapp 2s infinite;
}

/* ─── BOTÃO DE SOM DO HERO ─── */
.sound-toggle {
  position: absolute;
  bottom: 30px;
  left: 5%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  backdrop-filter: blur(5px);
}
.sound-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent);
  color: var(--accent);
}
```

### 3.4 Drawer Mobile (Modal de Navegação)

```css
/* ─── OVERLAY DO DRAWER ─── */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 9998;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}
.nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* ─── DRAWER ─── */
.nav-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 400px;
  height: 100%;
  background: #0A0A0A;
  z-index: 9999;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.8);
  border-left: 1px solid var(--border);
}
.nav-drawer.active {
  right: 0;
}

/* ─── FECHAR DRAWER ─── */
.drawer-close {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  transition: var(--transition);
}
.drawer-close:hover {
  color: var(--accent);
  transform: rotate(90deg);
}

/* ─── SCROLL LOCK ─── */
body.drawer-open {
  overflow: hidden;
}
```

### 3.5 Pills / Tags / Badges

```css
/* ─── GOOGLE BADGE (Pill) ─── */
.google-badge {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--border);
  margin-bottom: 25px;
  width: fit-content;
  animation: fadeIn 0.8s ease-out;
}

/* ─── STARS ─── */
.stars {
  color: var(--accent);
  margin-bottom: 15px;
}

/* ─── CATEGORY BADGE (Cookie Banner) ─── */
.ck-category__badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 7px;
  background: rgba(var(--ck-accent-rgb), 0.1);
  color: var(--ck-accent-dark);
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: 20px;
}
```

### 3.6 Sistema .reveal on Scroll

```css
/* ─── REVEAL PADRÃO ─── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ─── ANIMATE ON LOAD (Hero) ─── */
.animate-on-load.active {
  opacity: 1;
  transform: translateY(0);
  transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
```

> **Trigger:** IntersectionObserver com `threshold: 0.2` e `rootMargin: '0px 0px -50px 0px'`. Stagger via atributo `data-delay` em milissegundos (0, 120, 240, 360, 480, 600, 720, 840 nos serviços).

### 3.7 Carrosséis / Tickers / Marquees

```css
/* ─── TICKER BAR ─── */
.ticker-track {
  display: flex !important;
  flex-direction: row !important;
  width: max-content !important;
  animation: animTicker 30s linear infinite;
}
.ticker-track span {
  flex-shrink: 0;
  padding-right: 50px;
  display: inline-block;
}

/* ─── CARROSSEL DE MARCAS ─── */
.carousel-track-wrapper {
  position: relative;
  padding: 20px 0;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.carousel-track {
  display: flex !important;
  flex-direction: row !important;
  gap: 30px !important;
  animation: animBrands 40s linear infinite;
  width: max-content !important;
}

/* ─── MARQUEE DE DEPOIMENTOS ─── */
.marquee-track {
  display: flex !important;
  flex-direction: row !important;
  gap: 30px !important;
  animation: animReviews 35s linear infinite;
  width: max-content !important;
}
```

### 3.8 Watermark / Decorativo

```css
/* ─── RAIO DECORATIVO DO HERO ─── */
.hero-bolt-decor {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 30vw;
  height: 60vh;
  z-index: 1;
  pointer-events: none;
}
.hero-bolt-decor svg {
  width: 100%;
  height: 100%;
  animation: boltPulse 2s ease-in-out infinite;
}

/* ─── NÚMERO DE SERVIÇO (Watermark funcional) ─── */
.service-num {
  font-family: var(--font-display);
  font-size: 5rem;
  line-height: 1;
  color: var(--accent);
  opacity: 0.15;
  transition: var(--transition);
  min-width: 100px;
}
```

### 3.9 Cookie Banner (Componente Externo AG5)

Ver arquivo `cookie-banner.css` completo. Destaques:
- Banner fixo bottom com `z-index: 9000`
- Modal de personalização com `z-index: 9100`
- Toggle switches customizados (34×19px)
- Toast de feedback com `z-index: 9999`
- Cores sincronizadas com a marca via `--ck-accent: #FFCC00`

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

| Nome @keyframes | 0% | 50% | 100% | Duração padrão | Easing | Onde é usado |
|---|---|---|---|---|---|---|
| `animTicker` | `translateX(0)` | — | `translateX(-50%)` | 30s | linear | `.ticker-track` — ticker bar amarelo |
| `animBrands` | `translateX(0)` | — | `translateX(-50%)` | 40s | linear | `.carousel-track` — carrossel de marcas |
| `animReviews` | `translateX(0)` | — | `translateX(-50%)` | 35s | linear | `.marquee-track` — depoimentos |
| `boltPulse` | `translateY(-50%) scale(1); opacity: 0.05` | `translateY(-50%) scale(1.08); opacity: 0.1` | `translateY(-50%) scale(1); opacity: 0.05` | 2s | ease-in-out | `.hero-bolt-decor svg` — raio decorativo |
| `fadeIn` | `opacity: 0` | — | `opacity: 1` | 0.8s | ease-out | `.google-badge` — badge de avaliações |
| `pulse-whatsapp` | `box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7)` | `box-shadow: 0 0 0 20px rgba(37, 211, 102, 0)` | `box-shadow: 0 0 0 0 rgba(37, 211, 102, 0)` | 2s | ease | `.btn-flutuante-whatsapp` — botão WhatsApp |

> **Nota:** As animações `.reveal` e `.animate-on-load` não usam @keyframes — usam `transition` diretamente com `opacity` e `transform`.

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função / Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|---|---|---|---|---|
| Navbar scroll | `window.addEventListener('scroll')` | Adiciona/remove classe scrolled | `.scrolled` add/remove | `#navbar` |
| Hero video speed | DOMContentLoaded | Define playbackRate | — | `.hero-video` → `playbackRate = 0.6` |
| Sound toggle | `click #sound-toggle` | Alterna muted do vídeo, troca SVG e aria-label | — | `.hero-video`, `#sound-icon` |
| Hero load animation | DOMContentLoaded | Adiciona `.active` com stagger | `.active` add | `.animate-on-load` (title, subtitle, CTAs) |
| Reveal on scroll | IntersectionObserver (threshold: 0.2, rootMargin: -50px) | Adiciona `.active` com data-delay | `.active` add | `.reveal` elements |
| Counter animation | IntersectionObserver (threshold: 0.5) | Anima número de 0 até data-target | — | `.counter-value` — EaseOutExpo, 1800ms |
| Form → WhatsApp | `submit #contact-form` | Previne submit, monta mensagem, abre WhatsApp | `disabled` no btn | `#contact-form` button |
| Mobile drawer open | `click .mobile-menu-btn` | Abre drawer | `.active` add | `#nav-drawer`, `#nav-overlay` — `body.classList.add('drawer-open')` |
| Mobile drawer close | `click .drawer-close / #nav-overlay / .drawer-nav a` | Fecha drawer | `.active` remove / `.drawer-open` remove | `#nav-drawer`, `#nav-overlay`, `body` |
| Cookie banner init | DOMContentLoaded / auto | Mostra banner após 600ms se não decidiu | `.ck-banner--visible` add | `#ck-banner` |
| Cookie accept all | `click #ck-accept-all / #ck-modal-accept-all` | Salva preferências, esconde banner | `.ck-banner--visible` remove | `#ck-banner`, `#ck-modal` |
| Cookie reject | `click #ck-reject / #ck-modal-reject` | Salva apenas necessários | `.ck-banner--visible` remove | `#ck-banner`, `#ck-modal` |
| Cookie customize | `click #ck-customize` | Abre modal de preferências | `.ck-modal--visible` add | `#ck-modal` |
| Cookie save custom | `click #ck-modal-save` | Lê toggles, salva, fecha | `.ck-modal--visible` remove | `#ck-modal` |
| Cookie ESC | `keydown Escape` | Fecha modal se visível | `.ck-modal--visible` remove | `#ck-modal` |

---

## 6. RESPONSIVIDADE

| Breakpoint (max-width) | Elemento | Propriedade | Valor padrão | Valor no breakpoint |
|---|---|---|---|---|
| 992px | `.split-layout` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 992px | `.footer-grid` | `grid-template-columns` | `1.5fr 1fr 1fr 1.2fr` | `1fr 1fr` |
| 992px | `.grid-gallery` | `grid-template-columns` | `repeat(4, 1fr)` | `1fr 1fr` |
| 992px | `.grid-gallery` | `height` | `400px` | `auto` |
| 768px | `.navbar` | `background` | `transparent` | `transparent !important` |
| 768px | `.navbar.scrolled` | `background` | `rgba(10,10,10,0.95)` | `rgba(10,10,10,0.98) !important` |
| 768px | `.nav-links` | `display` | `flex` | `none` |
| 768px | `.mobile-menu-btn` | `display` | `none` | `flex` |
| 768px | `.hero-title` | `font-size` | `clamp(3.5rem, 9vw, 10vw)` | `4.2rem` |
| 768px | `.hero-title` | `text-align` | left | `center` |
| 768px | `.hero-subtitle` | `text-align` | left | `center` |
| 768px | `.hero-subtitle` | `margin` | `0 0 55px 0` | `0 auto 30px` |
| 768px | `.hero-subtitle` | `max-width` | `700px` | `320px` |
| 768px | `.hero-subtitle` | `font-weight` | `400` | `700` |
| 768px | `.hero-subtitle` | `font-size` | `clamp(1.1rem, 2vw, 1.4rem)` | `1rem` |
| 768px | `.hero-ctas` | `justify-content` | flex-start | `center` |
| 768px | `.hero-ctas` | `flex-direction` | row | `column` |
| 768px | `.hero-ctas .btn` | `width` | auto | `100%` |
| 768px | `.hero-bg .hero-video` | `object-position` | `100% center` | `center` |
| 768px | `.hero-overlay` | `background` | linear-gradient 7 stops | `radial-gradient(circle, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.95) 100%)` |
| 768px | `.hero-bolt-decor` | `display` | block | `none` |
| 768px | `.sound-toggle` | `bottom/left/width/height` | 30px/5%/45px/45px | 20px/20px/40px/40px |
| 768px | `.section` | `padding` | `100px 0` | `60px 0` |
| 768px | `.footer-grid` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 768px | `.footer-grid` | `gap` | `40px` | `50px` |
| 768px | `.footer-credits-row` | `flex-direction` | row | `column` |
| 768px | `.footer-credits-row` | `text-align` | left | `center` |
| 768px | `.footer-legal-links` | `justify-content` | flex-start | `center` |
| 768px | `.service-item` | `flex-direction` | row | `column` |
| 768px | `.service-item` | `gap` | `40px` | `10px` |
| 768px | `.service-num` | `font-size` | `5rem` | `3rem` |
| 600px | `.grid-2` | `grid-template-columns` | `1fr 1fr` | `1fr` |

---

## 7. PERFORMANCE & SEO TÉCNICO

| Técnica | Elemento/Recurso | Detalhe |
|---|---|---|
| `width`/`height` explícitos | Logo hero | `width="164" height="79"` — evita CLS |
| `loading="lazy"` | Todas as imagens abaixo do fold | impact-image, battery-cards, gallery, mapa |
| `referrerPolicy="no-referrer"` | `.impact-image img` | — |
| `referrerpolicy="no-referrer-when-downgrade"` | Mapa iframe | — |
| `playsinline` | Hero video | Evita fullscreen automático no iOS |
| `prefers-reduced-motion` | `html { scroll-behavior: smooth }` | Só aplica se usuário não preferir redução |
| Schema.org @graph | `<script type="application/ld+json">` | AutoRepair + WebSite + WebPage + FAQPage |
| `rel="canonical"` | `<link>` | `https://www.luanbaterias.ag5agencia.site` |
| OG Tags | 8 meta tags | title, description, url, image (1200×630), type, locale, site_name |
| Twitter Cards | 4 meta tags | card, title, description, image |
| Geo Tags | 4 meta tags | geo.region, geo.placename, geo.position, ICBM |
| Google Tag Manager | `<script>` + `<noscript>` | ID: GTM-P4M5PRZR |
| `rel="preconnect"` | fonts.googleapis.com, fonts.gstatic.com | — |
| `will-change` | `.hero-title`, `.hero-subtitle` | `transform, opacity` — otimização de composição |
| `min-height: 58px` | `.ticker-bar` | Reserva espaço para evitar CLS |
| `aspect-ratio: 1/1` | `.gallery-item img` | Reserva espaço no mobile |
| Cookie Banner | LGPD/GDPR compliant | localStorage, 365 dias expiry, categorias: necessary, functional, analytics, performance, advertising |

---

## 8. ANTI-PADRÕES REGISTRADOS

❌ **HERO COM IMAGEM ESTÁTICA**
→ Genérico seria: usar uma imagem de fundo com overlay simples de 2-3 stops
→ Aqui foi feito: vídeo MP4 com gradiente de **7 stops** de opacidade em transição horizontal, posicionado à direita (`object-position: 100% center`), com playbackRate 0.6 para lentidão cinematográfica
→ Prova técnica: `.hero-overlay { background: linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 15%, rgba(10,10,10,0.98) 35%, rgba(10,10,10,0.92) 55%, rgba(10,10,10,0.75) 75%, rgba(10,10,10,0.3) 90%, transparent 100%) }` + `heroVideo.playbackRate = 0.6`

❌ **NAVBAR SEMPRE VISÍVEL**
→ Genérico seria: navbar com background sólido desde o carregamento
→ Aqui foi feito: navbar totalmente transparente no topo, só materializando com `backdrop-filter: blur(10px)` após 50px de scroll
→ Prova técnica: `.navbar { background: transparent }` → `.navbar.scrolled { background: rgba(10,10,10,0.95); backdrop-filter: blur(10px); padding: 15px 0 }` + JS `if (window.scrollY > 50)`

❌ **CARROSSEL COM JS E SETAS**
→ Genérico seria: usar Swiper.js ou Slick com botões de navegação
→ Aqui foi feito: **3 marquees CSS puros** com `animation: translateX(-50%)` e conteúdo duplicado para loop infinito — zero JavaScript, zero setas
→ Prova técnica: `.ticker-track { animation: animTicker 30s linear infinite }`, `.carousel-track { animation: animBrands 40s linear infinite }`, `.marquee-track { animation: animReviews 35s linear infinite }` + 6 spans duplicados no ticker, 8 cards duplicados no carrossel, 10 cards duplicados nos depoimentos

❌ **FAQ COM ACCORDION JS**
→ Genérico seria: biblioteca como jQuery UI Accordion ou custom JS com classes open/close
→ Aqui foi feito: **elementos nativos `<details>` e `<summary>`** do HTML5, com indicador `+`/`-` via CSS `::after`
→ Prova técnica: `.faq-item summary::after { content: '+' }` → `.faq-item[open] summary::after { content: '-' }` — zero JavaScript

❌ **MAPA COLORIDO DO GOOGLE**
→ Genérico seria: embed padrão do Google Maps com cores originais que quebram o dark mode
→ Aqui foi feito: **filtro CSS** `grayscale(1) invert(0.9)` que converte o mapa para paleta dark harmonizada com o site
→ Prova técnica: `.location-map { filter: grayscale(1) invert(0.9) }`

❌ **FORMULÁRIO COM BACKEND**
→ Genérico seria: form com action para PHP/Node.js que processa e envia email
→ Aqui foi feito: **formulário falso que redireciona para WhatsApp** com mensagem pré-formatada estruturada (padrão AG5)
→ Prova técnica: `contactForm.addEventListener('submit', function(e) { e.preventDefault(); ... window.open(urlWhatsApp, '_blank') })` + template literal obrigatório: `Olá, me chamo ${nome}, vim através do site...`

❌ **CONTADORES COM ANIMAÇÃO LINEAR**
→ Genérico seria: `setInterval` incrementando de 1 em 1 até o target
→ Aqui foi feito: **requestAnimationFrame com EaseOutExpo** (`1 - Math.pow(2, -10 * progress)`) que desacelera suavemente, com distinção entre inteiros (com sufixo "+") e decimais
→ Prova técnica: `function animateCounter(el) { ... const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress); ... }` + `requestAnimationFrame(update)`

❌ **SOM DO VÍDEO SEMPRE MUDO OU SEMPRE LIGADO**
→ Genérico seria: vídeo com `muted` permanente ou volume máximo sem controle
→ Aqui foi feito: **botão de toggle de som** com ícone SVG que muda dinamicamente (muted: X nas ondas / unmuted: ondas normais), volume padrão 0.5, e `aria-label` atualizado
→ Prova técnica: `<button id="sound-toggle" class="sound-toggle" aria-label="Ativar som">` + JS que troca `innerHTML` do SVG e atualiza `aria-label` entre "Ativar som" e "Desativar som"

❌ **FOOTER COM LINKS SIMPLES**
→ Genérico seria: lista de links em texto plano
→ Aqui foi feito: **bullets dourados animados** (`span.bullet` com `border-radius: 50%` que brilha no hover via `box-shadow`), grid assimétrico de 4 colunas, e toggle visual inline de cookies no rodapé
→ Prova técnica: `.footer-col ul li a span.bullet { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,204,0,0.3) }` → `:hover { background: var(--accent); box-shadow: 0 0 8px var(--accent) }` + `.footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1.2fr }`

---

## 9. NOTAS DE IMPLEMENTAÇÃO CRÍTICAS

1. **Divergência de fonte:** O HTML carrega `Montserrat:wght@400;500;700` mas o CSS declara `--font-body: 'Inter', sans-serif`. O navegador vai usar Inter se disponível no sistema, senão cai para sans-serif genérica. Montserrat é carregada mas pode não ser aplicada.

2. **Vídeo do hero:** O arquivo é `assests/video-baterias-automotivas-santa-cruz-rj.mp4`. Deve estar presente e otimizado. O `object-position: 100% center` no desktop empurra o vídeo para a direita, deixando espaço escuro para o texto à esquerda.

3. **Duplicação no CSS do footer:** O arquivo `style.css` possui duas declarações `.footer` (linhas 869 e 882) e duas `.footer-grid` (linhas 874 e 900). A segunda sobrescreve a primeira — o grid final é `1.5fr 1fr 1fr 1.2fr` com `gap: 40px`.

4. **Cookie Banner:** É um sistema standalone (arquivos `cookie-banner.css` e `cookie-banner.js`) que não depende do CSS principal, mas sincroniza cores via `--ck-accent: #FFCC00`.

5. **Drawer mobile:** Os elementos `#nav-overlay` e `#nav-drawer` existem no HTML mas a classe `.drawer-nav` usada no JS não tem estilos CSS explícitos além dos que estão no arquivo. O fechamento ao clicar em links do drawer é tratado por JS.

6. ** prefers-reduced-motion:** O bloco foi removido do CSS final (comentário "Removed prefers-reduced-motion block for diagnostic" na linha 1446), o que significa que animações rodam independentemente da preferência do usuário — isso é um ponto de acessibilidade a ser corrigido.
