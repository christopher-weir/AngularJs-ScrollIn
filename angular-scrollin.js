/**
 * Angular scrollin
 * An angularjs directive to add a class as the user scrolls down the page
 *
 *
 */
angular.module('angular-scrollin', []).
    directive('ilnScrollIn', [
        '$window',
        function ( $window ) {
        return {
            restrict: 'A',
            link:   function ( scope, elm, attrs ) {

                var elementPositionTop      = elm[0].getBoundingClientRect().top;
                var elementPositionOffset   = attrs.scrollInOffset || 0.75;
                var elementPositionClass    = attrs.scrollInClass || 'active';

                function getScrollOffsets(w) {

                    // Use the specified window or the current window if no argument
                    w = w || $window;

                    //
                    if (w.pageXOffset !== null) return {
                        x: w.pageXOffset,
                        y: w.pageYOffset
                    };
                }

                // if the element is within the window bound on page load
                // add the active class
                if( elementPositionTop <= $window.innerHeight ){
                    elm.addClass( elementPositionClass );
                }

                // bind scroll listner to the window
                angular.element($window).bind("scroll", function () {

                    var offset = getScrollOffsets($window);
                    // as the window scrolls check the position
                    if( Math.floor( offset.y + ( $window.innerHeight * elementPositionOffset ) ) >= elementPositionTop ){
                        elm.addClass( elementPositionClass );
                    }
                    scope.$apply();
                });

            }
        };
    }]);
