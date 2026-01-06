"use client"

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { PolicySection } from '@/types'
import { useBuilderStore } from '@/store/builder'
import { GripVertical, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import GDPR_TEMPLATES from '@/lib/templates'

interface EditableSectionProps {
  section: PolicySection
  index: number
  isThumbnail?: boolean
}

const EditableSection = ({ section, index, isThumbnail = false }: EditableSectionProps) => {
  const { updateSectionTitle, updateSectionContent, removeSection } = useBuilderStore()
  
  // Trova il template originale per mostrare l'ID
  const originalTemplate = GDPR_TEMPLATES.find(t => t.id === section.componentId)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: section.id,
    transition: {
      duration: 200,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 200ms cubic-bezier(0.25, 1, 0.5, 1)',
  }

  const handleTitleChange = (value: string) => {
    updateSectionTitle(section.id, value)
  }

  const handleContentChange = (value: string) => {
    updateSectionContent(section.id, value)
  }

  const handleRemove = () => {
    if (confirm('Sei sicuro di voler rimuovere questa sezione?')) {
      removeSection(section.id)
    }
  }

  // Modalità miniatura: mostra solo informazioni essenziali
  if (isThumbnail) {
    return (
      <Card
        ref={setNodeRef}
        style={style}
        className={cn(
          "transition-all duration-200 border-2",
          isDragging && "opacity-30 shadow-2xl z-50",
          "hover:border-primary/50"
        )}
      >
        <CardHeader className="py-3 px-4">
          <div className="flex items-center gap-2">
            <div
              className="cursor-grab active:cursor-grabbing p-1 text-muted-foreground hover:text-foreground"
              {...attributes}
              {...listeners}
            >
              <GripVertical className="h-3 w-3" />
            </div>
            <Badge variant="secondary" className="text-xs">
              #{index + 1}
            </Badge>
            {originalTemplate && (
              <Badge variant="outline" className="text-xs font-mono">
                {originalTemplate.id}
              </Badge>
            )}
            <span className="text-sm font-medium truncate flex-1">{section.title}</span>
            {originalTemplate?.required && (
              <Badge variant="destructive" className="text-xs">Obbligatorio</Badge>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemove}
              className="h-6 w-6 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
      </Card>
    )
  }

  // Modalità normale: visualizzazione completa
  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "transition-shadow duration-200",
        isDragging && "opacity-30 shadow-2xl z-50"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            #{index + 1}
          </Badge>
          {originalTemplate && (
            <Badge variant="outline" className="text-xs font-mono">
              {originalTemplate.id}
            </Badge>
          )}
          {originalTemplate?.required && (
            <Badge variant="destructive" className="text-xs">Obbligatorio</Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div
            className="cursor-grab active:cursor-grabbing p-1 text-muted-foreground hover:text-foreground"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="h-4 w-4" />
          </div>
          <Input
            value={section.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="font-medium"
            placeholder="Titolo della sezione..."
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          value={section.content}
          onChange={(e) => handleContentChange(e.target.value)}
          placeholder="Contenuto della sezione in Markdown..."
          className="min-h-[200px] font-mono text-sm"
        />
        <div className="mt-2 text-xs text-muted-foreground">
          Suggerimento: Usa placeholder come [RAGIONE_SOCIALE], [EMAIL_TITOLARE] per la personalizzazione automatica
        </div>
      </CardContent>
    </Card>
  )
}

export default EditableSection
