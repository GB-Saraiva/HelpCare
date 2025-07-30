import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Heart, Shield, Phone, MapPin, Activity, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Cuide de quem você ama com <span className="text-blue-600">tranquilidade</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O CareWatch é um relógio inteligente desenvolvido especialmente para idosos, 
              oferecendo monitoramento de saúde em tempo real e conexão direta com a família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                onClick={() => onNavigate('pricing')}
              >
                Começar Monitoramento
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3"
                onClick={() => onNavigate('login')}
              >
                Já tenho uma conta
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                <Clock className="h-32 w-32 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Heart className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white p-3 rounded-full shadow-lg">
                <Activity className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Tecnologia simples, cuidado completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido pensando na facilidade de uso para idosos e na tranquilidade dos familiares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Monitoramento Cardíaco</h3>
                <p className="text-gray-600">
                  Medição precisa dos batimentos cardíacos com alertas automáticos para irregularidades
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Pressão Arterial</h3>
                <p className="text-gray-600">
                  Medição da pressão arterial com um simples toque de botão, histórico completo
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Localização em Tempo Real</h3>
                <p className="text-gray-600">
                  Acompanhe a localização do seu ente querido com GPS preciso e alertas de segurança
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Chamadas Diretas</h3>
                <p className="text-gray-600">
                  Conecte-se instantaneamente com o usuário através de chamadas diretas no relógio
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Alertas de Emergência</h3>
                <p className="text-gray-600">
                  Sistema automático de alertas que notifica familiares em caso de emergência
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">Interface Simples</h3>
                <p className="text-gray-600">
                  Design intuitivo e botões grandes, desenvolvido especialmente para facilitar o uso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6 text-white">
            Comece a cuidar hoje mesmo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tenha a tranquilidade de saber que seu ente querido está sempre protegido e monitorado
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            onClick={() => onNavigate('pricing')}
          >
            Ver Planos de Assinatura
          </Button>
        </div>
      </section>
    </div>
  );
}