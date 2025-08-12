let toastTimeout: NodeJS.Timeout | null = null

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export const toast = ({ title, description, variant = "default" }: ToastProps) => {
  // Clear existing toast
  if (toastTimeout) {
    clearTimeout(toastTimeout)
  }

  // Create toast element
  const toastEl = document.createElement('div')
  toastEl.className = `fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg max-w-sm ${
    variant === 'destructive' 
      ? 'bg-destructive text-destructive-foreground' 
      : 'bg-background border text-foreground'
  }`
  toastEl.innerHTML = `
    ${title ? `<div class="font-medium">${title}</div>` : ''}
    ${description ? `<div class="text-sm opacity-90">${description}</div>` : ''}
  `

  document.body.appendChild(toastEl)

  // Auto remove after 3 seconds
  toastTimeout = setTimeout(() => {
    toastEl.remove()
  }, 3000)
}

export const useToast = () => {
  return { toast }
}
