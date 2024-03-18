$(document).ready(function() {
  let navNum = 0;

  window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
    
      switch (event.key) {
        case "ArrowDown":
          navNum++;
          if(navNum == 4){
              navNum = 0;
          }
          break;
        case "ArrowUp":
          navNum--;
          if(navNum == -1){
              navNum = 3;
          }
          break;
        case "Enter":
            $(".home").fadeOut(500);
            $(".page" + navNum).delay(500).slideDown(500);
        default:
          return; // Quit when this doesn't handle the key event.
      }
    
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
  }, true);

  $("#c0").click(function() {
    $(".page0").fadeOut(500);
    $(".home")
      .delay(500)
      .fadeIn(700);
  });

  //Code to make the selected navLink blink in an out

  var cursor = true;
  var speed = 250;
  setInterval(() => {
    if(cursor) {
      if(navNum == 0){
        console.log(navNum);
        document.getElementById("navMenu").innerHTML = ">About\n&nbspProjects\n&nbspSkills\n&nbspContact";
      } else if(navNum == 1){
        document.getElementById("navMenu").innerHTML = "&nbspAbout\n>Projects\n&nbspSkills\n&nbspContact";
      } else if(navNum == 2){
        document.getElementById("navMenu").innerHTML = "&nbspAbout\n&nbspProjects\n>Skills\n&nbspContact";
      } else{
        document.getElementById("navMenu").innerHTML = "&nbspAbout\n&nbspProjects\n&nbspSkills\n>Contact";
      }
      cursor = false;
    }else {
      document.getElementById("navMenu").innerHTML = "&nbspAbout\n&nbspProjects\n&nbspSkills\n&nbspContact";
      cursor = true;
    }
  }, speed);
});


