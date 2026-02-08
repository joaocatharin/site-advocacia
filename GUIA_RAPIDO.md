# 🚀 Guia Rápido de Início

## Passos Iniciais

### 1️⃣ Adicionar as Imagens

Copie as imagens do seu site antigo para a pasta `images/`:

```
images/
├── hero-image.jpg     (imagem do hero/topo - recomendado 1200x600px)
└── sobre-image.jpg    (imagem da seção sobre - recomendado 600x600px)
```

**Dica:** Se não tiver imagens, o site funcionará normalmente sem elas.

### 2️⃣ Abrir o Site

#### Opção A: Abrir diretamente no navegador
1. Localize o arquivo `index.html` na pasta SITE
2. Clique duas vezes para abrir no navegador padrão

#### Opção B: Usar Live Server (VS Code)
1. Abra a pasta SITE no VS Code
2. Clique com direito em `index.html`
3. Selecione "Abrir com Live Server"

#### Opção C: Usar Python (Terminal)
```bash
cd "c:\Users\joaof\OneDrive\Área de Trabalho\SITE"
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

### 3️⃣ Testar o Site

✅ Menu responsivo (clique no ≡ em mobile)
✅ Links de navegação funcionando
✅ Botões levando para contato
✅ Formulário enviando emails
✅ Design respondendo em diferentes tamanhos

### 4️⃣ Personalizar Conteúdo

Edite o arquivo `index.html` com um editor de texto:

**Email:**
```html
<a href="mailto:chiquesitamires@gmail.com">
```

**Telefone:**
```html
<a href="tel:+5519984480805">(19) 98448-0805</a>
```

**Endereço:** Procure por "Avenida Independência" no HTML

## 🎨 Principais Modificações

### Alterar Título da Página
Abra `index.html` e procure por:
```html
<title>Tamires Chiquesi Advocacia - Especialista em Direito Previdenciário</title>
```

### Alterar Cores
Abra `styles.css` e modifique:
```css
:root {
    --primary-color: #1a3a52;      /* Cor principal */
    --secondary-color: #d4a574;    /* Cor secundária */
    --accent-color: #e8d4c4;       /* Cor de destaque */
}
```

### Adicionar ou Remover Serviços
No `index.html`, procure por `<div class="servico-card">` e adicione/remova serviços

### Adicionar Depoimentos
Procure por `<div class="depoimento-card">` e adicione mais depoimentos

## 📱 Teste em Diferentes Dispositivos

### Desktop
- Abra em navegador normal
- Redimensione a janela

### Mobile
- Use a ferramenta de desenvolvedor (F12)
- Clique no ícone de dispositivo móvel
- Teste diferentes tamanhos

### Tablet
- Defina tamanho de 768px x 1024px

## ✉️ Funcionalidades de Contato

### Formulário de Contato
- Valida email antes de enviar
- Requer todos os campos obrigatórios
- Abre o cliente de email padrão com mensagem pré-preenchida

### Botões de Contato
- "Agende uma Consulta" → Abre cliente de email
- "Entre em contato" → Links diretos
- WhatsApp (opcional) → Integração disponível

## 🔐 Segurança

- ✅ Sem banco de dados (estático)
- ✅ Sem senhas ou dados sensíveis
- ✅ URLs e emails visíveis (intencional para contato)
- ✅ Formulário usa mailto (cliente email, não servidor)

## 📊 Analytics (Opcional)

Para rastrear visitantes, adicione Google Analytics:

1. Vá para https://analytics.google.com
2. Crie uma propriedade
3. Copie o código de rastreamento
4. Cole antes de `</head>` no `index.html`

## 🌐 Publicar Online

### GitHub Pages (GRATUITO)
1. Crie conta em github.com
2. Crie repositório chamado `site-advocacia`
3. Faça upload dos arquivos
4. Vá em Settings → Pages → Selecione `main branch`
5. Site fica em: `https://seu-usuario.github.io/site-advocacia`

### Netlify (GRATUITO com opção paga)
1. Vá para netlify.com
2. Clique "Drop files here to deploy"
3. Arraste a pasta SITE
4. Site fica pronto em minutos

### Hostinger ou similar (PAGO)
1. Contrare hospedagem
2. Acesse FTP/Gerenciador de arquivos
3. Envie os arquivos
4. Configure domínio

## 🐛 Solução de Problemas

### Imagens não aparecem
- Verifique se estão na pasta `images/`
- Use nomes exatos: `hero-image.jpg` e `sobre-image.jpg`
- Tente formatos: .jpg, .png, .webp

### Formulário não funciona
- Verifique email padrão no sistema
- Pode estar bloqueado pelo navegador
- Teste em outro navegador

### Site lento
- Comprima as imagens (TinyPNG.com)
- Use WebP ao invés de JPG
- Minifique CSS/JS (opcional)

### Menu não abre em mobile
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Tente em outro navegador
- Verifique console (F12) por erros

## 📞 Suporte Técnico

Documentação útil:
- HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

---

**Pronto! Seu site está funcionando! 🎉**

Qualquer dúvida ou sugestão, entre em contato com a equipe de desenvolvimento.
