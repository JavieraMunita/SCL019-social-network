export const footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');
  footerContainer.classList.add('footerHome');
  footerContainer.innerHTML = `
  <p>Copyright &copy; 2022 <a target="_blank" href="https://github.com/JavieraMunita">Javiera Munita</a>, <a href="https://github.com/Escobark21" target="_blank">Karen Escobar</a> and <a target="_blank" href="https://github.com/kuveee">Kamila Villablanca</a> <br> Image by Niwat-©rawpixel (Créditos a <a href="#">Daniela Alcalá<a/>) </p>
  
  `;
  return footerContainer;
};
