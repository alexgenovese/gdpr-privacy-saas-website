"use client"

import { useDraggable } from '@dnd-kit/core'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SemanticComponent } from '@/types'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface DraggableSectionProps {
  component: SemanticComponent
  disabled?: boolean
}

const DraggableSection = ({ component, disabled = false }: DraggableSectionProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: component.id,
    disabled
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: 'none',
  } : undefined

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "cursor-grab active:cursor-grabbing transition-all duration-200 border-2",
        "hover:shadow-lg hover:border-primary hover:bg-primary/5",
        isDragging && "opacity-30 scale-105",
        disabled && "opacity-50 cursor-not-allowed hover:shadow-none hover:bg-transparent hover:border-border"
      )}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-semibold leading-tight flex-1">
            {component.title}
          </CardTitle>
          {component.required && (
            <Badge variant="destructive" className="text-xs shrink-0">
              Obbligatorio
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono">
            {component.id}
          </Badge>
          {component.gdprArticles.map(article => (
            <Badge key={article} variant="secondary" className="text-xs">
              {article}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-xs leading-relaxed">
          {component.description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default DraggableSection
