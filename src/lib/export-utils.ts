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
  return mandatoryIds.filter(id => !presentIds.includes(id))
}
