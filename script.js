var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, $location, $anchorScroll) {
        // Attach a scroll function to the scope object
        // that takes an element id as a parameter
        $scope.scrollTo = function(scrollLocation) {
            // Append the scrollLocation to the URL
            // prefixed by a hash (#) symbol
            $location.hash(scrollLocation);
            // Use the anchorScroll service
            // to automatically read the hash fragment
            // from the URL
            // and scroll to the element with that id
            // on the page
            $anchorScroll.yOffset = 20; // leaves 20px above the element in view
            $anchorScroll();
        }
    });
