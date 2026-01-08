import { saveAs } from 'file-saver'

export const downloadMarkdown = (content: string, filename: string = 'privacy-policy.md') => {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  saveAs(blob, filename)
}

export const copyToClipboard = async (content: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(content)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = content
      textArea.style.position = 'absolute'
      textArea.style.left = '-999999px'
      document.body.prepend(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      return true
    }
  } catch (error) {
    console.error('Failed to copy text: ', error)
    return false
  }
}

export const validateMandatorySections = (sections: any[]): string[] => {
  const mandatoryIds = ['identity', 'legal_basis', 'purposes', 'categories', 'data_subject_rights']
  const presentIds = sections.map(s => s.componentId)
  const missingIds = mandatoryIds.filter(id => !presentIds.includes(id))
  return missingIds.map(id => getSectionName(id))
}

// Mappa ID tecnici a nomi leggibili
export const getSectionName = (id: string): string => {
  const names: Record<string, string> = {
    'identity': 'Identità del Titolare',
    'legal_basis': 'Base Giuridica',
    'purposes': 'Finalità del Trattamento',
    'categories': 'Categorie di Dati',
    'data_subject_rights': 'Diritti degli Interessati',
    'dpo': 'Data Protection Officer',
    'retention': 'Periodo di Conservazione',
    'recipients': 'Destinatari dei Dati',
    'transfers': 'Trasferimenti Internazionali',
    'security': 'Misure di Sicurezza',
    'cookies': 'Cookie e Tecnologie',
    'marketing': 'Marketing e Profilazione',
    'automated_decisions': 'Decisioni Automatizzate',
    'complaints': 'Reclami',
    'updates': 'Modifiche alla Policy'
  }
  return names[id] || id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

export const downloadPDF = async (content: string, filename: string = 'privacy-policy.pdf') => {
  // Conversione Markdown -> HTML -> PDF
  // Per ora generiamo HTML stampabile
  const htmlContent = markdownToHTML(content)
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Privacy Policy</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; }
            h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
            h2 { color: #34495e; margin-top: 30px; border-bottom: 1px solid #bdc3c7; padding-bottom: 8px; }
            h3 { color: #555; margin-top: 20px; }
            p { margin: 10px 0; text-align: justify; }
            ul, ol { margin: 10px 0 10px 20px; }
            li { margin: 5px 0; }
            strong { color: #2c3e50; }
            code { background: #ecf0f1; padding: 2px 6px; border-radius: 3px; font-family: monospace; }
            @media print { body { margin: 0; padding: 20px; } }
          </style>
        </head>
        <body>${htmlContent}</body>
      </html>
    `)
    printWindow.document.close()
    setTimeout(() => printWindow.print(), 250)
  }
}

export const downloadHTML = (content: string, filename: string = 'privacy-policy.html') => {
  const htmlContent = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      color: #333;
      background: #f9fafb;
    }
    h1 {
      color: #1a202c;
      border-bottom: 3px solid #4299e1;
      padding-bottom: 12px;
      margin-bottom: 30px;
      font-size: 2.5em;
    }
    h2 {
      color: #2d3748;
      margin-top: 40px;
      margin-bottom: 20px;
      border-bottom: 2px solid #cbd5e0;
      padding-bottom: 10px;
      font-size: 1.8em;
    }
    h3 {
      color: #4a5568;
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 1.4em;
    }
    p {
      margin: 15px 0;
      text-align: justify;
      color: #4a5568;
    }
    ul, ol {
      margin: 15px 0;
      padding-left: 30px;
    }
    li {
      margin: 8px 0;
      color: #4a5568;
    }
    strong {
      color: #2d3748;
      font-weight: 600;
    }
    code {
      background: #edf2f7;
      padding: 3px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    .container {
      background: white;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    ${markdownToHTML(content)}
  </div>
</body>
</html>`
  
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  saveAs(blob, filename)
}

// Helper function per convertire Markdown semplice in HTML
function markdownToHTML(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Lists
    .replace(/^\s*\*\s+(.*)$/gim, '<li>$1</li>')
    .replace(/^\s*-\s+(.*)$/gim, '<li>$1</li>')
    .replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>')
    // Paragraphs
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<li')) {
        return block
      }
      return block.trim() ? `<p>${block.replace(/\n/g, '<br>')}</p>` : ''
    })
    .join('\n')
  
  // Wrap lists - Fix per TypeScript target < ES2018
  html = html.replace(/(<li>.*<\/li>[\n]?)+/g, match => `<ul>${match}</ul>`)
  
  return html
}

// Export HTML con stile iubenda-like
export const downloadHTMLStyled = (
  content: string, 
  companyName: string = '',
  lastUpdate: string = new Date().toLocaleDateString('it-IT'),
  filename: string = 'privacy-policy.html'
) => {
  const sections = content.split(/^## /gm).filter(Boolean)
  const toc = sections
    .map(section => {
      const title = section.split('\n')[0].trim()
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      return { title, id }
    })
    .slice(1) // Rimuovi il titolo principale

  const htmlSections = sections.map(section => {
    const lines = section.split('\n')
    const title = lines[0].trim()
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const body = lines.slice(1).join('\n')
    
    return `
      <section class="main__section" id="${id}">
        <h2>${title}</h2>
        ${markdownToHTML(body)}
      </section>
    `
  }).join('\n')

  const htmlContent = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Privacy Policy di ${companyName}</title>
  <meta name="description" content="Privacy Policy conforme GDPR - ${companyName}">
  <meta name="robots" content="noindex, follow">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --color-primary: #2E3D52;
      --color-secondary: #4A90E2;
      --color-text: #333333;
      --color-text-light: #666666;
      --color-bg: #FFFFFF;
      --color-bg-light: #F8F9FA;
      --color-border: #E0E0E0;
      --color-card-1: #E8F4FD;
      --color-card-2: #FFF4E6;
      --color-success: #10B981;
      --color-error: #EF4444;
      --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      --shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: var(--color-text);
      background: var(--color-bg-light);
    }

    #iub-legalDoc {
      max-width: 100%;
      margin: 0 auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Header */
    .main-header {
      background: var(--color-bg);
      border-bottom: 3px solid var(--color-secondary);
      padding: 40px 20px;
      margin-bottom: 30px;
      text-align: center;
    }

    .main-header h1 {
      font-size: 2.5rem;
      color: var(--color-primary);
      margin-bottom: 15px;
      font-weight: 700;
    }

    .main-header h1 strong {
      color: var(--color-secondary);
    }

    .main-header p {
      font-size: 1.1rem;
      color: var(--color-text-light);
      margin: 10px 0;
    }

    .main-header__meta {
      font-size: 0.95rem;
      color: var(--color-text-light);
      margin-top: 20px;
      font-style: italic;
    }

    /* Summary Section */
    .section__summary {
      background: var(--color-bg);
      padding: 40px;
      border-radius: 12px;
      box-shadow: var(--shadow);
      margin-bottom: 40px;
    }

    .section__summary h2 {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 30px;
      text-align: center;
    }

    .summary__cards-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-top: 30px;
    }

    .summary__card {
      background: linear-gradient(135deg, var(--color-card-1) 0%, #FFFFFF 100%);
      border-radius: 12px;
      padding: 30px;
      box-shadow: var(--shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 5px solid var(--color-secondary);
    }

    .summary__card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-hover);
    }

    .summary__card:nth-child(2) {
      background: linear-gradient(135deg, var(--color-card-2) 0%, #FFFFFF 100%);
      border-left-color: #FF9800;
    }

    .summary__card h3 {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-bottom: 15px;
      font-weight: 600;
    }

    .pills-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 20px 0;
    }

    .pill {
      background: rgba(74, 144, 226, 0.15);
      color: var(--color-secondary);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .check-style-list {
      list-style: none;
      margin: 15px 0;
    }

    .check-style-list li::before {
      content: "✓";
      color: var(--color-success);
      font-weight: bold;
      margin-right: 10px;
    }

    /* Aside Table of Contents */
    .aside-main-wrapper {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 40px;
      align-items: start;
    }

    #table-of-content-wrapper {
      position: sticky;
      top: 20px;
      background: var(--color-bg);
      border-radius: 12px;
      padding: 25px;
      box-shadow: var(--shadow);
    }

    #table-of-content-title {
      font-size: 1.3rem;
      color: var(--color-primary);
      margin-bottom: 20px;
      font-weight: 600;
      border-bottom: 2px solid var(--color-border);
      padding-bottom: 10px;
    }

    .table-of-content-list {
      list-style: none;
    }

    .table-of-content-list li {
      margin: 12px 0;
    }

    .table-of-content-list a {
      color: var(--color-text);
      text-decoration: none;
      transition: color 0.2s ease, padding-left 0.2s ease;
      display: block;
      padding: 8px 0;
      font-size: 0.95rem;
    }

    .table-of-content-list a:hover {
      color: var(--color-secondary);
      padding-left: 5px;
    }

    /* Main Content */
    main {
      background: var(--color-bg);
      border-radius: 12px;
      padding: 40px;
      box-shadow: var(--shadow);
    }

    .main__section {
      margin-bottom: 50px;
    }

    .main__section h2 {
      font-size: 1.8rem;
      color: var(--color-primary);
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--color-border);
    }

    .main__section h3 {
      font-size: 1.4rem;
      color: var(--color-primary);
      margin: 25px 0 15px;
    }

    .main__section h4 {
      font-size: 1.2rem;
      color: var(--color-text);
      margin: 20px 0 10px;
    }

    .main__section p {
      margin: 15px 0;
      color: var(--color-text-light);
      line-height: 1.8;
    }

    .main__section ul,
    .main__section ol {
      margin: 15px 0;
      padding-left: 30px;
    }

    .main__section li {
      margin: 10px 0;
      color: var(--color-text-light);
    }

    .main__section strong {
      color: var(--color-primary);
      font-weight: 600;
    }

    .main__section a {
      color: var(--color-secondary);
      text-decoration: none;
      border-bottom: 1px dotted var(--color-secondary);
      transition: border-bottom 0.2s ease;
    }

    .main__section a:hover {
      border-bottom: 1px solid var(--color-secondary);
    }

    /* Accordion (for third party services) */
    .legalDoc__accordion {
      border: 1px solid var(--color-border);
      border-radius: 8px;
      margin: 20px 0;
      overflow: hidden;
    }

    .legalDoc__accordion summary {
      cursor: pointer;
      padding: 20px;
      background: var(--color-bg-light);
      display: flex;
      align-items: center;
      gap: 15px;
      transition: background 0.2s ease;
    }

    .legalDoc__accordion summary:hover {
      background: #F0F0F0;
    }

    .legalDoc__accordion summary figure {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }

    .legalDoc__accordion summary img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .legalDoc__accordion summary h4 {
      font-size: 1.1rem;
      color: var(--color-primary);
      margin: 0;
    }

    .accordion__meta {
      font-size: 0.85rem;
      color: var(--color-text-light);
      margin-top: 5px;
    }

    .accordion__body {
      padding: 25px;
      border-top: 1px solid var(--color-border);
    }

    .body__details-box {
      background: var(--color-bg-light);
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }

    .body__details-box h5 {
      font-size: 1rem;
      color: var(--color-primary);
      margin-bottom: 10px;
    }

    .body__details-box ul {
      list-style: none;
      padding-left: 0;
    }

    .body__details-box li {
      padding: 5px 0;
      border-bottom: 1px solid var(--color-border);
    }

    .body__details-box li:last-child {
      border-bottom: none;
    }

    /* Pre-footer */
    .pre-footer {
      background: var(--color-bg);
      padding: 50px 20px;
      margin: 50px 0 0;
      border-radius: 12px 12px 0 0;
    }

    .pre-footer h2 {
      text-align: center;
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 40px;
    }

    .arrow-style-list {
      list-style: none;
    }

    .arrow-style-list li::before {
      content: "→";
      color: var(--color-secondary);
      font-weight: bold;
      margin-right: 10px;
    }

    .arrow-style-list li {
      margin: 15px 0;
    }

    .arrow-style-list a {
      color: var(--color-secondary);
      text-decoration: none;
      font-weight: 500;
    }

    .arrow-style-list a:hover {
      text-decoration: underline;
    }

    .cta-section {
      text-align: center;
      margin-top: 30px;
    }

    .btn {
      display: inline-block;
      background: var(--color-secondary);
      color: white;
      padding: 12px 30px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #3A7BC8;
    }

    /* Footer */
    footer {
      background: var(--color-primary);
      color: white;
      padding: 40px 20px;
      margin-top: 0;
    }

    .footer__first-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 30px;
    }

    footer h3 {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }

    footer p {
      margin: 8px 0;
      color: rgba(255, 255, 255, 0.8);
    }

    .footer__credits {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding-top: 20px;
      text-align: center;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
    }

    .footer__credits a {
      color: var(--color-secondary);
      text-decoration: none;
    }

    .footer__credits a:hover {
      text-decoration: underline;
    }

    /* Responsive */
    @media (max-width: 968px) {
      .aside-main-wrapper {
        grid-template-columns: 1fr;
      }

      #table-of-content-wrapper {
        position: static;
        margin-bottom: 30px;
      }

      .main-header h1 {
        font-size: 2rem;
      }

      .summary__cards-wrapper {
        grid-template-columns: 1fr;
      }

      main {
        padding: 25px;
      }

      .footer__first-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .container {
        padding: 15px;
      }

      .main-header {
        padding: 30px 15px;
      }

      .main-header h1 {
        font-size: 1.6rem;
      }

      .section__summary {
        padding: 25px;
      }

      .summary__card {
        padding: 20px;
      }

      main {
        padding: 20px;
      }
    }

    @media print {
      body {
        background: white;
      }

      #table-of-content-wrapper,
      .pre-footer,
      footer {
        display: none;
      }

      .aside-main-wrapper {
        grid-template-columns: 1fr;
      }

      .main__section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div id="iub-legalDoc">
    <div class="container">
      
      <header class="main-header">
        <h1>Privacy Policy di <strong>${companyName || '[Nome Azienda]'}</strong></h1>
        <p>Benvenuto nella privacy policy. Questa policy ti aiuterà a comprendere quali dati raccogliamo, perché li raccogliamo e quali sono i tuoi diritti in merito.</p>
        <p class="main-header__meta">Ultima modifica: ${lastUpdate}</p>
      </header>

      <div class="aside-main-wrapper">
        <aside id="table-of-content-wrapper">
          <h2 id="table-of-content-title">Sommario</h2>
          <ul class="table-of-content-list">
            ${toc.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join('\n            ')}
          </ul>
        </aside>

        <main>
          ${htmlSections}
        </main>
      </div>

      <div class="pre-footer">
        <h2>Come possiamo aiutare?</h2>
        <div class="summary__cards-wrapper">
          <article class="summary__card">
            <h3>Cosa puoi fare</h3>
            <div class="summary__card-section">
              <h4>I tuoi dati</h4>
              <ul class="arrow-style-list">
                <li><a href="mailto:privacy@example.com?subject=Richiesta%20Accesso%20Dati">Chiedici di conoscere e accedere ai dati che ti riguardano</a></li>
                <li><a href="mailto:privacy@example.com?subject=Richiesta%20Rettifica%20Dati">Chiedici di correggere i dati inesatti</a></li>
                <li><a href="mailto:privacy@example.com?subject=Richiesta%20Cancellazione%20Dati">Esercita il diritto all'oblio (cancellazione dati)</a></li>
                <li><a href="mailto:privacy@example.com?subject=Richiesta%20Portabilit%C3%A0%20Dati">Chiedici di trasferire i dati a un altro servizio</a></li>
              </ul>
            </div>
          </article>

          <article class="summary__card">
            <h3>In caso di problemi</h3>
            <p>Benché ci impegniamo a creare un'esperienza utente positiva, sappiamo che occasionalmente possono verificarsi problemi tra noi e i nostri utenti. In tal caso, non esitare a contattarci.</p>
            <div class="cta-section">
              <a href="#titolare-del-trattamento" class="btn">Contattaci</a>
            </div>
          </article>
        </div>
      </div>

      <footer>
        <div class="footer__first-row">
          <div>
            <h3>${companyName || '[Nome Azienda]'}</h3>
            <p><strong>Email:</strong> privacy@example.com</p>
            <p><strong>Generato:</strong> ${lastUpdate}</p>
          </div>
          <div>
            <p>Questa Privacy Policy è conforme al Regolamento UE 2016/679 (GDPR)</p>
          </div>
        </div>
        <div class="footer__credits">
          <p>Privacy Policy generata con GDPR Privacy SaaS Builder</p>
          <p>Documento conforme al GDPR (Regolamento UE 2016/679)</p>
        </div>
      </footer>

    </div>
  </div>
</body>
</html>`

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  saveAs(blob, filename)
}

