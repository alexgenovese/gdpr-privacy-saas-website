"use client"

import { DndContext, DragEndEvent, DragOverEvent, closestCenter } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import ComponentsSidebar from '@/components/ComponentsSidebar'
import PolicyEditor from '@/components/PolicyEditor'
import { useBuilderStore } from '@/store/builder'
import GDPR_TEMPLATES from '@/lib/templates'

export default function BuilderPage() {
  const { addSection, reorderSections, getSectionsByOrder } = useBuilderStore()
  const sectionsOrdered = getSectionsByOrder()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

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

  const handleDragOver = (event: DragOverEvent) => {
    // Handle drag over for better UX - optional implementation
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <div className="h-screen flex">
        <ComponentsSidebar />
        <PolicyEditor />
      </div>
    </DndContext>
  )
}
