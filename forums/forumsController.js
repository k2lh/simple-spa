angular
  .module('app')
  .controller('forumsController' , forumsController);

function forumsController($scope) {
    $scope.items = [
            {icon:"toolset", title: "First item to insert into the mobile database isn't added", link: "ABC, ABC Product A"},
            {icon:"toolset", title: "iframe content disappears on Firefox", link: "XYZ"},
            {icon:"bullhorn", title: "Cannot read property 'authorize' of undefined in Google Oauth?", link: "DnB Direct"},
            {icon:"coffee", title: "CSS transition during touchmove on iOS 7 devices won't run", link: "ABC Enterprise, Supplier Manager"},
            {icon:"bug", title: "IE 11 smooth scrolling not firing intermediate scroll events", link: "Supplier Manager"},
            {icon:"lightbulb-o", title: "Cross Origin Resource Sharing (CORS) with jQuery and JBoss web service", link: "Bizmology"},
            {icon:"lightbulb-o", title: "Adding a directory from the host filesystem to the docker filesystem (not in a dockerfile)", link: "Analysis Tool"},
            {icon:"bullhorn", title: "What's the main difference between uWSGI protocol and SCGI?", link: "Analysis Tool"},
            {icon:"toolset", title: "Concatenate input values with same names via PHP", link: "XYZ"},
            {icon:"toolset", title: "Converting timestamp from descending to new/different ascending value in excel", link: "DnB Direct"}
    ];
}
