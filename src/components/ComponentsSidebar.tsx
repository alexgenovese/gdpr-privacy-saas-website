"use client"

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DraggableSection from './DraggableSection'
import GDPR_TEMPLATES from '@/lib/templates'
import { useBuilderStore } from '@/store/builder'
import { Search } from 'lucide-react'

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

  const isComponentAdded = (componentId: string) => {
    return sections.some(section => section.componentId === componentId)
  }

  return (
    <div className="w-80 border-r bg-background p-4">
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
        <div className="space-y-4">
          {Object.entries(categorizedComponents).map(([category, components]) => (
            <Card key={category}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">
                  {categoryLabels[category as keyof typeof categoryLabels] || category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {components.map(component => (
                  <DraggableSection
                    key={component.id}
                    component={component}
                    disabled={isComponentAdded(component.id)}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default ComponentsSidebar
