// =======================================================
// 1. DATOS DEL MENÚ (BASE DE DATOS EN JAVASCRIPT)
// =======================================================
const menuItems = [
    // Cada objeto es un plato. El array 'menuItems' es la fuente de datos para el menú.
    { 
        id: 1, 
        nombre: "Ceviche Clásico", 
        categoria: "ceviches", // CLAVE para el filtrado: debe coincidir con el 'data-categoria' del botón
        descripcion: "Fresco pescado del día marinado en leche de tigre, ají limo, cebolla roja y culantro, acompañado de camote glaseado y cancha chulpi.", 
        precio: "S/ 10", 
        img: "ceviche.png" // Nombre del archivo de imagen. La ruta completa se construye en la función displayMenuItems.
    },
    { 
        id: 2, 
        nombre: "Lomo Saltado", 
        categoria: "fondos", 
        descripcion: "Jugosos trozos de lomo fino salteados al wok con cebolla, tomate, ají amarillo y papa amarilla frita, servido con arroz chaufa.", 
        precio: "S/ 20", 
        img: "lomosaltado.png" 
    },
    { 
        id: 3, 
        nombre: "Ají de Gallina", 
        categoria: "fondos", 
        descripcion: "Suave crema de ají amarillo y queso parmesano con pechuga de gallina deshilachada, huevo cocido y aceitunas, arroz blanco.", 
        precio: "S/ 15", 
        img: "ajidegallina.jpg" 
    },
    { 
        id: 4, 
        nombre: "Suspiro a la Limeña", 
        categoria: "postres", 
        descripcion: "Delicado manjar blanco de leche condensada y yemas de huevo, coronado con merengue de oporto y espolvoreado con canela.", 
        precio: "S/ 20", 
        img: "Suspiro.png" 
    },
    { 
        id: 5, 
        nombre: "Tiradito Nikkei", 
        categoria: "ceviches", 
        descripcion: "Finas láminas de pescado blanco en salsa nikkei de maracuyá, shoyu y ají limo, decorado con hilos de camote frito.", 
        precio: "S/ 30", 
        img: "tiradito-nikkei.jpg" 
    },
    { 
        id: 6, 
        nombre: "Pisco Sour", 
        categoria: "bebidas", 
        descripcion: "Nuestro cóctel bandera, preparado con pisco quebranta, jugo de limón, jarabe de goma, clara de huevo y amargo de Angostura.", 
        precio: "S/ 15", 
        img: "pico.jpg" 
    },
    { 
        id: 7, 
        nombre: "Causa Rellena", 
        categoria: "entradas", 
        descripcion: "Puré de papa amarilla sazonado con ají amarillo y limón, relleno de atún o pollo, palta y mayonesa.", 
        precio: "S/ 25", 
        img: "causa.png" 
    },
    { 
        id: 8, 
        nombre: "Arroz con Pollo", 
        categoria: "fondos", 
        descripcion: "Arroz verde cocido con culantro y espinaca, trozos de pollo tierno y un toque de cerveza negra.", 
        precio: "S/ 12", 
        img: "arroz.png" 
    },
    { 
        id: 9, 
        nombre: "Chicha Morada", 
        categoria: "bebidas", 
        descripcion: "Bebida refrescante a base de maíz morado, piña, manzana, membrillo y especias, endulzada naturalmente.", 
        precio: "S/ 10", 
        img: "chicha.png" 
    },
    { 
        id: 10, 
        nombre: "Picarones", 
        categoria: "postres", 
        descripcion: "Donas de zapallo y camote fritas, bañadas en miel de chancaca con anís y canela.", 
        precio: "S/ 18", 
        img: "picarones.jpg" 
    },
    { 
        id: 11, // Asegúrate de usar el siguiente ID disponible
        nombre: "Arroz Chaufa Clásico", 
        categoria: "fondos", 
        descripcion: "Un wokazo de arroz salteado al instante, mezclado con pollo, huevo revuelto, cebolla china y un toque secreto de sillao y aceite de sésamo.", 
        precio: "S/ 15", 
        img: "chaufa.jpg" 
    },
    { 
        id: 12, 
        nombre: "Rocoto Relleno", 
        categoria: "fondos", 
        descripcion: "Rocoto fresco y picante relleno de carne molida, guisantes, queso y huevo, gratinado con queso. Servido sobre un cremoso pastel de papa.", 
        precio: "S/ 16", 
        img: "rocoto.png" 
    }
];

// =======================================================
// 2. SELECCIÓN DE ELEMENTOS DOM (Conexión entre HTML y JS)
// =======================================================
// Selecciona el div vacío donde se inyectarán los platos del menú.
const menuContainer = document.getElementById('menu-items-container'); 
// Selecciona TODOS los botones de filtro por su clase.
const filterButtons = document.querySelectorAll('.filtro-btn'); 
// Botón para ir a la sección de menú (en la sección hero).
const verMenuButton = document.getElementById('verMenuBtn');
// Ícono de menú de hamburguesa para móviles.
const hamburgerMenu = document.querySelector('.hamburger-menu');
// Lista de enlaces de navegación que se oculta/muestra en móviles.
const navLinks = document.querySelector('.nav-links');


// =======================================================
// 3. FUNCIONES (Lógica Central del Menú y Visualización)
// =======================================================

function displayMenuItems(items) {
    // 1. Limpia el contenedor antes de dibujar
    // Esto es vital para que no se acumulen los platos al cambiar de filtro.
    menuContainer.innerHTML = ''; 

    // Muestra un mensaje si la lista de platos (items) está vacía después de filtrar.
    if (items.length === 0) {
        menuContainer.innerHTML = '<p class="text-center my-4">No hay platos en esta categoría.</p>';
        return; // Detiene la función
    }

    // Itera sobre cada plato en el array (filtrado o completo)
   items.forEach(item => {
        const menuItemHTML = `
            <div class="menu-item ${item.categoria}" data-aos="fade-up" data-aos-duration="800">
                
               <img src="${item.img}" alt="${item.nombre}">
                
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <p>${item.descripcion}</p>
                    <span class="precio">${item.precio}</span>
                </div>
            </div>
        `;
        // Agrega el nuevo plato al contenedor
        menuContainer.innerHTML += menuItemHTML;
    });
    // @ts-ignore
    // Refresca la librería AOS para que las nuevas tarjetas se animen correctamente.
    AOS.refreshHard(); 
}

// Función para Manejar los Filtros (El corazón de la lógica de filtrado)
function filterMenu(e) {
    // Solo ejecuta el código si el elemento clickeado tiene la clase 'filtro-btn'
    if (e.target.classList.contains('filtro-btn')) {
        
        // Remueve la clase 'active' (resaltado visual) de todos los botones...
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // ...y se la añade al botón que fue clickeado.
        e.target.classList.add('active');

        // Obtiene la categoría a filtrar desde el atributo 'data-categoria' del botón
        const categoria = e.target.dataset.categoria; 

        if (categoria === 'todos') {
            // Si la categoría es 'todos', muestra el array completo (sin filtrar)
            displayMenuItems(menuItems);
        } else {
            // Si es una categoría específica (ej: 'ceviches')
            // Usa el método 'filter' para crear un nuevo array con solo los platos que coincidan con la categoría
            const filteredItems = menuItems.filter(item => item.categoria === categoria);
            
            // Dibuja la lista filtrada
            displayMenuItems(filteredItems);
        }
    }
}


// =======================================================
// 4. EVENT LISTENERS Y SETUP INICIAL
// =======================================================

// Asigna la función de filtro a CADA botón de categoría
filterButtons.forEach(btn => btn.addEventListener('click', filterMenu));

// Listener para el botón "Explorar Menú"
verMenuButton.addEventListener('click', () => {
    // Desplaza la vista a la sección con id='menu' de forma suave
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// Listener para el menú de hamburguesa (abre/cierra el menú en móvil)
hamburgerMenu.addEventListener('click', () => {
    // Añade o quita la clase 'active' al menú de enlaces (la clase controla la visibilidad en CSS)
    navLinks.classList.toggle('active');
});

// Listener para cada enlace dentro del menú móvil
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Si el menú está abierto, lo cierra al hacer clic en un enlace (mejor UX en móvil)
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Inicialización: Muestra todos los ítems al cargar la página (Comportamiento deseado)
window.onload = () => {
    displayMenuItems(menuItems);
};


// =======================================================
// LÓGICA DE CONTROL DE AUDIO DEL VIDEO (Añadida previamente)
// =======================================================

// 1. Seleccionar los nuevos elementos
const video = document.getElementById('heroVideo'); // El elemento video
const toggleMuteBtn = document.getElementById('toggleMuteBtn'); // El botón de control
// Busca el ícono dentro del botón
const muteIcon = toggleMuteBtn.querySelector('i'); 

// 2. Agregar el Event Listener al botón de audio
toggleMuteBtn.addEventListener('click', () => {
    // 3. Invertir el estado de mute: si estaba muted pasa a no muted y viceversa
    video.muted = !video.muted;
    
    // 4. Cambiar el ícono visualmente según el estado actual
    if (video.muted) {
        // Si está silenciado, muestra el ícono de mute
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    } else {
        // Si tiene sonido, muestra el ícono de volumen activo
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
    }
});

// Nota: Para que el sonido funcione al primer clic, se necesita una lógica adicional
// que escuche el evento 'click' en el documento y desmutee/reproduzca el video.