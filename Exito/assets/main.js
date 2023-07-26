let imagenesCategorias = [
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/1.webp'},
    {nombreCategoria: 'Ofertas relapago', urlImagen: 'assets/img/2.webp'},
    {nombreCategoria: 'Celulares', urlImagen: 'assets/img/3.webp'},
    {nombreCategoria: 'Televisores', urlImagen: 'assets/img/4.webp'},
    {nombreCategoria: 'Eletrodomesticos', urlImagen: 'assets/img/5.webp'},
    {nombreCategoria: 'Mercado', urlImagen: 'assets/img/6.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/7.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/8.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/9.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/10.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/11.webp'},
    {nombreCategoria: 'Colombiamoda', urlImagen: 'assets/img/12.webp'},
];

let grillaPagina = document.querySelector ("#contenedorImgCategorias")

for (let policia = 0; policia < imagenesCategorias.length; policia++) {
    grillaPagina.innerHTML += `
        <div class="col-2">
            <img class="w-100" src="${imagenesCategorias[policia].urlImagen}">
            <div> ${imagenesCategorias[policia].nombreCategoria} </div>
        </div>
    ` 
}
