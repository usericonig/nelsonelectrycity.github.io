/* script.js */
document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE CONFIGURATION ---
    const translations = {
        en: {
            home: "Home", services: "Services", about: "About", gallery: "Gallery", contact: "Contact",
            heroTitle: "Master Electrician",
            heroSub: "20+ Years of Excellence | Licensed & Insured",
            ctaContact: "Contact Us", ctaWork: "View Our Work",
            tapeText: "⚡ POWERING HOMES & BUSINESSES • PROFESSIONAL • RELIABLE • INSURED • NELSON ELECTRICITY INC • ",
            servTitle: "Our Services | FREE ESTIMATES",
            serv1: "Boiler Installation", serv1d: "Professional boiler installation for homes and businesses.",
            serv2: "Water Heater Installation", serv2d: "Expert installation of water heater systems.",
            serv3: "Outlet & Lamp Installation", serv3d: "Safe installation of outlets, switches, and lighting fixtures.",
            serv4: "Breaker Box Installation", serv4d: "Main and box breakers installed safely to code.",
            serv5: "Fan Installation", serv5d: "Ceiling and exhaust fan installation services.",
            serv6: "Residential Electrical", serv6d: "All types of residential electrical work and renovations.",
            serv7: "General Repairs", serv7d: "Troubleshooting and generic electric problem repair.",
            aboutTitle: "20 Years of Power & Trust",
            aboutText: "For over two decades, Nelson Electricity Inc. has been the heartbeat of power for homes and businesses in our community. Our journey began 20 years ago with a simple yet ambitious mission: to provide safe, reliable, and innovative electrical solutions that you can count on. \n\nToday, we stand as a pillar of trust and excellence. We don't just fix wires; we empower your life and business. From complex industrial installations to the cozy lighting of your family home, our master electricians bring 20 years of refined expertise to every project. We believe in getting it right the first time, ensuring your safety and satisfaction are never compromised. \n\nChoose experience. Choose safety. Choose Nelson Electricity.",
            contactTitle: "Get In Touch",
            emailBtn: "Send Email", callBtn: "Call Now",
            nav_home: "Home", nav_serv: "Services", nav_about: "About", nav_gal: "Gallery", nav_cont: "Contact",
            cont_h2: "Let's Talk", call: "Click to Chat Now"
        },
        es: {
            home: "Inicio", services: "Servicios", about: "Nosotros", gallery: "Galería", contact: "Contacto",
            heroTitle: "Maestro Electricista",
            heroSub: "Más de 20 Años de Excelencia | Licenciado y Asegurado",
            ctaContact: "Contáctanos", ctaWork: "Ver Trabajos",
            tapeText: "⚡ ENERGIZANDO HOGARES Y NEGOCIOS • PROFESIONAL • CONFIABLE • ASEGURADO • NELSON ELECTRICITY INC • ",
            servTitle: "Nuestros Servicios | ESTIMADOS GRATIS",
            serv1: "Instalación de Calderas", serv1d: "Instalación profesional de calderas para hogares y negocios.",
            serv2: "Instalación de Calentadores", serv2d: "Instalación experta de calentadores de agua.",
            serv3: "Lámparas y Enchufes", serv3d: "Instalación segura de lámparas de enchufe y accesorios.",
            serv4: "Interruptores y Cajas", serv4d: "Instalación de interruptores principales y de caja.",
            serv5: "Instalación de Ventiladores", serv5d: "Servicio de instalación de ventiladores de techo y escape.",
            serv6: "Trabajo Residencial", serv6d: "Todo tipo de trabajo eléctrico residencial.",
            serv7: "Reparación General", serv7d: "Reparación de problemas eléctricos generales.",
            aboutTitle: "20 Años de Potencia y Confianza",
            aboutText: "Durante más de dos décadas, Nelson Electricity Inc. ha sido el corazón energético para hogares y negocios en nuestra comunidad. Nuestro viaje comenzó hace 20 años con una misión simple pero ambiciosa: proporcionar soluciones eléctricas seguras, confiables e innovadoras en las que pueda confiar.\n\nHoy, somos un pilar de confianza y excelencia. No solo arreglamos cables; empoderamos su vida y su negocio. Desde complejas instalaciones industriales hasta la iluminación acogedora de su hogar familiar, nuestros maestros electricistas aportan 20 años de experiencia refinada a cada proyecto. Creemos en hacerlo bien a la primera, asegurando que su seguridad y satisfacción nunca se vean comprometidas.\n\nElija experiencia. Elija seguridad. Elija Nelson Electricity.",
            contactTitle: "Contáctanos",
            emailBtn: "Enviar Correo", callBtn: "Llamar Ahora",
            nav_home: "Inicio", nav_serv: "Servicios", nav_about: "Nosotros", nav_gal: "Galería", nav_cont: "Contacto",
            cont_h2: "Hablemos", call: "Clic para Chatear"
        }
    };

    // --- LANGUAGE SWITCHER LOGIC ---
    let currentLang = 'en';
    const langBtn = document.getElementById('lang-toggle');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            langBtn.innerText = currentLang === 'en' ? 'ES' : 'EN';
            updateContent();
        });
    }

    function updateContent() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });

        // Update Tape (Special case for loop)
        const tape = document.getElementById('tape-content');
        if (tape) {
            tape.innerText = translations[currentLang].tapeText.repeat(10);
        }
    }

    // Initialize Tape Text
    const tape = document.getElementById('tape-content');
    if (tape) tape.innerText = translations['en'].tapeText.repeat(10);


    // --- LIGHTBOX GALLERY ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }
});