// Seleccionar el botón y el sidebar
const toggleButton = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.flex-col');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});


console.log('hola')