"use client"

import { useState } from 'react'
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import ComponentsSidebar from '@/components/ComponentsSidebar'
import PolicyEditor from '@/components/PolicyEditor'
import { useBuilderStore } from '@/store/builder'
import GDPR_TEMPLATES from '@/lib/templates'
import DraggableSection from '@/components/DraggableSection'
import { SemanticComponent } from '@/types'

export default function BuilderPage() {
  const { addSection, reorderSections, getSectionsByOrder } = useBuilderStore()
  const sectionsOrdered = getSectionsByOrder()
  const [activeId, setActiveId] = useState<string | null>(null)
  
  // Configura sensori per drag immediato e fluido
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Minimo movimento per attivare il drag
      },
    })
  )
  
  const activeDraggedComponent = activeId 
    ? GDPR_TEMPLATES.find(t => t.id === activeId) 
    : null

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    // Handle drag from sidebar to editor
    if (over.id === 'policy-editor' && active.data.current?.type !== 'sortable') {
      const template = GDPR_TEMPLATES.find(t => t.id === active.id)
      if (template) {
        addSection(template.id, template.title, template.template)
      }
      return
    }

    // Handle reordering within editor
    if (active.data.current?.type === 'sortable' && over.data.current?.type === 'sortable') {
      const activeIndex = sectionsOrdered.findIndex(s => s.id === active.id)
      const overIndex = sectionsOrdered.findIndex(s => s.id === over.id)

      if (activeIndex !== overIndex) {
        reorderSections(activeIndex, overIndex)
      }
    }
  }
  
  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleDragOver = (event: DragOverEvent) => {
    // Handle drag over for better UX - optional implementation
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragCancel={handleDragCancel}
    >
      <div className="h-screen flex">
        <ComponentsSidebar />
        <PolicyEditor isDraggingFromSidebar={!!activeId && !activeId.startsWith('section-')} />
      </div>
      
      {/* DragOverlay per feedback visivo fluido durante il drag */}
      <DragOverlay dropAnimation={{
        duration: 200,
        easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
      }}>
        {activeDraggedComponent ? (
          <div className="rotate-3 scale-105">
            <DraggableSection 
              component={activeDraggedComponent} 
              disabled={false}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
