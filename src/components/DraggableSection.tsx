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
  } : undefined

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "cursor-grab active:cursor-grabbing transition-all hover:shadow-md",
        isDragging && "opacity-50 scale-105 shadow-lg",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{component.title}</CardTitle>
          {component.required && (
            <Badge variant="destructive" className="text-xs">Obbligatorio</Badge>
          )}
        </div>
        <CardDescription className="text-xs">
          {component.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs text-muted-foreground">
          {component.gdprArticles.join(', ')}
        </div>
      </CardContent>
    </Card>
  )
}

export default DraggableSection
