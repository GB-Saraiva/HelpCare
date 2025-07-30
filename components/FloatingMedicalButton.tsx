import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Stethoscope, X, Phone, MessageCircle, Clock } from "lucide-react";

export function FloatingMedicalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMedicalCall = () => {
    // Simulação de chamada médica
    alert("Conectando com médico de plantão...\nTempo estimado de espera: 30 segundos");
    setIsOpen(false);
  };

  const handleMedicalChat = () => {
    // Simulação de chat médico
    alert("Abrindo chat com enfermeiro de plantão...\nDisponível 24h por dia");
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <div className="fixed right-6 bottom-20 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <Stethoscope className="h-8 w-8" />
        </Button>
        
        {/* Label do botão */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Atendimento Médico 24h
        </div>
      </div>

      {/* Modal de Atendimento Médico */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <Stethoscope className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">Atendimento Médico</h2>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Clock className="h-4 w-4" />
                    <span>Disponível 24h</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Precisa de ajuda médica urgente? Nossa equipe está disponível 24 horas 
                para atender emergências relacionadas ao monitoramento de saúde.
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleMedicalCall}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar para Médico de Plantão
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-red-200 text-red-600 hover:bg-red-50"
                  onClick={handleMedicalChat}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat com Enfermeiro
                </Button>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h3 className="text-sm font-medium text-red-800 mb-2">
                  Para Emergências:
                </h3>
                <p className="text-sm text-red-700">
                  Em caso de emergência grave, ligue imediatamente para 192 (SAMU) 
                  ou 193 (Bombeiros).
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Serviço disponível para assinantes ativos • Tempo médio de resposta: 2 minutos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}