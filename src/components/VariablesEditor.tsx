"use client"

import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useBuilderStore } from '@/store/builder'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const VariablesEditor = () => {
  const { 
    companyInfo, 
    updateCompanyInfo, 
    getAllVariables, 
    customVariables, 
    updateCustomVariable,
    sections 
  } = useBuilderStore()
  
  const allVariables = getAllVariables()
  
  // Variabili di base gestite da companyInfo
  const baseVariables = [
    'RAGIONE_SOCIALE',
    'INDIRIZZO_COMPLETO',
    'EMAIL_TITOLARE',
    'TELEFONO',
    'SITO_WEB',
    'NOME_DPO',
    'EMAIL_DPO',
    'EMAIL_DIRITTI',
    'EMAIL_CONTATTO'
  ]
  
  // Variabili custom (non base)
  const customVars = allVariables.filter(v => !baseVariables.includes(v))
  
  const getVariableLabel = (key: string): string => {
    const labels: Record<string, string> = {
      'RAGIONE_SOCIALE': 'Ragione Sociale',
      'INDIRIZZO_COMPLETO': 'Indirizzo Completo',
      'EMAIL_TITOLARE': 'Email Titolare',
      'TELEFONO': 'Telefono',
      'SITO_WEB': 'Sito Web',
      'NOME_DPO': 'Nome DPO (Data Protection Officer)',
      'EMAIL_DPO': 'Email DPO',
      'EMAIL_DIRITTI': 'Email per Diritti GDPR',
      'EMAIL_CONTATTO': 'Email di Contatto',
    }
    return labels[key] || key.replace(/_/g, ' ').toLowerCase()
  }
  
  const getVariableDescription = (key: string): string => {
    const descriptions: Record<string, string> = {
      'RAGIONE_SOCIALE': 'Nome legale della tua azienda o organizzazione',
      'INDIRIZZO_COMPLETO': 'Via, numero civico, CAP, città, provincia',
      'EMAIL_TITOLARE': 'Email principale del titolare del trattamento',
      'TELEFONO': 'Numero di telefono aziendale (opzionale)',
      'SITO_WEB': 'URL del tuo sito web (es: https://example.com)',
      'NOME_DPO': 'Nome completo del DPO se nominato',
      'EMAIL_DPO': 'Email del DPO se presente',
    }
    return descriptions[key] || ''
  }
  
  const isVariableSet = (key: string): boolean => {
    if (key === 'RAGIONE_SOCIALE') return !!companyInfo.name
    if (key === 'INDIRIZZO_COMPLETO') return !!companyInfo.address
    if (key === 'EMAIL_TITOLARE' || key === 'EMAIL_DIRITTI' || key === 'EMAIL_CONTATTO') return !!companyInfo.email
    if (key === 'TELEFONO') return !!companyInfo.phone
    if (key === 'SITO_WEB') return !!companyInfo.website
    if (key === 'NOME_DPO') return !!companyInfo.dpo
    if (key === 'EMAIL_DPO') return !!companyInfo.dpoEmail
    return !!customVariables[key]
  }
  
  const filledCount = allVariables.filter(isVariableSet).length
  const totalCount = allVariables.length

  if (sections.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        <p className="text-lg mb-2">Nessuna sezione aggiunta</p>
        <p className="text-sm">
          Aggiungi delle sezioni per visualizzare le variabili da personalizzare
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress indicator */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <div className="flex items-center justify-between">
            <span>
              Compilate <strong>{filledCount}</strong> su <strong>{totalCount}</strong> variabili
            </span>
            {filledCount === totalCount && (
              <Badge variant="default" className="bg-green-600">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Completato
              </Badge>
            )}
          </div>
        </AlertDescription>
      </Alert>

      <ScrollArea className="h-[calc(100vh-240px)]">
        <div className="space-y-6 pr-4">
          {/* Informazioni Base */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informazioni Base</CardTitle>
              <CardDescription>
                Dati principali della tua organizzazione richiesti per la conformità GDPR
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    Ragione Sociale
                    {isVariableSet('RAGIONE_SOCIALE') && (
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    )}
                  </Label>
                  <Input
                    id="name"
                    value={companyInfo.name}
                    onChange={(e) => updateCompanyInfo({ name: e.target.value })}
                    placeholder="Es: Acme S.r.l."
                  />
                  <p className="text-xs text-muted-foreground">
                    {getVariableDescription('RAGIONE_SOCIALE')}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    Email Principale
                    {isVariableSet('EMAIL_TITOLARE') && (
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    )}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => updateCompanyInfo({ email: e.target.value })}
                    placeholder="privacy@example.com"
                  />
                  <p className="text-xs text-muted-foreground">
                    Per EMAIL_TITOLARE, EMAIL_DIRITTI, EMAIL_CONTATTO
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  Indirizzo Completo
                  {isVariableSet('INDIRIZZO_COMPLETO') && (
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                  )}
                </Label>
                <Textarea
                  id="address"
                  value={companyInfo.address}
                  onChange={(e) => updateCompanyInfo({ address: e.target.value })}
                  placeholder="Es: Via Roma 123, 20100 Milano (MI), Italia"
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">
                  {getVariableDescription('INDIRIZZO_COMPLETO')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    Telefono
                    {isVariableSet('TELEFONO') && (
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    )}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={companyInfo.phone || ''}
                    onChange={(e) => updateCompanyInfo({ phone: e.target.value })}
                    placeholder="+39 02 1234567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    Sito Web
                    {isVariableSet('SITO_WEB') && (
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                    )}
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={companyInfo.website || ''}
                    onChange={(e) => updateCompanyInfo({ website: e.target.value })}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DPO (se presente nelle sezioni) */}
          {(allVariables.includes('NOME_DPO') || allVariables.includes('EMAIL_DPO')) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Protection Officer (DPO)</CardTitle>
                <CardDescription>
                  Opzionale - Compila solo se hai nominato un DPO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dpo" className="flex items-center gap-2">
                      Nome DPO
                      {isVariableSet('NOME_DPO') && (
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                      )}
                    </Label>
                    <Input
                      id="dpo"
                      value={companyInfo.dpo || ''}
                      onChange={(e) => updateCompanyInfo({ dpo: e.target.value })}
                      placeholder="Es: Mario Rossi"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dpoEmail" className="flex items-center gap-2">
                      Email DPO
                      {isVariableSet('EMAIL_DPO') && (
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                      )}
                    </Label>
                    <Input
                      id="dpoEmail"
                      type="email"
                      value={companyInfo.dpoEmail || ''}
                      onChange={(e) => updateCompanyInfo({ dpoEmail: e.target.value })}
                      placeholder="dpo@example.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Variabili Custom */}
          {customVars.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Variabili Aggiuntive</CardTitle>
                <CardDescription>
                  Altre variabili personalizzate trovate nelle tue sezioni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {customVars.map(varKey => (
                    <div key={varKey} className="space-y-2">
                      <Label htmlFor={varKey} className="flex items-center gap-2">
                        {getVariableLabel(varKey)}
                        {isVariableSet(varKey) && (
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        )}
                        <Badge variant="outline" className="ml-auto text-xs font-mono">
                          [{varKey}]
                        </Badge>
                      </Label>
                      <Textarea
                        id={varKey}
                        value={customVariables[varKey] || ''}
                        onChange={(e) => updateCustomVariable(varKey, e.target.value)}
                        placeholder={`Inserisci valore per ${varKey}`}
                        rows={2}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

export default VariablesEditor
