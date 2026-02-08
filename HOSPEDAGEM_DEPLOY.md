# 🌐 Guia de Hospedagem e Deploy

Este documento contém instruções completas para colocar seu site online.

## 📊 Resumo das Opções

| Plataforma | Custo | Facilidade | Domínio | HTTPS | Recomendado |
|-----------|-------|-----------|--------|-------|------------|
| GitHub Pages | Grátis | ⭐⭐⭐⭐ | .github.io | ✅ | ✅ |
| Netlify | Grátis | ⭐⭐⭐⭐ | Customizado | ✅ | ✅ |
| Vercel | Grátis | ⭐⭐⭐⭐ | Customizado | ✅ | ✅ |
| Hostinger | $3-5/mês | ⭐⭐⭐ | Customizado | ✅ | ✅ |
| GoDaddy | $5-10/mês | ⭐⭐ | Customizado | ✅ | ⭐ |
| HostGator | $3-6/mês | ⭐⭐⭐ | Customizado | ✅ | ✅ |

---

## 1️⃣ GITHUB PAGES (Recomendado - Grátis)

### Passo 1: Criar Conta no GitHub
1. Acesse https://github.com
2. Clique em "Sign up"
3. Preencha o formulário e confirme email

### Passo 2: Criar Repositório
1. Clique no ícone `+` → "New repository"
2. Nome do repositório: `site-advocacia`
3. Selecione "Public"
4. Clique "Create repository"

### Passo 3: Enviar Arquivos
#### Opção A: GitHub Desktop (Mais fácil)
1. Baixe GitHub Desktop: https://desktop.github.com
2. Clone seu repositório
3. Copie os arquivos (index.html, styles.css, script.js, images/, README.md) para a pasta clonada
4. Volte ao GitHub Desktop
5. Faça commit: "Initial website upload"
6. Clique "Push to origin"

#### Opção B: Git Terminal
```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/site-advocacia.git
cd site-advocacia

# Copie seus arquivos aqui

# Adicione os arquivos
git add .

# Faça commit
git commit -m "Initial website upload"

# Envie para GitHub
git push origin main
```

#### Opção C: Upload Direto
1. Acesse https://github.com/seu-usuario/site-advocacia
2. Clique "Add file" → "Upload files"
3. Arraste os arquivos
4. Clique "Commit changes"

### Passo 4: Habilitar GitHub Pages
1. Acesse "Settings" do repositório
2. Vá em "Pages" (menu esquerdo)
3. Em "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: "main" / "root"
4. Clique "Save"
5. Aguarde alguns minutos

### Passo 5: Acessar o Site
O site estará disponível em:
```
https://seu-usuario.github.io/site-advocacia
```

### ✅ Vantagens GitHub Pages
- Totalmente grátis
- HTTPS automático
- Atualizações automáticas ao fazer push
- Integração perfeita com Git
- Sem limites de tráfego

---

## 2️⃣ NETLIFY (Recomendado - Grátis)

### Passo 1: Criar Conta
1. Acesse https://netlify.com
2. Clique "Sign up"
3. Pode usar conta GitHub, Google ou email

### Passo 2: Deploy da Pasta
1. Clique "Add new site" → "Deploy manually"
2. Arraste a pasta SITE inteira
3. Aguarde o deploy terminar

### Passo 3: Configurar Domínio (Opcional)
1. Vá em "Domain settings"
2. Clique "Add custom domain"
3. Digite seu domínio (ex: tamirescatharin.com.br)
4. Siga as instruções para alterar DNS no registrador

### URL do Site
- Padrão Netlify: https://seu-site-aleatorio.netlify.app
- Customizado: https://seu-dominio.com

### ✅ Vantagens Netlify
- Muito simples de usar
- Deploy em segundos
- HTTPS incluído
- Suporte a domínios customizados
- Analytics básico grátis

---

## 3️⃣ VERCEL (Alternativa Grátis)

### Passo 1: Criar Conta
1. Acesse https://vercel.com
2. Clique "Sign Up"
3. Prefira conectar GitHub para facilitar

### Passo 2: Fazer Deploy
1. Clique "New Project"
2. Selecione seu repositório GitHub
3. Clique "Deploy"

### URL do Site
```
https://seu-projeto.vercel.app
```

---

## 4️⃣ HOSTINGER (Hospedagem Paga - $3-5/mês)

### Passo 1: Contratar
1. Acesse https://hostinger.com.br
2. Escolha plano "Compartilhado"
3. Escolha domínio (novo ou existente)
4. Complete o cadastro

### Passo 2: Fazer Upload via FTP

#### Windows:
1. Baixe FileZilla: https://filezilla-project.org
2. Conecte-se com dados FTP (recebe por email)
3. Navegue até a pasta `public_html`
4. Copie seus arquivos

#### Mac/Linux:
```bash
ftp usuario@seu-dominio.com
# Digite sua senha
# Use: put arquivo.html
```

### Passo 3: Verificar
Acesse seu domínio no navegador

### ✅ Vantagens
- Suporte 24/7 em português
- Domínio customizado
- Email profissional incluído
- Painél cPanel amigável

---

## 5️⃣ GODADDY (Hospedagem Paga - $5-10/mês)

1. Acesse https://godaddy.com/pt-br
2. Registre domínio (ex: tamirescatharin.com.br)
3. Contrate hospedagem
4. Use cPanel para fazer upload via FTP

---

## 🚀 Comparação Rápida

### Para Começar (Gratuito):
**Recomendação: Netlify ou GitHub Pages**
- Máximo 5 minutos de configuração
- Sem necessidade de aprender Git
- URL profissional

### Para Crescimento (Pago):
**Recomendação: Hostinger**
- Melhor custo-benefício
- Suporte em português
- Inclui domínio + email

---

## 📝 Atualizar Site Após Deploy

### GitHub Pages
```bash
# No seu computador:
git add .
git commit -m "Atualizações: alteração de cores"
git push origin main
# Site atualiza automaticamente em ~2 minutos
```

### Netlify
1. Clique "Deploys"
2. Arraste nova pasta (mesmo que antes)
3. Pronto! Atualizado em segundos

### Hostinger (FTP)
1. Abra FileZilla
2. Conecte ao FTP
3. Sobrescreva os arquivos antigos
4. Aguarde ~5 minutos para cache limpar

---

## 🔐 HTTPS em Todos os Provedores

- ✅ GitHub Pages: Automático e obrigatório
- ✅ Netlify: Automático
- ✅ Vercel: Automático
- ✅ Hostinger: Grátis com Let's Encrypt
- ✅ GoDaddy: Pago ou grátis (depende do plano)

---

## 🎯 Meu Recomendação Final

### Para Iniciante:
→ **Netlify** (menos de 1 minuto, zero configuração)

### Para Quem Quer Aprender:
→ **GitHub Pages** (aprende Git também)

### Para Negócio Profissional:
→ **Hostinger** (email profissional, suporte, backup)

---

## 📞 Pós-Deploy: Próximos Passos

1. **Adicione Google Analytics**
   - Rastreie visitantes em analytics.google.com

2. **Configure Google Search Console**
   - Melhore SEO em search.google.com/search-console

3. **Teste Performance**
   - PageSpeed Insights: https://pagespeed.web.dev

4. **Configure Email Profissional**
   - Crie email@seu-dominio.com

5. **Ative Backups**
   - Importante para proteger dados

---

## ⚠️ Checklist Antes do Deploy

- [ ] Testou em desktop, tablet e mobile?
- [ ] Verificou todos os links funcionam?
- [ ] Adicionou as imagens corretas?
- [ ] Testou formulário de contato?
- [ ] Verificou ortografia e pontuação?
- [ ] Atualizou informações de contato?
- [ ] Testou velocidade do site?
- [ ] Fez backup dos arquivos?
- [ ] Tem domínio reservado (se pago)?

---

## 🆘 Solução de Problemas

### Site não aparece após deploy
- GitHub Pages: Aguarde 2-3 minutos
- Netlify: Verifique se build foi bem-sucedido
- Hostinger: Limpe cache do navegador (Ctrl+Shift+Del)

### Domínio customizado não funciona
- Aguarde 24h para propagação DNS
- Verifique se alterou DNS corretamente
- Teste em: https://dnschecker.org

### HTTPS não funciona
- GitHub Pages/Netlify: Automático (não faça nada)
- Hostinger: Ative Let's Encrypt no cPanel

### Imagens não aparecem
- Verifique caminho relativo: `images/foto.jpg`
- Não use caminhos absolutos
- Confirme se pasta `images/` foi enviada

---

## 📊 Monitorar Performance Pós-Deploy

### Google PageSpeed
- Acesse: https://pagespeed.web.dev
- Digite sua URL
- Objetivo: Score acima de 80

### Melhoras Comuns
1. Comprimir imagens (TinyPNG)
2. Usar WebP ao invés de JPG
3. Minificar CSS/JS (opcional)
4. Habilitar cache do navegador

---

**Seu site está pronto para conquistar clientes! 🎉**

---

Dúvidas? Entre em contato:
- Email: chiquesitamires@gmail.com
- Telefone: (19) 98448-0805
