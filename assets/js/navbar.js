document.getElementById('mobile-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Cerrar menú móvil
      document.getElementById('nav-links').classList.remove('active');
      document.getElementById('mobile-menu').classList.remove('active');
  });
});