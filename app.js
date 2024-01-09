function showMenu() {
    let blurMenu = document.getElementById("blur");
    blurMenu.classList.toggle('active')
    let showMenu = document.getElementById("mobile-navbar");
    showMenu.classList.toggle('active')
}
function activeLink() {
    let link = document.getElementById('link');
    link.classList.toggle('active')
}
// Function to check viewport width and toggle class
function checkViewportWidth() {
    const mobileNavbar = document.getElementById('mobile-navbar');
    const container = document.querySelector('.container');
  
    if (window.innerWidth > 768) { // Adjust the width as needed for the desktop view
      mobileNavbar.classList.remove('active');
      container.classList.remove('active');
    }
  }
  
  // Event listener for window resize
  window.addEventListener('resize', checkViewportWidth);
  
  // Call the function initially to check viewport width on page load
  checkViewportWidth();