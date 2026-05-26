# SMI ULSLO — aplicação móvel autónoma

Aplicação React/Vite para apresentação do Serviço de Medicina Intensiva da ULSLO.

## O que mudou na v0.3

- App pensada primeiro para telemóvel.
- Funciona como PWA.
- Sem dependência da intranet.
- PDFs incorporados em `public/docs`.
- Conteúdo essencial também está embebido na app, mesmo sem abrir PDFs.
- Secções: Início, UCI, Serviços, Documentos, Equipa médica e Governação.
- Equipas limitadas a médicos.
- UCI-1 sem referência operacional à unidade de cuidados intermédios.
- UCI-2 com 6 camas de cuidados intermédios.
- UCI-3 como unidade polivalente, com coordenação por Dra. Cláudia Martins.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
npm run preview
```

## Vercel

Definições:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: vazio, se `package.json` estiver na raiz do repositório.

## PWA/offline

O `public/sw.js` guarda em cache a shell da app e os PDFs em `public/docs`.
Na prática:
1. abrir a app uma vez com internet;
2. instalar/adicionar ao ecrã principal no telemóvel;
3. depois fica utilizável mesmo sem intranet e, após cache, mesmo sem rede.


## v0.4.0

Alterações:
- Removida a caixa “Sem dependência da intranet”.
- Removida a frase “Resumo orientado para consulta rápida no telemóvel”.
- Removido o cabeçalho da aba “Mais/Governação clínica”.
- Redesenhados os cards das UCI para evitar desformatação em desktop e telemóvel.
- Indicador superior simplificado para “Online” / “Offline”.
