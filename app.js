let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'views/default.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'mainController'
    })
    .otherwise({
          templateUrl: 'views/404.html'
    });
});


myApp.service('anchorSmoothScroll', function() {

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }

    };

});

// https://jsfiddle.net/tmdy51rh/5/    : reference
myApp.directive('scrollOnClick', function() {
  return {
    restrict: 'EA',
    template:'<a id="scrolltag" title="Click here to go top" class="scrollup">Scroll</a>',
    link: function(scope, $elm) {
      var scrollObject = {};
      var scrollElement = document.getElementById('scrolltag');
			window.onscroll = getScrollPosition;

      scrollElement.addEventListener("click", scrollToTop, false);

			function getScrollPosition(){
        scrollObject = {
           x: window.pageXOffset,
           y: window.pageYOffset
        }
        if(scrollObject.y > 300) {
            scrollElement.classList.add("visible");
        } else {
            scrollElement.classList.remove("visible");
        }
    	}

      function scrollToTop() {
        var scrollDuration = 500;
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function(){
          if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        },15);
      }

    }
  }
});

myApp.controller('mainController', function($scope, $location, anchorSmoothScroll) {

    $scope.gotoElement = function(eID) {
        // set the location.hash to the id of the element you wish to scroll to.
        $location.hash('bottom');
        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);
    };

    // initialize the Owl Carousel through jQuery
    $scope.owl_c = function() {
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:3500,
          autoplayHoverPause:false,
          lazyLoad: true,
          dotsEach: true,
          autoHeight: false
        });
      });
    }

    $scope.owl_c();
});
