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

document.body.addEventListener('click', event => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});