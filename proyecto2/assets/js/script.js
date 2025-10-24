// assets/js/script.js - Ajustado para Nuevo Diseño Asimétrico con Gráficos Compactos

// --- 1. DATOS DE EJEMPLO ---
const datosDashboard = {
    kpis: {
        ventasTotales: 450150,
        usuariosActivos: 8920,
        pedidosPendientes: 21,
        tasaError: 0.005
    },
    graficoVentas: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        data: [18000, 22000, 19000, 35000, 30000, 42000, 45000]
    },
    graficoProductos: {
        labels: ['Software', 'Hardware', 'Servicios', 'Consultoría'],
        data: [45, 30, 15, 10]
    },
    datosTabla: [
        { id: 'ORD001', producto: 'Licencia Pro', cliente: 'Juan Pérez', total: '$1200', estado: 'Completado' },
        { id: 'ORD002', producto: 'Teclado Gamer', cliente: 'Ana Gómez', total: '$85', estado: 'Pendiente' },
        { id: 'ORD003', producto: 'Mantenimiento', cliente: 'Carlos Ruiz', total: '$300', estado: 'Completado' },
        { id: 'ORD004', producto: 'Monitor Curvo', cliente: 'María López', total: '$450', estado: 'Enviado' },
        { id: 'ORD005', producto: 'Servidor Cloud', cliente: 'Tech Solutions', total: '$2500', estado: 'Completado' },
    ]
};

// --- 2. FUNCIÓN PARA ACTUALIZAR KPIS ---
function actualizarKPIs() {
    document.getElementById('kpi-ventas').textContent = '$' + datosDashboard.kpis.ventasTotales.toLocaleString('es-ES');
    document.getElementById('kpi-usuarios').textContent = datosDashboard.kpis.usuariosActivos.toLocaleString('es-ES');
    document.getElementById('kpi-pedidos').textContent = datosDashboard.kpis.pedidosPendientes;
    document.getElementById('kpi-error').textContent = (datosDashboard.kpis.tasaError * 100).toFixed(1) + '%';
}

// --- 3. CREAR GRÁFICO DE LÍNEAS (VENTAS) ---
function crearGraficoVentas() {
    const ctxVentas = document.getElementById('ventasChart').getContext('2d');
    new Chart(ctxVentas, {
        type: 'line', 
        data: {
            labels: datosDashboard.graficoVentas.labels,
            datasets: [{
                label: 'Ventas Mensuales ($)',
                data: datosDashboard.graficoVentas.data,
                backgroundColor: 'rgba(0, 123, 255, 0.2)', 
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 3,
                tension: 0.4, 
                fill: true,
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(0, 123, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // ¡IMPORTANTE! Para que el canvas se ajuste a la altura del padre
            plugins: {
                legend: {
                    display: false 
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        },
                        color: '#6c757d',
                        font: {
                            size: 10 // Tamaño de fuente más pequeño para ejes
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6c757d',
                        font: {
                            size: 10 // Tamaño de fuente más pequeño para ejes
                        }
                    }
                }
            }
        }
    });
}

// --- 4. CREAR GRÁFICO DE ANILLO (PRODUCTOS) ---
function crearGraficoProductos() {
    const ctxProductos = document.getElementById('productosChart').getContext('2d');
    new Chart(ctxProductos, {
        type: 'doughnut', 
        data: {
            labels: datosDashboard.graficoProductos.labels,
            datasets: [{
                label: 'Distribución',
                data: datosDashboard.graficoProductos.data,
                backgroundColor: [
                    '#007bff', 
                    '#28a745',  
                    '#ffc107',  
                    '#6c757d'   
                ],
                hoverOffset: 10,
                borderWidth: 2,
                borderColor: 'white'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // ¡IMPORTANTE! Para que el canvas se ajuste a la altura del padre
            plugins: {
                legend: {
                    position: 'right', // Mantener leyenda a la derecha
                    labels: {
                        font: {
                            family: 'Roboto',
                            size: 12 // Tamaño de fuente de leyenda más pequeño
                        },
                        color: '#343a40'
                    }
                }
            }
        }
    });
}

// --- 5. RELLENAR TABLA DE DATOS RECIENTES ---
function rellenarTablaDatosRecientes() {
    const tablaBody = document.getElementById('tabla-datos-recientes');
    tablaBody.innerHTML = ''; 

    datosDashboard.datosTabla.forEach(dato => {
        const row = document.createElement('tr');
        let estadoClass = '';
        
        if (dato.estado === 'Completado') {
            estadoClass = 'estado-completado'; 
        } else if (dato.estado === 'Pendiente') {
            estadoClass = 'estado-pendiente'; 
        } else if (dato.estado === 'Enviado') {
            estadoClass = 'estado-enviado'; 
        } else if (dato.estado === 'Cancelado') {
            estadoClass = 'estado-cancelado'; 
        }

        row.innerHTML = `
            <th scope="row">${dato.id}</th>
            <td>${dato.producto}</td>
            <td>${dato.cliente}</td>
            <td>${dato.total}</td>
            <td class="${estadoClass}">${dato.estado}</td>
        `;
        tablaBody.appendChild(row);
    });
}

// --- 6. FUNCIONALIDAD DEL SIDEBAR (Toggle) ---
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

if (toggleButton) {
    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };
}


// --- EJECUTAR TODO AL CARGAR LA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    actualizarKPIs();
    crearGraficoVentas();
    crearGraficoProductos();
    rellenarTablaDatosRecientes();
});