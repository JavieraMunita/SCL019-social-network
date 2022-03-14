/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
<<<<<<< HEAD
import {
  readData, deletedDataPost, auth, likes,
} from '../lib/firebase.js';
=======
import { readData, deletedDataPost, auth, likes,editar } from '../lib/firebase.js';
>>>>>>> ce3797acee76c72eec094a8e202d6281faa62f61

export const newPost = (posts) => {
  const containerPost = document.getElementById('postContainer');
  containerPost.innerHTML = '';
  const postContent = (data) => {
    let themePost = `<div class="home__publicaciones">
    <div class="containerImgUsuaria">
      <img class="home__imgUsuaria" src="${data.element.data.photo}" alt="Imagen usuarie">
    </div>
    <div class="home__inputPublicar">
     <div class="containerNameUsarieYdelete">
        <h3 class="nombreUsuarie">${data.element.data.name}</h3>
       
      `;

  if (data.element.data.userId === auth.currentUser.uid) {
     themePost += `<button class="icons-delete delete" value=${data.element.id} id="button"><i class="fa-solid fa-trash-arrow-up"></i></button> 
     <button class="icons-delete editar" value=${data.element.id} id="button"><i class="fa-solid fa-pen-to-square"></i></button> 
     
    </div>
        <p class="publicarDescripcion publicartitulo" > ${data.element.data.titulos}.</p>
        <p class="publicarDescripcion  publicardescription"> ${data.element.data.description}.</p>
        <hr>
          <div class="likeAndComment">
            <button class="buttonLike" value=${data.element.id}> <span class="counterLike">${data.element.data.likesCounter}</span> <i class="fa-solid fa-heart"></i></button>
          <span class="counterLike">7</span>
            <i class="fa-solid fa-comment"></i>
          </div>
      </div>
  </div>
    `;
    } else {
      themePost += `</div>
    <p class="publicarDescripcion"> ${data.element.data.titulos}.</p>
    <p class="publicarDescripcion"> ${data.element.data.description}.</p>
    <hr>
      <div class="likeAndComment">
        <button class="buttonLike" value=${data.element.id}> <span class="counterLike">${data.element.data.likesCounter}</span> <i class="fa-solid fa-heart"></i></button>
      <span class="counterLike">7</span>
        <i class="fa-solid fa-comment"></i>
      </div>
  </div>
  </div>
    `;
    }
    containerPost.innerHTML += themePost;
  };

  /* Recorre los post y los despliega todos en la pantalla */
  posts.forEach(postContent);

  /* Elimina los post: Se toman todos los botones, se recorren y se les agrega el evento que al hacer click los elimina. */
  const buttonDelete = containerPost.querySelectorAll('.delete');
  buttonDelete.forEach((button) => {
    button.addEventListener('click', () => {
      if (confirm('Estas a punto de eliminar tu post! Deseas continuar?')) {
        deletedDataPost(button.value);
      }
    });
  });

  /* Dar like */
  const buttonLike = containerPost.querySelectorAll('.buttonLike');
  buttonLike.forEach((like) => {
    like.addEventListener('click', () => {
      const postIdLike = like.value;
      const userId = auth.currentUser.uid;
      likes(postIdLike, userId);
    });
  });
  // editar post botones 
const editarPost = containerPost.querySelectorAll(".editar");
editarPost.forEach((button) =>{
button.addEventListener('click',() =>{
const postId = button.value;
const containerinput = document.getElementById(postId);
const publicartitulo = containerinput.querySelectorAll(".publicartitulo");
const publicardescription= containerinput.querySelectorAll(".publicardescription");
containerinput.removeChild(publicartitulo);
containerinput.removeChild(publicardescription);
const actualizartitulo = containerinput.createElement("input");
const actualizardescription = containerinput.createElement("input");
containerinput.appendChild(actualizartitulo);
containerinput.appendChild(actualizardescription);
const valuetitulo = publicartitulo.value;
const valuedescription = publicardescription.value;
editar(postId,valuetitulo,valuedescription);

})
})

  return containerPost;
};


/* Exporta los post para mostrarlos en el home */
export const showPost = () => {
  readData(newPost, 'publicaciones');
};
