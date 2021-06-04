let app= angular.module('ComposersList', []);

app.controller('ComposerController',function($scope){

    $scope.pieces = [
        {"pic" : "images/Johann_Sebastian_Bach.jpg", "composer" : "Bach" , "title" : "Goldberg Variations"},
        {"pic" : "images/Johann_Sebastian_Bach.jpg", "composer" : "Bach" , "title" : "Harpsichord Concerto"},
        {"pic" : "images/Johann_Sebastian_Bach.jpg", "composer" : "Bach" , "title" : "Brandenburg Concerto"},
        {"pic" : "images/Johann_Sebastian_Bach.jpg", "composer" : "Bach" , "title" : "Air On G"},
        {"pic" : "images/Johann_Sebastian_Bach.jpg", "composer" : "Bach" , "title" : "Cantata #85"},
        {"pic" : "images/beethoven.jpg", "composer" : "Beethoven" , "title" : "Symphony #9"},
        {"pic" : "images/beethoven.jpg", "composer" : "Beethoven" , "title" : "Fur Elise"},
        {"pic" : "images/beethoven.jpg", "composer" : "Beethoven" , "title" : "Moonlight Sonata"},
        {"pic" : "images/beethoven.jpg", "composer" : "Beethoven" , "title" : "Violin Concerto"},
        {"pic" : "images/beethoven.jpg", "composer" : "Beethoven" , "title" : "Egmont Overture"},
        {"pic" : "images/mozart.jpg", "composer" : "Mozart" , "title" : "Eine Kleine Nachtmusic"},
        {"pic" : "images/mozart.jpg", "composer" : "Mozart" , "title" : "Piano Concerto 21"},
        {"pic" : "images/mozart.jpg", "composer" : "Mozart" , "title" : "Don Giovanni"},
        {"pic" : "images/mozart.jpg", "composer" : "Mozart" , "title" : "Jupiter Symthony"},
        {"pic" : "images/mozart.jpg", "composer" : "Mozart" , "title" : "Clarinet Concerto #3"}
    ]
});