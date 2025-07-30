import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Heart, 
  Activity, 
  MapPin, 
  Phone, 
  QrCode, 
  Bell, 
  TrendingUp,
  Calendar,
  Shield,
  Battery,
  Wifi,
  Settings
} from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const SubscriptionPrompt = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl mb-2">Assinatura Necessária</h2>
          <p className="text-gray-600">
            Para acessar o monitoramento completo, você precisa de uma assinatura ativa.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => onNavigate('pricing')}
          >
            Ver Planos de Assinatura
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsSubscribed(true)}
          >
            Simular Acesso (Demo)
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  if (!isSubscribed) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl text-gray-900 mb-2">Dashboard de Monitoramento</h1>
              <p className="text-gray-600">Acompanhe a saúde e localização em tempo real</p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6 opacity-50 pointer-events-none">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="text-lg mb-1">Batimentos</h3>
                  <p className="text-2xl">72 BPM</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-lg mb-1">Pressão</h3>
                  <p className="text-2xl">120/80</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="text-lg mb-1">Localização</h3>
                  <p className="text-sm">Em casa</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Battery className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="text-lg mb-1">Bateria</h3>
                  <p className="text-2xl">85%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SubscriptionPrompt />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Dashboard de Monitoramento</h1>
            <p className="text-gray-600">Maria Silva • Última atualização: há 2 minutos</p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <QrCode className="h-4 w-4 mr-2" />
              Conectar Relógio
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Heart className="h-8 w-8 text-red-500" />
                <Badge className="bg-green-100 text-green-800">Normal</Badge>
              </div>
              <h3 className="text-lg mb-1">Batimentos Cardíacos</h3>
              <p className="text-3xl mb-1">72 BPM</p>
              <p className="text-sm text-gray-600">Último: 14:32</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-8 w-8 text-blue-500" />
                <Badge className="bg-green-100 text-green-800">Boa</Badge>
              </div>
              <h3 className="text-lg mb-1">Pressão Arterial</h3>
              <p className="text-3xl mb-1">120/80</p>
              <p className="text-sm text-gray-600">Último: 14:30</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="h-8 w-8 text-green-500" />
                <Badge className="bg-blue-100 text-blue-800">Em casa</Badge>
              </div>
              <h3 className="text-lg mb-1">Localização</h3>
              <p className="text-lg mb-1">Rua das Flores, 123</p>
              <p className="text-sm text-gray-600">Atualizado: 14:33</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Battery className="h-8 w-8 text-orange-500" />
                  <Wifi className="h-5 w-5 text-green-500" />
                </div>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <h3 className="text-lg mb-1">Status do Relógio</h3>
              <p className="text-lg mb-1">Bateria: 85%</p>
              <p className="text-sm text-gray-600">Sinal: Forte</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="monitoring" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
            <TabsTrigger value="location">Localização</TabsTrigger>
            <TabsTrigger value="communication">Comunicação</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Histórico de Batimentos</h3>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Gráfico de batimentos das últimas 24h</p>
                      <p className="text-sm text-gray-500 mt-1">Média: 74 BPM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg">Pressão Arterial</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Manhã (08:00)</span>
                      <Badge className="bg-green-100 text-green-800">115/75</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Tarde (14:30)</span>
                      <Badge className="bg-green-100 text-green-800">120/80</Badge>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Activity className="h-4 w-4 mr-2" />
                      Solicitar Nova Medição
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg">Localização Atual</h3>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <p className="text-lg mb-2">Rua das Flores, 123</p>
                    <p className="text-sm text-gray-600">São Paulo, SP</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">
                    <Bell className="h-4 w-4 mr-2" />
                    Definir Zona Segura
                  </Button>
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Histórico de Locais
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Ligação Direta</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Conecte-se instantaneamente com o usuário do relógio</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <div className="text-sm text-gray-500">
                    <p>Última ligação: Hoje às 10:15</p>
                    <p>Status: Relógio online e disponível</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg">Contatos de Emergência</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p>João Silva (Filho)</p>
                      <p className="text-sm text-gray-600">(11) 99999-9999</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Primário</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p>Ana Silva (Filha)</p>
                      <p className="text-sm text-gray-600">(11) 88888-8888</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Secundário</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Gerenciar Contatos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg">Relatórios de Saúde</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Relatório Semanal
                    </Button>
                    <Button variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Tendências do Mês
                    </Button>
                    <Button variant="outline">
                      <Activity className="h-4 w-4 mr-2" />
                      Exportar Dados
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3">Resumo desta Semana</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Média de Batimentos:</p>
                        <p className="text-xl">74 BPM</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Pressão Média:</p>
                        <p className="text-xl">118/78</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Tempo em Casa:</p>
                        <p className="text-xl">87%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Alertas:</p>
                        <p className="text-xl text-green-600">0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}