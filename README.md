# GDPR Privacy Policy Builder

Un generatore di privacy policy GDPR-compliant con interfaccia drag & drop costruito con Next.js 14 e shadcn/ui.

## 🎉 Novità v2.0 - Layout iubenda-like!

**Nuove funzionalità user-friendly**:
- 📋 **Sezione Riepilogo** con cards visive colorate
- 📑 **Table of Contents** navigabile con sidebar sticky
- 🔌 **Dettagli Servizi Terzi** con accordion espandibili
- 🍪 **Cookie Policy** completa con tabelle dettagliate
- 🇪🇺 **Info Utenti UE** in linguaggio semplice
- 🤝 **"Come Possiamo Aiutare"** con link mailto pre-compilati
- 🎨 **Export HTML Professionale** simile a iubenda

👉 **[Vedi Preview delle Nuove Funzionalità](PREVIEW.html)**  
📖 **[Leggi la Documentazione Completa](NUOVE_FUNZIONALITA.md)**

## Caratteristiche

- 🎯 **GDPR Compliant**: Tutte le sezioni obbligatorie previste dal Regolamento Europeo 2016/679
- 🎨 **Drag & Drop**: Interfaccia intuitiva per comporre la privacy policy
- 📝 **Editor Integrato**: Modifica in tempo reale con anteprima markdown
- 💾 **Persistenza Locale**: Salva automaticamente il lavoro nel browser
- 📤 **Export Multiplo**: Markdown, HTML semplice, HTML styled (iubenda-like), PDF
- 🏢 **Template Completi**: 15+ sezioni pre-configurate con riferimenti articoli GDPR
- 🌐 **Responsive**: Layout ottimizzato per desktop, tablet e mobile
- ♿ **Accessibile**: Conforme WCAG 2.1 AA
- 🎨 **Design Moderno**: UI pulita ispirata a iubenda con shadcn/ui

## Installazione

1. Installa le dipendenze:
```bash
npm install
# oppure
pnpm install
# oppure  
yarn install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
# oppure
pnpm dev
# oppure
yarn dev
```

3. Apri [http://localhost:3000](http://localhost:3000) nel browser

## Struttura del Progetto

```
src/
├── app/                    # App Router di Next.js
├── components/             # Componenti React
│   ├── ui/                # Componenti shadcn/ui
│   ├── ComponentsSidebar/ # Sidebar con sezioni trascinabili
│   ├── PolicyEditor/      # Editor principale
│   └── ...
├── lib/                   # Utilities e templates
├── store/                 # Gestione stato con Zustand
├── types/                 # Definizioni TypeScript
└── hooks/                # Custom hooks
```

## Tecnologie Utilizzate

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Componenti**: shadcn/ui
- **Drag & Drop**: dnd-kit
- **State Management**: Zustand
- **Markdown**: react-markdown

## Sezioni GDPR Incluse

## 📋 Sezioni Disponibili

### Obbligatorie (Art. 13-14 GDPR)
- ✅ Identità del Titolare del Trattamento (Art. 13(1)(a))
- ✅ Base Giuridica del Trattamento (Art. 6)
- ✅ Finalità del Trattamento (Art. 5(1)(b))
- ✅ Categorie di Dati Personali (Art. 4(1))
- ✅ Diritti degli Interessati (Art. 15-22)

### Nuove Sezioni User-Friendly 🎉
- 📋 **Riepilogo** - Panoramica con cards visive
- 🔌 **Dettagli Servizi Terzi** - Accordion con provider esterni
- 🍪 **Cookie Policy** - Gestione completa cookie
- 🇪🇺 **Info Utenti UE** - Spiegazioni semplificate GDPR
- 🤝 **Come Possiamo Aiutare** - Link mailto per esercizio diritti

### Opzionali
- Periodo di Conservazione (Art. 5(1)(e))
- Destinatari dei Dati (Art. 13(1)(e))
- Trasferimenti Internazionali (Art. 44-49)
- Misure di Sicurezza (Art. 32)
- Responsabile Protezione Dati - DPO (Art. 37-39)
- Profilazione e Decisioni Automatizzate (Art. 22)
- Accountability (Art. 5(2), Art. 24)
- Modifiche alla Privacy Policy (Art. 13(2)(b))

## 🚀 Come Usare

### 1. Builder - Componi la Policy

1. **Aggiungi Sezioni**: Trascina le sezioni dalla sidebar sinistra all'editor
2. **Ordina**: Riorganizza l'ordine con drag & drop
3. **Personalizza**: Clicca su ogni sezione per modificarne il contenuto
4. **Variabili**: Vai al tab "Variabili" e compila i dati aziendali

### 2. Compila le Variabili

Nel tab **Variabili** compila:
- **Ragione Sociale**: Nome della tua azienda
- **Indirizzo Completo**: Sede legale
- **Email Titolare**: Email contatto principale
- **Email Privacy**: Email per esercizio diritti GDPR
- **DPO** (opzionale): Responsabile Protezione Dati

### 3. Pubblica

Clicca su **"Pubblica HTML"** per scaricare la privacy policy in formato HTML professionale, pronta per essere caricata sul tuo sito.

**Formati disponibili**:
- **HTML Styled** (🌟 Consigliato) - Layout iubenda-like
- **HTML Semplice** - Base per customizzazioni
- **Markdown** - Per documentazione
- **PDF** - Via stampa browser

## 🎨 Personalizzazione

## 🎨 Personalizzazione

### Variabili Supportate

Il sistema supporta placeholder automatici che vengono sostituiti con i dati aziendali:

**Variabili Base**:
- `[RAGIONE_SOCIALE]` → Nome azienda
- `[INDIRIZZO_COMPLETO]` → Indirizzo completo sede legale
- `[PARTITA_IVA]` → Partita IVA / Codice Fiscale
- `[EMAIL_TITOLARE]` → Email di contatto principale
- `[EMAIL_DIRITTI]` → Email per esercizio diritti GDPR
- `[EMAIL_DPO]` → Email Data Protection Officer
- `[TELEFONO]` → Numero di telefono
- `[SITO_WEB]` → URL del sito web
- `[PEC_TITOLARE]` → PEC aziendale

**Variabili Custom**:
Puoi aggiungere variabili personalizzate direttamente nell'editor per contenuti specifici.

### Personalizzare l'HTML Generato

Nell'HTML styled puoi modificare:

**Colori** (CSS variables in `:root`):
```css
--color-primary: #2E3D52;      /* Titoli */
--color-secondary: #4A90E2;    /* Link e accent */
--color-card-1: #E8F4FD;       /* Card 1 background */
--color-card-2: #FFF4E6;       /* Card 2 background */
```

**Logo Azienda**: Sostituisci il testo nel header con:
```html
<img src="your-logo.png" alt="Company" />
```

**Loghi Provider**: Aggiungi loghi reali dei servizi terzi nella cartella `/assets/logos/`

## 📖 Documentazione

- **[Nuove Funzionalità v2.0](NUOVE_FUNZIONALITA.md)** - Guida completa alle nuove sezioni
- **[Preview HTML](PREVIEW.html)** - Anteprima del layout generato
- **[Analisi Gap](CONTENT_GAP_ANALYSIS.md)** - Confronto con iubenda

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Accessibility audit
npm run audit:a11y
```

## Deployment

### Vercel (Consigliato)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload della cartella 'out' o deploy da Git
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Conformità GDPR

Questo strumento implementa i requisiti GDPR secondo:
- Articolo 13 (Informazioni da fornire qualora i dati personali siano raccolti presso l'interessato)
- Articolo 14 (Informazioni da fornire qualora i dati personali non siano stati ottenuti presso l'interessato)

**Nota**: Si consiglia sempre di consultare un legale specializzato per verificare la conformità completa.

## Contributi

I contributi sono benvenuti! Apri una Issue o invia una Pull Request.

## Licenza

MIT License - vedi il file LICENSE per i dettagli.
