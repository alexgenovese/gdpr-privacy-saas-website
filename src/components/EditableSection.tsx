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
import { cn } from '@/lib/utils'

interface EditableSectionProps {
  section: PolicySection
  index: number
}

const EditableSection = ({ section, index }: EditableSectionProps) => {
  const { updateSectionTitle, updateSectionContent, removeSection } = useBuilderStore()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
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

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "transition-all",
        isDragging && "opacity-50 scale-105 shadow-lg"
      )}
    >
      <CardHeader className="pb-3">
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
