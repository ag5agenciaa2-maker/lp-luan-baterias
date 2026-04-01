/**
 * Nohana Quintanilha Advocacia - Links 360
 * Script principal de interatividade
 */

// ============================================
// FUNÇÃO: Ocultar/mostrar botões fixos ao rolar
// ============================================
(function () {
    let lastScrollY = 0;
    const SCROLL_THRESHOLD = 80;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const btns = document.querySelectorAll('.theme-toggle');

        if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
            btns.forEach(btn => btn.classList.add('hidden-btn'));
        } else {
            btns.forEach(btn => btn.classList.remove('hidden-btn'));
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
})();


// ============================================
// CONFIGURAÇÃO GLOBAL
// ============================================
const CONFIG = window.Link360Config || {
    projectName: "nohana-quintanilha-advocacia",
    themeKey: "nohana-theme",
    defaultDark: true,
    greetingText: "Seja Bem-Vindo",
    accentColor: "#6B1728"
};

// ============================================
// FUNÇÃO: Download vCard
// ============================================
function downloadVCard() {
    const vcardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${CONFIG.vcard?.fn || 'Dra. Nohana Quintanilha'}`,
        `N:${CONFIG.vcard?.n || 'Quintanilha;Nohana;;;'}`,
        `ORG:${CONFIG.vcard?.org || 'Nohana Quintanilha Advocacia'}`,
        `TITLE:${CONFIG.vcard?.title || 'Advogada - OAB RJ 013.828/2023'}`,
        `TEL;TYPE=CELL:${CONFIG.vcard?.tel || '+5521971534620'}`,
        `TEL;TYPE=WORK:${CONFIG.vcard?.telWork || '5521971534620'}`,
        `URL:${CONFIG.vcard?.url || 'https://www.nohanaquintanilha.com.br/'}`,
        `ADR;TYPE=WORK:;;${CONFIG.vcard?.adr || 'Av. Maria Teresa, 260 - Loja B;Campo Grande;RJ;23050-160;Brasil'}`,
        'END:VCARD'
    ].join('\n');

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${CONFIG.vcard?.filename || 'Nohana_Quintanilha_Advocacia'}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// ============================================
// FUNÇÃO: Modal System
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Animação de entrada
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.style.animation = 'none';
            setTimeout(() => {
                content.style.animation = 'modalIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            }, 10);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function openImageModal(src) {
    const modal = document.getElementById('modal-image');
    const img = document.getElementById('popup-img');
    if (modal && img) {
        img.src = src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// FUNÇÃO: Dynamic Greeting
// ============================================
function updateGreeting() {
    const greetings = document.querySelectorAll('.dynamic-greeting');
    const hour = new Date().getHours();
    let greeting = CONFIG.greetingText || 'Seja Bem-Vindo';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Bom Dia';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa Tarde';
    } else {
        greeting = 'Boa Noite';
    }
    
    greetings.forEach(el => {
        el.textContent = `${greeting} | Volte Sempre`;
    });
}

// ============================================
// FUNÇÃO: Controle de Música
// ============================================
function initMusicToggle() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');

    if (!music || !musicBtn) return;

    music.volume = 0.2;

    const updateIcon = () => {
        const video = document.getElementById('vid1');
        const videoPlaying = video && !video.paused;
        const musicPlaying = !music.paused;

        if (videoPlaying || musicPlaying) {
            if (musicIcon) musicIcon.className = 'fa-solid fa-volume-high text-xs';
        } else {
            if (musicIcon) musicIcon.className = 'fa-solid fa-volume-xmark text-xs';
        }
    };

    musicBtn.addEventListener('click', () => {
        const video = document.getElementById('vid1');
        const videoPlaying = video && !video.paused;

        if (videoPlaying) {
            // Vídeo tocando: pausa o vídeo
            video.pause();
        } else if (!music.paused) {
            // Música tocando: pausa a música
            music.pause();
        } else if (video) {
            // Tudo parado: dá play no vídeo
            if (typeof playNativeVideo === 'function') {
                playNativeVideo('vid1', 'overlay-vid1');
            } else {
                video.play().catch(e => console.log("Erro ao tocar vídeo:", e));
            }
        } else {
            // Sem vídeo: toca a música
            music.play().catch(e => console.log("Erro ao tocar música:", e));
        }
        updateIcon();
    });

    // Sincroniza ícone quando o vídeo muda de estado externamente
    const video = document.getElementById('vid1');
    if (video) {
        video.addEventListener('play', updateIcon);
        video.addEventListener('pause', updateIcon);
    }
    music.addEventListener('play', updateIcon);
    music.addEventListener('pause', updateIcon);
}

// Toggle de tema gerenciado pelo core.js (evita listeners duplicados)
function initThemeToggle() { /* delegado ao core.js */ }



// ============================================
// FUNÇÃO: Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => observer.observe(el));
}

// ============================================
// FUNÇÃO: Gallery Carousel
// ============================================
function initGalleryCarousel() {
    const carousel = document.getElementById('galleryCarousel');
    const dots = document.querySelectorAll('#galleryDots button');
    
    if (!carousel) return;
    
    let isHovering = false;
    let autoPlayInterval;
    
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (isHovering) return;
            
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            const itemWidth = carousel.querySelector('div')?.offsetWidth || 300;
            const currentScroll = carousel.scrollLeft;
            
            if (currentScroll >= maxScroll - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: itemWidth + 16, behavior: 'smooth' });
            }
        }, 2500); // Roda a cada 2.5s
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }
    
    // Pausar auto-play em interação
    carousel.addEventListener('mouseenter', () => isHovering = true);
    carousel.addEventListener('mouseleave', () => {
        isHovering = false;
        startAutoPlay();
    });
    carousel.addEventListener('touchstart', () => {
        isHovering = true;
        stopAutoPlay();
    }, {passive:true});
    carousel.addEventListener('touchend', () => {
        isHovering = false;
        startAutoPlay();
    }, {passive:true});

    // Iniciar só quando estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        });
    }, { threshold: 0.1 });
    observer.observe(carousel);
    
    // Atualizar dots ao scroll
    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.querySelector('div')?.offsetWidth || 300;
        const activeIndex = Math.round(scrollLeft / (itemWidth + 16));
        
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active-dot');
                dot.classList.remove('bg-white/20');
                dot.classList.remove('bg-brand-dark/20', 'dark:bg-white/20');
                dot.classList.add('bg-brand-main');
            } else {
                dot.classList.remove('active-dot');
                dot.classList.remove('bg-brand-main');
                dot.classList.add('bg-brand-dark/20', 'dark:bg-white/20');
            }
        });
    });

    // Clicar nos dots para navegar
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const itemWidth = carousel.querySelector('div')?.offsetWidth || 300;
            carousel.scrollTo({ left: index * (itemWidth + 16), behavior: 'smooth' });
            startAutoPlay(); // Reseta intervalo
        });
    });
}

function scrollGallery(direction) {
    const carousel = document.getElementById('galleryCarousel');
    if (carousel) {
        const itemWidth = carousel.querySelector('div')?.offsetWidth || 300;
        carousel.scrollBy({
            left: direction * (itemWidth + 16),
            behavior: 'smooth'
        });
    }
}

// ============================================
// FUNÇÃO: Video Carousel
// ============================================
function initVideoCarousel() {
    const carousel = document.getElementById('videoCarousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.video-slide');
    const dots = document.querySelectorAll('.video-dot');
    const btnAtivarSom = document.getElementById('btnAtivarSom');
    let currentIndex = 0;
    let isPlaying = false;
    
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
            
            if (index === currentIndex) {
                slide.classList.add('is-active');
                const video = slide.querySelector('video');
                if (video && isPlaying) {
                    video.play().catch(() => {});
                }
            } else if (index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)) {
                slide.classList.add('is-prev');
                const video = slide.querySelector('video');
                if (video) video.pause();
            } else if (index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)) {
                slide.classList.add('is-next');
                const video = slide.querySelector('video');
                if (video) video.pause();
            } else {
                slide.classList.add('is-hidden');
                const video = slide.querySelector('video');
                if (video) video.pause();
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
    });
    
    // Click on slides
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateSlides();
            }
        });
    });
    
    // Botão ativar som
    if (btnAtivarSom) {
        btnAtivarSom.addEventListener('click', () => {
            isPlaying = true;
            btnAtivarSom.style.display = 'none';
            updateSlides();
        });
    }
    
    // Inicializar
    updateSlides();
}

// ============================================
// FUNÇÃO: Image Comparison Slider
// ============================================
function initComparisonSlider() {
    const container = document.getElementById('comparison-container');
    const slider = document.getElementById('comparison-slider');
    
    if (!container || !slider) return;
    
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        container.style.setProperty('--exposure', `${value}%`);
    });
}

// ============================================
// FUNÇÃO: Close Modals on Backdrop Click
// ============================================
function initModalBackdrops() {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    
    backdrops.forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                backdrop.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
}

// ============================================
// FUNÇÃO: Close Modals on Escape Key
// ============================================
function initEscapeKey() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal-backdrop[style*="flex"]');
            openModals.forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// FUNÇÃO: WhatsApp Message Bubble
// ============================================
function initWhatsappBubble() {
    // Gatilho: último botão da seção de links (Facebook)
    const gatilho = document.getElementById('ultimo-link-btn');
    const whatsappMessage = document.getElementById('whatsapp-message');
    const closeBubbleBtn = document.querySelector('.close-whatsapp-bubble');

    if (gatilho && whatsappMessage) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        whatsappMessage.classList.add('show');
                        // Auto-esconder após 15 segundos
                        setTimeout(() => {
                            whatsappMessage.classList.remove('show');
                        }, 15000);
                    }, 800);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(gatilho);
    }

    if (closeBubbleBtn && whatsappMessage) {
        closeBubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            whatsappMessage.classList.remove('show');
        });
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar alternância de tema (Prioridade)
    initThemeToggle();
    
    // 2. Atualizar saudação
    updateGreeting();
    
    // 3. Inicializar animações de scroll
    initScrollReveal();
    
    // Outros componentes
    initGalleryCarousel();
    initVideoCarousel();
    initComparisonSlider();
    initModalBackdrops();
    initEscapeKey();
    initWhatsappBubble();
    initMusicToggle();
    
    // Console log
    console.log(`%c${CONFIG.projectName}`, 'color: #6B1728; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvido por AG5 Agência', 'color: #C9993A; font-size: 12px;');
});

// ============================================
// EXPORTS (para uso global)
// ============================================
window.openModal = openModal;
window.closeModal = closeModal;
window.openImageModal = openImageModal;
window.downloadVCard = downloadVCard;
window.scrollGallery = scrollGallery;
