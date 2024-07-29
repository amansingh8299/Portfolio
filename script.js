function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
  }

  document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

  
document.querySelectorAll('.theme').forEach(button => {
	button.addEventListener('click', function() {
	  document.body.classList.toggle('dark-mode');
	  document.querySelectorAll('.theme').forEach(btn => {
		btn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
	  });
	});
  });