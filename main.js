

window.onscroll = function () { myFunction() };

function myFunction() {
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
    document.getElementById("header").style.borderBottom = "1px solid #b8bbc8";
  } else {
    document.getElementById("header").style.borderBottom = "none";
  }
}