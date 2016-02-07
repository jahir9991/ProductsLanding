var app = angular.module('app', []);
app.controller("appctrl", function ($scope) {

    $scope.p = "people"
    $scope.peoples = [

        {
            image: 'images/employees/AngelaHaston.jpg',
            name: "Angela Hashton",
            title: "Director of Sales",
            text: "Angela Hashton joined the company in 2009, "

        }, {
            image: 'images/employees/MichaelLewiston.jpg',
            name: "Michael Lewiston",
            title: "Director of Sales",
            text: "Angela Hashton joined the company in 2009, "

        }, {
            image: 'images/employees/PhiTang.jpg',
            name: "Angela Hashton",
            title: "Director of Sales",
            text: "Angela Hashton joined the company in 2009, "

        }, {
            image: 'images/employees/JessicaNewton.jpg',
            name: "Angela Hashton",
            title: "Director of Sales",
            text: "Angela Hashton joined the company in 2009, "

        }
    ]

})
