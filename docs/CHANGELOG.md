# Changelog

Tutte le modifiche importanti al progetto saranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce a [Semantic Versioning](https://semver.org/lang/it/).

## [2.0.0] - 2026-01-08

### 🎉 Aggiunto

#### Nuove Sezioni GDPR
- **Riepilogo della Privacy Policy** (`summary`) - Panoramica user-friendly con cards visive
- **Dettagli sui Servizi di Terze Parti** (`third_party_services`) - Accordion con provider esterni
- **Cookie Policy** (`cookie_policy`) - Gestione completa dei cookie con tabelle
- **Ulteriori Informazioni per Utenti nell'Unione Europea** (`eu_users_info`) - Spiegazioni GDPR semplificate
- **Come Possiamo Aiutare** (`help_section`) - Link mailto pre-compilati per esercizio diritti

#### Export HTML Professionale
- Nuovo formato **HTML Styled** simile a iubenda
- Layout con **Header**, **Summary Cards**, **Sidebar TOC**, **Main Content**, **Pre-Footer**, **Footer**
- Design responsive mobile-first (breakpoints 640px, 968px)
- Stili print-friendly per PDF
- Accessibilità WCAG 2.1 AA compliant

#### UI/UX
- Bottone **"Pubblica HTML"** (verde) che genera HTML styled
- Dropdown "Download" con 4 opzioni: Copia, Markdown, HTML semplice, PDF
- Toast notifications migliorate
- Validazione variabili obbligatorie prima dell'export

#### Documentazione
- **NUOVE_FUNZIONALITA.md** - Guida completa alle nuove sezioni
- **PREVIEW.html** - Anteprima visiva del layout
- **CONTENT_GAP_ANALYSIS.md** - Analisi comparativa con iubenda
- README.md aggiornato con nuove funzionalità

### 🔧 Modificato

- `export-utils.ts`: Aggiunta funzione `downloadHTMLStyled()` con 600+ righe di CSS inline
- `PolicyEditor.tsx`: Aggiornato handler export per supportare formato `html-styled`
- `templates.ts`: Aggiunti 6 nuovi template GDPR (da 1286 a ~3500 righe)
- README.md: Sezione "Caratteristiche" espansa con novità v2.0

### 📚 Template Aggiunti

**Servizi Terzi Pre-configurati**:
- Google Tag Manager
- Google Analytics 4
- Meta Events Manager (Facebook Pixel)
- Typeform
- Google Forms
- Stripe
- PayPal
- Vercel
- Mailchimp

### 🎨 Stile HTML Generato

**Palette Colori**:
- Primary: `#2E3D52` (Titoli)
- Secondary: `#4A90E2` (Accent/Link)
- Card 1: `#E8F4FD` (Gradient azzurro)
- Card 2: `#FFF4E6` (Gradient arancione)
- Success: `#10B981`
- Background: `#F8F9FA`

**Componenti**:
- Cards con gradient e border-left colorato
- Pills/badges per tipologie dati
- Accordion espandibili per servizi terzi
- Sidebar sticky con smooth scroll
- Footer con credits e info documento

### ⚡ Performance

- HTML generato: ~50-80KB (dipende dalle sezioni)
- CSS inline: ~20KB (ottimizzato e minificato)
- Nessuna dipendenza esterna (no CDN)
- Caricamento istantaneo

### ♿ Accessibilità

- Semantic HTML5 (header, main, aside, footer, section)
- ARIA labels appropriati
- Contrast ratio WCAG 2.1 AA
- Focus states visibili
- Keyboard navigation supportata
- Skip links per navigazione rapida

### 📱 Responsive

- Mobile-first design
- Breakpoint 640px: Single column, padding ridotto
- Breakpoint 968px: Sidebar diventa collapsible
- Touch-friendly (target size 44x44px minimo)

---

## [1.0.0] - 2025-12-XX

### Aggiunto

- Interfaccia drag & drop per comporre privacy policy
- Editor in tempo reale con anteprima Markdown
- 10+ template GDPR obbligatori
- Sistema di variabili per personalizzazione
- Export in Markdown e copia negli appunti
- Persistenza locale con Zustand
- Validazione sezioni obbligatorie
- UI con shadcn/ui components

### Template Iniziali

- Identità del Titolare (`identity`)
- Base Giuridica (`legal_basis`)
- Finalità del Trattamento (`purposes`)
- Categorie di Dati (`categories`)
- Diritti degli Interessati (`data_subject_rights`)
- Periodo di Conservazione (`retention`)
- Destinatari (`recipients`)
- Trasferimenti Internazionali (`transfers`)
- Misure di Sicurezza (`security`)
- DPO (`dpo`)

---

## [Unreleased]

### 🚀 Prossime Funzionalità

- [ ] Integrazione backend per salvataggio cloud
- [ ] Multi-lingua (EN, FR, DE, ES)
- [ ] Versioning automatico delle policy
- [ ] Export in DOCX/PDF nativo
- [ ] Cookie Banner integrato
- [ ] Template settoriali (e-commerce, healthcare, fintech)
- [ ] AI-powered content suggestions
- [ ] Collaborative editing
- [ ] API REST per integrazione
- [ ] Webhook per notifiche modifiche

### 🐛 Bug da Fixare

- [ ] Validazione regex per email nel form variabili
- [ ] Scroll position dopo reorder sezioni
- [ ] Toast duplicate su export rapidi consecutivi
- [ ] Mobile: Sidebar overlay z-index conflict

### 🎨 Miglioramenti UI

- [ ] Dark mode
- [ ] Animazioni più fluide
- [ ] Preview live HTML nell'editor
- [ ] Diff viewer per confrontare versioni
- [ ] Timeline storico modifiche

---

## Come Leggere Questo Changelog

### Tipi di Modifiche

- **Aggiunto** per nuove funzionalità
- **Modificato** per cambiamenti a funzionalità esistenti
- **Deprecato** per funzionalità che saranno rimosse
- **Rimosso** per funzionalità rimosse
- **Corretto** per bug fix
- **Sicurezza** per vulnerabilità

### Versioning

Questo progetto usa [Semantic Versioning](https://semver.org/):
- **MAJOR** (X.0.0): Modifiche incompatibili con versioni precedenti
- **MINOR** (x.X.0): Nuove funzionalità backward-compatible
- **PATCH** (x.x.X): Bug fix backward-compatible

---

**[2.0.0]**: https://github.com/yourusername/gdpr-privacy-saas-website/releases/tag/v2.0.0  
**[1.0.0]**: https://github.com/yourusername/gdpr-privacy-saas-website/releases/tag/v1.0.0
