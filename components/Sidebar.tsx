import { Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './Sidebar.module.css';
import React from 'react';

const Sidebar = ({ items }) => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarHeader}>
        <h3>Elementi disponibili</h3>
        <span className={styles.hint}>Trascina per aggiungere</span>
      </div>
      
      <Droppable droppableId="sidebar" type="ITEM">
        {(provided, snapshot) => (
          <div 
            ref={provided.innerRef} 
            {...provided.droppableProps} 
            className={`${styles.sidebar} ${snapshot.isDraggingOver ? styles.sidebarDragOver : ''}`}
          >
            {items.map((item, index) => (
              <Draggable 
                key={item.id} 
                draggableId={item.id} 
                index={index}
                isDragDisabled={false}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${styles.sidebarItem} ${
                      snapshot.isDragging ? styles.itemDragging : ''
                    } ${snapshot.isDropAnimating ? styles.itemDropping : ''}`}
                    style={{
                      ...provided.draggableProps.style,
                      // Performance ottimizzate per drag veloce
                      transform: snapshot.isDragging 
                        ? `${provided.draggableProps.style?.transform} rotate(2deg)` 
                        : provided.draggableProps.style?.transform,
                      zIndex: snapshot.isDragging ? 10000 : 1,
                      // Rimuovi transizioni durante il drag per performance
                      transition: snapshot.isDragging || snapshot.isDropAnimating 
                        ? 'none' 
                        : 'all 0.15s cubic-bezier(0.2, 0, 0, 1)',
                    }}
                  >
                    <div className={styles.itemIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5H15M9 9H15M9 13H15M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className={styles.itemContent}>
                      <span className={styles.itemTitle}>{item.content}</span>
                      <span className={styles.itemDescription}>Sezione privacy policy</span>
                    </div>
                    <div className={styles.dragHandle}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <circle cx="9" cy="7" r="1" fill="currentColor"/>
                        <circle cx="15" cy="7" r="1" fill="currentColor"/>
                        <circle cx="9" cy="12" r="1" fill="currentColor"/>
                        <circle cx="15" cy="12" r="1" fill="currentColor"/>
                        <circle cx="9" cy="17" r="1" fill="currentColor"/>
                        <circle cx="15" cy="17" r="1" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    {/* Overlay per il feedback durante il drag */}
                    {snapshot.isDragging && (
                      <div className={styles.dragOverlay}>
                        <span>Rilascia qui</span>
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            
            {/* Indicatore quando la sidebar è vuota */}
            {items.length === 0 && (
              <div className={styles.emptyState}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M2 7L12 12M12 12L22 7M12 12V22" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <p>Nessun elemento disponibile</p>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Sidebar;