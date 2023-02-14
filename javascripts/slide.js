 $(document).ready(function() {
   //comment
 	 $(".clothesforbalerina").click(function() {
 		 $(".menu").addClass("none");
     $(".wardrobe").removeClass("none");
     setTimeout(function(){
       $(".ready").removeClass("none");
     }, 15000)
 	});
     $(".cross").click(function() {
      $(".wardrobe").addClass("none");
      $(".twister").addClass("none");
      $(".floorpole").addClass("none");
      $(".menu").removeClass("none");
     });
       $(".learntodance").click(function() {
        $(".menu").addClass("none");
        $(".twister").removeClass("none");
       });
       $(".clearthefloor").click(function() {
        $(".menu").addClass("none");
        $(".floorpole").removeClass("none");
       });
       $(".copito").click(function() {
        $(".copito").addClass("none");
        });
        $(".copito2").click(function() {
         $(".copito2").addClass("none");
         });
         $(".copito3").click(function() {
          $(".copito3").addClass("none");
          });
          $(".copito4").click(function() {
           $(".copito4").addClass("none");
           });
           $(".copito5").click(function() {
            $(".copito5").addClass("none");
            });
            $(".good").click(function() {
             $(".good").addClass("none");
             $(".alert").addClass("none");
             $(".blur").addClass("none");
             });
             $(".good2").click(function() {
              $(".good2").addClass("none");
              $(".alert2").addClass("none");
              $(".blur2").addClass("none");
              });
             $(".good3").click(function() {
              $(".good3").addClass("none");
              $(".alert3").addClass("none");
              $(".blur3").addClass("none");
              });
 });
