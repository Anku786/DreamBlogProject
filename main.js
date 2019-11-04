$(document).ready(function(){
  $('#del1').click(function(){
    $('#post1').remove();
  });
});
$(document).ready(function(){
  $('#del2').click(function(){
    $('#post2').remove();
  });
});
$(document).ready(function(){
  $('#del3').click(function(){
    $('#post3').remove();
  });
});
$(document).ready(function(){
  $('#del4').click(function(){
    $('#post4').remove();
  });
});
$(document).ready(function(){
  $('#del5').click(function(){
    $('#post5').remove();
  });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("btn1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close")[1];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// /*delete modal*/
// function del() {
//     // Fetch the modal
//     var modal = document.getElementById("del");
//     // Display the modal to the user
//     modal.style.display = "block";
  
//     // Hides the modal if user clicks else where on the display
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
  
//     }
//   }



