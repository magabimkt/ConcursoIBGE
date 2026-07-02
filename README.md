# IBGE ACA Patos

PWA de estudos offline-first para preparação ao Processo Seletivo Simplificado IBGE Edital nº 01/2026, cargo Agente Censitário Administrativo.

## O que o app inclui

- Dashboard com contador para 27/09/2026, progresso por disciplina e checklist da prova.
- Edital filtrado para ACA, com remuneração, carga horária, composição da prova e critérios.
- Plano de estudos com prioridade 60% Administração, 25% Português e 15% Raciocínio Lógico.
- Aulas com explicação, foco de cobrança, armadilhas, treino prático, exemplo e resumo final.
- Questões autorais com 5 alternativas embaralhadas, gabarito comentado, filtros e desempenho salvo.
- Simulado com 60 questões, cronômetro, resultado por disciplina e ponto fraco principal.
- Funcionamento offline com `service-worker.js`.
- Persistência local com `localStorage`.

## Como testar localmente

Abra a pasta em um servidor local simples. Exemplos:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

O service worker exige servidor local ou HTTPS. Abrir o `index.html` direto no navegador pode impedir o modo offline.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a raiz do repositório:
   - `index.html`
   - `style.css`
   - `app.js`
   - `manifest.json`
   - `service-worker.js`
   - `icon.svg`
3. No GitHub, abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o link do GitHub Pages.

## Observações

As questões são autorais e inspiradas no estilo de concursos, sem cópia de provas. O app não usa backend, login, banco de dados ou framework.
