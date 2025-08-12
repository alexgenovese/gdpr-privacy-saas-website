import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, Download, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Crea privacy policy conformi al GDPR con un'interfaccia drag & drop intuitiva. 
            Niente più complessità legali - ottieni documenti professionali in pochi minuti.
          </p>
          <Link href="/builder">
            <Button size="lg" className="text-lg px-8 py-4">
              Inizia Gratis
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">GDPR Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tutte le sezioni obbligatorie previste dal Regolamento Europeo
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Drag & Drop</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interfaccia intuitiva per comporre la tua privacy policy
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Export Facile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Scarica in formato Markdown o copia negli appunti
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Per Tutti</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Perfetto per siti, SaaS, e-commerce e qualsiasi business
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Come Funziona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Trascina le Sezioni</h3>
              <p className="text-gray-600">
                Seleziona e trascina le sezioni GDPR dalla sidebar al canvas centrale
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Personalizza</h3>
              <p className="text-gray-600">
                Modifica i testi e inserisci i dati della tua azienda
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Esporta</h3>
              <p className="text-gray-600">
                Scarica la privacy policy e pubblicala sul tuo sito
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto per Iniziare?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Crea la tua privacy policy GDPR-compliant in meno di 10 minuti
          </p>
          <Link href="/builder">
            <Button size="lg" className="text-lg px-8 py-4">
              Inizia Subito - È Gratis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
