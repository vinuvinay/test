// Code goes here

var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.city= "";
    $scope.state="";
    $scope.zip="";
    $scope.street="";
    $scope.zip="";
  
    function initialize(){
        
             var address_pickup = (document.getElementById("pick-up"));
    var autocomplete_pckup = new google.maps.places.Autocomplete(address_pickup);
    autocomplete_pckup.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete_pckup,'place_changed',function(){
      var place = autocomplete_pckup.getPlace();
     // console.log(place.address_components,"place name selected"); 
        console.log(place.formatted_address,"place name selected");
        var array= place.formatted_address.split(",");
        console.log(array,"formatted address");
        $scope.street= array[0];
        $scope.city=array[1];
       
      if(!place.geometry){
        return;
      }
    });
    }
 $scope.init = function() {
    initialize();
  }
    });