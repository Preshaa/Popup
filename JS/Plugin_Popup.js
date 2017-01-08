$(document).ready( function() {
  $(".Popup").css({"border": "1px solid", "background-color": "gray", "color": "white", "top": "200px", "right": "200px", "left": "200px", "opacity": "0.9", "position": "absolute"});
  $(".Popup").append("<button class='close' id='closeButton' style='position: absolute; top: 0px; right: 0px; cursor= pointer'>&times;</button>");
  $(".Popup").hide();
  $(".close").click( function() {
    $(".Popup").Close();
  });
});

jQuery.fn.popup= function() {
    this.show();
};

jQuery.fn.Close=function(){
  this.hide();
};

