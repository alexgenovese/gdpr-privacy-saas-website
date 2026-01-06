"use client"

import { useState, useEffect } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu'
import EditableSection from './EditableSection'
import PolicyPreview from './PolicyPreview'
import VariablesEditor from './VariablesEditor'
import { useBuilderStore } from '@/store/builder'
import { validateMandatorySections, downloadMarkdown, downloadPDF, downloadHTML, copyToClipboard } from '@/lib/export-utils'
import { AlertTriangle, Download, Copy, RotateCcw, FileText, FileCode, Globe, ChevronDown } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'

interface PolicyEditorProps {
  isDraggingFromSidebar?: boolean
}

const PolicyEditor = ({ isDraggingFromSidebar = false }: PolicyEditorProps) => {
  const { sections, getSectionsByOrder, reorderSections, getFullPolicy, reset, getAllVariables, companyInfo, customVariables, isModified, markAsPublished } = useBuilderStore()
  const [isMounted, setIsMounted] = useState(false)
  const sectionsOrdered = getSectionsByOrder()
  const missingMandatory = validateMandatorySections(sections)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Controlla variabili non compilate - Solo quelle che appaiono nei template
  const allVariables = getAllVariables()
  const unfilledVariables = allVariables.filter(varKey => {
    // Variabili base
    if (varKey === 'RAGIONE_SOCIALE') return !companyInfo.name
    if (varKey === 'INDIRIZZO_COMPLETO') return !companyInfo.address
    if (varKey === 'EMAIL_TITOLARE' || varKey === 'EMAIL_DIRITTI' || varKey === 'EMAIL_CONTATTO') return !companyInfo.email
    if (varKey === 'TELEFONO') return !companyInfo.phone
    if (varKey === 'SITO_WEB') return !companyInfo.website
    if (varKey === 'NOME_DPO') return !companyInfo.dpo
    if (varKey === 'EMAIL_DPO') return !companyInfo.dpoEmail
    // Variabili custom - verifica che non siano vuote
    const value = customVariables[varKey]
    return !value || value.trim() === ''
  })
  
  // Può esportare solo se tutte le variabili presenti sono compilate
  const canExport = unfilledVariables.length === 0

  const { setNodeRef, isOver } = useDroppable({
    id: 'policy-editor',
  })

  const handleExport = async (format: 'download' | 'copy' | 'pdf' | 'html') => {
    if (!canExport) {
      toast({
        title: "Impossibile esportare",
        description: `Variabili non compilate: ${unfilledVariables.slice(0, 3).join(', ')}${unfilledVariables.length > 3 ? '...' : ''}`,
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
    } else if (format === 'pdf') {
      await downloadPDF(content)
      toast({
        title: "PDF generato",
        description: "Aperta finestra di stampa per salvare come PDF."
      })
    } else if (format === 'html') {
      downloadHTML(content)
      toast({
        title: "HTML scaricato",
        description: "La privacy policy è stata scaricata come file HTML."
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

  const handlePublish = async () => {
    if (!canExport) {
      toast({
        title: "Impossibile pubblicare",
        description: "Completa tutte le sezioni e variabili obbligatorie.",
        variant: "destructive"
      })
      return
    }

    // Qui si potrebbe integrare con un backend per pubblicare
    markAsPublished()
    toast({
      title: "Pubblicato",
      description: "La privacy policy è stata marcata come pubblicata.",
    })
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
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Toolbar - Fissa */}
      <div className="sticky top-0 z-20 border-b p-4 bg-background shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Editor Privacy Policy</h1>
            {isMounted && isModified && (
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                Modificato
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {/* Dropdown Download */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  disabled={!canExport}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleExport('copy')}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copia negli appunti
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleExport('download')}>
                  <FileText className="h-4 w-4 mr-2" />
                  Markdown (.md)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('html')}>
                  <FileCode className="h-4 w-4 mr-2" />
                  HTML (.html)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('pdf')}>
                  <Download className="h-4 w-4 mr-2" />
                  PDF (stampa)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Bottone Pubblica */}
            <Button
              onClick={handlePublish}
              disabled={!canExport || !isModified}
              className="bg-green-600 hover:bg-green-700"
            >
              <Globe className="h-4 w-4 mr-2" />
              Pubblica
            </Button>

            {/* Reset */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              disabled={sections.length === 0}
              title="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
        <Tabs defaultValue="editor" className="h-full">
          <TabsList>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="variables" className="relative">
              Variabili
              {isMounted && unfilledVariables.length > 0 && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {unfilledVariables.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="preview">Anteprima</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-4 h-full">
            {/* Validation Alerts - Sticky e Compatte */}
            {(missingMandatory.length > 0 || unfilledVariables.length > 0) && (
              <div className="sticky top-0 z-10 mb-4 space-y-2">
                {missingMandatory.length > 0 && (
                  <Alert variant="destructive" className="border-2 border-red-600 bg-red-50 dark:bg-red-950 shadow-lg animate-in fade-in slide-in-from-top-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="text-sm font-bold">Sezioni obbligatorie mancanti</AlertTitle>
                    <AlertDescription className="text-xs">
                      <strong>{missingMandatory.join(', ')}</strong>
                    </AlertDescription>
                  </Alert>
                )}
                
                {unfilledVariables.length > 0 && (
                  <Alert variant="destructive" className="border-2 border-orange-600 bg-orange-50 dark:bg-orange-950 shadow-lg animate-in fade-in slide-in-from-top-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="text-sm font-bold">Variabili non compilate ({unfilledVariables.length})</AlertTitle>
                    <AlertDescription className="text-xs">
                      <strong>{unfilledVariables.slice(0, 3).join(', ')}</strong>
                      {unfilledVariables.length > 3 && ` e altre ${unfilledVariables.length - 3}`}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}

            {/* Drop Zone */}
            <Card
              ref={setNodeRef}
              className={cn(
                "min-h-[400px] transition-all duration-200",
                isOver && "border-primary border-2 bg-primary/5 shadow-lg"
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
                    <div className={cn(
                      "transition-all duration-200",
                      isDraggingFromSidebar ? "space-y-2" : "space-y-4"
                    )}>
                      {sectionsOrdered.map((section, index) => (
                        <EditableSection
                          key={section.id}
                          section={section}
                          index={index}
                          isThumbnail={isDraggingFromSidebar}
                        />
                      ))}
                    </div>
                  </SortableContext>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variables" className="mt-4">
            <VariablesEditor />
          </TabsContent>

          <TabsContent value="preview" className="mt-4">
            <PolicyPreview />
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default PolicyEditor
