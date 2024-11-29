
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link .nav-item');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth < 992) { 
              navbarToggler.click();
          }
      });
  });
});
document.getElementById('contact-form').addEventListener('click', function(e) {
    e.preventDefault(); 
    const name= document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (name === "" || email === "" || phone === "") {
        alert("please enter All fields");
    } else {
        alert("login sucessful");
    }
});