# Esempi di Utilizzo - Privacy Policy Builder v2.0

## 🎯 Caso d'Uso 1: Sito Web Corporate

### Scenario
Azienda italiana con:
- Sito web informativo
- Form contatti
- Newsletter
- Google Analytics
- Cookie di profilazione

### Sezioni Consigliate (in ordine)

1. **Riepilogo** - Overview immediata
2. **Identità del Titolare** - Dati azienda
3. **Categorie di Dati** - Dati raccolti
4. **Finalità del Trattamento** - Perché raccogliamo dati
5. **Base Giuridica** - Fondamento legale
6. **Dettagli Servizi Terzi** - Google Analytics, Mailchimp, etc.
7. **Cookie Policy** - Cookie tecnici, analytics, marketing
8. **Periodo di Conservazione** - Tempi di retention
9. **Misure di Sicurezza** - Come proteggiamo i dati
10. **Diritti degli Interessati** - Diritti GDPR base
11. **Info Utenti UE** - Spiegazioni dettagliate
12. **Come Possiamo Aiutare** - Link per esercizio diritti
13. **Contatti** - Riferimenti completi

### Variabili da Compilare

```
RAGIONE_SOCIALE: "Acme S.r.l."
INDIRIZZO_COMPLETO: "Via Roma 1, 20100 Milano (MI), Italia"
PARTITA_IVA: "IT12345678901"
EMAIL_TITOLARE: "info@acme.it"
EMAIL_DIRITTI: "privacy@acme.it"
TELEFONO: "+39 02 12345678"
SITO_WEB: "https://www.acme.it"
PEC_TITOLARE: "acme@pec.it"
```

### Servizi Terzi da Configurare

In **"Dettagli Servizi Terzi"**, personalizza:
- Google Analytics 4 → Aggiungi ID proprietà
- Mailchimp → Inserisci account email marketing
- Google Tag Manager → Container ID

### Output
Clicca su **"Pubblica HTML"** → File pronto per upload su `/privacy-policy.html`

---

## 🛒 Caso d'Uso 2: E-commerce

### Scenario
Negozio online con:
- Registrazione utenti
- Carrello e checkout
- Pagamenti (Stripe)
- Spedizioni
- Marketing automation
- Retargeting (Meta Pixel)

### Sezioni Consigliate

1. **Riepilogo**
2. **Identità del Titolare**
3. **Categorie di Dati** (include dati pagamento)
4. **Finalità del Trattamento** (include evasione ordini)
5. **Base Giuridica** (contratto + consenso marketing)
6. **Dettagli Servizi Terzi**:
   - Stripe (pagamenti)
   - Corriere espresso (spedizioni)
   - Meta Pixel (retargeting)
   - Mailchimp (email marketing)
7. **Cookie Policy** (tecnici + marketing)
8. **Profilazione e Decisioni Automatizzate** (se raccomandazioni prodotti)
9. **Periodo di Conservazione** (ordini: 10 anni per fisco)
10. **Trasferimenti Internazionali** (se Stripe USA)
11. **Misure di Sicurezza** (enfasi su PCI-DSS)
12. **Diritti degli Interessati**
13. **Info Utenti UE**
14. **Come Possiamo Aiutare**
15. **Reclami** (per controversie ordini)
16. **Contatti**

### Variabili Extra

```
DESCRIZIONE_SERVIZIO: "vendita online di prodotti elettronici"
DESCRIZIONE_CONTRATTO: "esecuzione ordini, spedizione, fatturazione"
DESCRIZIONE_MARKETING: "invio offerte personalizzate, newsletter prodotti"
DESCRIZIONE_PROFILAZIONE: "raccomandazioni prodotti basate su acquisti precedenti"
```

### Focus Importante

**Dati di Pagamento**: Specifica che i dati completi delle carte NON vengono memorizzati sui tuoi server, ma gestiti da Stripe (PCI-DSS compliant).

### Output
Privacy policy completa per e-commerce con sezioni su pagamenti sicuri.

---

## 💻 Caso d'Uso 3: SaaS Application

### Scenario
Piattaforma SaaS con:
- Registrazione + login (OAuth)
- Dashboard utente
- Upload file
- Collaborazione team
- API pubblica
- Analytics avanzate

### Sezioni Consigliate

1. **Riepilogo**
2. **Identità del Titolare** + **DPO** (se >250 dipendenti)
3. **Categorie di Dati**:
   - Dati account (email, password, nome)
   - Dati di utilizzo (log, API calls)
   - Contenuti utente (file uploadati)
4. **Finalità del Trattamento**:
   - Erogazione servizio
   - Miglioramento piattaforma
   - Assistenza tecnica
5. **Base Giuridica**:
   - Contratto (erogazione servizio)
   - Interesse legittimo (analytics, sicurezza)
6. **Dettagli Servizi Terzi**:
   - Vercel/AWS (hosting)
   - Stripe (subscription billing)
   - Auth0/Supabase (autenticazione)
   - Sentry (error tracking)
   - Intercom (support chat)
7. **Cookie Policy** (solo tecnici se app SaaS)
8. **Periodo di Conservazione**:
   - Account attivo: fino a cancellazione
   - Account cancellato: backup 30 giorni
   - Log: 12 mesi
9. **Trasferimenti Internazionali** (se cloud USA)
10. **Misure di Sicurezza**:
    - Crittografia end-to-end
    - 2FA obbligatoria
    - SOC 2 Type II compliance
11. **Accountability** (dimostra conformità GDPR)
12. **Data Breach Notification** (procedura incidenti)
13. **Diritti degli Interessati** + Data Portability (export dati)
14. **Info Utenti UE**
15. **Come Possiamo Aiutare** (include link export dati)
16. **API Terms** (se API pubblica)
17. **Contatti**

### Variabili Custom

```
DESCRIZIONE_SERVIZIO: "piattaforma SaaS per gestione progetti"
DURATA_CONSERVAZIONE_POST_CANCELLAZIONE: "30 giorni (backup)"
DURATA_LOG: "12 mesi"
CERTIFICAZIONI: "SOC 2 Type II, ISO 27001"
```

### Feature Speciale: Data Export

In **"Come Possiamo Aiutare"**, aggiungi sezione:
```markdown
### Esporta i tuoi dati

Puoi esportare tutti i tuoi dati in formato JSON direttamente dal tuo account:
1. Vai su Impostazioni > Privacy
2. Clicca su "Esporta dati"
3. Ricevi email con link download (valido 24h)
```

### Output
Privacy policy enterprise-grade per SaaS B2B.

---

## 🏥 Caso d'Uso 4: Healthcare App (Dati Particolari)

### Scenario
App salute/fitness che raccoglie:
- Dati salute (peso, battito, etc.)
- Dati biometrici (impronte digitali per login)

### ⚠️ ATTENZIONE
I **dati particolari** (Art. 9 GDPR) richiedono:
- Consenso **esplicito**
- Base giuridica più forte
- Misure di sicurezza rafforzate
- Possibile DPIA obbligatoria

### Sezioni Consigliate

1. **Riepilogo** (enfasi su dati sensibili)
2. **Identità del Titolare** + **DPO** (OBBLIGATORIO)
3. **Categorie di Dati**:
   - **Sezione dedicata "Dati Particolari (Art. 9)"**
   - Specifica: dati salute, biometrici
   - Base giuridica: consenso esplicito (Art. 9(2)(a))
4. **Finalità del Trattamento**:
   - Monitoraggio salute
   - Personalizzazione allenamenti
   - Ricerca scientifica (anonimizzata)
5. **Base Giuridica**:
   - Consenso esplicito per dati salute
   - Contratto per erogazione servizio
6. **Dettagli Servizi Terzi**:
   - Cloud provider (con BAA - Business Associate Agreement)
   - Nessun provider marketing con dati salute
7. **Cookie Policy** (SOLO tecnici, no profilazione)
8. **DPIA** (Data Protection Impact Assessment):
   - Obbligatoria per dati salute su larga scala
   - Include sezione con sintesi DPIA
9. **Periodo di Conservazione** (minimo necessario)
10. **Trasferimenti Internazionali** (garanzie rafforzate)
11. **Misure di Sicurezza**:
    - Crittografia AES-256
    - Pseudonimizzazione
    - Access control rigoroso
    - Audit log completi
12. **Data Breach Notification** (procedura dettagliata)
13. **Diritti degli Interessati** (incluso diritto a non essere profilato)
14. **Info Utenti UE** (focus su consenso e revoca)
15. **Come Possiamo Aiutare** (revoca consenso facile)
16. **Contatti** + **DPO dedicato**

### Variabili Specifiche

```
TIPO_DATI_PARTICOLARI: "dati relativi alla salute (Art. 4(15) GDPR)"
BASE_GIURIDICA_DATI_PARTICOLARI: "consenso esplicito (Art. 9(2)(a))"
CERTIFICAZIONI_HEALTHCARE: "ISO 27001, HIPAA (se USA), SOC 2 Type II"
EMAIL_DPO: "dpo@healthapp.com" (OBBLIGATORIO)
```

### Template Consenso

Crea form consenso separato:
```
☐ Acconsento al trattamento dei miei dati relativi alla salute 
  (peso, battito cardiaco, pressione) per le finalità di 
  monitoraggio e personalizzazione del programma fitness.
  
☐ Acconsento al trattamento dei miei dati biometrici 
  (impronta digitale) per l'autenticazione all'app.
  
Comprendo che posso revocare il consenso in qualsiasi momento 
inviando email a privacy@healthapp.com.
```

### Output
Privacy policy conforme per trattamento dati particolari (Art. 9 GDPR).

---

## 🎓 Caso d'Uso 5: Minori (<16 anni)

### Scenario
Piattaforma educativa per bambini/ragazzi

### ⚠️ ATTENZIONE
Art. 8 GDPR: consenso genitoriale richiesto per minori <16 anni (in Italia <14 anni).

### Sezioni Specifiche

1. **Riepilogo** (chiarire età minima)
2. **Identità del Titolare**
3. **Categorie di Dati**:
   - Sezione **"Dati di Minori (Art. 8 GDPR)"**
   - Età minima: 14 anni (Italia)
   - Consenso genitoriale obbligatorio
4. **Sistema Verifica Età**:
   - Come verifichi l'età
   - Come raccogli consenso genitoriale
5. **Finalità Limitate**:
   - Solo necessarie per erogazione servizio
   - NO profilazione/marketing verso minori
6. **Cookie Policy** (solo tecnici, no tracciamento)
7. **Misure di Sicurezza Rafforzate**
8. **Diritti Genitori**:
   - Accesso dati figlio
   - Cancellazione su richiesta
   - Monitoraggio attività
9. **Info Utenti UE**
10. **Come Possiamo Aiutare** (sezione genitori)
11. **Contatti**

### Variabili

```
ETA_MINIMA: "14 anni"
ETA_CONSENSO_GENITORIALE: "sotto i 14 anni"
DESCRIZIONE_VERIFICA_ETA: "verifica data di nascita + email genitore per consenso"
```

### Output
Privacy policy child-safe conforme Art. 8 GDPR.

---

## 📱 Tips Generali

### Ordine Consigliato Universale

```
1. Riepilogo (sempre primo)
2. Identità Titolare
3. Categorie Dati
4. Finalità
5. Base Giuridica
6. Servizi Terzi
7. Cookie
8. [Sezioni specifiche settore]
9. Conservazione
10. Sicurezza
11. Diritti Interessati
12. Info UE
13. Come Possiamo Aiutare (sempre penultimo)
14. Contatti (sempre ultimo)
```

### Lunghezza Ideale

- **Minima**: 8-10 sezioni (sito semplice)
- **Standard**: 12-14 sezioni (web app)
- **Completa**: 15-18 sezioni (SaaS/e-commerce)
- **Enterprise**: 20+ sezioni (healthcare, fintech)

### Checklist Pre-Pubblicazione

- [ ] Tutte le variabili compilate (no `[PLACEHOLDER]`)
- [ ] Link mailto funzionanti
- [ ] Email privacy realmente monitorata
- [ ] Servizi terzi aggiornati
- [ ] Cookie correttamente elencati
- [ ] Link privacy policy provider verificati
- [ ] Data ultimo aggiornamento corretta
- [ ] Link nel footer del sito funzionante
- [ ] Test su mobile
- [ ] Validazione HTML (W3C Validator)

### Manutenzione

**Quando aggiornare**:
- ✅ Aggiungi nuovo servizio terzo (es. nuovo analytics)
- ✅ Cambi finalità trattamento (es. inizi marketing)
- ✅ Modifichi tempi conservazione
- ✅ Aggiungi nuova tipologia di dati raccolti
- ✅ Cambi provider (es. da AWS a Google Cloud)
- ✅ Almeno 1 volta l'anno (best practice)

**Non serve aggiornare per**:
- ❌ Semplici correzioni typo
- ❌ Cambio numero telefono (solo contatti)
- ❌ Miglioramenti UI del sito (se non cambia tracking)

---

## 🎨 Customizzazione Avanzata

### Cambiare Brand Colors

Nell'HTML generato, modifica:

```css
:root {
  --color-primary: #YOUR_BRAND_PRIMARY;
  --color-secondary: #YOUR_BRAND_SECONDARY;
  --color-card-1: #YOUR_CARD_BG_1;
  --color-card-2: #YOUR_CARD_BG_2;
}
```

### Aggiungere Logo Azienda

Nel header HTML, sostituisci:

```html
<h1>Privacy Policy di <strong>TUA AZIENDA</strong></h1>
```

con:

```html
<img src="/logo.svg" alt="TUA AZIENDA" style="height: 50px;" />
<h1>Privacy Policy</h1>
```

### Integrare Cookie Banner

Aggiungi prima del `</body>`:

```html
<script src="https://cdn.cookiebot.com/CONSENT-ID.js" async></script>
```

Oppure usa:
- OneTrust
- Cookiebot
- Iubenda Cookie Solution
- Termly

---

**Buon lavoro! 🚀**

Per domande specifiche, consulta [NUOVE_FUNZIONALITA.md](NUOVE_FUNZIONALITA.md)
