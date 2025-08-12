"use client"

import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useBuilderStore } from '@/store/builder'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Settings } from 'lucide-react'
import { useState } from 'react'

const PolicyPreview = () => {
  const { companyInfo, updateCompanyInfo, getFullPolicy } = useBuilderStore()
  const [showSettings, setShowSettings] = useState(false)

  const handleCompanyInfoChange = (field: string, value: string) => {
    updateCompanyInfo({ [field]: value })
  }

  const fullPolicy = getFullPolicy()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
      {/* Company Info Panel */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Informazioni Azienda
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label htmlFor="company-name" className="text-xs">Ragione Sociale</Label>
            <Input
              id="company-name"
              value={companyInfo.name}
              onChange={(e) => handleCompanyInfoChange('name', e.target.value)}
              placeholder="Es. ABC S.r.l."
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="company-address" className="text-xs">Indirizzo</Label>
            <Input
              id="company-address"
              value={companyInfo.address}
              onChange={(e) => handleCompanyInfoChange('address', e.target.value)}
              placeholder="Via, CAP Città (Prov)"
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="company-email" className="text-xs">Email</Label>
            <Input
              id="company-email"
              type="email"
              value={companyInfo.email}
              onChange={(e) => handleCompanyInfoChange('email', e.target.value)}
              placeholder="info@azienda.it"
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="company-phone" className="text-xs">Telefono</Label>
            <Input
              id="company-phone"
              value={companyInfo.phone}
              onChange={(e) => handleCompanyInfoChange('phone', e.target.value)}
              placeholder="+39 123 456 7890"
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="company-website" className="text-xs">Sito Web</Label>
            <Input
              id="company-website"
              value={companyInfo.website}
              onChange={(e) => handleCompanyInfoChange('website', e.target.value)}
              placeholder="https://www.azienda.it"
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="dpo-name" className="text-xs">DPO (opzionale)</Label>
            <Input
              id="dpo-name"
              value={companyInfo.dpo}
              onChange={(e) => handleCompanyInfoChange('dpo', e.target.value)}
              placeholder="Nome DPO"
              className="text-xs"
            />
          </div>
          <div>
            <Label htmlFor="dpo-email" className="text-xs">Email DPO</Label>
            <Input
              id="dpo-email"
              type="email"
              value={companyInfo.dpoEmail}
              onChange={(e) => handleCompanyInfoChange('dpoEmail', e.target.value)}
              placeholder="dpo@azienda.it"
              className="text-xs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Preview Panel */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-sm">Anteprima Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[600px] p-6">
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {fullPolicy}
              </ReactMarkdown>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

export default PolicyPreview
