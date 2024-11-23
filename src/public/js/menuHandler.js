document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("aside ul li");
    const mainContent = document.querySelector("main");
  
    // Contenidos dinámicos para cada sección
    const contentMap = {
      planta: `
        <header class="mb-6">
          <h2 class="text-2xl font-bold">Planta Tampico</h2>
        </header>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-gray-100 border rounded shadow">
            <a href="/training/panel">
              <h3 class="font-bold">Control de Costes</h3>
            </a>
          </div>
          <div class="p-4 bg-gray-100 border rounded shadow">
            <a href="/training/panel">
              <h3 class="font-bold">Gestión de Imputación/Vacaciones</h3>
            </a>
          </div>
          <div class="p-4 bg-gray-100 border rounded shadow">
            <h3 class="font-bold">Soldaduras</h3>
          </div>
          <div class="p-4 bg-gray-100 border rounded shadow">
            <a href="/training/panel">
              <h3 class="font-bold">Servicios Generales (SSGG)</h3>
            </a>
          </div>
          <div class="p-4 bg-gray-100 border rounded shadow">
            <h3 class="font-bold">Administración</h3>
          </div>
          <div class="p-4 bg-gray-100 border rounded shadow">
            <h3 class="font-bold">Almacén</h3>
          </div>
        </div>
      `,
      proyecto: `
        <header class="mb-6">
          <h2 class="text-2xl font-bold">Proyecto</h2>
        </header>
        <p>Información sobre los proyectos activos y su estado.</p>
      `,
      ssma: `
        <header class="mb-6">
          <h2 class="text-2xl font-bold">SSMA</h2>
        </header>
        <p>Información sobre seguridad, salud y medio ambiente.</p>
      `,
      // Agrega más secciones según sea necesario
    };
  
    // Manejar el evento de clic
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const section = item.getAttribute("data-section");
        mainContent.innerHTML = contentMap[section] || "<p>En construcción...</p>";
        mainContent.classList.add("fade-in");
        setTimeout(() => {
          mainContent.classList.remove("fade-in");
        }, 2000);
      });
    });
  });
  