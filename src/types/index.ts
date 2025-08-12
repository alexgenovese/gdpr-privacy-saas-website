export interface SemanticComponent {
  id: string
  title: string
  category: ComponentCategory
  template: string
  required: boolean
  gdprArticles: string[]
  description: string
  icon?: string
}

export interface PolicySection {
  id: string
  componentId: string
  title: string
  content: string
  order: number
}

export interface BuilderState {
  sections: PolicySection[]
  companyInfo: CompanyInfo
}

export interface CompanyInfo {
  name: string
  address: string
  email: string
  phone?: string
  website?: string
  dpo?: string
  dpoEmail?: string
}

export type ComponentCategory = 
  | 'identity'
  | 'data-processing'
  | 'rights'
  | 'security'
  | 'third-parties'
  | 'cookies'
  | 'legal'

export const MANDATORY_COMPONENTS = [
  'identity',
  'legal_basis',
  'purposes',
  'categories',
  'data_subject_rights'
] as const

export type MandatoryComponent = typeof MANDATORY_COMPONENTS[number]
