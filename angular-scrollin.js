/*
 * ilnScrollIn
 * An angularjs directive to add a class as the user scrolls down the page
 *
 *
 */
angular.module('iln-scrollin', []).
    directive('ilnScrollIn', [
        '$window',
        function ( $window ) {
        return {
            restrict: 'A',
            link:   function ( scope, elm, attrs ) {

                var elementPositionTop      = elm[0].getBoundingClientRect().top;
                var elementPositionOffset   = attrs.scrollInOffset || 0.75;
                var elementPositionClass    = attrs.scrollInClass || 'active';

                console.log( elementPositionOffset );

                function getScrollOffsets(w) {

                    // Use the specified window or the current window if no argument
                    w = w || window;

                    // This works for all browsers except IE versions 8 and before
                    if (w.pageXOffset !== null) return {
                        x: w.pageXOffset,
                        y: w.pageYOffset
                    };
                }

                if( elementPositionTop <= $window.innerHeight ){
                    elm.addClass('active');
                }

                angular.element($window).bind("scroll", function () {

                    var offset = getScrollOffsets($window);

                    if( Math.floor( offset.y + ( $window.innerHeight * elementPositionOffset ) ) >= elementPositionTop ){
                        elm.addClass( elementPositionClass );
                    }
                    scope.$apply();
                });

            }
        };
    }]);
