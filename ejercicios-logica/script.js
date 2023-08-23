// Ejercicio 1
// function sumaN() {
//   let numberEjercicio1 = document.getElementById("sumaEjercicio1").value;
//   let sum = 0;
//   if (sumaEjercicio1.value == "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Por favor rellene el input ",
//     });
//   } else {
//     for (let i = 1; i <= numberEjercicio1; i++) {
//       sum += i;
//     }
//     Swal.fire({
//       title: "Resultado",
//       icon: "success",
//       html: "Tu suma es " + sum,
//       showCloseButton: true,
//       showCancelButton: false,
//       focusConfirm: false,
//       confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Gracias!',
//     });
//   }
// }

// // Ejercicio 2
function verificarNumero() {
  let number = document.querySelector("#numeroEjercicio2").value;
  if (numeroEjercicio2.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor rellene el input ",
    });
  } else {
    //el porcentaje es el reciduo
    if (number % 2 === 0) {
      let timerInterval;
      Swal.fire({
        title: "Resultado",
        html: "El resultado es par",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal");
        }
      });
    } else {
      Swal.fire({
        title: "Resultado",
        html: "El resultado es impar",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal");
        }
      });
    }
  }
}

// Ejercicio 3
function btnEjercicio3() {
  let edad = document.getElementById("iEdad").value;
  let genero = document.getElementById("iGenero").value;
  if ((edad, genero === "")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor si no rellenas los campos no puedes reclamar el premio",
    });
  } else {
    if (edad < 10) {
      if (genero === "mujer" || genero == "hombre") {
        Swal.fire({
          title: "Resultado",
          html: "Recibes un juguito",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Se ha cerrado correctamente el modal");
          }
        });
      }
    } else if (edad >= 18) {
      if (genero === "mujer") {
        Swal.fire({
          title: "Resultado!",
          text: "Recibirás una cerveza gratis y una porción de pizza Hawaiana.",
          imageUrl: "",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      } else if (genero === "hombre") {
        Swal.fire({
          title: "Resultado!",
          text: "Recibirás una cerveza gratis y una porción de pizza tres carnes.",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    } else {
      Swal.fire({
        title: "Lamentablemente",
        text: "No recibes nada",
        imageUrl: "https://media.giphy.com/media/M28rUlcjueKUE/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal");
        }
      });
    }
  }
}

//Ejercicio 4
let usuarioM = [];
let M = [
  {
    comida: "Hamburguesa",
    precio: 20000,
  },
  {
    comida: "Pizza",
    precio: 9000,
  },
  {
    comida: "Papas Fritas",
    precio: 4000,
  },
  {
    comida: "Gaseosa",
    precio: 2500,
  },
];

let iOrden = document.querySelector("#iOrden");
let agregarItem = document.querySelector("#agregarItem");
let totalPagar = document.querySelector("#totalPagar");

let total = 0;

agregarItem.addEventListener("click", (e) => {
  e.preventDefault();
  let seleccion = encontrarSeleccion(iOrden.value);
  if (seleccion) {
    usuarioM.push(seleccion);
    total += seleccion.precio;
    iOrden.value = "";
    let carrito = document.querySelector("#tuCarritoText");
    carrito.innerHTML += `  
      <li>${seleccion.comida}</li>
    `;
    console.log(`Seleccionaste: ${seleccion.comida}`);
  } else {
    console.log("Opción no válida. Introduce un artículo del menú.");
  }
});

totalPagar.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarTotal();
});

//el metodo toLowerCase sirve para que devuelva el string el letras minusculas
function encontrarSeleccion(item) {
  const seleccion = M.filter(
    (menuItem) => menuItem.comida.toLowerCase() === item.toLowerCase()
  );
  return seleccion.length > 0 ? seleccion[0] : null;
}

function mostrarTotal() {
  console.log(`Total a totalPagar: $${total}`);
}
