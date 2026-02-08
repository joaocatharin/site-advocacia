// ===== Menu Mobile Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animar os spans do menu
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) {
                span.style.transform = 'rotate(45deg) translate(8px, 8px)';
            } else if (index === 1) {
                span.style.opacity = '0';
            } else if (index === 2) {
                span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
            }
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Fechar menu ao clicar em um link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach((span) => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// ===== Formulário de Contato com Armazenamento Local =====
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validação básica
        if (!fullname || !email || !phone || !service || !message) {
            showErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showErrorMessage('Por favor, insira um email válido.');
            return;
        }
        
        // Validação de telefone (apenas números, hífens e parênteses)
        const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            showErrorMessage('Por favor, insira um telefone válido no formato (XX) 98765-4321 ou (XX) 8765-4321.');
            return;
        }
        
        // Salvar dados no localStorage
        const contactData = {
            fullname: fullname,
            email: email,
            phone: phone,
            service: service,
            message: message,
            timestamp: new Date().toLocaleString('pt-BR')
        };
        
        // Obter dados anteriores ou criar novo array
        let allContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        allContacts.push(contactData);
        
        // Salvar no localStorage
        localStorage.setItem('contacts', JSON.stringify(allContacts));
        
        // Log no console (para desenvolvimento)
        console.log('Contato salvo:', contactData);
        console.log('Total de contatos:', allContacts.length);
        
        // Mostrar mensagem de sucesso
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Resetar formulário após 2 segundos
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
        
        // Deixar o FormSubmit enviar o email (submit padrão)
        // O formulário será enviado após essas validações
        setTimeout(() => {
            contactForm.submit();
        }, 500);
    });
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        background-color: #f44336;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        text-align: center;
        animation: slideInUp 0.3s ease-out;
    `;
    errorDiv.textContent = message;
    
    const form = document.querySelector('.contato-form');
    form.insertBefore(errorDiv, form.querySelector('form'));
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// ===== Máscara de Telefone =====
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 2) {
                value = '(' + value;
            } else if (value.length <= 6) {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
            } else {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
            }
        }
        
        e.target.value = value;
    });
}

// ===== Função para Visualizar Contatos Salvos =====
window.visualizarContatos = function() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    if (contacts.length === 0) {
        alert('Nenhum contato salvo ainda.');
        return;
    }
    
    let mensagem = '=== CONTATOS SALVOS ===\n\n';
    contacts.forEach((contact, index) => {
        mensagem += `Contato #${index + 1}\n`;
        mensagem += `Nome: ${contact.fullname}\n`;
        mensagem += `Email: ${contact.email}\n`;
        mensagem += `Telefone: ${contact.phone}\n`;
        mensagem += `Serviço: ${contact.service}\n`;
        mensagem += `Data: ${contact.timestamp}\n`;
        mensagem += `Mensagem: ${contact.message}\n\n`;
    });
    
    console.log(mensagem);
    alert(mensagem);
};

// ===== Função para Limpar Contatos =====
window.limparContatos = function() {
    if (confirm('Tem certeza que deseja limpar todos os contatos salvos?')) {
        localStorage.removeItem('contacts');
        alert('Contatos limpos com sucesso!');
        console.log('Contatos limpos');
    }
};

// ===== Função para Exportar Contatos como CSV =====
window.exportarContatos = function() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    if (contacts.length === 0) {
        alert('Nenhum contato para exportar.');
        return;
    }
    
    let csv = 'Nome,Email,Telefone,Serviço,Data,Mensagem\n';
    contacts.forEach(contact => {
        const message = contact.message.replace(/"/g, '""').replace(/\n/g, ' ');
        csv += `"${contact.fullname}","${contact.email}","${contact.phone}","${contact.service}","${contact.timestamp}","${message}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `contatos_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`${contacts.length} contato(s) exportado(s) com sucesso!`);
};

// ===== Log de Informações do Sistema =====
console.log('%c=== TAMIRES CHIQUESI ADVOCACIA ===', 'color: #1a3a52; font-size: 14px; font-weight: bold;');
console.log('%cComandos disponíveis no console:', 'color: #d4a574; font-weight: bold;');
console.log('%cvissualizarContatos() - Ver todos os contatos salvos', 'color: #666;');
console.log('%climparContatos() - Limpar todos os contatos', 'color: #666;');
console.log('%cexportarContatos() - Exportar contatos como CSV', 'color: #666;');

// ===== Scroll Suave =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animar cards ao scrollar
document.querySelectorAll('.servico-card, .depoimento-card, .info-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ===== Navbar Background ao Scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== Counter Animation (Opcional - para estatísticas futuras) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== Validação de Email em Tempo Real =====
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            emailInput.style.borderColor = '#ff6b6b';
            emailInput.title = 'Email inválido';
        } else {
            emailInput.style.borderColor = '';
            emailInput.title = '';
        }
    });
}

// ===== Adicionar Classe Ativa ao Link de Navegação Atual =====
const navItems = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website carregado com sucesso!');
    
    // Qualquer inicialização adicional aqui
});

// ===== Função para Enviar Mensagem por WhatsApp (Opcional) =====
function enviarWhatsApp() {
    const numero = '5519984480805';
    const mensagem = 'Olá, gostaria de agendar uma consulta com a Tamires Chiquesi Advocacia.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ===== Copiar para Clipboard =====
function copiarParaClipboard(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// ===== Verificar Suporte a Dark Mode (Futuro) =====
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkMode.matches) {
    // Implementar dark mode se necessário
    console.log('Dark mode ativado no sistema');
}

// ===== Mobile Touch Events =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            // Swipe para esquerda
            navMenu.classList.remove('active');
        } else {
            // Swipe para direita
            navMenu.classList.add('active');
        }
    }
}

// ===== Função de Print Amigável =====
function imprimirPagina() {
    window.print();
}

// ===== Performance - Lazy Loading de Imagens =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
