# GDPR Privacy Policy Builder

Un generatore di privacy policy GDPR-compliant con interfaccia drag & drop costruito con Next.js 14 e shadcn/ui.

## Caratteristiche

- 🎯 **GDPR Compliant**: Tutte le sezioni obbligatorie previste dal Regolamento Europeo
- 🎨 **Drag & Drop**: Interfaccia intuitiva per comporre la privacy policy
- 📝 **Editor Integrato**: Modifica in tempo reale con anteprima markdown
- 💾 **Persistenza Locale**: Salva automaticamente il lavoro nel browser
- 📤 **Export Multiplo**: Scarica in Markdown o copia negli appunti
- 🏢 **Multi-Business**: Template ottimizzati per siti web, SaaS ed e-commerce
- 🌐 **Responsive**: Funziona su desktop, tablet e mobile

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

### Obbligatorie
- ✅ Identità del Titolare del Trattamento
- ✅ Base Giuridica del Trattamento
- ✅ Finalità del Trattamento  
- ✅ Categorie di Dati Personali
- ✅ Diritti degli Interessati

### Opzionali
- Cookie e Tecnologie di Tracciamento
- Trasferimenti Internazionali
- Misure di Sicurezza
- Conservazione dei Dati
- Responsabile Protezione Dati (DPO)
- Modifiche alla Privacy Policy

## Personalizzazione

Il sistema supporta placeholder automatici che vengono sostituiti con i dati aziendali:

- `[RAGIONE_SOCIALE]` → Nome azienda
- `[INDIRIZZO_COMPLETO]` → Indirizzo completo
- `[EMAIL_TITOLARE]` → Email di contatto
- `[TELEFONO]` → Numero di telefono
- `[SITO_WEB]` → URL del sito web

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
