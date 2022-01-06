
// Click Menu Lateral Collapsado

const icons = document.querySelectorAll('.menu_iconos')
for (const icon of icons) {            
    icon.addEventListener('click', (e) => {                
        for (const j of icons) {
            j.classList.remove('active')
        }
        icon.classList.add('active')
    })
}


// Click Menu Lateral Desplegado

const menu_desplegado = document.querySelectorAll('.menu_seccion_titulo')
for (const cada_seccion of menu_desplegado) {            
    cada_seccion.addEventListener('click', (e) => {                
        for (const j of menu_desplegado) {
            j.classList.remove('active')
        }
        cada_seccion.classList.add('active')
    })
}


// Click Menú Desplegable Lateral

const secciones = document.querySelectorAll('.desplegable_seccion')
for (const seccion of secciones) {            
    seccion.addEventListener('click', (e) => {                
        for (const k of secciones) {
            k.classList.remove('active')
        }
        seccion.classList.add('active')
    })
}

const menu_burger = document.querySelector('.menu_desplegable_lateral')
const menu_seccion = document.querySelectorAll('.desplegable_seccion')
menu_burger.addEventListener('click', () => {
    for (const icon of menu_seccion) {
        icon.classList.toggle('show')
    }
})
