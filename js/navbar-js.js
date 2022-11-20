var navbar = document.getElementById("home");

window.addEventListener("scroll", function() {
  var distanceScrolled = window.pageYOffset;
  if (distanceScrolled > 20) {
    navbar.ClassList.add("sticky");
  }
});