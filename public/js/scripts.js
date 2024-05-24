window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}