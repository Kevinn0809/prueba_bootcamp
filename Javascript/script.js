// let nombreUsuario = prompt("Cual es tu nombre")

// let titulo1 = document.querySelector("#titulo")
// titulo1.innerHTML = `Hola ` + nombreUsuario + ``
let km = [
    {
        nombreProyecto: 'Monterivera',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/monterrivera-render-1.jpg',
        precioProyecto: '$980.000.000',
        areaProyecto: '124 m2 - 203 m2',
        cantidadProyecto: '2',
    },
    
    {
        nombreProyecto: 'Boreal',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/boreal-galeria-1.jpg',
        precioProyecto: '$391.000.000',
        areaProyecto: '90 m2 - 270 m2',
        cantidadProyecto: '2',
    },

    {
        nombreProyecto: 'Reserva de Granada 5',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/reserva-de-granada-V-galeria-1.jpg',
        precioProyecto: '$210.800.000',
        areaProyecto: '124 m2 - 240 m2',
        cantidadProyecto: '2',
    },

    {
        nombreProyecto: 'Senderos de Granada',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/senderos-de-granada-render-1.jpg',
        precioProyecto: '$796.000.000',
        areaProyecto: '70 m2 - 290 m2',
        cantidadProyecto: '2',
    },
    {
        nombreProyecto: 'Zermatt',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/Zermatt-render-1.jpg',
        precioProyecto: '$500.000.000',
        areaProyecto: '124 m2 - 203 m2',
        cantidadProyecto: '2',
    },
    
    {
        nombreProyecto: 'Orquidea - Hacienda el Bosque',
        imgProyecto: 'https://amarilo.com.co/campana-primas/assets/proyectos/orquidea-galeria-1.jpg',
        precioProyecto: '$500.000.000',
        areaProyecto: '90 m2 - 215 m2',
        cantidadProyecto: '2',
    },
]

let grillaProyectos = document.querySelector ("#proyectosA")    

for (let amarilo = 0; amarilo < km.length; amarilo++) {
    grillaProyectos.innerHTML += `
        <div class="col m-0m mt-5 p-0">
            <div class="card" style="width: 348px;">
                <img src="${km[amarilo].imgProyecto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class=""><b>Proyecto:</b> ${km[amarilo].nombreProyecto}</div>
                    <div class=""><b>Precio desde:</b> ${km[amarilo].precioProyecto}</div>
                    <div class=""><b>Area:</b> ${km[amarilo].areaProyecto}</div>
                    <div class=""><b>Cantidad de unidades:</b> ${km[amarilo].cantidadProyecto}</div>
                </div>
            </div>
        </div>
    `
}



