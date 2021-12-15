
// Click Event Menu

const icons = document.querySelectorAll('.menu_iconos')
for (const icon of icons) {            
    icon.addEventListener('click', (e) => {                
        for (const j of icons) {
            j.classList.remove('active')
        }
        icon.classList.add('active')
    })
}


// Click Event Menu

const secciones = document.querySelectorAll('.menu_seccion_titulo')
for (const seccion of secciones) {            
    seccion.addEventListener('click', (e) => {                
        for (const k of secciones) {
            k.classList.remove('active')
        }
        seccion.classList.add('active')
    })
}