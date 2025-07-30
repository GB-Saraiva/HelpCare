import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Check, Star, Crown } from "lucide-react";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      id: 'monthly',
      name: 'Mensal',
      badge: null,
      price: 'R$ 44,90',
      period: '/mês',
      description: 'Ideal para começar o monitoramento',
      features: [
        'Monitoramento de batimentos cardíacos',
        'Medição de pressão arterial',
        'Localização em tempo real',
        'Chamadas diretas para o relógio',
        'Alertas de emergência',
        'Suporte técnico'
      ],
      color: 'from-gray-100 to-gray-200',
      textColor: 'text-gray-900',
      buttonColor: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      id: 'semester',
      name: 'Semestral',
      badge: 'Mais Popular',
      price: 'R$ 74,90',
      period: '/6 meses',
      originalPrice: 'R$ 269,40',
      description: 'Melhor custo-benefício para cuidado contínuo',
      features: [
        'Todos os recursos do plano mensal',
        'Relatórios de saúde detalhados',
        'Histórico completo de dados',
        'Configurações personalizadas',
        'Suporte prioritário',
        'Desconto de 72% vs mensal'
      ],
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-white',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      id: 'annual',
      name: 'Anual',
      badge: 'Melhor Valor',
      price: 'R$ 99,90',
      period: '/ano',
      originalPrice: 'R$ 538,80',
      description: 'Máxima economia para cuidado de longo prazo',
      features: [
        'Todos os recursos dos planos anteriores',
        'Análises avançadas de tendências de saúde',
        'Múltiplos contatos de emergência',
        'Backup automático na nuvem',
        'Consultoria de saúde especializada',
        'Desconto de 81% vs mensal'
      ],
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-white',
      buttonColor: 'bg-white text-purple-600 hover:bg-gray-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Escolha seu plano de cuidado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tenha acesso completo ao monitoramento de saúde e todas as funcionalidades do CareWatch
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div key={plan.id} className={`relative ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}>
              <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-gradient-to-br ${plan.color}`}>
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    {plan.badge === 'Mais Popular' && <Star className="inline h-4 w-4 mr-1" />}
                    {plan.badge === 'Melhor Valor' && <Crown className="inline h-4 w-4 mr-1" />}
                    {plan.badge}
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className={`text-2xl mb-2 ${plan.textColor}`}>
                    {plan.name}
                  </h3>
                  <div className={`mb-2 ${plan.textColor}`}>
                    {plan.originalPrice && (
                      <span className="text-lg line-through opacity-60 mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-80">{plan.period}</span>
                  </div>
                  <p className={`text-sm opacity-90 ${plan.textColor}`}>
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 pb-8 px-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${plan.textColor}`}>
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 ${plan.buttonColor} text-lg font-medium`}
                    size="lg"
                    onClick={() => onNavigate('login')}
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl lg:text-3xl mb-8 text-gray-900">
            Todos os planos incluem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-700">Configuração via QR Code</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-700">App Web e Mobile</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-gray-700">Sincronização Automática</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-700">Suporte 24/7</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl mb-8 text-center text-gray-900">
            Dúvidas frequentes
          </h2>
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Como funciona a configuração inicial?</h3>
                <p className="text-gray-600">
                  Após assinar o plano, você receberá instruções para conectar o relógio ao app através 
                  de um QR Code. O processo é simples e leva apenas alguns minutos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-gray-600">
                  Sim! Você pode cancelar sua assinatura a qualquer momento através do seu painel de controle, 
                  sem taxas adicionais ou multas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}