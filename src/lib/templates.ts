import { SemanticComponent } from '@/types'

export const GDPR_TEMPLATES: SemanticComponent[] = [
  {
    id: 'identity',
    title: 'Identità del Titolare',
    category: 'identity',
    required: true,
    gdprArticles: ['Art. 13(1)(a)', 'Art. 14(1)(a)'],
    description: 'Informazioni di contatto del titolare del trattamento',
    template: `## Titolare del Trattamento

Il Titolare del trattamento dei dati personali è **[RAGIONE_SOCIALE]**, con sede legale in [INDIRIZZO_COMPLETO].

**Contatti:**
- Email: [EMAIL_TITOLARE]
- Telefono: [TELEFONO]
- Sito web: [SITO_WEB]

Il Titolare può essere contattato per qualsiasi questione relativa al trattamento dei dati personali e all'esercizio dei diritti previsti dal GDPR.`
  },
  {
    id: 'legal_basis',
    title: 'Base Giuridica',
    category: 'legal',
    required: true,
    gdprArticles: ['Art. 13(1)(c)', 'Art. 14(1)(c)'],
    description: 'Base giuridica per il trattamento dei dati',
    template: `## Base Giuridica del Trattamento

Il trattamento dei dati personali è basato su:

- **Consenso dell'interessato** (Art. 6(1)(a) GDPR): per [DESCRIZIONE_CONSENSO]
- **Esecuzione contrattuale** (Art. 6(1)(b) GDPR): per [DESCRIZIONE_CONTRATTO]  
- **Obbligo legale** (Art. 6(1)(c) GDPR): per [DESCRIZIONE_OBBLIGO]
- **Interesse legittimo** (Art. 6(1)(f) GDPR): per [DESCRIZIONE_INTERESSE]

Quando il trattamento è basato sul consenso, l'interessato ha il diritto di revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.`
  },
  {
    id: 'purposes',
    title: 'Finalità del Trattamento',
    category: 'data-processing',
    required: true,
    gdprArticles: ['Art. 13(1)(c)', 'Art. 14(1)(c)'],
    description: 'Scopi per cui vengono trattati i dati',
    template: `## Finalità del Trattamento

I dati personali vengono trattati per le seguenti finalità:

### Finalità Primarie
- **Erogazione del servizio**: [DESCRIZIONE_SERVIZIO]
- **Gestione della relazione contrattuale**: [DESCRIZIONE_CONTRATTO]
- **Assistenza clienti**: [DESCRIZIONE_ASSISTENZA]

### Finalità Secondarie (previa acquisizione del consenso)
- **Marketing diretto**: [DESCRIZIONE_MARKETING]
- **Analisi statistiche**: [DESCRIZIONE_ANALISI]
- **Miglioramento dei servizi**: [DESCRIZIONE_MIGLIORAMENTO]

I dati saranno trattati esclusivamente per le finalità indicate e non saranno utilizzati in modo incompatibile con tali finalità.`
  },
  {
    id: 'categories',
    title: 'Categorie di Dati',
    category: 'data-processing',
    required: true,
    gdprArticles: ['Art. 13(1)(c)', 'Art. 14(1)(c)'],
    description: 'Tipologie di dati personali raccolti',
    template: `## Categorie di Dati Personali Trattati

### Dati di Identificazione
- Nome e cognome
- Indirizzo email
- Numero di telefono
- [ALTRI_DATI_IDENTIFICATIVI]

### Dati di Navigazione
- Indirizzo IP
- Tipo di browser e dispositivo
- Sistema operativo
- Pagine visitate e durata della visita

### Dati di Utilizzo del Servizio
- [DESCRIZIONE_DATI_UTILIZZO]

### Dati Economici (se applicabile)
- [DESCRIZIONE_DATI_ECONOMICI]

**Non trattiamo categorie particolari di dati personali** (ex dati sensibili) ai sensi dell'Art. 9 GDPR, salvo diversa specifica indicazione.`
  },
  {
    id: 'data_subject_rights',
    title: 'Diritti degli Interessati',
    category: 'rights',
    required: true,
    gdprArticles: ['Art. 13(2)(b)', 'Art. 14(2)(c)'],
  description: "Diritti GDPR dell'interessato",
    template: `## Diritti degli Interessati

In conformità al GDPR, ogni interessato ha il diritto di:

### Diritti di Accesso e Trasparenza
- **Diritto di accesso** (Art. 15): ottenere conferma che sia o meno in corso un trattamento di dati personali e accedere ai dati
- **Diritto alla portabilità** (Art. 20): ricevere i dati in formato strutturato e trasmetterli a un altro titolare

### Diritti di Controllo
- **Diritto di rettifica** (Art. 16): correggere dati inesatti o completare dati incompleti
- **Diritto alla cancellazione** (Art. 17): ottenere la cancellazione dei dati ("diritto all'oblio")
- **Diritto alla limitazione** (Art. 18): limitare il trattamento in specifiche circostanze

### Diritto di Opposizione
- **Diritto di opposizione** (Art. 21): opporsi al trattamento per motivi legittimi
- **Opposizione al marketing diretto**: opporsi in qualsiasi momento al trattamento per marketing

### Processo decisionali automatizzati
- **Diritto a non essere sottoposto a decisioni automatizzate** (Art. 22): incluse quelle basate su profilazione

**Per esercitare i propri diritti**, contattare: [EMAIL_DIRITTI] specificando nell'oggetto "Esercizio diritti GDPR".

L'interessato ha inoltre il **diritto di proporre reclamo** all'Autorità Garante per la Protezione dei Dati Personali.`
  },
  {
    id: 'retention',
    title: 'Conservazione dei Dati',
    category: 'data-processing',
    required: false,
    gdprArticles: ['Art. 13(2)(a)', 'Art. 14(2)(a)'],
    description: 'Periodo di conservazione dei dati',
    template: `## Periodo di Conservazione

I dati personali saranno conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti:

### Tempi di Conservazione per Finalità
- **Erogazione del servizio**: [PERIODO_SERVIZIO]
- **Obblighi contrattuali**: per tutta la durata del contratto e [PERIODO_POST_CONTRATTO]
- **Obblighi legali**: [PERIODO_LEGALE] dalla cessazione del rapporto
- **Marketing**: fino alla revoca del consenso o [PERIODO_MARKETING]

### Criteri per la Determinazione del Periodo
I criteri utilizzati per determinare il periodo di conservazione sono:
- Necessità per l'erogazione del servizio
- Obblighi legali e contrattuali
- Legittimi interessi del titolare
- Aspettative ragionevoli dell'interessato

Decorsi i termini sopra indicati, i dati saranno cancellati o resi anonimi in modo irreversibile.`
  },
  {
    id: 'recipients',
    title: 'Destinatari dei Dati',
    category: 'third-parties',
    required: false,
    gdprArticles: ['Art. 13(1)(e)', 'Art. 14(1)(e)'],
    description: 'Soggetti che possono accedere ai dati',
    template: `## Destinatari e Categorie di Destinatari

I dati personali potranno essere comunicati a:

### Personale Interno
- Dipendenti e collaboratori autorizzati al trattamento
- Amministratori di sistema
- [ALTRE_FIGURE_INTERNE]

### Soggetti Esterni
- **Fornitori di servizi IT**: [DESCRIZIONE_FORNITORI_IT]
- **Consulenti legali e commerciali**: [DESCRIZIONE_CONSULENTI]
- **Istituti di pagamento**: per la gestione dei pagamenti (se applicabile)
- **Corrieri e spedizionieri**: per la consegna dei prodotti (se applicabile)

### Responsabili del Trattamento
I soggetti esterni che trattano dati per nostro conto sono designati come Responsabili del Trattamento ai sensi dell'Art. 28 GDPR e sono vincolati da specifici obblighi contrattuali.

### Autorità Pubbliche
I dati potranno essere comunicati ad autorità pubbliche quando richiesto dalla legge o su ordine delle autorità competenti.

**I dati non saranno mai ceduti a terzi per finalità commerciali** senza il preventivo consenso dell'interessato.`
  },
  {
    id: 'transfers',
    title: 'Trasferimenti Internazionali',
    category: 'third-parties',
    required: false,
    gdprArticles: ['Art. 13(1)(f)', 'Art. 14(1)(f)'],
    description: 'Trasferimenti di dati verso paesi terzi',
    template: `## Trasferimento dei Dati verso Paesi Terzi

### Trasferimenti nell'UE/SEE
I dati personali sono principalmente trattati all'interno dell'Unione Europea e dello Spazio Economico Europeo, garantendo il massimo livello di protezione.

### Trasferimenti Extra-UE
Quando necessario per l'erogazione del servizio, i dati potrebbero essere trasferiti verso:

- **Stati Uniti**: [DESCRIZIONE_TRASFERIMENTO_USA]
  - Garanzie: [GARANZIE_USA] (es. Standard Contractual Clauses, DPF)
- **Altri Paesi**: [DESCRIZIONE_ALTRI_PAESI]
  - Garanzie: [GARANZIE_ALTRI_PAESI]

### Garanzie Adeguate
Tutti i trasferimenti verso paesi terzi sono effettuati con garanzie adeguate:
- **Clausole Contrattuali Standard** approvate dalla Commissione Europea
- **Certificazioni** riconosciute dall'UE
- **Codici di Condotta** approvati
- **Decisioni di Adeguatezza** della Commissione Europea

L'interessato può ottenere copia delle garanzie adottate contattando [EMAIL_CONTATTO].`
  },
  {
    id: 'cookies',
    title: 'Cookie e Tecnologie di Tracciamento',
    category: 'cookies',
    required: false,
    gdprArticles: ['Art. 13', 'Art. 14'],
    description: 'Uso di cookie e tecnologie simili',
    template: `## Cookie e Tecnologie di Tracciamento

### Cosa sono i Cookie
I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita il nostro sito web.

### Tipologie di Cookie Utilizzati

#### Cookie Tecnici (Necessari)
- **Cookie di sessione**: per il funzionamento del sito
- **Cookie di autenticazione**: per mantenere l'accesso
- Base giuridica: Interesse legittimo (Art. 6(1)(f) GDPR)

#### Cookie Analitici
- **Google Analytics**: [DESCRIZIONE_ANALYTICS]
- **Altri servizi**: [DESCRIZIONE_ALTRI_ANALYTICS]
- Base giuridica: Consenso (Art. 6(1)(a) GDPR)

#### Cookie di Marketing
- **Remarketing**: [DESCRIZIONE_REMARKETING]
- **Social media**: [DESCRIZIONE_SOCIAL]
- Base giuridica: Consenso (Art. 6(1)(a) GDPR)

### Gestione dei Cookie
L'utente può:
- **Gestire le preferenze** attraverso il banner cookie
- **Disabilitare i cookie** nelle impostazioni del browser
- **Revocare il consenso** in qualsiasi momento

### Durata dei Cookie
- Cookie tecnici: durata della sessione
- Cookie analitici: [DURATA_ANALYTICS]
- Cookie di marketing: [DURATA_MARKETING]

Per maggiori informazioni consulta la nostra [Cookie Policy dettagliata](link-cookie-policy).`
  },
  {
    id: 'security',
    title: 'Misure di Sicurezza',
    category: 'security',
    required: false,
    gdprArticles: ['Art. 32'],
    description: 'Misure tecniche e organizzative di sicurezza',
    template: `## Misure di Sicurezza

In conformità all'Art. 32 del GDPR, abbiamo implementato adeguate misure tecniche e organizzative per garantire un livello di sicurezza adeguato al rischio.

### Misure Tecniche
- **Crittografia**: tutti i dati sensibili sono crittografati
- **Controllo degli accessi**: sistemi di autenticazione e autorizzazione
- **Firewall e antivirus**: protezione da intrusioni e malware
- **Backup regolari**: per garantire la disponibilità dei dati
- **Monitoraggio**: sistemi di rilevamento delle anomalie

### Misure Organizzative
- **Formazione del personale**: su sicurezza e privacy
- **Controllo degli accessi fisici**: alle aree di elaborazione
- **Procedure di incident response**: per la gestione degli incidenti
- **Audit regolari**: per verificare l'efficacia delle misure
- **Accordi di riservatezza**: per tutto il personale autorizzato

### Notifica delle Violazioni
In caso di violazione dei dati personali che presenti un rischio per i diritti e le libertà degli interessati:
- Notificheremo l'Autorità Garante entro 72 ore
- Comunicheremo agli interessati senza ingiustificato ritardo
- Documenteremo l'incidente nel registro interno

### Valutazione d'Impatto (DPIA)
Quando richiesto, effettuiamo valutazioni d'impatto sulla protezione dei dati per trattamenti ad alto rischio.`
  },
  {
    id: 'dpo',
    title: 'Responsabile Protezione Dati',
    category: 'identity',
    required: false,
    gdprArticles: ['Art. 13(1)(b)', 'Art. 14(1)(b)'],
    description: 'Contatti del DPO (se designato)',
    template: `## Responsabile della Protezione dei Dati (DPO)

[SE_DPO_DESIGNATO]
È stato designato un Responsabile della Protezione dei Dati (Data Protection Officer - DPO) ai sensi dell'Art. 37 del GDPR.

**Contatti del DPO:**
- Nome: [NOME_DPO]
- Email: [EMAIL_DPO]
- Telefono: [TELEFONO_DPO]
- Indirizzo: [INDIRIZZO_DPO]

Il DPO può essere contattato per:
- Questioni relative al trattamento dei dati personali
- Esercizio dei diritti previsti dal GDPR
- Informazioni sulla protezione dei dati
- Segnalazione di possibili violazioni

[/SE_DPO_DESIGNATO]

[SE_NO_DPO]
Non è stato designato un Responsabile della Protezione dei Dati in quanto la designazione non è obbligatoria per la nostra organizzazione secondo i criteri dell'Art. 37 GDPR.

Per questioni relative alla protezione dei dati, contattare direttamente il Titolare del trattamento.
[/SE_NO_DPO]`
  },
  {
    id: 'changes',
    title: 'Modifiche alla Privacy Policy',
    category: 'legal',
    required: false,
    gdprArticles: ['Art. 13', 'Art. 14'],
  description: "Politica di aggiornamento dell'informativa",
    template: `## Modifiche alla Presente Informativa

### Aggiornamenti
La presente informativa sulla privacy può essere aggiornata periodicamente per:
- Modifiche normative
- Cambiamenti nei servizi offerti
- Miglioramenti delle misure di sicurezza
- Evoluzione delle tecnologie utilizzate

### Notifica delle Modifiche
In caso di modifiche sostanziali:
- Pubblicheremo la versione aggiornata su questa pagina
- Indicheremo la data di ultimo aggiornamento
- Notificheremo gli interessati tramite [METODO_NOTIFICA]
- Richiederemo nuovo consenso quando necessario

### Versioning
- **Versione attuale**: [VERSIONE_CORRENTE]
- **Data ultimo aggiornamento**: [DATA_ULTIMO_AGGIORNAMENTO]
- **Data entrata in vigore**: [DATA_ENTRATA_VIGORE]

### Storico delle Modifiche
[STORICO_MODIFICHE]

Si consiglia di consultare periodicamente questa pagina per rimanere informati su eventuali aggiornamenti.

### Periodo di Transizione
Le modifiche entreranno in vigore [GIORNI_TRANSIZIONE] giorni dopo la pubblicazione, salvo diversa indicazione per modifiche urgenti richieste da autorità competenti.`
  }
]

export default GDPR_TEMPLATES
