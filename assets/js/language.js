// language.js
document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // Navegación
            home: "HOME",
            about: "ABOUT ME",
            projects: "PROJECTS",
            contact: "CONTACT",

            // Sección Home
            mainTitle1: "ANALYST",
            mainTitle2: "AND",
            mainTitle3: "DEVELOPER",
            subTitle: "Backend - Front-end",

            // Sección About
            aboutTitle: "About Me",
            bioTitle: "Biography",
            bioText: "I am a Software Analyst and Developer, specializing in the design, analysis, and development of technological solutions tailored to different industries. My professional approach is oriented toward the meticulous collection and analysis of functional and technical requirements, with the goal of ensuring quality and efficiency in the implementation of IT systems. I have a solid foundation in programming languages ​​and databases, complemented by a deep understanding of agile methodologies, which enables me to work effectively in multidisciplinary teams and provide solutions that meet the specific needs of clients. I excel in my ability to translate user requirements into precise technical specifications, applying modeling tools such as UML and preparing clear and concise documentation to facilitate the work of development teams.",
            skillsTitle: "Skills",
            skill1: "HTML5",
            skill2: "CSS3",
            skill3: "JavaScript",
            skill4: "JAVA",
            skill5: "PYTHON",
            skill6: "SQL",
            skill7: "Git",
            skill8: "GitHub",


            // Sección Projects
            projectsTitle: "Featured Projects",
            project1Title: "Technological Inventory Platform",
            project1Desc: "E-commerce platform built with React",

            // Sección Contact
            contactTitle: "Contact",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            submitButton: "Send Message",

            // Footer
            createdBy: "Created by"
        },
        es: {
            // Navegación
            home: "INICIO",
            about: "SOBRE MI",
            projects: "PROYECTOS",
            contact: "CONTACTO",

            // Sección Home
            mainTitle1: "ANALISTA",
            mainTitle2: "Y",
            mainTitle3: "DESARROLLADOR",
            subTitle: "Backend - Front-end",

            // Sección About
            aboutTitle: "Acerca de Mí",
            bioTitle: "Biografía",
            bioText: "Soy Analista y Desarrollador de Software, me especializo en el diseño, análisis y desarrollo de soluciones tecnológicas adaptadas a distintas industrias. Mi enfoque profesional se orienta hacia la meticulosa recolección y análisis de requisitos funcionales y técnicos, con el objetivo de asegurar la calidad y eficiencia en la implementación de sistemas informáticos. Poseo una base sólida en lenguajes de programación y bases de datos, complementada con una profunda comprensión de las metodologías ágiles, lo que me habilita para trabajar de manera efectiva en equipos multidisciplinarios y aportar soluciones que satisfacen las necesidades específicas de los clientes. Destaco en la habilidad de convertir los requerimientos de los usuarios en especificaciones técnicas precisas, aplicando herramientas de modelado como UML y elaborando documentación clara y concisa para facilitar la labor de los equipos de desarrollo.",
            skillsTitle: "Habilidades",
            skill1: "HTML5",
            skill2: "CSS3",
            skill3: "JavaScript",
            skill4: "JAVA",
            skill5: "PYTHON",
            skill6: "SQL",
            skill7: "Git",
            skill8: "GitHub",

            // Sección Projects
            projectsTitle: "Proyectos Destacados",
            project1Title: "Technological Inventory Platform",
            project1Desc: "Inventory management platform in Laravel",

            // Sección Contact
            contactTitle: "Contacto",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Correo electrónico",
            messagePlaceholder: "Mensaje",
            submitButton: "Enviar Mensaje",

            // Footer
            createdBy: "Creado por"
        }
    };

    const langToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'es';

    const updateLanguage = () => {
        // Actualizar todos los elementos con data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;

            if (translations[currentLang][key]) {
                // Manejar elementos de formulario
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                }
                // Manejar contenido HTML con <br>
                else if (element.innerHTML.includes('<br>')) {
                    element.innerHTML = translations[currentLang][key];
                }
                // Elementos normales
                else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        // Actualizar texto del botón
        langToggle.textContent = currentLang.toUpperCase();
    };

    // Evento para cambiar idioma
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

    // Inicializar con el idioma guardado
    updateLanguage();
});