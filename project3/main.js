$(function(){


    var T, 
    write = {
      settings: {
        letters: $('.text'),
      },
      init: function() {
        T = this.settings;
          var self=this;
          
  
        this.putIntab();
      },
      putIntab: function(){
        for(var i=0;i<T.letters.length;i++){
  
          var tableau= $.trim(T.letters[i].innerHTML).split(/(?=[^>]*(?:<|$))/);
          //tableau=["te","st"];
          //efface le texte existant
          T.letters[i].innerText=" ";
          //affiche le nouveau texte caractere par caractère
          this.afficheDelay(i,tableau);
         }
      },
      afficheDelay: function(champ,texte){
          var y = 0;
        var self = this;
        //parcours le tableau dans un interval donné en 2nd param
        var affiche = setInterval(function(){
          //ajoute dans le texte d'id champ, la lettre y du tableau
          var lettre = texte[y];
          $("<span>"+lettre+"<span>").appendTo(self.settings.letters[champ]);
          y++;
          if (y==texte.length){
            clearInterval(affiche)
          }
        },60);//temps entre chaque caracteres
      },
    };
    write.init();


    var $window = $(window);

    $('section[data-type="background"]').each(function() {
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // Put together the final background position (bgp)
        var bgp = '50% ' + yPos + 'px';
        // Move the background
        $bgobj.css("background-position", bgp);
      });
    });



    $.fn.timeline = function() {
      var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
      "background-image",
      "url(" +
          selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
          ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
              "background-image",
              "url(" +
              selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
              "background-image",
              "url(" +
              $(this)
                  .find(selectors.img)
                  .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
          }
      });
      });
  };
  $("#timeline-1").timeline();



  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
});