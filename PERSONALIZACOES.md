# 🎨 Guia de Personalizações

Este arquivo contém exemplos práticos para personalizar seu site.

## 1️⃣ Alterar Textos

### Alterar Título Principal
**Arquivo:** `index.html`
**Procure por:** (linhas 54-56)
```html
<h2>Tamires Chiquesi Advocacia</h2>
<p class="subtitle">Em busca do seu melhor benefício</p>
```

### Alterar Descrição
```html
<p class="description">Trabalhando para proteger seus direitos</p>
```

### Alterar Slogan
```html
<p class="tagline">Especialista em Direito Previdenciário e Trabalhista</p>
```

---

## 2️⃣ Alterar Cores

### Paleta de Cores Atual
```css
/* styles.css - linha 2 */
:root {
    --primary-color: #1a3a52;      /* Azul Marinho */
    --secondary-color: #d4a574;    /* Dourado */
    --accent-color: #e8d4c4;       /* Bege Claro */
    --text-dark: #333333;          /* Texto escuro */
    --text-light: #666666;         /* Texto claro */
}
```

### Exemplos de Paletas Alternativas

**Paleta Profissional Moderna:**
```css
--primary-color: #2c3e50;          /* Cinza azulado escuro */
--secondary-color: #3498db;        /* Azul vivo */
--accent-color: #ecf0f1;           /* Cinza claro */
```

**Paleta Aquecida:**
```css
--primary-color: #8b4513;          /* Marrom */
--secondary-color: #ff8c00;        /* Laranja */
--accent-color: #ffe4b5;           /* Bege quente */
```

**Paleta Minimalista:**
```css
--primary-color: #000000;          /* Preto */
--secondary-color: #ffffff;        /* Branco */
--accent-color: #cccccc;           /* Cinza */
```

**Paleta Verde (Natureza/Sustentabilidade):**
```css
--primary-color: #1b5e20;          /* Verde escuro */
--secondary-color: #66bb6a;        /* Verde claro */
--accent-color: #c8e6c9;           /* Verde muito claro */
```

---

## 3️⃣ Adicionar Novos Serviços

No `index.html`, procure por `<div class="servicos-grid">` e adicione:

```html
<!-- Novo Serviço -->
<div class="servico-card">
    <div class="servico-icon">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <h3>Nome do Novo Serviço</h3>
    <p>
        Descrição do seu novo serviço aqui. 
        Explique os benefícios e como você pode ajudar seus clientes.
    </p>
    <a href="mailto:chiquesitamires@gmail.com" class="link-btn">Contrate nossos serviços →</a>
</div>
```

### Ícones Disponíveis (Font Awesome)
Encontre em: https://fontawesome.com/icons

Exemplos:
- `fa-gavel` - Martelo de juiz
- `fa-briefcase` - Pasta de documentos
- `fa-shield-alt` - Escudo protetor
- `fa-balance-scale` - Balança (justiça)
- `fa-file-contract` - Contrato
- `fa-handshake` - Acordo
- `fa-heart` - Coração
- `fa-star` - Estrela
- `fa-certificate` - Certificado
- `fa-check-circle` - Check mark

---

## 4️⃣ Adicionar Depoimentos

No `index.html`, procure por `<div class="depoimentos-grid">` e adicione:

```html
<div class="depoimento-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="depoimento-text">
        "Seu depoimento aqui. Fale sobre sua experiência com a advocacia."
    </p>
    <p class="depoimento-autor">Nome do Cliente</p>
    <p class="depoimento-titulo">Profissão ou Status</p>
</div>
```

### Para 4 Estrelas:
```html
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>  <!-- Meia estrela -->
```

---

## 5️⃣ Adicionar Fotos/Imagens

### Adicionar Foto de Perfil
Na seção de contato, após o endereço, adicione:

```html
<div class="profile-image">
    <img src="images/perfil.jpg" alt="Tamires Chiquesi">
</div>
```

### Estilo CSS para a Imagem
Adicione ao `styles.css`:

```css
.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    margin: 2rem auto;
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 6️⃣ Alterar Fontes

### Importar Google Fonts
Adicione ao `index.html` dentro de `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;500;600&display=swap" rel="stylesheet">
```

### Usar as Novas Fontes
No `styles.css`:

```css
body {
    font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
}
```

### Fontes Populares:
- Playfair Display (elegante)
- Lato (moderna)
- Roboto (neutra)
- Merriweather (clássica)
- Inter (minimalista)

---

## 7️⃣ Adicionar Rede Social

### Adicionar Link do Facebook
No footer (linha ~580):

```html
<a href="https://facebook.com/tamirescatharin" target="_blank" title="Facebook">
    <i class="fab fa-facebook"></i>
</a>
```

### Adicionar WhatsApp
```html
<a href="https://wa.me/5519984480805?text=Olá, gostaria de agendar uma consulta" target="_blank" title="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```

### Adicionar LinkedIn
```html
<a href="https://linkedin.com/in/tamirescatharin" target="_blank" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

---

## 8️⃣ Modificar Formulário de Contato

### Adicionar Campo Telefone
No `index.html`, procure por `<!-- Formulário -->` e adicione:

```html
<div class="form-group">
    <input type="tel" id="phone" name="phone" placeholder="Seu Telefone" required>
</div>
```

### Adicionar Checkbox
```html
<div class="form-group">
    <label>
        <input type="checkbox" name="terms" required>
        Concordo com os termos de privacidade
    </label>
</div>
```

### Alterar Validação no JavaScript
No `script.js`, procure por `showSuccessMessage()` e modifique.

---

## 9️⃣ Adicionar Seção de FAQ

Adicione antes da seção de contato:

```html
<section class="faq">
    <div class="container">
        <h2>Perguntas Frequentes</h2>
        
        <div class="faq-item">
            <button class="faq-header">
                <h4>Qual é o valor da consulta inicial?</h4>
                <span>+</span>
            </button>
            <div class="faq-content">
                <p>A primeira consulta é gratuita! Agendamos um horário 
                para discutir seu caso e elaborar uma estratégia.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-header">
                <h4>Quanto tempo leva um processo?</h4>
                <span>+</span>
            </button>
            <div class="faq-content">
                <p>Depende da complexidade. Agendar uma consulta é o 
                primeiro passo para entender seu caso específico.</p>
            </div>
        </div>
    </div>
</section>
```

### CSS para FAQ
```css
.faq {
    padding: 5rem 0;
}

.faq-item {
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    overflow: hidden;
}

.faq-header {
    width: 100%;
    padding: 1.5rem;
    background-color: var(--bg-light);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    transition: var(--transition);
}

.faq-header:hover {
    background-color: var(--secondary-color);
    color: white;
}

.faq-content {
    padding: 1.5rem;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-item.active .faq-content {
    max-height: 300px;
}
```

---

## 🔟 Alterar Horário de Funcionamento

Adicione na seção de contato:

```html
<div class="info-item">
    <div class="info-icon">
        <i class="fas fa-clock"></i>
    </div>
    <div class="info-text">
        <h4>Horário de Atendimento</h4>
        <p>Segunda a Sexta: 09h às 18h<br>Sábado: 09h às 13h</p>
    </div>
</div>
```

---

## 🎯 Dicas de Personalização

1. **Sempre faça backup** antes de grandes alterações
2. **Teste responsividade** após cada mudança (F12 no navegador)
3. **Use cores contrastantes** para melhor legibilidade
4. **Mantenha consistência** visual em todo o site
5. **Otimize imagens** antes de enviar (TinyPNG, Compressor)
6. **Teste em múltiplos navegadores** antes de publicar

---

## 📚 Recursos Úteis

- **Cores:** https://colorhunt.co
- **Ícones:** https://fontawesome.com
- **Fontes:** https://fonts.google.com
- **Imagens:** https://unsplash.com, https://pexels.com
- **Compressor:** https://tinypng.com
- **Teste Responsivo:** https://responsively.app

---

**Pronto para criar um site único! 🚀**
