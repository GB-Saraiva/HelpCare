# 🔧 Instruções para Organizar o Projeto

## Problema Atual
Há arquivos duplicados e dependências em falta. Siga estes passos:

## 1. Pare o servidor
```bash
Ctrl + C  # Para parar o npm run dev
```

## 2. Instale as dependências corretas
```bash
npm install
```

## 3. Organize a estrutura de pastas

### ❌ Delete estas pastas/arquivos duplicados:
- `/App.tsx` (da raiz)
- `/components/` (toda a pasta da raiz)
- `/styles/` (toda a pasta da raiz)

### ✅ Mantenha apenas:
- `/src/App.tsx`
- `/src/components/`
- `/src/styles/`

### 📁 Mova os componentes faltantes:
Copie **TODOS** os arquivos de `/components/` para `/src/components/`:

```
/components/DashboardPage.tsx → /src/components/DashboardPage.tsx
/components/HomePage.tsx → /src/components/HomePage.tsx
/components/LoginPage.tsx → /src/components/LoginPage.tsx
/components/PricingPage.tsx → /src/components/PricingPage.tsx
/components/figma/ → /src/components/figma/
/components/ui/ → /src/components/ui/
```

## 4. Estrutura final correta:
```
projeto/
├── src/
│   ├── components/
│   │   ├── ui/           # Todos os componentes shadcn
│   │   ├── figma/        # ImageWithFallback.tsx
│   │   ├── Header.tsx
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── PricingPage.tsx
│   │   └── FloatingMedicalButton.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
│       └── HelpCareLogo.jpg
├── index.html
├── package.json
└── outros arquivos de config...
```

## 5. Rode o projeto
```bash
npm run dev
```

## ✅ Deve funcionar no http://localhost:3000

Depois de organizar, delete este arquivo!