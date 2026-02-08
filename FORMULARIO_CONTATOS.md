# 📧 Guia do Sistema de Formulário e Contatos

## ✨ O Que Foi Implementado

Um sistema completo de gerenciamento de formulários de contato com:

1. **Formulário Melhorado** - No site principal
2. **Envio de Email** - Para chiquesitamires@gmail.com
3. **Armazenamento Local** - Backup dos dados
4. **Gerenciador de Contatos** - Painel de administração
5. **Exportação de Dados** - CSV, copiar, etc

---

## 📋 Campos do Formulário

### 1. Nome Completo *
- Obrigatório
- Texto simples
- Sem limite de caracteres

### 2. Email *
- Obrigatório
- Validação de formato (exemplo@email.com)
- Usado para resposta ao cliente

### 3. Telefone com DDD *
- Obrigatório
- Formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
- Máscara automática enquanto digita
- Exemplo: (11) 98765-4321 ou (19) 3421-5678

### 4. Tipo de Serviço *
- Obrigatório
- Dropdown com 3 opções:
  - 🎯 Serviço Trabalhista
  - 👴 Aposentadoria
  - 📌 Outro

### 5. Mensagem *
- Obrigatório
- Texto com múltiplas linhas
- Espaço para descrever o caso

---

## 🚀 Como Funciona o Envio

### Passo 1: Cliente Preenche e Envia
1. Cliente abre o site
2. Preenche todos os campos obrigatórios
3. Clica "Enviar Mensagem"

### Passo 2: Validações
1. Sistema verifica se todos os campos estão preenchidos
2. Valida se o email tem formato correto
3. Valida se o telefone tem formato correto
4. Se houver erro, mostra mensagem de erro

### Passo 3: Salvar Dados
1. Dados são salvos no navegador do cliente (localStorage)
2. Backup automático das informações
3. Dados permanecem salvos mesmo após fechar o navegador

### Passo 4: Enviar Email
1. Formulário é enviado para chiquesitamires@gmail.com via FormSubmit.co
2. Email chega com todos os dados
3. Cliente recebe confirmação visual no site

### Passo 5: Mensagem de Sucesso
1. Formulário desaparece por 3 segundos
2. Mensagem verde: "Mensagem enviada com sucesso!"
3. Formulário volta ao normal para próximos envios

---

## 💾 Armazenamento de Dados

### Onde os Dados São Salvos?

Os dados são salvos no **localStorage do navegador** (não no servidor):

```javascript
{
  "fullname": "João Silva",
  "email": "joao@email.com",
  "phone": "(11) 98765-4321",
  "service": "Aposentadoria",
  "message": "Gostaria de agendar uma consulta...",
  "timestamp": "7/2/2025, 14:30:45"
}
```

### Dados Salvos Para Sempre?

✅ SIM! Enquanto:
- O navegador não é resetado
- O cache não é limpo
- O localStorage não é apagado manualmente

### Como Acessar os Dados Salvos?

**Opção 1: Gerenciador Visual** (Recomendado)
1. Abra: `gerenciador.html`
2. Ver todos os contatos em uma tabela
3. Estatísticas automáticas
4. Buscar, filtrar, exportar

**Opção 2: Console do Navegador** (Para desenvolvedores)
```javascript
// Abra F12 → Console e digite:
JSON.parse(localStorage.getItem('contacts'))

// Ou use os comandos:
visualizarContatos()    // Ver todos
limparContatos()        // Limpar tudo
exportarContatos()      // Exportar CSV
```

---

## 👨‍💼 Gerenciador de Contatos (gerenciador.html)

### Como Acessar?

**Opção 1:** Clique no link "👨‍💼 Admin" no rodapé do site

**Opção 2:** Abra diretamente: `gerenciador.html`

### O Que Você Vê?

#### 📊 Estatísticas
- Total de contatos recebidos
- Total de serviços trabalhistas
- Total de aposentadorias

#### 📋 Tabela de Contatos
- Nome do cliente
- Email
- Telefone
- Tipo de serviço (com badge colorida)
- Data e hora
- Botão para ver detalhes completos

#### 🔍 Barra de Busca
- Busque por nome
- Busque por email
- Busque por telefone
- Busca em tempo real

#### 🛠️ Ferramentas

**1. Recarregar**
- Atualiza os dados exibidos

**2. Exportar CSV**
- Baixa um arquivo Excel com todos os contatos
- Nome: `contatos_2025-02-07.csv`
- Importável no Excel, Google Sheets, etc

**3. Copiar Tudo**
- Copia todos os contatos como texto
- Cola em Word, Email, Notes, etc

**4. Limpar Tudo**
- Remove todos os contatos salvos
- Requer 2 confirmações de segurança

---

## 📧 Email Enviado

### Como Funciona?

Usa **FormSubmit.co** (serviço gratuito):
1. Cliente envia formulário
2. FormSubmit.co recebe os dados
3. Envia email para chiquesitamires@gmail.com
4. Email chega com todos os campos

### Exemplo de Email Recebido

```
From: noreply@formsubmit.co
To: chiquesitamires@gmail.com
Subject: Novo Contato - Tamires Chiquesi Advocacia

---

fullname: Maria Santos Silva
email: maria@email.com
phone: (19) 98765-4321
service: Aposentadoria
message: Gostaria de revisar minha aposentadoria. 
Fui negada uma vez e gostaria de tentar novamente.

---
```

---

## 🔒 Segurança

### Dados do Cliente
✅ Salvos no navegador do cliente (não em servidor externo)
✅ Não compartilhados com terceiros (exceto FormSubmit para email)
✅ Apenas você tem acesso via gerenciador.html

### Email
✅ FormSubmit.co é confiável e gratuito
✅ Usado por milhões de sites
✅ Dados enviados via HTTPS

### Privacidade
✅ Nenhum rastreamento
✅ Nenhum cookie de publicidade
✅ Dados não são vendidos

---

## ⚙️ Configurações (Para Admin)

### Alterar Email de Envio

No `index.html`, procure por:
```html
<form id="contactForm" action="https://formsubmit.co/chiquesitamires@gmail.com" method="POST">
```

Mude para seu email:
```html
<form id="contactForm" action="https://formsubmit.co/seu-email@gmail.com" method="POST">
```

### Adicionar Novo Tipo de Serviço

No `index.html`, procure por:
```html
<select id="service" name="service" required>
    <option value="">-- Selecione uma opção --</option>
    <option value="Serviço Trabalhista">Serviço Trabalhista</option>
    <option value="Aposentadoria">Aposentadoria</option>
    <option value="Outro">Outro</option>
</select>
```

Adicione nova opção:
```html
<option value="Auxílio Doença">Auxílio Doença</option>
```

### Alterar Formato de Telefone

Se quiser aceitar telefones sem formatação, edite `script.js`:
```javascript
// Procure por phoneRegex e mude para:
const phoneRegex = /^\d{10,11}$/; // Apenas números
```

---

## 🐛 Solução de Problemas

### Problema: Email não chega

**Solução:**
1. Verifique se o email foi enviado (mensagem verde apareceu?)
2. Procure na pasta de spam/lixo
3. Verifique em formsubmit.co se houve erro

### Problema: Dados não aparecem no gerenciador

**Solução:**
1. Abra o console (F12)
2. Digite: `visualizarContatos()`
3. Veja se os dados estão lá

### Problema: Telefone não aceita o formato

**Solução:**
1. Use parênteses: (11)
2. Use espaço após parênteses: (11) 
3. Use hífen: 98765-4321

### Problema: Mensagem de erro ao enviar

**Solução:**
1. Verifique se preencheu TODOS os campos
2. Verifique se o email tem @ e ponto
3. Tente em outro navegador

### Problema: Dados foram apagados

**Situações que deletam dados:**
- Limpar cache do navegador
- Apagar dados de navegação
- Resetar o navegador
- Usar modo privado/incógnito

**Solução:** Sempre exporte os dados em CSV periodicamente!

---

## 📊 Rotina Recomendada

### Diariamente
1. ✅ Abra gerenciador.html
2. ✅ Verifique novos contatos
3. ✅ Responda aos clientes

### Semanalmente
1. ✅ Exporte contatos em CSV
2. ✅ Faça backup do arquivo
3. ✅ Analise os tipos de serviços solicitados

### Mensalmente
1. ✅ Revise as estatísticas
2. ✅ Envie relatório a si mesma
3. ✅ Limpe contatos antigos (se necessário)

---

## 💡 Dicas de Uso

### Tip 1: Salve o Gerenciador nos Favoritos
Clique em ⭐ para adicionar gerenciador.html aos favoritos

### Tip 2: Exporte Regularmente
Evita perder dados se cache for limpo
Mantenha backups no Google Drive

### Tip 3: Use a Busca
Procure clientes anteriores rapidamente
Veja histórico de contatos

### Tip 4: Revise o Email Enviado
Confirme que o FormSubmit enviou corretamente
Alguns emails podem ir para spam

### Tip 5: Telefone é Importante
Sempre peça o telefone com DDD
Facilita retorno aos clientes

---

## 🚀 Próximos Passos (Opcional)

### Backend Real
Se quiser trocar o FormSubmit por um backend próprio:
1. Criar API Node.js/Python
2. Banco de dados
3. Integração mais robusta

### Integração com Whatsapp
1. Integrar WhatsApp Business API
2. Enviar mensagens automáticas
3. Responder via chat

### Agendamento
1. Integrar Calendly ou similar
2. Agendar consultas direto do site
3. Sincronizar com Google Calendar

### Dashboard Avançado
1. Gráficos de tendências
2. Filtros avançados
3. Relatórios automáticos

---

## 📞 Resumo Rápido

| Ação | Como Fazer |
|------|-----------|
| Ver contatos | Abra `gerenciador.html` |
| Exportar dados | Gerenciador → Exportar CSV |
| Limpar tudo | Gerenciador → Limpar Tudo |
| Ver em console | F12 → Digite `visualizarContatos()` |
| Alterar email | `index.html` linha ~270 |
| Adicionar serviço | `index.html` adicione opção no select |
| Testar formulário | Preencha e envie |

---

## ✅ Status

✅ Formulário implementado e funcional
✅ Email configurado
✅ Dados salvos localmente
✅ Gerenciador criado
✅ Documentação completa
✅ Pronto para usar

---

**Desenvolvido para Tamires Chiquesi Advocacia**
Data: 7 de fevereiro de 2025
