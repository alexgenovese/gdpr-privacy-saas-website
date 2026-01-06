"use client"

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DraggableSection from './DraggableSection'
import GDPR_TEMPLATES from '@/lib/templates'
import { useBuilderStore } from '@/store/builder'
import { Search, Building2, Database, Scale, ShieldCheck, Users, Cookie, ScrollText, LucideIcon } from 'lucide-react'

const ComponentsSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const sections = useBuilderStore(state => state.sections)

  const filteredComponents = GDPR_TEMPLATES.filter(component =>
    component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categorizedComponents = filteredComponents.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = []
    }
    acc[component.category].push(component)
    return acc
  }, {} as Record<string, typeof GDPR_TEMPLATES>)

  const categoryLabels = {
    'identity': 'Identità e Contatti',
    'data-processing': 'Trattamento Dati',
    'rights': 'Diritti degli Interessati',
    'security': 'Sicurezza',
    'third-parties': 'Soggetti Terzi',
    'cookies': 'Cookie e Tracking',
    'legal': 'Aspetti Legali'
  }

  const categoryIcons: Record<string, LucideIcon> = {
    'identity': Building2,
    'data-processing': Database,
    'rights': Scale,
    'security': ShieldCheck,
    'third-parties': Users,
    'cookies': Cookie,
    'legal': ScrollText
  }

  const isComponentAdded = (componentId: string) => {
    return sections.some(section => section.componentId === componentId)
  }

  return (
    <div className="w-[32rem] border-r bg-background p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Sezioni GDPR</h2>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cerca sezioni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-140px)]">
        <Accordion type="multiple" className="space-y-2">
          {Object.entries(categorizedComponents).map(([category, components]) => {
            const Icon = categoryIcons[category] || ScrollText
            
            return (
              <AccordionItem 
                key={category} 
                value={category}
                className="border rounded-lg bg-card px-4 transition-all hover:border-primary/30"
              >
                <AccordionTrigger className="hover:no-underline hover:bg-primary/5 -mx-4 px-4 rounded-t-lg transition-colors">
                  <div className="flex items-center justify-between w-full pr-2">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="text-base font-bold text-foreground">
                        {categoryLabels[category as keyof typeof categoryLabels] || category}
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground font-normal">
                      {components.length} {components.length === 1 ? 'sezione' : 'sezioni'}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {components.map(component => (
                      <DraggableSection
                        key={component.id}
                        component={component}
                        disabled={isComponentAdded(component.id)}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </ScrollArea>
    </div>
  )
}

export default ComponentsSidebar
