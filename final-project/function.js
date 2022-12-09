filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeFilter");
    console.log(current)
    for (var j = 0; j < current.length; j++) {
      console.log(current[j])
      current[j].classList.remove('activeFilter')
    }
    this.className += " activeFilter";
  });
}

