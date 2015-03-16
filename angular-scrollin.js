/**
 * Angular scrollin
 * An angularjs directive to add a class as the user scrolls down the page
 *
 *
 */
angular.module('angular-scrollin', [])
    .directive('ilnScrollIn', [
        '$window',
        function ( $window ) {
        return {
            restrict: 'A',
            link:   function ( scope, elm, attrs ) {

                var elementPositionTop      = elm[0].getBoundingClientRect().top;
                var elementPositionOffset   = attrs.scrollInOffset || 0.75;
                var elementPositionClass    = attrs.scrollInClass || 'active';

                // bind scroll listner to the window
                angular.element($window).bind('scroll', function () {

                    elementPositionTop      = elm[0].getBoundingClientRect().top;

                    if( elementPositionTop <= $window.innerHeight * elementPositionOffset ){
                        elm.addClass( elementPositionClass );
                    }

                    scope.$apply();
                });

            }
        };
    }]);
