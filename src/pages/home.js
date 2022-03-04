import { cerrarSesion, guardarPost, publicar, onGetPosts } from "../lib/firebase.js";


export const home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("containerRootHome");
  homeContainer.innerHTML = ` 
  <header class="header">
    <img class="home__logoImg" src="assets/img/logoMartini.png" alt="Logo buena muchacha">
    <h1 class="home__title">BUENAS MUCHACHAS</h1>
    <i class="fa-solid fa-door-open iconsColor iconsColor__header" id="cerrarSesion"></i>
  </header>
   <!-- Publicar -->
  <main class="main-home">
    <div class="home__publicar">
      <div class="containerImgUsuaria">
        <img class="home__imgUsuaria" src="../assets/css/imgUsuarie.png" alt="Imagen usuarie">
      </div>
      <div class="home__inputPublicar">
        <h3 class="nombreUsuarie"> Nombre Usuarie</h3>
        <input type="text" class="home__description" id="descripcion" placeholder="¿Qué nos queires contar, buena muchacha?">
        <input type="text" class="home__etiquetas" id="etiquetas" placeholder="Etiquetas">
        <button class="buttonPublicar" id="publicar">Publicar </button> 
      </div>
    </div>

     <!-- Publicaciones -->
     <div class="home__publicaciones" id="postContainer">
     
    </div>

  </main>
  <!-- Barra  -->
  <div class="nav">
    <i class="fa-solid fa-user iconsColor"></i>
    <i class="fa-solid fa-filter iconsColor"></i>
    <i class="fa-solid fa-magnifying-glass iconsColor"></i>
    <i class="fa-solid fa-pen-to-square iconsColor"></i>
  </div>

  `;

  homeContainer.querySelector("#cerrarSesion").addEventListener("click", () => {
    cerrarSesion();
  });
  
  //Prueba para acceder a base de datos
  console.log(onGetPosts)
  

  //Leer datos para publicar
  const post = homeContainer.querySelector("#publicar");
  post.addEventListener("click", () => {
    const descripcion = document.querySelector("#descripcion").value;
    const etiquetas = document.querySelector("#etiquetas").value;

    guardarPost(descripcion, etiquetas);

    //Intentar llenar div con datos del post (está dando undefined)
    const postContainer = document.querySelector("#postContainer");
    postContainer.innerHTML = publicar()
  });
  
  publicar();


  return homeContainer;
};

