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
  },
  {
    id: 'summary',
    title: 'Riepilogo della Privacy Policy',
    category: 'identity',
    required: false,
    gdprArticles: ['Art. 12', 'Art. 13(1)'],
    description: 'Panoramica user-friendly dei trattamenti dati',
    template: `## Riepilogo

Benvenuto nella privacy policy di **[RAGIONE_SOCIALE]**. Questa policy ti aiuterà a comprendere quali dati raccogliamo, perché li raccogliamo e quali sono i tuoi diritti in merito.

### Dati che raccogliamo automaticamente

Raccogliamo automaticamente i tuoi dati, ad esempio quando visiti il nostro sito web o utilizzi i nostri servizi.

**Tipologie di dati raccolti automaticamente**:
- Strumenti di Tracciamento (cookie, pixel)
- Dati di utilizzo (pagine visitate, click, interazioni)
- Cronologia di navigazione
- Informazioni sul dispositivo (browser, sistema operativo)
- Indirizzo IP e geolocalizzazione
- [ALTRI_DATI_AUTOMATICI]

**Terze parti che ci aiutano a trattarli**:
- [LISTA_TERZE_PARTI_AUTO]

**Come li usiamo**:
- Statistica e analisi
- Miglioramento del servizio
- Gestione dei tag
- [ALTRE_FINALITA_AUTO]

### Dati che ci fornisci

Raccogliamo i dati che ci fornisci, ad esempio quando:
- Compili un modulo di registrazione
- Crei un account
- Ci contatti per assistenza
- Effettui un acquisto
- Ti iscrivi alla newsletter

**Tipologie di dati forniti**:
- Dati identificativi (nome, cognome, email)
- Dati di contatto (telefono, indirizzo)
- Dati di pagamento (gestiti da provider sicuri)
- Dati comunicati durante l'utilizzo del servizio
- [ALTRI_DATI_FORNITI]

**Terze parti che ci aiutano a trattarli**:
- [LISTA_TERZE_PARTI_FORNITI]

**Come li usiamo**:
- Erogazione del servizio richiesto
- Gestione account e autenticazione
- Adempimenti contrattuali
- Assistenza e supporto
- [ALTRE_FINALITA_FORNITI]

### I tuoi diritti

Hai il diritto di:
✓ Accedere ai tuoi dati personali
✓ Rettificare dati inesatti
✓ Richiedere la cancellazione (diritto all'oblio)
✓ Limitare il trattamento
✓ Opporti al trattamento
✓ Richiedere la portabilità dei dati
✓ Revocare il consenso in qualsiasi momento

**Per esercitare i tuoi diritti**: Contattaci a [EMAIL_DIRITTI]`
  },
  {
    id: 'third_party_services',
    title: 'Dettagli sui Servizi di Terze Parti',
    category: 'third-parties',
    required: false,
    gdprArticles: ['Art. 13(1)(e)', 'Art. 28', 'Art. 44-49'],
    description: 'Dettagli completi sui servizi di terze parti utilizzati',
    template: `## Dettagli sul Trattamento dei Dati Personali

I servizi contenuti in questa sezione permettono al Titolare di trattare i Dati con l'ausilio di terze parti.

### Gestione dei tag

Questo tipo di servizio consente al Titolare di gestire in modo centralizzato i tag o gli script necessari su questa Applicazione. Di conseguenza, i Dati dell'Utente possono essere trattati da questi servizi, con la possibilità che vengano conservati.

#### Google Tag Manager
**Fornitore**: Google LLC  
**Sede**: Stati Uniti  

Google Tag Manager è un servizio di gestione dei tag fornito da Google LLC o da Google Ireland Limited (a seconda del luogo in cui questa Applicazione viene consultata).

**Dati Personali trattati**: 
- Dati di utilizzo
- Strumenti di Tracciamento

**Privacy Policy**: https://policies.google.com/privacy  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Statistica e Analytics

I servizi contenuti in questa sezione permettono al Titolare di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell'Utente.

#### Google Analytics 4
**Fornitore**: Google LLC  
**Sede**: Stati Uniti  

Google Analytics è un servizio di analisi web fornito da Google LLC ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.

**Dati Personali trattati**: 
- Dati di utilizzo
- Strumenti di Tracciamento
- Eventi personalizzati
- Metriche di conversione

**Privacy Policy**: https://policies.google.com/privacy  
**Opt-out**: https://tools.google.com/dlpage/gaoptout  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

#### Meta Events Manager (Facebook Pixel)
**Fornitore**: Meta Platforms, Inc.  
**Sede**: Stati Uniti  

Meta Events Manager è un servizio di statistica fornito da Meta Platforms, Inc. Integrando il pixel di Meta, Meta Events Manager può dare al Titolare delle informazioni sul traffico e sulle interazioni su questa Applicazione.

**Dati Personali trattati**: 
- Click
- Cronologia di navigazione
- Dati di utilizzo
- Pageview
- Strumenti di Tracciamento

**Privacy Policy**: https://www.facebook.com/privacy/policy/  
**Opt-out**: https://www.facebook.com/help/247395082112892  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Gestione della raccolta dati e dei sondaggi online

Questo tipo di servizio permette a questa Applicazione di gestire la creazione, l'implementazione, l'amministrazione, la distribuzione e l'analisi di moduli e di sondaggi online.

#### Typeform
**Fornitore**: TYPEFORM S.L.  
**Sede**: Spagna (UE)  

Typeform è un generatore di moduli e una piattaforma di raccolta dati fornita da TYPEFORM S.L. I Dati Personali raccolti dipendono dalle informazioni richieste e fornite dagli Utenti nel modulo online corrispondente.

**Dati Personali trattati**: 
- Dati comunicati durante l'utilizzo del servizio
- Dati di utilizzo
- Strumenti di Tracciamento

**Privacy Policy**: https://admin.typeform.com/to/dwk6gt

#### Google Forms
**Fornitore**: Google LLC  
**Sede**: Stati Uniti  

Google Forms è un servizio di gestione moduli fornito da Google LLC. Permette al Titolare di raccogliere Dati Personali degli Utenti attraverso moduli online.

**Dati Personali trattati**: 
- Dati comunicati durante l'utilizzo del servizio
- Email
- Nome
- [ALTRI_DATI_FORM]

**Privacy Policy**: https://policies.google.com/privacy  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Elaborazione pagamenti

I servizi di elaborazione pagamenti permettono a questa Applicazione di processare pagamenti tramite carta di credito, bonifico bancario o altri mezzi. Per garantire maggiore sicurezza, questa Applicazione condivide solo le informazioni necessarie all'esecuzione della transazione con gli intermediari finanziari che gestiscono le transazioni.

**IMPORTANTE**: I dati completi delle carte di pagamento NON vengono mai memorizzati sui nostri server, ma sono gestiti esclusivamente dai processori di pagamento certificati PCI-DSS.

#### Stripe
**Fornitore**: Stripe, Inc.  
**Sede**: Stati Uniti  

Stripe è un servizio di gestione pagamenti fornito da Stripe Inc. che permette a questa Applicazione di effettuare transazioni tramite carta di credito/debito.

**Dati Personali trattati**: 
- Dati di fatturazione
- Email
- Nome
- Informazioni carta (gestite esclusivamente da Stripe, non memorizzate sui nostri server)

**Privacy Policy**: https://stripe.com/privacy  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)  
**Certificazione**: PCI-DSS Level 1

#### PayPal
**Fornitore**: PayPal Inc.  
**Sede**: Stati Uniti  

PayPal è un servizio di pagamento fornito da PayPal Inc., che consente all'Utente di effettuare pagamenti online.

**Dati Personali trattati**: 
- Dati richiesti dal servizio PayPal
- Email
- Nome

**Privacy Policy**: https://www.paypal.com/webapps/mpp/ua/privacy-full  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Hosting e infrastruttura

Questi servizi ospitano i dati e i file che permettono a questa Applicazione di funzionare e essere distribuita, oltre a fornire un'infrastruttura pronta all'uso per erogare specifiche funzionalità di questa Applicazione.

#### Vercel
**Fornitore**: Vercel Inc.  
**Sede**: Stati Uniti  

Vercel è una piattaforma di hosting e deployment fornita da Vercel Inc.

**Dati Personali trattati**: 
- Dati di utilizzo
- Indirizzo IP
- Log di sistema

**Privacy Policy**: https://vercel.com/legal/privacy-policy  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Comunicazioni email

Questi servizi permettono di gestire un database di contatti email, telefono o altre informazioni di contatto per comunicare con l'Utente.

#### Mailchimp
**Fornitore**: The Rocket Science Group LLC  
**Sede**: Stati Uniti  

Mailchimp è un servizio di gestione indirizzi email e invio messaggi email fornito da The Rocket Science Group LLC.

**Dati Personali trattati**: 
- Email
- Nome
- Cognome
- [ALTRI_DATI_MAILCHIMP]

**Privacy Policy**: https://mailchimp.com/legal/privacy/  
**Garanzie per trasferimenti extra-UE**: Standard Contractual Clauses (SCC)

---

### Note sui Trasferimenti Extra-UE

Alcuni dei servizi terzi sopra menzionati sono localizzati al di fuori dell'Unione Europea. In conformità agli **Articoli 44-49 GDPR** (Trasferimenti di dati personali verso paesi terzi), il Titolare si assicura che:

1. **Garanzie Adeguate**: Vengono implementate garanzie adeguate quali:
   - Standard Contractual Clauses (SCC) approvate dalla Commissione UE
   - Valutazioni di trasferimento (Transfer Impact Assessment)
   - Misure supplementari ove necessario

2. **Trasparenza**: L'Utente è informato sulla localizzazione del trattamento

3. **Diritti**: I diritti dell'interessato restano esercitabili

**Per maggiori informazioni** sui trasferimenti extra-UE e le garanzie implementate: [EMAIL_DIRITTI]`
  },
  {
    id: 'cookie_policy',
    title: 'Cookie Policy',
    category: 'cookies',
    required: false,
    gdprArticles: ['Art. 122 Codice Privacy', 'ePrivacy Directive'],
    description: 'Policy dettagliata sull\'utilizzo dei cookie',
    template: `## Cookie Policy

Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, gli Utenti possono consultare la presente Cookie Policy.

### Cosa sono i Cookie?

I Cookie sono **piccoli file di testo** che vengono memorizzati sul dispositivo dell'Utente (computer, tablet, smartphone) quando si visita un sito web. I Cookie permettono al sito di:
- Ricordare le tue azioni e preferenze
- Migliorare la navigazione
- Personalizzare i contenuti
- Analizzare il traffico

I Cookie possono essere **temporanei** (cancellati alla chiusura del browser) o **persistenti** (rimangono sul dispositivo fino alla scadenza o cancellazione manuale).

### Cookie e Strumenti di Tracciamento utilizzati

#### Cookie Tecnici (sempre attivi)

Questi Cookie sono **necessari** per il funzionamento del sito e non richiedono il consenso dell'utente.

**Durata**: Sessione / [DURATA_COOKIE_TECNICI]

**Finalità**:
- Autenticazione e sicurezza
- Mantenimento sessione utente
- Preferenze tecniche (lingua, layout)
- Bilanciamento del carico server

**Cookie utilizzati**:
| Nome Cookie | Fornitore | Finalità | Durata |
|-------------|-----------|----------|---------|
| session_id | [RAGIONE_SOCIALE] | Gestione sessione utente | Sessione |
| auth_token | [RAGIONE_SOCIALE] | Autenticazione | 7 giorni |
| [ALTRI_COOKIE_TECNICI] | | | |

#### Cookie Analitici

Questi Cookie ci aiutano a capire come gli utenti interagiscono con il sito web attraverso la raccolta e l'analisi di informazioni in forma anonima o aggregata.

**Durata**: [DURATA_COOKIE_ANALYTICS]

**Finalità**:
- Analisi traffico e comportamento utenti
- Statistiche sulle pagine più visitate
- Miglioramento esperienza utente
- Ottimizzazione performance

**Cookie utilizzati**:
| Nome Cookie | Fornitore | Finalità | Durata |
|-------------|-----------|----------|---------|
| _ga | Google Analytics | Distingue gli utenti | 2 anni |
| _ga_[ID] | Google Analytics | Mantiene lo stato della sessione | 2 anni |
| _gid | Google Analytics | Distingue gli utenti | 24 ore |
| [ALTRI_COOKIE_ANALYTICS] | | | |

**Privacy Policy Google Analytics**: https://policies.google.com/privacy  
**Opt-out Google Analytics**: https://tools.google.com/dlpage/gaoptout

#### Cookie di Profilazione e Marketing

Questi Cookie tracciano la navigazione dell'utente per creare profili sui suoi gusti, abitudini, scelte, ecc. e inviare messaggi pubblicitari mirati.

**Durata**: [DURATA_COOKIE_MARKETING]

**Finalità**:
- Marketing personalizzato
- Retargeting pubblicitario
- Misurazione campagne
- Profilazione utente

**Cookie utilizzati**:
| Nome Cookie | Fornitore | Finalità | Durata |
|-------------|-----------|----------|---------|
| _fbp | Meta (Facebook) | Tracciamento conversioni e retargeting | 3 mesi |
| fr | Meta (Facebook) | Pubblicità personalizzata | 3 mesi |
| [ALTRI_COOKIE_MARKETING] | | | |

**Privacy Policy Meta**: https://www.facebook.com/privacy/policy/  
**Gestione preferenze Meta**: https://www.facebook.com/help/247395082112892

#### Cookie di Terze Parti

Alcuni Cookie sono installati da servizi di terze parti. Il Titolare non ha controllo diretto su questi Cookie.

**Servizi terzi che utilizzano Cookie**:
- [SERVIZIO_1]: [LINK_PRIVACY_POLICY_1]
- [SERVIZIO_2]: [LINK_PRIVACY_POLICY_2]
- [SERVIZIO_N]: [LINK_PRIVACY_POLICY_N]

### Altri Strumenti di Tracciamento

Oltre ai Cookie, questa Applicazione può utilizzare altri Strumenti di Tracciamento:

**Web Beacons / Pixel Tag**:
Piccole immagini trasparenti incorporate nelle pagine web o nelle email per tracciare:
- Apertura email
- Click su link
- Visualizzazioni pagina

**Local Storage**:
Tecnologia che permette di memorizzare dati sul browser dell'utente:
- Maggiore capacità rispetto ai Cookie
- Non viene inviato automaticamente al server
- Utilizzato per: [FINALITA_LOCAL_STORAGE]

**Fingerprinting**:
Tecnica che raccoglie informazioni sulla configurazione del dispositivo:
- Tipo di browser e versione
- Sistema operativo
- Risoluzione schermo
- Plugin installati

**Stato utilizzo**: [UTILIZZIAMO / NON UTILIZZIAMO] fingerprinting

### Base Giuridica per l'Utilizzo di Cookie

**Cookie Tecnici**: Art. 122, comma 1, Codice Privacy (non richiedono consenso)

**Cookie Analitici**: 
- Se anonimizzati: Non richiedono consenso
- Se non anonimizzati: Richiedono consenso (Art. 122 Codice Privacy)

**Cookie di Profilazione**: Art. 6(1)(a) GDPR + Art. 122 Codice Privacy (richiedono consenso esplicito)

### Come Gestire le Preferenze sui Cookie

#### 1. Banner Cookie

Al primo accesso al sito, viene mostrato un banner che permette di:
- Accettare tutti i Cookie
- Rifiutare i Cookie non necessari
- Personalizzare le preferenze
- Leggere la Cookie Policy completa

**Gestisci preferenze**: [LINK_GESTIONE_COOKIE]

#### 2. Impostazioni Browser

Puoi gestire o cancellare i Cookie attraverso le impostazioni del tuo browser:

**Google Chrome**:
- Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti
- https://support.google.com/chrome/answer/95647

**Mozilla Firefox**:
- Opzioni > Privacy e sicurezza > Cookie e dati dei siti web
- https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie

**Safari**:
- Preferenze > Privacy > Cookie e dati di siti web
- https://support.apple.com/it-it/guide/safari/sfri11471/mac

**Microsoft Edge**:
- Impostazioni > Cookie e autorizzazioni sito > Cookie e dati del sito
- https://support.microsoft.com/it-it/microsoft-edge

**Opera**:
- Impostazioni > Privacy e sicurezza > Cookie
- https://help.opera.com/en/latest/web-preferences/#cookies

#### 3. Strumenti di Opt-Out Specifici

**Google Analytics**: https://tools.google.com/dlpage/gaoptout  
**Meta (Facebook)**: https://www.facebook.com/help/247395082112892  
**[ALTRI_OPT_OUT]**: [LINK]

#### 4. Network Advertising Initiative (NAI)

Opt-out da pubblicità comportamentale di molti network pubblicitari:
http://www.networkadvertising.org/choices/

#### 5. Your Online Choices

Opt-out da pubblicità comportamentale per provider europei:
http://www.youronlinechoices.com/

### Conseguenze della Disabilitazione dei Cookie

**Cookie Tecnici disabilitati**:
- Impossibilità di autenticarsi
- Perdita preferenze
- Funzionalità ridotte

**Cookie Analitici disabilitati**:
- Nessun impatto sull'utilizzo del sito
- Contribuisci meno al miglioramento del servizio

**Cookie di Marketing disabilitati**:
- Nessun impatto sull'utilizzo del sito
- Pubblicità meno pertinente

### Aggiornamenti della Cookie Policy

Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultarla regolarmente.

**Ultimo aggiornamento**: [DATA_AGGIORNAMENTO_COOKIE]

### Contatti

Per domande sulla Cookie Policy:
- **Email**: [EMAIL_COOKIE]
- **DPO**: [EMAIL_DPO]

### Autorità di Controllo

Hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali:
- Sito: www.garanteprivacy.it
- Email: garante@gpdp.it`
  },
  {
    id: 'eu_users_info',
    title: 'Ulteriori Informazioni per Utenti nell\'Unione Europea',
    category: 'rights',
    required: false,
    gdprArticles: ['Art. 6', 'Art. 13', 'Art. 14', 'Art. 15-22'],
    description: 'Informazioni specifiche per cittadini UE in linguaggio semplice',
    template: `## Ulteriori informazioni per gli utenti nell'Unione Europea

Questa sezione fornisce informazioni aggiuntive specifiche per gli utenti che si trovano nell'Unione Europea, in conformità al Regolamento UE 2016/679 (GDPR).

### Base Giuridica del Trattamento

Il Titolare tratta Dati Personali relativi all'Utente quando sussiste **una delle seguenti condizioni**:

#### 1. Consenso (Art. 6(1)(a) GDPR)

**Quando si applica**:
- Newsletter e comunicazioni marketing
- Cookie non tecnici
- Profilazione per pubblicità personalizzata
- [ALTRI_TRATTAMENTI_CONSENSO]

**Come viene raccolto**:
- Spunta esplicita su form
- Banner cookie con scelta attiva
- Email di conferma opt-in (double opt-in)

**Tuo diritto**: Puoi **revocare il consenso in qualsiasi momento** senza pregiudicare la liceità del trattamento prima della revoca.

**Come revocare**: [EMAIL_REVOCA_CONSENSO] o link nelle email ricevute

#### 2. Esecuzione Contrattuale (Art. 6(1)(b) GDPR)

**Quando si applica**:
- Creazione e gestione account
- Erogazione servizi richiesti
- Elaborazione ordini e pagamenti
- Assistenza clienti
- [ALTRI_TRATTAMENTI_CONTRATTO]

**Caratteristiche**: Il trattamento è **necessario** per adempiere alle tue richieste. Senza questi dati non possiamo fornire il servizio.

#### 3. Obbligo Legale (Art. 6(1)(c) GDPR)

**Quando si applica**:
- Adempimenti fiscali (fatturazione, dichiarazioni)
- Conservazione documenti contabili (10 anni)
- Antiriciclaggio (D.Lgs. 231/2007)
- Comunicazioni obbligatorie alle autorità
- [ALTRI_TRATTAMENTI_LEGGE]

**Caratteristiche**: Il trattamento è **obbligatorio per legge**. Il Titolare non ha discrezionalità.

#### 4. Interesse Legittimo (Art. 6(1)(f) GDPR)

**Quando si applica**:
- Sicurezza informatica e prevenzione frodi
- Analisi statistiche per miglioramento servizi
- Marketing diretto verso clienti esistenti
- Difesa di diritti in sede giudiziaria
- [ALTRI_TRATTAMENTI_INTERESSE]

**Bilanciamento interessi**: Il Titolare ha valutato che il proprio interesse legittimo **non pregiudica** i tuoi diritti e libertà fondamentali.

**Tuo diritto**: Puoi **opporti** a questo trattamento in qualsiasi momento per motivi legati alla tua situazione particolare.

#### 5. Interesse Vitale (Art. 6(1)(d) GDPR)

**Quando si applica**: Solo in casi eccezionali per proteggere la vita o l'incolumità fisica tua o di terzi.

#### 6. Interesse Pubblico (Art. 6(1)(e) GDPR)

**Quando si applica**: Solo se il Titolare svolge compiti di interesse pubblico o esercita pubblici poteri.

**Il nostro caso**: [APPLICABILE / NON APPLICABILE]

---

### Ulteriori Informazioni sul Tempo di Conservazione

In conformità all'**Art. 5(1)(e) GDPR** (principio di limitazione della conservazione), i Dati Personali sono conservati **solo per il tempo necessario** alle finalità per cui sono stati raccolti.

#### Criteri di Conservazione

**Dati account attivo**:
- **Durata**: Fino a richiesta di cancellazione o chiusura account
- **Base**: Esecuzione contrattuale
- **Dopo cancellazione**: [PERIODO_CONSERVAZIONE_POST_CANCELLAZIONE] per obblighi legali

**Dati contrattuali e di fatturazione**:
- **Durata**: 10 anni dalla fine del rapporto contrattuale
- **Base**: Obbligo legale (Art. 2220 c.c., D.P.R. 600/1973)
- **Conservazione**: Obbligatoria per legge

**Dati di marketing (con consenso)**:
- **Durata**: Fino a revoca del consenso o [PERIODO_INATTIVITA] di inattività
- **Base**: Consenso
- **Revoca**: Effetto immediato per futuri trattamenti

**Cookie e dati di navigazione**:
- **Cookie tecnici**: Sessione o [DURATA_COOKIE_TECNICI]
- **Cookie analytics**: [DURATA_COOKIE_ANALYTICS] (es. 26 mesi)
- **Cookie marketing**: [DURATA_COOKIE_MARKETING] (es. 13 mesi)

**Dati di log e sicurezza**:
- **Durata**: [DURATA_LOG] (es. 12 mesi)
- **Base**: Interesse legittimo (sicurezza)

**Backup**:
- **Durata**: I dati possono persistere in backup per ulteriori [DURATA_BACKUP] prima della cancellazione definitiva

#### Cancellazione Automatizzata

Il Titolare implementa procedure di **cancellazione automatizzata** quando scadono i termini di conservazione, salvo obblighi legali di conservazione più lunghi.

---

### Diritti degli Interessati (Spiegazione Dettagliata)

In conformità agli **Articoli 15-22 GDPR**, hai i seguenti diritti:

#### 1. Diritto di Accesso (Art. 15)

**Cosa puoi ottenere**:
- ✓ Conferma se i tuoi dati sono trattati
- ✓ Copia dei dati trattati
- ✓ Informazioni su: finalità, categorie dati, destinatari, periodo conservazione
- ✓ Informazioni su logica e conseguenze di eventuali decisioni automatizzate
- ✓ Garanzie per trasferimenti extra-UE

**Come esercitarlo**: Email a [EMAIL_DIRITTI] con oggetto "Richiesta Accesso Dati GDPR"

**Tempi**: Risposta entro **1 mese** (estendibile a 3 in casi complessi)

**Costo**: **Gratuito** per la prima richiesta. Costi amministrativi ragionevoli per copie aggiuntive o richieste manifestamente infondate/eccessive.

#### 2. Diritto di Rettifica (Art. 16)

**Cosa puoi fare**:
- ✓ Correggere dati inesatti
- ✓ Completare dati incompleti
- ✓ Aggiornare informazioni obsolete

**Come esercitarlo**: 
- Online: Modifica diretta nel tuo account (se disponibile)
- Email: [EMAIL_DIRITTI] specificando le correzioni richieste

**Tempi**: Entro **1 mese** dalla richiesta

#### 3. Diritto alla Cancellazione / "Diritto all'Oblio" (Art. 17)

**Quando si applica**:
- ✓ I dati non sono più necessari
- ✓ Revochi il consenso (se base giuridica è consenso)
- ✓ Ti opponi al trattamento e non prevalgono motivi legittimi
- ✓ I dati sono stati trattati illecitamente
- ✓ Obbligo legale di cancellazione

**Quando NON si applica**:
- ✗ Esercizio diritto alla libertà di espressione
- ✗ Obbligo legale di conservazione (es. dati fiscali per 10 anni)
- ✗ Accertamento, esercizio o difesa di un diritto in sede giudiziaria

**Come esercitarlo**: Email a [EMAIL_DIRITTI] con oggetto "Richiesta Cancellazione Dati - Diritto all'Oblio"

**Tempi**: Entro **1 mese** dalla richiesta

**Effetti**: Cancellazione dei dati e comunicazione ai destinatari (se possibile e non sproporzionato)

#### 4. Diritto alla Limitazione del Trattamento (Art. 18)

**Cosa comporta**: I dati vengono conservati ma **non più utilizzati** (tranne che per conservazione, consenso, difesa diritti).

**Quando si applica**:
- ✓ Contesti l'esattezza dei dati (limitazione per periodo di verifica)
- ✓ Il trattamento è illecito ma preferisci limitazione a cancellazione
- ✓ I dati non servono più al Titolare ma ti servono per difesa diritti
- ✓ Hai presentato opposizione (limitazione in attesa di verifica)

**Come esercitarlo**: Email a [EMAIL_DIRITTI]

**Tempi**: Entro **1 mese**

#### 5. Diritto alla Portabilità dei Dati (Art. 20)

**Cosa puoi ottenere**:
- ✓ Ricevere i tuoi dati in **formato strutturato, di uso comune e leggibile da dispositivo automatico** (es. CSV, JSON)
- ✓ Trasmettere i dati a un altro titolare (se tecnicamente fattibile)

**Quando si applica**:
- ✓ Base giuridica: Consenso o Contratto
- ✓ Trattamento: Automatizzato

**Formati disponibili**: [FORMATI_EXPORT] (es. JSON, CSV, XML)

**Come esercitarlo**: Email a [EMAIL_DIRITTI] specificando formato preferito

**Tempi**: Entro **1 mese**

#### 6. Diritto di Opposizione (Art. 21)

**Opposizione Generale (Art. 21(1))**:

Puoi opporti al trattamento basato su:
- Interesse legittimo (Art. 6(1)(f))
- Interesse pubblico (Art. 6(1)(e))

**Motivi**: Devi indicare motivi connessi alla tua situazione particolare.

**Effetti**: Il Titolare cessa il trattamento **salvo** dimostri motivi legittimi cogenti o difesa diritti giudiziari.

**Opposizione al Marketing Diretto (Art. 21(2-3))**:

Puoi opporti in **qualsiasi momento** al trattamento per marketing diretto:
- ✓ Senza indicare motivi
- ✓ Gratuitamente
- ✓ Facilmente (link nelle email, account settings)

**Effetti**: Il Titolare **cessa immediatamente** il trattamento per marketing.

**Come esercitarlo**:
- Link "Unsubscribe" nelle email marketing
- Impostazioni account
- Email: [EMAIL_OPPOSIZIONE]

#### 7. Diritto a Non Essere Sottoposto a Decisioni Automatizzate (Art. 22)

**Cosa protegge**: Diritto a non essere soggetto a decisioni basate **unicamente** su trattamento automatizzato (inclusa profilazione) che producano **effetti giuridici** o ti incidano **significativamente**.

**Quando si applica**: [APPLICABILE / NON APPLICABILE]

Se applicabile:
- **Garanzie**: Intervento umano, possibilità di esprimere opinione, contestare decisione
- **Eccezioni**: Necessaria per contratto, autorizzata da legge, basata su consenso esplicito

**Il nostro caso**: [DESCRIZIONE_DECISIONI_AUTOMATIZZATE]

---

### Dettagli sul Diritto di Opposizione

**Quando i Dati Personali sono trattati per**:
- Interesse pubblico
- Esercizio di pubblici poteri
- Interesse legittimo del Titolare

**Gli Utenti hanno diritto** ad opporsi al trattamento per **motivi connessi alla loro situazione particolare**.

**Marketing Diretto**: Gli Utenti possono opporsi **in qualsiasi momento** al trattamento per marketing diretto:
- ✓ Gratuitamente
- ✓ Senza fornire motivazione
- ✓ Con effetto immediato

**Profilazione per Marketing**: L'opposizione si estende alla profilazione correlata al marketing diretto.

---

### Come Esercitare i Diritti

#### Modalità di Richiesta

**1. Email**:
- Indirizzo: [EMAIL_DIRITTI]
- Oggetto: "Esercizio Diritti GDPR - [TIPO_DIRITTO]"
- Allegare: Documento identità (per verifica)

**2. Modulo Online**:
- Link: [LINK_MODULO_DIRITTI]
- Compilare campi obbligatori
- Upload documento identità

**3. Posta Raccomandata**:
- Indirizzo: [INDIRIZZO_POSTALE]
- Allegare: Copia documento identità

#### Verifica Identità

Per garantire la sicurezza dei tuoi dati, potremmo richiederti:
- Documento d'identità valido
- Ulteriori informazioni di verifica

#### Tempi di Risposta

**Standard**: Entro **1 mese** dalla richiesta

**Casi complessi**: Fino a **3 mesi** (con comunicazione dei motivi entro 1 mese)

**Urgenza**: Richieste manifestamente urgenti trattate con priorità

#### Costi

**Gratuito** salvo:
- Richieste manifestamente infondate o eccessive
- Copie aggiuntive oltre la prima (costo amministrativo ragionevole)

#### Risposta del Titolare

La risposta include:
- ✓ Azioni intraprese
- ✓ Tempistiche (se non immediato)
- ✓ Motivazioni (se rifiuto parziale/totale)
- ✓ Informazioni su reclamo al Garante
- ✓ Informazioni su ricorso giudiziale

---

### Diritto di Proporre Reclamo

Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai il **diritto di proporre reclamo** a:

**Autorità Garante per la Protezione dei Dati Personali**
- **Indirizzo**: Piazza Venezia n. 11, 00187 Roma
- **Telefono**: (+39) 06.69677.1
- **Fax**: (+39) 06.69677.3785
- **Email**: garante@gpdp.it
- **PEC**: protocollo@pec.gpdp.it
- **Sito web**: www.garanteprivacy.it
- **Form online reclami**: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524

**Quando presentare reclamo**:
- Ritieni che i tuoi diritti siano stati violati
- Il Titolare non ha risposto alla tua richiesta entro i termini
- La risposta del Titolare non è soddisfacente

**Ricorso giudiziario**: Hai inoltre il diritto di agire in sede giudiziale.

---

### Trasferimenti di Dati Personali verso Paesi Terzi

In conformità agli **Articoli 44-49 GDPR**, quando i tuoi dati vengono trasferiti al di fuori dell'UE/SEE:

**Garanzie Adeguate Implementate**:
- ✓ **Standard Contractual Clauses (SCC)**: Clausole contrattuali approvate dalla Commissione UE
- ✓ **Transfer Impact Assessment (TIA)**: Valutazione dei rischi del trasferimento
- ✓ **Misure Supplementari**: Crittografia, pseudonimizzazione, controlli accesso
- ✓ **Certificazioni**: [SE_APPLICABILE] Privacy Shield (ora invalido), certificazioni ISO

**Paesi con Decisione di Adeguatezza**:
I trasferimenti verso paesi con decisione di adeguatezza UE non richiedono garanzie aggiuntive:
- [LISTA_PAESI_ADEGUATI] (es. UK post-Brexit, Svizzera, Giappone, ecc.)

**Trasferimenti Extra-UE nel nostro caso**:
- [SERVIZIO_1]: [PAESE] - Garanzie: [SCC/ALTRO]
- [SERVIZIO_2]: [PAESE] - Garanzie: [SCC/ALTRO]

**Tuo diritto**: Puoi richiedere informazioni dettagliate sulle garanzie implementate e ottenere copia delle SCC.

---

### Modifiche a questa Informativa

Eventuali modifiche a questa informativa privacy:

**Notifica**:
- Pubblicazione su questa pagina
- [SE_POSSIBILE] Notifica via email agli utenti registrati
- Aggiornamento data "Ultima modifica"

**Consenso**:
Qualora le modifiche interessino trattamenti basati sul consenso, il Titolare raccoglierà nuovamente il consenso se necessario.

**Monitoraggio**:
Ti invitiamo a consultare regolarmente questa pagina, verificando la data di ultima modifica.`
  },
  {
    id: 'help_section',
    title: 'Come Possiamo Aiutare',
    category: 'rights',
    required: false,
    gdprArticles: ['Art. 12', 'Art. 15-22'],
    description: 'Sezione pratica per facilitare l\'esercizio dei diritti',
    template: `## Come possiamo aiutare?

### Cosa puoi fare

#### I tuoi dati

Hai pieno controllo sui tuoi dati personali. Ecco le azioni che puoi intraprendere:

**📥 Accedere ai tuoi dati**

Vuoi sapere quali dati abbiamo su di te? Puoi chiedere:
- Una copia di tutti i tuoi dati personali
- Informazioni su come li utilizziamo
- Con chi li condividiamo

[**Richiedi accesso ai dati →**](mailto:[EMAIL_DIRITTI]?subject=Richiesta%20Accesso%20Dati%20GDPR&body=Mi%20chiamo%20%5BNome%5D%20%5BCognome%5D%20e%20vorrei%20accedere%20a%20tutti%20i%20dati%20personali%20che%20mi%20riguardano%20in%20possesso%20della%20vostra%20organizzazione.%0A%0AEmail%20account:%20%5Btua-email%40esempio.com%5D%0A%0AGrazie%20per%20l%27attenzione.%0ACordiali%20saluti,%0A%5BIl%20tuo%20nome%5D)

---

**✏️ Correggere i tuoi dati**

Hai notato informazioni errate o obsolete? Puoi chiedere di:
- Correggere dati inesatti
- Aggiornare informazioni non aggiornate
- Completare dati incompleti

[**Richiedi correzione dati →**](mailto:[EMAIL_DIRITTI]?subject=Richiesta%20Rettifica%20Dati%20GDPR&body=Mi%20chiamo%20%5BNome%5D%20%5BCognome%5D%20e%20ho%20individuato%20alcune%20inesattezze%20nei%20miei%20dati%20personali:%0A%0A-%20%5BDescrivi%20l%27inesattezza,%20es.%20%22indirizzo%20email%20non%20aggiornato%22%5D%0A%0AVorrei%20che%20fossero%20rettificati.%0A%0AEmail%20account:%20%5Btua-email%40esempio.com%5D%0A%0AGrazie,%0A%5BIl%20tuo%20nome%5D)

---

**🗑️ Cancellare i tuoi dati (Diritto all'Oblio)**

Non vuoi più che conserviamo i tuoi dati? Puoi chiedere:
- Cancellazione completa del tuo account
- Eliminazione di dati specifici
- Rimozione da liste marketing

[**Richiedi cancellazione dati →**](mailto:[EMAIL_DIRITTI]?subject=Richiesta%20Cancellazione%20Dati%20-%20Diritto%20all%27Oblio&body=Mi%20chiamo%20%5BNome%5D%20%5BCognome%5D%20e%20vorrei%20richiedere%20la%20cancellazione%20di%20tutti%20i%20dati%20personali%20che%20mi%20riguardano.%0A%0AEmail%20account:%20%5Btua-email%40esempio.com%5D%0A%0AMotivazione%20(opzionale):%20%5Bmotivo%5D%0A%0AGrazie,%0A%5BIl%20tuo%20nome%5D)

---

**📦 Trasferire i tuoi dati**

Vuoi portare i tuoi dati altrove? Puoi richiedere:
- Una copia in formato leggibile da computer (JSON, CSV)
- Trasferimento diretto a un altro servizio (se possibile)

[**Richiedi portabilità dati →**](mailto:[EMAIL_DIRITTI]?subject=Richiesta%20Portabilit%C3%A0%20Dati%20GDPR&body=Mi%20chiamo%20%5BNome%5D%20%5BCognome%5D%20e%20vorrei%20ricevere%20una%20copia%20di%20tutti%20i%20miei%20dati%20personali%20in%20formato%20strutturato%20e%20leggibile%20da%20dispositivo%20automatico.%0A%0AEmail%20account:%20%5Btua-email%40esempio.com%5D%0AFormato%20preferito:%20%5BCSV%20/%20JSON%20/%20altro%5D%0A%0AGrazie,%0A%5BIl%20tuo%20nome%5D)

---

**🚫 Opporti al trattamento**

Non sei d'accordo con come utilizziamo i tuoi dati? Puoi:
- Opporti al trattamento per motivi legittimi
- Disattivare marketing e profilazione
- Richiedere limitazione del trattamento

[**Esprimi opposizione →**](mailto:[EMAIL_DIRITTI]?subject=Opposizione%20al%20Trattamento%20Dati&body=Mi%20chiamo%20%5BNome%5D%20%5BCognome%5D%20e%20intendo%20oppormi%20al%20trattamento%20dei%20miei%20dati%20per%20le%20seguenti%20finalit%C3%A0:%0A%0A-%20%5Bspecifica%20finalit%C3%A0,%20es.%20%22marketing%20diretto%22%5D%0A%0AMotivazione:%20%5Binserisci%20motivazione%5D%0A%0AEmail%20account:%20%5Btua-email%40esempio.com%5D%0A%0AGrazie,%0A%5BIl%20tuo%20nome%5D)

---

**🍪 Gestire le preferenze cookie**

Vuoi controllare i cookie sul tuo dispositivo?

[**Gestisci preferenze cookie →**](#) *(Apre il banner di gestione cookie)*

---

### Tempi di risposta

Ti risponderemo entro **30 giorni** dalla tua richiesta. In casi complessi, potremmo impiegare fino a 3 mesi, ma ti informeremo entro il primo mese.

### Verifica identità

Per proteggere i tuoi dati, potremmo chiederti di verificare la tua identità allegando:
- Copia documento d'identità
- Conferma indirizzo email

---

## In caso di problemi

Benché ci impegniamo a creare un'esperienza utente positiva e a proteggere i tuoi dati, sappiamo che occasionalmente possono verificarsi problemi.

### Quando contattarci

Contattaci se:
- ❓ Hai domande sulla nostra privacy policy
- 🐛 Hai riscontrato un problema tecnico
- ⚠️ Sospetti un uso improprio dei tuoi dati
- 💬 Hai suggerimenti per migliorare
- 📧 Non hai ricevuto risposta alla tua richiesta

### Come contattarci

**Email generale**: [EMAIL_TITOLARE]  
**Email privacy**: [EMAIL_DIRITTI]  
**DPO (Responsabile Protezione Dati)**: [EMAIL_DPO]  
**Telefono**: [TELEFONO]  
**PEC**: [PEC_TITOLARE]

**Orari assistenza**: [ORARI_ASSISTENZA]

---

### Non sei soddisfatto?

Se ritieni che la nostra risposta non sia soddisfacente o che abbiamo violato i tuoi diritti:

**🏛️ Proponi reclamo all'Autorità Garante**

**Garante per la Protezione dei Dati Personali**
- Piazza Venezia n. 11, 00187 Roma
- Email: garante@gpdp.it
- PEC: protocollo@pec.gpdp.it
- Tel: (+39) 06.69677.1
- Form reclami: [www.garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524)

**⚖️ Agire in sede giudiziale**

Hai il diritto di agire in sede giudiziaria se ritieni che i tuoi diritti siano stati violati.

---

### Risorse Utili

**📚 Guide del Garante**:
- [Guida ai diritti degli interessati](https://www.garanteprivacy.it)
- [Come proporre reclamo](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524)

**🇪🇺 Risorse UE**:
- [Sito EDPB (European Data Protection Board)](https://edpb.europa.eu)
- [Your Europe - Protezione Dati](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection/index_it.htm)

---

### Moduli Pre-compilati

Per facilitarti, ecco alcuni moduli email pre-compilati:

| Richiesta | Link Mailto |
|-----------|-------------|
| Accesso dati | [Richiedi accesso →](mailto:[EMAIL_DIRITTI]?subject=Accesso%20Dati) |
| Rettifica | [Richiedi rettifica →](mailto:[EMAIL_DIRITTI]?subject=Rettifica%20Dati) |
| Cancellazione | [Richiedi cancellazione →](mailto:[EMAIL_DIRITTI]?subject=Cancellazione%20Dati) |
| Portabilità | [Richiedi portabilità →](mailto:[EMAIL_DIRITTI]?subject=Portabilit%C3%A0%20Dati) |
| Opposizione | [Esprimi opposizione →](mailto:[EMAIL_DIRITTI]?subject=Opposizione) |
| Domanda generica | [Contattaci →](mailto:[EMAIL_DIRITTI]?subject=Domanda%20Privacy) |

---

**💡 Suggerimento**: Salva questa pagina tra i preferiti per accedere rapidamente alle informazioni sulla privacy!`
  }
]

export default GDPR_TEMPLATES
