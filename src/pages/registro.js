/* eslint-disable import/no-cycle */
import { footer } from '../component/footer.js';
import { newRegister, loginGoogle } from '../lib/firebase.js';
import { calcularEdad } from '../lib/index.js';

export const register = () => {
  // Acá ira lo que desplegaremos.
  const registerContainer = document.createElement('div');
  registerContainer.classList.add('containerRoot__grid');
  registerContainer.innerHTML = `
  <div class="logo gridItem">
      <img src="assets/img/logoMartini.png" alt="Imagen logo alcohdemia" class="logoImg">
  </div>
    <main class="container gridItem">
    <h1>BUENA MUCHACHA</h1>
      <form id="loginForm" class="form gridItem">
        <p>Ingresa tus datos</p>
        
        <input type="text" id="userName" placeholder="Nombre de Usuarie">
        <spam class="displayNone" id="invalidUserName">Nombre de usuarie no disponible</spam>
        <spam class="displayNone" id="emptyUserName">Ingresa un nombre de usuarie</spam>
        <input type="date" id="age" placeholder="Fecha de nacimiento" required>
        <spam class="displayNone" id="invalidAge">Lo siento, estás muy chiquite</spam>
        <spam class="displayNone" id="emptyAge">Ingresa tu fecha de nacimiento</spam>
        <input type="text" id="registerEmail" placeholder="Correo Electrónico" required>
        <spam class="displayNone" id="registerEmailInUse">Este correo ya se encuentra en uso</spam>
        <spam class="displayNone" id="missinEmail">Ingresa un correo</spam>
        <spam class="displayNone" id="loginEmailNull">Este correo no es válido</spam>
        <input type="password" id="registerPassword" placeholder="Contraseña" required>
        <spam class="displayNone" id="registerWeakPassword">La contraseña debe tener al menos 6 caracteres</spam>
        <spam class="displayNone" id="missinPassword">Ingresa una contraseña</spam>
        <button id="registro" class="register__buttonLogin" type="submit">Registro</button>
        <p>o</p>
        <button class="buttonGoogle" type="button" id="registerButton">
        <img class="buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
        </button>
      </form>
      <div class="register">
        <p>¿Ya tienes una cuenta? <a class="linkRegister" href="#/login">Inicia sesión</a></p>
      </div>
  </main>
  `;

  // Button Login google
  registerContainer
    .querySelector('#registerButton')
    .addEventListener('click', () => {
      loginGoogle();
    });

  // Button register

  registerContainer
    .querySelector('#registro')
    .addEventListener('click', (e) => {
      e.preventDefault();
      const fecha = registerContainer.querySelector('#age').value;
      const edad = calcularEdad(fecha);
      console.log(edad);

      if (edad >= 18) {
        const email = registerContainer.querySelector('#registerEmail').value;
        const password = registerContainer.querySelector('#registerPassword').value;
        const userName = registerContainer.querySelector('#userName').value;
        newRegister(email, password, userName, edad);
      } else if (edad < 18) {
        const invalidAge = registerContainer.querySelector('#invalidAge');
        invalidAge.style.display = 'block';
      } else if (edad === '') {
        const emptyAge = registerContainer.querySelector('#emptyAge');
        emptyAge.style.display = 'block';
      }
    });

  registerContainer.appendChild(footer());
  return registerContainer;
};
