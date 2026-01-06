"use client"

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Maximize2, Minimize2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useBuilderStore } from '@/store/builder'

const PolicyPreview = () => {
  const [isCompact, setIsCompact] = useState(false)
  const getFullPolicy = useBuilderStore((state) => state.getFullPolicy)
  const fullPolicy = getFullPolicy()

  return (
    <div className="h-full">
      {/* Preview Panel */}
      <Card className="h-full border-2">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Anteprima Privacy Policy</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCompact(!isCompact)}
              className="gap-2"
            >
              {isCompact ? (
                <>
                  <Maximize2 className="h-4 w-4" />
                  Normale
                </>
              ) : (
                <>
                  <Minimize2 className="h-4 w-4" />
                  Compatto
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 h-[calc(100%-4rem)]">
          <ScrollArea className="h-full">
            <div className={isCompact ? "max-w-5xl mx-auto px-6 py-6" : "max-w-4xl mx-auto px-8 py-8"}>
              <article className={`prose prose-slate dark:prose-invert max-w-none
                prose-headings:tracking-tight
                ${isCompact 
                  ? `prose-sm
                    prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-6 prose-h1:pb-3 prose-h1:border-b-2 prose-h1:border-primary prose-h1:text-foreground
                    prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border prose-h2:text-foreground
                    prose-h3:text-lg prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-primary/90
                    prose-h4:text-base prose-h4:font-medium prose-h4:mb-1 prose-h4:mt-3 prose-h4:text-muted-foreground
                    prose-h5:text-sm prose-h5:font-normal prose-h5:mb-1 prose-h5:mt-2 prose-h5:text-muted-foreground
                    prose-h6:text-xs prose-h6:mb-1 prose-h6:mt-2 prose-h6:uppercase prose-h6:tracking-wider prose-h6:text-muted-foreground prose-h6:font-semibold
                    prose-p:text-sm prose-p:leading-snug prose-p:mb-2 prose-p:text-foreground/90
                    prose-ul:my-2 prose-ul:list-disc prose-ul:pl-5
                    prose-ol:my-2 prose-ol:list-decimal prose-ol:pl-5
                    prose-li:mb-1 prose-li:leading-snug prose-li:text-sm
                    prose-strong:font-semibold prose-strong:text-foreground
                    prose-a:text-primary prose-a:underline prose-a:decoration-1 prose-a:hover:text-primary/80
                    prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:pl-3 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:text-sm
                    prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs prose-code:text-primary
                    prose-pre:bg-muted prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto prose-pre:text-xs
                    prose-table:border-collapse prose-table:w-full prose-table:my-4 prose-table:text-sm
                    prose-th:border prose-th:p-2 prose-th:bg-muted prose-th:font-semibold prose-th:text-left prose-th:text-xs
                    prose-td:border prose-td:p-2 prose-td:text-sm
                    prose-hr:my-4 prose-hr:border-border`
                  : `prose-lg
                    prose-h1:text-5xl prose-h1:font-extrabold prose-h1:mb-8 prose-h1:mt-12 prose-h1:pb-6 prose-h1:border-b-4 prose-h1:border-primary prose-h1:text-foreground
                    prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-border prose-h2:text-foreground
                    prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-primary/90 prose-h3:pl-4 prose-h3:border-l-4 prose-h3:border-primary/30
                    prose-h4:text-lg prose-h4:font-medium prose-h4:mb-2 prose-h4:mt-6 prose-h4:text-muted-foreground prose-h4:italic
                    prose-h5:text-base prose-h5:font-normal prose-h5:mb-2 prose-h5:mt-4 prose-h5:text-muted-foreground
                    prose-h6:text-sm prose-h6:mb-2 prose-h6:mt-3 prose-h6:uppercase prose-h6:tracking-wider prose-h6:text-muted-foreground prose-h6:font-semibold
                    prose-p:text-base prose-p:leading-relaxed prose-p:mb-4 prose-p:text-foreground/90
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:mb-2 prose-li:leading-relaxed
                    prose-strong:font-semibold prose-strong:text-foreground
                    prose-a:text-primary prose-a:underline prose-a:decoration-2 prose-a:hover:text-primary/80
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
                    prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:text-primary
                    prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                    prose-table:border-collapse prose-table:w-full prose-table:my-6
                    prose-th:border prose-th:p-3 prose-th:bg-muted prose-th:font-semibold prose-th:text-left
                    prose-td:border prose-td:p-3
                    prose-hr:my-8 prose-hr:border-border`
                }
              `}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {fullPolicy}
                </ReactMarkdown>
              </article>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

export default PolicyPreview
