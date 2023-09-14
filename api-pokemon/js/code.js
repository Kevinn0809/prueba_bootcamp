function consumo(urlApi = "https://pokeapi.co/api/v2/ability?page=1") {
  fetch(urlApi)
    .then((Poke) => Poke.json())
    .then((dataPoke) => {
      let htmlPoke = document.querySelector("#htmlPokeDiv")
      htmlPoke.className = "card mb-3"
      console.log("data:", dataPoke)

      htmlPoke.innerHTML += `
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
          </div>
        </div>
      </div>
      `
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error)
    })
}

consumo()
