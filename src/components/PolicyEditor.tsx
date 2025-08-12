"use client"

import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EditableSection from './EditableSection'
import PolicyPreview from './PolicyPreview'
import { useBuilderStore } from '@/store/builder'
import { validateMandatorySections, downloadMarkdown, copyToClipboard } from '@/lib/export-utils'
import { AlertTriangle, Download, Copy, RotateCcw } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'

const PolicyEditor = () => {
  const { sections, getSectionsByOrder, reorderSections, getFullPolicy, reset } = useBuilderStore()
  const sectionsOrdered = getSectionsByOrder()
  const missingMandatory = validateMandatorySections(sections)

  const { setNodeRef, isOver } = useDroppable({
    id: 'policy-editor',
  })

  const handleExport = async (format: 'download' | 'copy') => {
    if (missingMandatory.length > 0) {
      toast({
        title: "Sezioni mancanti",
        description: "Aggiungi tutte le sezioni obbligatorie prima di esportare.",
        variant: "destructive"
      })
      return
    }

    const content = getFullPolicy()

    if (format === 'download') {
      downloadMarkdown(content)
      toast({
        title: "Download completato",
        description: "La privacy policy è stata scaricata come file Markdown."
      })
    } else {
      const success = await copyToClipboard(content)
      if (success) {
        toast({
          title: "Copiato negli appunti",
          description: "La privacy policy è stata copiata negli appunti."
        })
      } else {
        toast({
          title: "Errore",
          description: "Impossibile copiare negli appunti.",
          variant: "destructive"
        })
      }
    }
  }

  const handleReset = () => {
    if (confirm('Sei sicuro di voler cancellare tutto il lavoro? Questa azione non può essere annullata.')) {
      reset()
      toast({
        title: "Reset completato",
        description: "Tutte le sezioni sono state rimosse."
      })
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Toolbar */}
      <div className="border-b p-4 bg-background">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Editor Privacy Policy</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={sections.length === 0}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={() => handleExport('copy')}
              disabled={missingMandatory.length > 0}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copia
            </Button>
            <Button
              onClick={() => handleExport('download')}
              disabled={missingMandatory.length > 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Scarica .md
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <Tabs defaultValue="editor" className="h-full">
          <TabsList>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Anteprima</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-4 h-full">
            {/* Validation Alert */}
            {missingMandatory.length > 0 && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Sezioni obbligatorie mancanti</AlertTitle>
                <AlertDescription>
                  Le seguenti sezioni sono obbligatorie per la conformità GDPR:{' '}
                  <strong>{missingMandatory.join(', ')}</strong>
                </AlertDescription>
              </Alert>
            )}

            {/* Drop Zone */}
            <Card
              ref={setNodeRef}
              className={cn(
                "min-h-[400px] transition-colors",
                isOver && "border-primary bg-primary/5"
              )}
            >
              <CardContent className="p-6">
                {sections.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12">
                    <p className="text-lg mb-2">Inizia trascinando una sezione qui</p>
                    <p className="text-sm">
                      Le sezioni obbligatorie sono evidenziate in rosso nella sidebar
                    </p>
                  </div>
                ) : (
                  <SortableContext 
                    items={sectionsOrdered.map(s => s.id)} 
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-4">
                      {sectionsOrdered.map((section, index) => (
                        <EditableSection
                          key={section.id}
                          section={section}
                          index={index}
                        />
                      ))}
                    </div>
                  </SortableContext>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="mt-4">
            <PolicyPreview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default PolicyEditor
