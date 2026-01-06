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
  
  // Wrap lists
  html = html.replace(/(<li>.*<\/li>\n?)+/gs, match => `<ul>${match}</ul>`)
  
  return html
}
