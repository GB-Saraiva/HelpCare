# CareWatch - Monitoramento de Saúde para Idosos

Um site para um relógio inteligente voltado ao monitoramento de saúde de pessoas idosas, com funcionalidades de acompanhamento familiar em tempo real.

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone ou baixe o projeto**
   ```bash
   # Se estiver usando git
   git clone [seu-repositorio]
   cd carewatch-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   - Abra: http://localhost:3000

### Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🛠️ Tecnologias utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones
- **Shadcn/ui** - Componentes de interface

## 📁 Estrutura do projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base (shadcn)
│   ├── figma/           # Componentes específicos
│   ├── Header.tsx       # Cabeçalho
│   ├── HomePage.tsx     # Página inicial
│   ├── PricingPage.tsx  # Página de preços
│   ├── LoginPage.tsx    # Página de login
│   ├── DashboardPage.tsx # Dashboard de monitoramento
│   └── FloatingMedicalButton.tsx # Botão de emergência médica
├── styles/
│   └── globals.css      # Estilos globais e variáveis CSS
├── App.tsx              # Componente principal
└── main.tsx             # Ponto de entrada
```

## 🎯 Funcionalidades

- **Landing Page**: Apresentação do produto CareWatch
- **Sistema de Assinaturas**: 3 planos (mensal, semestral, anual)
- **Dashboard de Monitoramento**: Interface para acompanhar dados de saúde
- **Autenticação**: Sistema de login e cadastro
- **Botão de Emergência**: Contato direto com médicos 24h
- **Design Responsivo**: Funciona em desktop e mobile

## 🔧 Solução de problemas

### Erro: "Cannot find module"
- Execute `npm install` novamente
- Verifique se todas as dependências estão no package.json

### Erro: "Failed to resolve import"
- Certifique-se de que todos os arquivos estão na pasta `src/`
- Verifique os caminhos dos imports nos arquivos

### Logo não aparece
- Verifique se o arquivo `HelpCareLogo.jpg` está em `public/assets/`
- O caminho deve ser exatamente: `/public/assets/HelpCareLogo.jpg`

### Tailwind não funciona
- O arquivo `globals.css` deve estar importado no `main.tsx`
- Verifique se o `postcss.config.js` existe

## 📞 Suporte

Se tiver problemas, verifique:
1. Versão do Node.js (16+)
2. Todas as dependências instaladas
3. Estrutura de pastas correta
4. Arquivo de logo no local correto