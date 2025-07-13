En esta sesión vamos a continuar el desarrollo de nuestro proyecto de portafolio en React. Ya hemos visto cómo crear componentes básicos con React y aplicar estilos con Bootstrap. Hoy vamos a enfocarnos en conceptos fundamentales como:

Uso de props para comunicar componentes
Renderizado dinámico desde un archivo JSON
Separación de componentes
Introducción a useEffect
Simulación de una API
Preparación para el uso de modales
🔁 Repaso rápido
Ya tenemos los componentes: Navbar, Hero, Features, Footer,TarjetaProyecto,Proyecto.
Bootstrap se importó desde main.jsx:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
🎯 Objetivo de la clase
Construir una sección de proyectos dinámica para un portafolio, que:

Cargue datos desde un archivo proyectos.json.
Use un componente por tarjeta (TarjetaProyecto).
Active un modal con más información (desde ProyectoModal).
🧱 Estructura del proyecto
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Proyectos.jsx
│   ├── TarjetaProyecto.jsx
│   └── ProyectoModal.jsx
├── data/
│   └── proyectos.json
├── App.jsx
└── main.jsx
⚙️ Flujo de comunicación entre componentes
El siguiente diagrama muestra cómo fluye la información entre Proyectos, TarjetaProyecto y ProyectoModal usando props y funciones para manejar estado:

Flujo de componentes con props y modal

🧠 Conceptos aprendidos hoy
props permiten enviar datos de un componente padre a uno hijo.
useState mantiene el estado local del componente.
useEffect permite ejecutar lógica al montar el componente (ideal para llamadas a APIs).
Bootstrap facilita la maquetación responsiva.
El modal puede recibir datos dinámicos y mostrarse u ocultarse según el estado.
