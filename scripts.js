function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "flex";
  }

  const navToggle =
      document.getElementById('nav-toggle');
const navMenu =
      document.getElementById('mySidenav2');
navToggle.addEventListener('click', () => {
                                   navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');                  
});