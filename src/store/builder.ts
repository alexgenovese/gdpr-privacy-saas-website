import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PolicySection, CompanyInfo, BuilderState } from '@/types'

interface BuilderStore extends BuilderState {
  // Actions
  addSection: (componentId: string, title: string, template: string) => void
  removeSection: (sectionId: string) => void
  updateSectionTitle: (sectionId: string, title: string) => void
  updateSectionContent: (sectionId: string, content: string) => void
  reorderSections: (fromIndex: number, toIndex: number) => void
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void
  updateCustomVariable: (key: string, value: string) => void
  getAllVariables: () => string[]
  markAsModified: () => void
  markAsPublished: () => void
  reset: () => void
  getSectionsByOrder: () => PolicySection[]
  getFullPolicy: () => string
}

const initialState: BuilderState = {
  sections: [],
  companyInfo: {
    name: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    dpo: '',
    dpoEmail: ''
  },
  customVariables: {},
  isModified: false
}

export const useBuilderStore = create<BuilderStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      addSection: (componentId: string, title: string, template: string) => {
        const existingSection = get().sections.find(s => s.componentId === componentId)
        if (existingSection) return // Prevent duplicates

        const newSection: PolicySection = {
          id: `${componentId}-${Date.now()}`,
          componentId,
          title,
          content: template,
          order: get().sections.length
        }

        set((state) => ({
          sections: [...state.sections, newSection],
          isModified: true
        }))
      },

      removeSection: (sectionId: string) => {
        set((state) => ({
          sections: state.sections
            .filter(s => s.id !== sectionId)
            .map((s, index) => ({ ...s, order: index })),
          isModified: true
        }))
      },

      updateSectionTitle: (sectionId: string, title: string) => {
        set((state) => ({
          sections: state.sections.map(s =>
            s.id === sectionId ? { ...s, title } : s
          ),
          isModified: true
        }))
      },

      updateSectionContent: (sectionId: string, content: string) => {
        set((state) => ({
          sections: state.sections.map(s =>
            s.id === sectionId ? { ...s, content } : s
          ),
          isModified: true
        }))
      },

      reorderSections: (fromIndex: number, toIndex: number) => {
        set((state) => {
          const sections = [...state.sections]
          const [movedSection] = sections.splice(fromIndex, 1)
          sections.splice(toIndex, 0, movedSection)

          return {
            sections: sections.map((s, index) => ({ ...s, order: index })),
            isModified: true
          }
        })
      },

      updateCompanyInfo: (info: Partial<CompanyInfo>) => {
        set((state) => ({
          companyInfo: { ...state.companyInfo, ...info },
          isModified: true
        }))
      },

      updateCustomVariable: (key: string, value: string) => {
        set((state) => ({
          customVariables: { ...state.customVariables, [key]: value },
          isModified: true
        }))
      },

      getAllVariables: () => {
        const sections = get().sections
        const variablesSet = new Set<string>()
        
        sections.forEach(section => {
          const matches = section.content.match(/\[([A-Z_]+)\]/g)
          if (matches) {
            matches.forEach(match => {
              const key = match.slice(1, -1) // Rimuove [ e ]
              variablesSet.add(key)
            })
          }
        })
        
        return Array.from(variablesSet).sort()
      },

      markAsModified: () => {
        set({ isModified: true })
      },

      markAsPublished: () => {
        set({ isModified: false })
      },

      reset: () => {
        set(initialState)
      },

      getSectionsByOrder: () => {
        return get().sections.sort((a, b) => a.order - b.order)
      },

      getFullPolicy: () => {
        const sections = get().getSectionsByOrder()
        const companyInfo = get().companyInfo
        const customVariables = get().customVariables

        let fullPolicy = `# Privacy Policy\n\n`

        if (companyInfo.name) {
          fullPolicy += `**Ultimo aggiornamento**: ${new Date().toLocaleDateString('it-IT')}\n\n`
        }

        sections.forEach(section => {
          let content = section.content
            // Sostituisce variabili companyInfo
            .replace(/\[RAGIONE_SOCIALE\]/g, companyInfo.name || '[RAGIONE_SOCIALE]')
            .replace(/\[INDIRIZZO_COMPLETO\]/g, companyInfo.address || '[INDIRIZZO_COMPLETO]')
            .replace(/\[EMAIL_TITOLARE\]/g, companyInfo.email || '[EMAIL_TITOLARE]')
            .replace(/\[TELEFONO\]/g, companyInfo.phone || '[TELEFONO]')
            .replace(/\[SITO_WEB\]/g, companyInfo.website || '[SITO_WEB]')
            .replace(/\[NOME_DPO\]/g, companyInfo.dpo || '[NOME_DPO]')
            .replace(/\[EMAIL_DPO\]/g, companyInfo.dpoEmail || '[EMAIL_DPO]')
            .replace(/\[EMAIL_DIRITTI\]/g, companyInfo.email || '[EMAIL_DIRITTI]')
            .replace(/\[EMAIL_CONTATTO\]/g, companyInfo.email || '[EMAIL_CONTATTO]')
          
          // Sostituisce tutte le altre variabili custom
          Object.entries(customVariables).forEach(([key, value]) => {
            const regex = new RegExp(`\\[${key}\\]`, 'g')
            content = content.replace(regex, value || `[${key}]`)
          })

          fullPolicy += `${content}\n\n`
        })

        return fullPolicy
      }
    }),
    {
      name: 'gdpr-policy-builder-storage',
      partialize: (state) => ({
        sections: state.sections,
        companyInfo: state.companyInfo,
        customVariables: state.customVariables,
        isModified: state.isModified
      })
    }
  )
)
