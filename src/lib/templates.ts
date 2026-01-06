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

Ai sensi degli **articoli 13 e 14 del Regolamento UE 2016/679** (GDPR), il Titolare del trattamento dei dati personali è:

**[RAGIONE_SOCIALE]**
- Sede legale: [INDIRIZZO_COMPLETO]
- Partita IVA / Codice Fiscale: [PARTITA_IVA]
- PEC: [PEC_TITOLARE]
- Email: [EMAIL_TITOLARE]
- Telefono: [TELEFONO]
- Sito web: [SITO_WEB]

Il Titolare può essere contattato per qualsiasi questione relativa al trattamento dei dati personali e all'esercizio dei diritti previsti dal GDPR presso i recapiti sopra indicati.

### Rappresentante nell'Unione Europea (se applicabile)
In conformità all'**Art. 27 GDPR**, per le organizzazioni non stabilite nell'UE:
- Rappresentante: [NOME_RAPPRESENTANTE]
- Indirizzo: [INDIRIZZO_RAPPRESENTANTE]
- Email: [EMAIL_RAPPRESENTANTE]`
  },
  {
    id: 'legal_basis',
    title: 'Base Giuridica del Trattamento',
    category: 'legal',
    required: true,
    gdprArticles: ['Art. 6', 'Art. 13(1)(c)', 'Art. 14(1)(c)'],
    description: 'Basi giuridiche per il trattamento dei dati personali',
    template: `## Base Giuridica del Trattamento

In conformità all'**Art. 6 del GDPR**, il trattamento dei dati personali è lecito solo se e nella misura in cui ricorre almeno una delle seguenti condizioni:

### Consenso (Art. 6(1)(a) GDPR)
Il trattamento è basato sul consenso esplicito e informato dell'interessato per:
- [DESCRIZIONE_CONSENSO]
- Newsletter e comunicazioni promozionali
- Profilazione e marketing personalizzato
- Cookie non tecnici e tecnologie di tracciamento

L'interessato ha il diritto di revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca (**Art. 7(3) GDPR**).

### Esecuzione Contrattuale (Art. 6(1)(b) GDPR)
Il trattamento è necessario all'esecuzione di un contratto di cui l'interessato è parte o all'esecuzione di misure precontrattuali per:
- [DESCRIZIONE_CONTRATTO]
- Erogazione dei servizi richiesti
- Gestione ordini e fatturazione
- Assistenza tecnica e customer care

### Obbligo Legale (Art. 6(1)(c) GDPR)
Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il titolare:
- [DESCRIZIONE_OBBLIGO]
- Adempimenti fiscali e contabili (D.P.R. 600/1973)
- Obblighi di fatturazione (D.P.R. 633/1972)
- Conservazione documenti contabili (Art. 2220 c.c.)
- Antiriciclaggio (D.Lgs. 231/2007)

### Interesse Legittimo (Art. 6(1)(f) GDPR)
Il trattamento è necessario per il perseguimento del legittimo interesse del titolare:
- [DESCRIZIONE_INTERESSE]
- Sicurezza informatica e prevenzione frodi
- Miglioramento dei servizi offerti
- Marketing diretto verso clienti esistenti (soft spam)
- Difesa di un diritto in sede giudiziaria

Il bilanciamento tra l'interesse legittimo del titolare e i diritti e le libertà fondamentali dell'interessato è stato valutato in conformità all'**Art. 6(1)(f) GDPR**.

### Interesse Vitale (Art. 6(1)(d) GDPR)
Quando applicabile, il trattamento può essere necessario per proteggere gli interessi vitali dell'interessato o di un'altra persona fisica.

### Interesse Pubblico (Art. 6(1)(e) GDPR)
Quando applicabile, il trattamento può essere necessario per l'esecuzione di un compito di interesse pubblico o connesso all'esercizio di pubblici poteri.`
  },
  {
    id: 'purposes',
    title: 'Finalità del Trattamento',
    category: 'data-processing',
    required: true,
    gdprArticles: ['Art. 5(1)(b)', 'Art. 13(1)(c)', 'Art. 14(1)(c)'],
    description: 'Finalità specifiche, esplicite e legittime del trattamento',
    template: `## Finalità del Trattamento

In conformità al **principio di limitazione delle finalità (Art. 5(1)(b) GDPR)**, i dati personali sono raccolti per finalità determinate, esplicite e legittime.

### Finalità Primarie (Base Contrattuale e Obbligo di Legge)

#### 1. Erogazione del Servizio (Art. 6(1)(b) GDPR)
- [DESCRIZIONE_SERVIZIO]
- Gestione account utente e autenticazione
- Fornitura delle funzionalità richieste
- Elaborazione richieste e transazioni

#### 2. Gestione Contrattuale (Art. 6(1)(b) GDPR)
- [DESCRIZIONE_CONTRATTO]
- Esecuzione del contratto di fornitura servizi
- Gestione ordini e pagamenti
- Fatturazione e adempimenti contabili

#### 3. Adempimenti Legali (Art. 6(1)(c) GDPR)
- Adempimenti fiscali, contabili e amministrativi
- Conservazione documenti obbligatoria per legge
- Comunicazioni alle autorità competenti quando richiesto
- Adempimenti in materia di antiriciclaggio (D.Lgs. 231/2007)

#### 4. Assistenza e Supporto (Art. 6(1)(b) GDPR)
- [DESCRIZIONE_ASSISTENZA]
- Customer care e help desk
- Gestione reclami e controversie
- Risoluzioni problematiche tecniche

### Finalità Secondarie (Consenso Esplicito)

#### 5. Marketing Diretto (Art. 6(1)(a) GDPR)
- [DESCRIZIONE_MARKETING]
- Invio newsletter e comunicazioni promozionali
- Informazioni su prodotti, servizi ed eventi
- Offerte commerciali personalizzate

**Consenso richiesto**: Sì, esplicito e revocabile in qualsiasi momento

#### 6. Profilazione (Art. 6(1)(a) + Art. 22 GDPR)
- [DESCRIZIONE_PROFILAZIONE]
- Analisi preferenze e comportamento utente
- Personalizzazione contenuti e offerte
- Suggerimenti basati su interessi

**Consenso richiesto**: Sì, esplicito e informato sulla logica utilizzata

#### 7. Analisi e Statistiche (Art. 6(1)(f) GDPR)
- [DESCRIZIONE_ANALISI]
- Miglioramento qualità dei servizi
- Analisi tendenze e statistiche aggregate
- Ottimizzazione user experience

**Base giuridica**: Interesse legittimo del Titolare

#### 8. Sicurezza e Prevenzione Frodi (Art. 6(1)(f) GDPR)
- Prevenzione accessi non autorizzati
- Rilevamento attività sospette
- Protezione da minacce informatiche
- Gestione incident e violazioni

**Base giuridica**: Interesse legittimo del Titolare

### Principio di Compatibilità
Ai sensi dell'**Art. 6(4) GDPR**, qualsiasi ulteriore trattamento per finalità diverse da quelle originarie sarà effettuato solo se compatibile o previo nuovo consenso specifico.

### Limitazione delle Finalità
I dati non saranno utilizzati in modo incompatibile con le finalità per cui sono stati raccolti (**Art. 5(1)(b) GDPR**).`
  },
  {
    id: 'categories',
    title: 'Categorie di Dati Personali',
    category: 'data-processing',
    required: true,
    gdprArticles: ['Art. 4(1)', 'Art. 9', 'Art. 10', 'Art. 13(1)(c)'],
    description: 'Tipologie e categorie di dati personali trattati',
    template: `## Categorie di Dati Personali Trattati

Ai sensi dell'**Art. 4(1) GDPR**, per "dato personale" si intende qualsiasi informazione riguardante una persona fisica identificata o identificabile.

### Dati Identificativi (Art. 4(1) GDPR)
- Nome e cognome
- Codice fiscale / Partita IVA
- Data e luogo di nascita
- Indirizzo di residenza/domicilio
- Numero di telefono (fisso e mobile)
- Indirizzo email
- Username e credenziali di accesso
- [ALTRI_DATI_IDENTIFICATIVI]

### Dati di Contatto
- Indirizzo email (personale/aziendale)
- Numeri di telefono
- Indirizzi fisici
- Profili social media
- PEC (Posta Elettronica Certificata)

### Dati di Navigazione e Tecnici (Art. 122 Codice Privacy)
- Indirizzo IP e geolocalizzazione
- Tipo di browser e versione
- Sistema operativo e dispositivo utilizzato
- Timestamp di accesso e durata sessione
- Pagine visitate e percorsi di navigazione
- Referrer (provenienza)
- User agent e configurazione tecnica
- Cookie e identificatori univoci

### Dati di Utilizzo del Servizio
- [DESCRIZIONE_DATI_UTILIZZO]
- Cronologia transazioni e ordini
- Preferenze e impostazioni account
- Contenuti generati dall'utente
- Interazioni con il servizio
- Log di sistema e attività

### Dati Economici e di Pagamento
- [DESCRIZIONE_DATI_ECONOMICI]
- Dati bancari (IBAN)
- Informazioni carte di credito/debito (ultimi 4 cifre)
- Cronologia pagamenti
- Fatture ed ordini
- Metodo di pagamento preferito

**Nota**: I dati completi delle carte di pagamento sono gestiti direttamente da processori di pagamento certificati PCI-DSS e non vengono mai memorizzati sui nostri server.

### Dati Particolari (Art. 9 GDPR)

**IMPORTANTE**: Le seguenti categorie di dati particolari sono soggette a divieto di trattamento salvo ricorrano specifiche eccezioni previste dall'Art. 9(2) GDPR.

**Stato del trattamento**: [SELEZIONARE]
- ☐ NON trattiamo categorie particolari di dati personali
- ☐ Trattiamo categorie particolari previo consenso esplicito

Se applicabile, le categorie particolari trattate sono:
- [ ] Dati relativi alla salute (Art. 4(15) GDPR)
- [ ] Dati genetici (Art. 4(13) GDPR)
- [ ] Dati biometrici (Art. 4(14) GDPR)
- [ ] Dati che rivelano l'origine razziale o etnica
- [ ] Dati che rivelano opinioni politiche
- [ ] Dati che rivelano convinzioni religiose o filosofiche
- [ ] Dati che rivelano appartenenza sindacale
- [ ] Dati relativi alla vita sessuale o orientamento sessuale

**Base giuridica per il trattamento di dati particolari**:
- [ ] Consenso esplicito (Art. 9(2)(a) GDPR)
- [ ] Obbligo di diritto del lavoro (Art. 9(2)(b) GDPR)
- [ ] Protezione interessi vitali (Art. 9(2)(c) GDPR)
- [ ] Interesse pubblico rilevante (Art. 9(2)(g) GDPR)
- [ ] Medicina preventiva o del lavoro (Art. 9(2)(h) GDPR)
- [ ] Interesse pubblico sanità (Art. 9(2)(i) GDPR)

### Dati Giudiziari (Art. 10 GDPR)

**Stato del trattamento**: [SELEZIONARE]
- ☐ NON trattiamo dati relativi a condanne penali e reati
- ☐ Trattiamo dati giudiziari sotto il controllo dell'autorità pubblica

Se applicabile:
- Tipo di dati giudiziari: [DESCRIZIONE_DATI_GIUDIZIARI]
- Base giuridica: Art. 10 GDPR + [NORMATIVA_NAZIONALE]

### Dati di Minori (Art. 8 GDPR)

**Stato del trattamento**: [SELEZIONARE]
- ☐ Il servizio non è destinato a minori di 16 anni
- ☐ Il servizio tratta dati di minori previo consenso genitoriale

Se applicabile:
- Età minima per l'utilizzo del servizio: [ETÀ_MINIMA] anni
- Consenso genitoriale richiesto per minori di: [ETÀ_CONSENSO] anni
- Sistemi di verifica età implementati: [DESCRIZIONE_VERIFICA]

### Principio di Minimizzazione (Art. 5(1)(c) GDPR)

I dati raccolti sono adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità per cui sono trattati. Non vengono raccolti dati eccedenti o non pertinenti.`
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
  },
  {
    id: 'data_sources',
    title: 'Origine dei Dati',
    category: 'data-processing',
    required: false,
    gdprArticles: ['Art. 14(2)(f)', 'Art. 13'],
    description: 'Fonti da cui provengono i dati personali',
    template: `## Origine dei Dati Personali

Ai sensi dell'**Art. 14(2)(f) GDPR**, quando i dati personali non sono stati raccolti direttamente presso l'interessato, forniamo le seguenti informazioni sulle fonti:

### Dati Raccolti Direttamente

I seguenti dati sono raccolti direttamente dall'interessato:
- Dati forniti durante la registrazione/iscrizione
- Dati inseriti nell'utilizzo del servizio
- Dati comunicati via email, telefono o form di contatto
- Dati forniti volontariamente durante interazioni con il supporto

**Base giuridica**: Consenso (Art. 6(1)(a)) o Esecuzione contratto (Art. 6(1)(b))

### Dati Raccolti da Fonti Pubbliche

Quando applicabile, possiamo raccogliere dati da:
- **Registri pubblici**: [DESCRIZIONE_REGISTRI_PUBBLICI]
  - Esempi: Registro Imprese, Albo Professionale
  - Base giuridica: Art. 6(1)(f) - Interesse legittimo
- **Fonti accessibili al pubblico online**
  - Profili social media pubblici
  - Siti web aziendali
  - Directory professionali

**Finalità**: Verifica identità, prevenzione frodi, arricchimento profilo

### Dati Raccolti da Terze Parti

Possiamo ricevere dati personali da:

#### Partner Commerciali
- **Tipo di partner**: [DESCRIZIONE_PARTNER]
- **Dati ricevuti**: [CATEGORIE_DATI_PARTNER]
- **Finalità**: [FINALIT\u00c0_DATI_PARTNER]
- **Base giuridica**: Interesse legittimo (Art. 6(1)(f))

#### Fornitori di Servizi
- **Data brokers**: [DESCRIZIONE_BROKER] (se applicabile)
- **Servizi di verifica**: [SERVIZI_VERIFICA]
- **Base giuridica**: Art. 6(1)(f) - Prevenzione frodi

#### Social Network (Login Social)
- **Piattaforme**: Facebook, Google, LinkedIn [ALTRI_SOCIAL]
- **Dati ricevuti**: Nome, email, foto profilo, [ALTRI_DATI_SOCIAL]
- **Base giuridica**: Consenso (Art. 6(1)(a))

### Dati Generati Automaticamente

- **Dati di log e navigazione**: generati automaticamente dai nostri sistemi
- **Cookie e tecnologie simili**: installati durante la navigazione
- **Dati analitici**: derivati dall'utilizzo del servizio

**Informativa completa**: Consultare la sezione Cookie Policy

### Categorie di Dati per Fonte

| Categoria Dati | Fonte Diretta | Fonti Pubbliche | Terze Parti | Automatici |
|----------------|---------------|-----------------|-------------|------------|
| Identificativi | ✓ | ✓ | ✓ | - |
| Contatto | ✓ | ✓ | ✓ | - |
| Navigazione | - | - | - | ✓ |
| Utilizzo | ✓ | - | - | ✓ |
| Economici | ✓ | - | ✓ | - |

### Verifica Accuratezza Dati

Quando i dati non sono raccolti direttamente:
- Verifichiamo l'accuratezza delle informazioni ricevute
- Aggiorniamo i dati quando necessario
- Chiediamo conferma all'interessato in caso di dubbi

**Diritto di rettifica**: L'interessato può sempre richiedere la correzione di dati inesatti (Art. 16 GDPR)`
  },
  {
    id: 'data_breach',
    title: 'Violazioni dei Dati (Data Breach)',
    category: 'security',
    required: false,
    gdprArticles: ['Art. 33', 'Art. 34'],
    description: 'Procedure in caso di violazione dei dati personali',
    template: `## Gestione Violazioni dei Dati Personali (Data Breach)

In conformità agli **Articoli 33 e 34 del GDPR**, il Titolare ha implementato procedure per la gestione di eventuali violazioni dei dati personali.

### Definizione di Violazione (Art. 4(12) GDPR)

Per "violazione dei dati personali" si intende una **violazione di sicurezza** che comporta:
- **Distruzione** accidentale o illecita
- **Perdita** di dati personali
- **Modifica** non autorizzata
- **Divulgazione** non autorizzata
- **Accesso** non autorizzato

a dati personali trasmessi, conservati o comunque trattati.

### Tipologie di Violazioni

#### Confidentiality Breach
- Divulgazione o accesso non autorizzato ai dati
- Esempio: Hacking, furto credenziali, email inviate a destinatari errati

#### Integrity Breach
- Modifica non autorizzata dei dati
- Esempio: Alterazione database, corruzione dati

#### Availability Breach
- Perdita di accesso o disponibilità dei dati
- Esempio: Ransomware, cancellazione accidentale, guasto hardware

### Notifica all'Autorità Garante (Art. 33 GDPR)

**Quando notificare**:
- Violazione che presenta un **rischio per i diritti e le libertà** delle persone fisiche
- Obbligo di notifica salvo sia **improbabile** che la violazione presenti un rischio

**Termine**: **72 ore** da quando il titolare ne è venuto a conoscenza

**Contenuto minimo della notifica**:
1. Descrizione della natura della violazione
2. Categorie e numero approssimativo di interessati coinvolti
3. Categorie e numero approssimativo di registrazioni coinvolte
4. Dati di contatto del DPO o altro punto di contatto
5. Descrizione delle probabili conseguenze
6. Misure adottate o proposte per rimediare e attenuare i rischi

**Modalità di notifica**:
- Portale web del Garante: https://www.gpdp.it
- Modulo dedicato per notifica data breach
- PEC: protocollo@pec.gpdp.it

### Comunicazione agli Interessati (Art. 34 GDPR)

**Quando comunicare**:
- Violazione che presenta un **rischio elevato** per i diritti e le libertà delle persone fisiche

**Tempistica**: **Senza ingiustificato ritardo**

**Contenuto della comunicazione**:
- Natura della violazione in linguaggio chiaro e semplice
- Dati di contatto del DPO o altro punto di contatto
- Probabili conseguenze della violazione
- Misure adottate o proposte per rimediare e attenuare i rischi

**Modalità di comunicazione**:
- Email personale dell'interessato
- Comunicazione pubblica sul sito web (se impossibile contatto diretto)
- [ALTRI_CANALI_COMUNICAZIONE]

**Esenzioni dalla comunicazione** (Art. 34(3)):
- Il titolare ha applicato misure tecniche e organizzative di protezione adeguate (es. crittografia)
- Il titolare ha adottato misure successive che escludono il rischio elevato
- La comunicazione richiederebbe sforzi sproporzionati (comunicazione pubblica)

### Registro delle Violazioni (Art. 33(5) GDPR)

Il Titolare mantiene un **registro documentale** di tutte le violazioni, contenente:
- Circostanze della violazione
- Effetti e conseguenze
- Provvedimenti adottati per porvi rimedio

**Finalità del registro**:
- Consentire all'autorità di controllo di verificare il rispetto dell'Art. 33
- Documentare le violazioni e le azioni intraprese
- Analisi per prevenzione future violazioni

### Misure Preventive Implementate

Per ridurre al minimo il rischio di violazioni, abbiamo implementato:

**Misure Tecniche**:
- Crittografia dati at rest e in transit (TLS/SSL, AES-256)
- Sistemi di backup automatici e ridondanti
- Firewall, IDS/IPS, antivirus aggiornati
- Autenticazione multifattore (MFA)
- Monitoraggio continuo e logging
- Segregazione di rete e least privilege access

**Misure Organizzative**:
- Procedure di incident response documentate
- Team di sicurezza dedicato / referente sicurezza
- Formazione periodica del personale
- Audit di sicurezza regolari
- Accordi di riservatezza con dipendenti e fornitori
- Business Continuity Plan (BCP) e Disaster Recovery Plan (DRP)

### Piano di Incident Response

In caso di sospetta violazione:

**Fase 1: Rilevamento e Valutazione** (0-4 ore)
1. Identificazione della potenziale violazione
2. Contenimento immediato (isolamento sistemi compromessi)
3. Valutazione preliminare dell'impatto

**Fase 2: Analisi e Investigazione** (4-24 ore)
1. Analisi forense dell'incidente
2. Determinazione scope e gravità
3. Identificazione interessati coinvolti

**Fase 3: Notifica** (entro 72 ore)
1. Valutazione obblighi di notifica (Art. 33/34)
2. Preparazione comunicazioni
3. Notifica Autorità Garante (se richiesto)
4. Comunicazione interessati (se necessario)

**Fase 4: Rimedio e Lessons Learned** (post-incidente)
1. Implementazione misure correttive
2. Documentazione nel registro violazioni
3. Aggiornamento politiche e procedure
4. Formazione personale su lezioni apprese

### Contatti per Segnalazione Violazioni

Se si sospetta una violazione dei dati personali:
- **Email di emergenza**: [EMAIL_SECURITY]
- **Telefono 24/7**: [TELEFONO_EMERGENZA]
- **PEC**: [PEC_SICUREZZA]

**Tempo di risposta garantito**: [TEMPO_RISPOSTA] ore`
  },
  {
    id: 'profiling_decisions',
    title: 'Profilazione e Decisioni Automatizzate',
    category: 'data-processing',
    required: false,
    gdprArticles: ['Art. 22', 'Art. 13(2)(f)', 'Art. 14(2)(g)'],
    description: 'Informazioni su profilazione e processi decisionali automatizzati',
    template: `## Profilazione e Decisioni Automatizzate

Ai sensi dell'**Art. 22 GDPR** e degli obblighi informativi previsti dagli **Articoli 13(2)(f) e 14(2)(g)**, forniamo le seguenti informazioni su eventuali attività di profilazione e decisioni automatizzate.

### Definizioni

**Profilazione** (Art. 4(4) GDPR): qualsiasi forma di trattamento automatizzato di dati personali consistente nell'utilizzo di tali dati per valutare determinati aspetti personali relativi a una persona fisica, in particolare per analizzare o prevedere:
- Rendimento professionale
- Situazione economica
- Salute
- Preferenze personali
- Interessi
- Affidabilità
- Comportamento
- Ubicazione
- Spostamenti

**Decisione Automatizzata** (Art. 22 GDPR): decisione basata unicamente su trattamento automatizzato, compresa la profilazione, che produca effetti giuridici o incida significativamente sulla persona.

### Stato della Profilazione

**Il nostro servizio**: [SELEZIONARE OPZIONE]

\u2610 **NON effettua** attività di profilazione o decisioni automatizzate

\u2610 **Effettua profilazione** ma NON decisioni automatizzate con effetti giuridici

\u2610 **Effettua decisioni automatizzate** con effetti significativi sull'interessato

### [SE APPLICABILE] Attività di Profilazione Effettuate

#### Tipo di Profilazione
- **Profilazione marketing**: [DESCRIZIONE_MARKETING]
- **Profilazione comportamentale**: [DESCRIZIONE_COMPORTAMENTALE]
- **Scoring creditizio**: [DESCRIZIONE_SCORING]
- **Risk assessment**: [DESCRIZIONE_RISK]
- **Altro**: [DESCRIZIONE_ALTRO]

#### Dati Utilizzati per la Profilazione
- Cronologia acquisti e ordini
- Comportamento di navigazione
- Interazioni con contenuti
- Dati demografici
- Preferenze dichiarate
- [ALTRI_DATI_PROFILAZIONE]

#### Finalità della Profilazione
1. **Personalizzazione esperienza utente**
   - Raccomandazioni prodotti/servizi
   - Contenuti personalizzati
   - Interfaccia adattiva

2. **Marketing personalizzato**
   - Offerte mirate
   - Comunicazioni rilevanti
   - Segmentazione audience

3. **Prevenzione frodi**
   - Rilevamento transazioni anomale
   - Scoring affidabilità
   - Verifica identità

4. **Miglioramento servizi**
   - Analisi utilizzo features
   - Ottimizzazione funzionalità
   - A/B testing personalizzato

#### Logica Utilizzata

**Descrizione del processo**:
[DESCRIZIONE_LOGICA_PROFILAZIONE]

Esempio: "Analizziamo i tuoi ultimi 90 giorni di interazioni per identificare pattern di interesse. Utilizziamo algoritmi di machine learning (collaborative filtering) per suggerire prodotti simili a quelli visualizzati da utenti con comportamenti analoghi."

**Algoritmi e tecnologie**:
- Machine Learning: [TIPO_ML]
- Categorie di dati utilizzate: [CATEGORIE]
- Peso relativo dei fattori: [PESI]
- Fonti dati: [FONTI]

#### Significato e Conseguenze Previste

**Per l'interessato**:
- Ricezione di contenuti più pertinenti
- Offerte personalizzate
- Esperienza utente ottimizzata
- [ALTRE_CONSEGUENZE]

**Impatto sui diritti**:
- ✓ Nessun effetto giuridico vincolante
- ✓ Nessuna decisione che esclude servizi essenziali
- ✓ Sempre possibilità di opt-out
- [ALTRI_IMPATTI]

### [SE APPLICABILE] Decisioni Automatizzate

**ATTENZIONE**: Le decisioni automatizzate ai sensi dell'Art. 22 sono vietate salvo specifiche eccezioni.

#### Decisioni Automatizzate Effettuate
- **Tipo di decisione**: [TIPO_DECISIONE]
- **Effetti prodotti**: [EFFETTI_DECISIONE]
- **Eccezione applicata**: [SELEZIONARE]
  - \u2610 Necessaria per contratto (Art. 22(2)(a))
  - \u2610 Autorizzata da legge UE/nazionale (Art. 22(2)(b))
  - \u2610 Basata su consenso esplicito (Art. 22(2)(c))

#### Garanzie Implementate (Art. 22(3))

Quando effettuiamo decisioni automatizzate, garantiamo:

1. **Diritto all'intervento umano**
   - Modalità di richiesta: [MODALIT\u00c0_RICHIESTA_UMANO]
   - Tempo di risposta: [TEMPO_RISPOSTA] ore/giorni
   - Referente: [REFERENTE_UMANO]

2. **Diritto di esprimere opinione**
   - Form/canale dedicato: [LINK_FORM]
   - Procedura: [DESCRIZIONE_PROCEDURA]

3. **Diritto di contestare la decisione**
   - Email contestazioni: [EMAIL_CONTESTAZIONI]
   - Procedura di riesame: [PROCEDURA_RIESAME]
   - Tempi di riesame: [TEMPI_RIESAME]

#### Esempio di Decisione Automatizzata

**Scenario**: [DESCRIZIONE_SCENARIO]

**Input utilizzati**:
- [INPUT_1]
- [INPUT_2]
- [INPUT_N]

**Processo decisionale**:
1. [STEP_1]
2. [STEP_2]
3. [RISULTATO]

**Possibili esiti**:
- Esito A: [DESCRIZIONE_A]
- Esito B: [DESCRIZIONE_B]

### Base Giuridica per la Profilazione

**Consenso esplicito** (Art. 6(1)(a) GDPR):
- Richiesto per: [FINALIT\u00c0_CONSENSO]
- Modalità di acquisizione: [MODALIT\u00c0_CONSENSO]
- Revoca: Possibile in qualsiasi momento tramite [MODALIT\u00c0_REVOCA]

**Interesse legittimo** (Art. 6(1)(f) GDPR):
- Applicato per: [FINALIT\u00c0_INTERESSE]
- Bilanciamento interessi: [DESCRIZIONE_BILANCIAMENTO]
- Diritto di opposizione: Sempre garantito (Art. 21)

### Diritti Specifici dell'Interessato

In relazione a profilazione e decisioni automatizzate:

1. **Diritto di opposizione** (Art. 21(1))
   - Opposizione motivata alla profilazione
   - Modalità: [MODALIT\u00c0_OPPOSIZIONE]

2. **Diritto di non essere sottoposto a decisioni automatizzate** (Art. 22(1))
   - Applicazione generale salvo eccezioni
   - Richiesta intervento umano

3. **Diritto all'informazione**
   - Logica utilizzata
   - Significato e conseguenze
   - Questa informativa

### Opt-Out dalla Profilazione

**Come disattivare la profilazione**:

1. **Dal tuo account**:
   - Vai su Impostazioni > Privacy
   - Sezione "Personalizzazione"
   - Disattiva "Profilazione marketing"

2. **Via email**:
   - Invia richiesta a: [EMAIL_OPT_OUT]
   - Oggetto: "Opt-out profilazione"
   - Tempo elaborazione: [TEMPO_ELABORAZIONE]

3. **Link diretto**:
   - [LINK_OPT_OUT_PROFILAZIONE]

**Conseguenze dell'opt-out**:
- Ricezione contenuti generici (non personalizzati)
- Offerte standard
- Nessuna limitazione funzionalità essenziali
- [ALTRE_CONSEGUENZE_OPT_OUT]

### Trasparenza Algoritmica

In conformità ai principi di **trasparenza** e **accountability** (Art. 5 e 24 GDPR):

- **Audit algoritmi**: [FREQUENZA_AUDIT]
- **Test di fairness**: [DESCRIZIONE_TEST]
- **Prevenzione bias e discriminazione**: [MISURE_BIAS]
- **Documentazione**: Disponibile su richiesta
- **Valutazione d'impatto**: [STATO_DPIA]

### Contatti

Per domande su profilazione e decisioni automatizzate:
- Email: [EMAIL_PROFILAZIONE]
- DPO: [EMAIL_DPO]
- Modulo informazioni: [LINK_MODULO]`
  },
  {
    id: 'accountability',
    title: 'Accountability e Responsabilizzazione',
    category: 'legal',
    required: false,
    gdprArticles: ['Art. 5(2)', 'Art. 24', 'Art. 25'],
    description: 'Principio di accountability e misure di responsabilizzazione del titolare',
    template: `## Accountability e Responsabilizzazione del Titolare

In conformità all'**Art. 5(2) GDPR** (principio di accountability) e all'**Art. 24** (responsabilità del titolare), il Titolare del trattamento adotta misure per dimostrare la conformità al Regolamento.

### Principio di Accountability (Art. 5(2))

Il Titolare è responsabile del rispetto dei principi di trattamento (Art. 5(1)) e **deve essere in grado di comprovarlo** ("accountability").

#### Principi Applicati

1. **Liceità, correttezza e trasparenza** (Art. 5(1)(a))
   - Basi giuridiche documentate
   - Informative chiare e accessibili
   - Tracciabilità consensi

2. **Limitazione della finalità** (Art. 5(1)(b))
   - Finalità specifiche ed esplicite
   - Nessun utilizzo incompatibile
   - Documentazione finalità

3. **Minimizzazione dei dati** (Art. 5(1)(c))
   - Raccolta solo dati necessari
   - Valutazione di necessità
   - Revisione periodica dati trattati

4. **Esattezza** (Art. 5(1)(d))
   - Procedure di verifica accuratezza
   - Meccanismi di aggiornamento
   - Rettifica su richiesta

5. **Limitazione della conservazione** (Art. 5(1)(e))
   - Criteri di conservazione definiti
   - Cancellazione automatizzata
   - Revisione periodica archivi

6. **Integrità e riservatezza** (Art. 5(1)(f))
   - Misure di sicurezza adeguate
   - Protezione da trattamenti illeciti
   - Prevenzione perdita/distruzione

### Misure di Responsabilizzazione Adottate (Art. 24)

#### Governance Privacy

**Struttura organizzativa**:
- [SE_APPLICABILE] Responsabile della Protezione dei Dati (DPO) designato
- Privacy Officer / Data Protection Coordinator
- Referenti privacy per dipartimento
- Comitato privacy / Data Protection Board

**Politiche e procedure documentate**:
- Privacy Policy e informative
- Procedure operative standard (SOP)
- Data Retention Policy
- Data Breach Response Plan
- Cookie Policy
- Policy sulla sicurezza
- Codice di condotta interno

#### Data Protection Impact Assessment - DPIA (Art. 35)

**Valutazioni d'impatto effettuate**:
- \u2610 Non richiesta (trattamento a basso rischio)
- \u2610 DPIA completata per: [DESCRIZIONE_DPIA]

**Criteri per DPIA obbligatoria**:
- Valutazione sistematica e globale di aspetti personali basata su trattamento automatizzato (profilazione)
- Trattamento su larga scala di categorie particolari di dati (Art. 9) o dati giudiziari (Art. 10)
- Sorveglianza sistematica su larga scala di zona accessibile al pubblico

**Contenuto DPIA**:
1. Descrizione sistematica trattamenti e finalità
2. Valutazione necessità e proporzionalità
3. Valutazione rischi per diritti e libertà
4. Misure di mitigazione rischi

**Consultazione preventiva Garante** (Art. 36):
- Effettuata quando DPIA indica rischio elevato residuo
- [STATO_CONSULTAZIONE_PREVENTIVA]

#### Privacy by Design (Art. 25(1))

**Protezione dati fin dalla progettazione**:

Implementiamo misure tecniche e organizzative adeguate per integrare la protezione dati nella progettazione del trattamento:

**Misure tecniche**:
- Pseudonimizzazione e crittografia
- Minimizzazione automatica dati
- Controlli accesso granulari (RBAC)
- Audit log completi e immutabili
- Cancellazione automatica al termine conservazione
- Sicurezza applicativa (OWASP Top 10)

**Misure organizzative**:
- Analisi privacy impact in fase progettuale
- Checklist privacy per nuovi progetti
- Review codice con focus privacy
- Testing sicurezza e privacy
- Formazione sviluppatori su privacy

#### Privacy by Default (Art. 25(2))

**Protezione dati per impostazione predefinita**:

Per impostazione predefinita, trattiamo solo i dati necessari:

- **Account nuovi**: Impostazioni più restrittive attive di default
- **Consensi opt-in**: Mai consensi pre-selezionati
- **Visibilità profilo**: Impostata su "privato" di default
- **Profilazione**: Disattivata di default (richiede opt-in)
- **Condivisione dati**: Nessuna condivisione automatica con terzi
- **Marketing**: Opt-in esplicito richiesto

#### Formazione del Personale

**Programma di formazione privacy**:
- **Frequenza**: [FREQUENZA_FORMAZIONE]
- **Durata**: [DURATA_FORMAZIONE]
- **Temi trattati**:
  - Principi GDPR e diritti interessati
  - Sicurezza dei dati e password policy
  - Gestione data breach
  - Phishing e social engineering
  - [ALTRI_TEMI_FORMAZIONE]

**Registro formazioni**:
- Tracciamento partecipazione
- Test di verifica apprendimento
- Certificazioni rilasciate

#### Registro delle Attività di Trattamento (Art. 30)

Il Titolare mantiene un **registro delle attività di trattamento** contenente:

1. Nome e dati di contatto del titolare (e DPO)
2. Finalità del trattamento
3. Descrizione categorie interessati e dati personali
4. Categorie di destinatari
5. Trasferimenti verso paesi terzi
6. Termini di cancellazione previsti
7. Descrizione misure di sicurezza (descrizione generale)

**Accessibilità**: Disponibile su richiesta dell'Autorità Garante

**Esenzione** (Art. 30(5)): Non applicabile se organizzazione < 250 dipendenti, salvo:
- Trattamento non occasionale
- Rischio per diritti e libertà
- Dati particolari (Art. 9) o giudiziari (Art. 10)

#### Gestione Responsabili del Trattamento (Art. 28)

**Quando nominati**:
- Fornitori IT e cloud providers
- Servizi di email marketing
- Processori di pagamento
- Consulenti con accesso a dati personali
- [ALTRI_RESPONSABILI]

**Contratti stipulati** (Art. 28(3)):
- Oggetto, durata, natura e finalità del trattamento
- Tipo di dati personali e categorie di interessati
- Obblighi e diritti del titolare
- Istruzioni documentate del titolare
- Obbligo di riservatezza
- Misure di sicurezza appropriate
- Utilizzo di sub-responsabili solo previa autorizzazione
- Assistenza al titolare per risposte a richieste
- Assistenza in caso di DPIA e consultazione preventiva
- Cancellazione o restituzione dati al termine
- Messa a disposizione informazioni per audit

**Lista Responsabili**: Disponibile su richiesta

#### Audit e Verifiche

**Audit interni**:
- Frequenza: [FREQUENZA_AUDIT_INTERNI]
- Aree verificate: [AREE_AUDIT]
- Azioni correttive: [PROCESSO_AZIONI_CORRETTIVE]

**Audit esterni** (se applicabile):
- Certificazioni ISO 27001, ISO 27701
- Audit di fornitori critici
- Penetration testing
- Vulnerability assessment

#### Documentazione e Prove di Conformità

Il Titolare mantiene documentazione di:
- Basi giuridiche per ogni trattamento
- Consensi raccolti (registro consensi)
- DPIA effettuate
- Violazioni dati personali (registro breach)
- Formazione personale (registro formazioni)
- Audit e verifiche
- Contratti con responsabili
- Trasferimenti internazionali e garanzie
- Richieste esercizio diritti e risposte fornite

**Disponibilità**: Documentazione disponibile per ispezioni dell'Autorità Garante

### Revisione e Miglioramento Continuo

**Ciclo di miglioramento** (Plan-Do-Check-Act):

1. **Plan**: Pianificazione obiettivi privacy e misure
2. **Do**: Implementazione misure e politiche
3. **Check**: Monitoraggio, audit, verifica efficacia
4. **Act**: Azioni correttive e miglioramenti

**Frequenza revisione**: [FREQUENZA_REVISIONE]

**Indicatori di performance** (KPI Privacy):
- Tempo risposta richieste interessati
- Percentuale conformità policy
- Numero incidenti sicurezza
- Completamento formazione personale
- [ALTRI_KPI]

### Certificazioni e Codici di Condotta

**Adesioni volontarie**:
- \u2610 Certificazioni: [LISTA_CERTIFICAZIONI]
- \u2610 Codici di condotta: [LISTA_CODICI_CONDOTTA]
- \u2610 Schemi di certificazione: [LISTA_SCHEMI]

### Contatti Accountability

Per richieste su accountability e conformità:
- **DPO**: [EMAIL_DPO]
- **Compliance Officer**: [EMAIL_COMPLIANCE]
- **Documentazione**: Disponibile su richiesta motivata`
  },
  {
    id: 'contact_info',
    title: 'Contatti e Informazioni',
    category: 'identity',
    required: false,
    gdprArticles: ['Art. 13', 'Art. 14'],
    description: 'Informazioni di contatto complete e canali di comunicazione',
    template: `## Contatti e Informazioni

### Titolare del Trattamento

**[RAGIONE_SOCIALE]**
- **Indirizzo**: [INDIRIZZO_COMPLETO]
- **P.IVA/CF**: [PARTITA_IVA]
- **Email**: [EMAIL_TITOLARE]
- **PEC**: [PEC_TITOLARE]
- **Telefono**: [TELEFONO_TITOLARE]
- **Sito web**: [SITO_WEB]

### Responsabile della Protezione dei Dati (DPO)

[SE_DESIGNATO]
- **Nome**: [NOME_DPO]
- **Email**: [EMAIL_DPO]
- **Telefono**: [TELEFONO_DPO]
- **PEC**: [PEC_DPO]
[/SE_DESIGNATO]

### Canali per l'Esercizio dei Diritti

**Email dedicata**: [EMAIL_DIRITTI]
**Modulo online**: [LINK_MODULO_DIRITTI]
**Indirizzo postale**: [INDIRIZZO_POSTALE]

**Tempo di risposta**: Entro 1 mese dalla richiesta (Art. 12(3) GDPR)

### Supporto e Assistenza

**Customer care**: [EMAIL_SUPPORTO]
**Telefono assistenza**: [TELEFONO_ASSISTENZA]
**Orari**: [ORARI_ASSISTENZA]
**Chat live**: [LINK_CHAT] (se disponibile)

### Autorità Garante per la Protezione dei Dati Personali

**Garante Privacy Italia**
- Piazza Venezia n. 11, 00187 Roma
- Tel: (+39) 06.69677.1
- Fax: (+39) 06.69677.3785
- Email: garante@gpdp.it
- PEC: protocollo@pec.gpdp.it
- Sito: www.garanteprivacy.it
- Reclami: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524

### Informazioni sul Documento

- **Versione**: [VERSIONE_DOCUMENTO]
- **Data pubblicazione**: [DATA_PUBBLICAZIONE]
- **Data ultimo aggiornamento**: [DATA_AGGIORNAMENTO]
- **Data entrata in vigore**: [DATA_VIGORE]

### Lingue Disponibili

Questa informativa è disponibile nelle seguenti lingue:
- \u2610 Italiano
- \u2610 Inglese
- \u2610 [ALTRE_LINGUE]

Link versioni: [LINK_VERSIONI_LINGUE]`
  }
]

export default GDPR_TEMPLATES
