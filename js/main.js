 const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const menuIcon = menuBtn.querySelector('i');

  menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    // Toggle icon between bars and X
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });