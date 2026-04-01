document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Hero Video Playback Speed
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.playbackRate = 0.6;
    }

    // Sound Toggle Logic
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = document.getElementById('sound-icon');
    
    if (soundToggle && heroVideo) {
        soundToggle.addEventListener('click', () => {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                heroVideo.volume = 0.5; // Ajuste de volume padrão
                // Unmuted icon
                soundIcon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
                soundToggle.setAttribute('aria-label', 'Desativar som');
            } else {
                heroVideo.muted = true;
                // Muted icon
                soundIcon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
                soundToggle.setAttribute('aria-label', 'Ativar som');
            }
        });
    }

    // Hero Animations on Load
    const heroElements = document.querySelectorAll('.animate-on-load');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 200 + (index * 150));
    });

    // Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Counter Animation
    const counterElements = document.querySelectorAll('.counter-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-target'));
        const duration = 1800;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // EaseOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const currentCount = start + (target - start) * easeProgress;
            
            if (target % 1 === 0) {
                el.innerText = Math.floor(currentCount) + (target > 2000 ? '' : '+');
            } else {
                el.innerText = currentCount.toFixed(1);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target > 2000 ? '' : (target % 1 === 0 ? '+' : ''));
            }
        }

        requestAnimationFrame(update);
    }

    // Redirecionamento WhatsApp - Padrão AG5
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta de dados
            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('phone').value;
            const assunto = document.getElementById('subject').value;
            const carro = document.getElementById('car').value;
            const mensagem = document.getElementById('message').value || "Não informado";
            
            // Número oficial (conforme link do hero)
            const numeroWhatsApp = "5521977449687";
            
            // Estrutura OBRIGATÓRIA da Skill AG5
            const textoMensagem = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.

- E-mail: ${email}
- Telefone: ${telefone}
- Assunto/Serviço: ${assunto}
- Veículo: ${carro}
- Mensagem/Situação: ${mensagem}`;

            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;
            
            // Feedback visual no botão antes de redirecionar
            const btn = this.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span>Redirecionando...</span>';
            
            // Pequeno delay para percepção do usuário e então redireciona
            setTimeout(() => {
                window.open(urlWhatsApp, '_blank');
                btn.disabled = false;
                btn.innerHTML = originalContent;
                // contactForm.reset(); // Opcional: resetar após envio
            }, 800);
        });
    }

    // Drawer Mobile (Premium AG5 Pattern)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const drawerClose = document.querySelector('.drawer-close');
    const navDrawer = document.getElementById('nav-drawer');
    const navOverlay = document.getElementById('nav-overlay');
    const body = document.body;

    function openDrawer() {
        navDrawer.classList.add('active');
        navOverlay.classList.add('active');
        body.classList.add('drawer-open');
    }

    function closeDrawer() {
        navDrawer.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('drawer-open');
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', openDrawer);
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeDrawer);
    }

    // Fecha ao clicar em links do drawer
    const drawerLinks = document.querySelectorAll('.drawer-nav a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

});
