# Falta Adicionar no Schema
**Empresa:** Luan Baterias | Baterias Automotivas | Troca de Bateria | Entrega em Domicílio | Santa Cruz RJ
**Data de geração:** 31/03/2026

---

## CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não encontrado no site. Adicionar e-mail de contato no rodapé ou seção contato
- [ ] `legalName` — Razão social não exibida no site. Verificar CNPJ/Razão Social e inserir

## IMPORTANTES

- [x] `sameAs` Google Business Profile — Confirmado via docs: `https://share.google/N2wtclOzfbANNFamp` (Place ID: `ChIJ8_AfcUX6mwARkwERkwEdKPf63C8`, Business Profile ID: `13113613463853385028`)
- [ ] `sameAs` LinkedIn — Verificar se a empresa tem perfil (se não tiver, ignorar)
- [ ] `datePublished` — Data de publicação da LP inserida como `2025-01-01` (estimativa). Confirmar data real de lançamento

## COMPLEMENTARES

- [ ] `founder.name` — Nome do responsável/dono não identificado no site. Adicionar na seção "Sobre" para fortalecer E-E-A-T
- [ ] `founder.jobTitle` — Cargo não informado
- [ ] `founder.image` — Foto do responsável não presente no site
- [ ] `legalName` — Razão social completa não exibida no site
- [ ] `image[1]` / `image[2]` — URLs das imagens (4) e (5) usam `%20` (espaço). Renomear arquivos sem espaços e atualizar URLs no Schema e HTML
- [ ] `openingHoursSpecification` — Feriados (08h30–12h) não mapeados no Schema (não existe dayOfWeek para PublicHoliday no schema.org padrão — considerar adicionar nota no HTML)

---

## Resolvidos Automaticamente

- [x] `@type` — `AutoRepair` (indicadores: "bateria", "carro", "mecânica" na LP)
- [x] `geo.latitude` / `geo.longitude` — Confirmadas via Pleper (docs): `-22.91496760 / -43.68764940` (corrigidas — anteriormente estavam derivadas do iframe com valores aproximados)
- [x] `name` — Alinhado com Google Business: `Luan Baterias Automotivas em Santa Cruz`
- [x] `alternateName` — Otimizado com palavras-chave: `Luan Baterias | Baterias Automotivas | Troca de Bateria | Entrega em Domicílio | Teste Grátis | Santa Cruz RJ`
- [x] `areaServed` — Bairro base (Santa Cruz) + 5 adjacentes gerados: Paciência, Sepetiba, Guaratiba, Cosmos, Campo Grande
- [x] `hasOfferCatalog` — 8 serviços extraídos da seção #servicos
- [x] `aggregateRating` — 4.8 / 228 avaliações (visíveis na seção #sobre e #depoimentos)
- [x] `paymentAccepted` — Extraído da FAQ: Dinheiro, PIX, Cartão de Crédito, Cartão de Débito
- [x] `foundingDate` — 2009 (extraído do ticker e seção #sobre)
- [x] `FAQPage` — 4 perguntas extraídas da seção #faq
- [x] `WebSite` + `WebPage` — Entidades adicionadas ao @graph
- [x] `sameAs` — Instagram e Facebook extraídos do rodapé; Google Maps link do botão "Como Chegar"

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
