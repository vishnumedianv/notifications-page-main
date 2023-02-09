function markasread() {
  document.getElementById("notification").innerHTML = 0;

  var msgbox = document.getElementsByClassName("unread");
  var len = msgbox.length;

  for (var i = 0; i < len; i++) {
    msgbox[i].style.backgroundColor = "white";
  }

  var dot = document.getElementsByClassName("dot");
  var len = dot.length;

  for (var i = 0; i < len; i++) {
    dot[i].style.visibility = "hidden";
  }
}
