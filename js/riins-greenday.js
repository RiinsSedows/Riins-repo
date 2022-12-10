function openNav() {
    document.getElementById("sidemenu").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("sidemenu").style.width = "0";
  }
  
  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }