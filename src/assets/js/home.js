document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const logo = document.getElementById('home-link');
  
    function showPage(pageId) {
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById(pageId)?.classList.add('active');
  
      links.forEach(l => {
        l.classList.remove('active');
        if (l.dataset.page === pageId) l.classList.add('active');
      });
  
      history.pushState(null, null, `#${pageId}`);
      
      if (window.innerWidth <= 600) {
        navLinks.classList.remove('active');
      }
    }
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
      });
    });
  
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('home');
    });
  
    window.addEventListener('hashchange', () => {
      const hash = location.hash.slice(1) || 'home';
      showPage(hash);
    });
  
    showPage(location.hash.slice(1) || 'home');
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        navLinks.classList.remove('active');
      }
    });
  });