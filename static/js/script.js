window.initMap = function() {
  url = 'https://disccalifornia.herokuapp.com/';
  console.log("initializing map")


    //map center
    var myLatLng = {lat: 38.576550, lng: -121.495772};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: myLatLng
    });

    //parsing data from JSON
    var markersData = [];
    var gMarkers = [];
    var filterCategory = function(data) {
          
            latLngCat = {
              latLng: {lat: parseFloat(data.lat), lng: parseFloat(data.long)},
              pay: data.pay,
              played: data.played,
              isPrivate: data.private
            }
            markersData.push(latLngCat)
          
    };

    $.ajax({
      url: url,
      dataType: 'json',
      async: false,
      success: function(data){
        
          data.forEach(function(data){
            filterCategory(data)
          });
      }
    });


    //adding markers to map
    markersData.forEach(function(data){

      var icon = ['./static/img/Blue_Marker.png', './static/img/Green_Marker.png', './static/img/Yellow_Marker.png', './static/img/Red_Marker.png']
      //Red
      if(data.pay == 'yes'){
        var marker = new google.maps.Marker({
          position: data.latLng,
          icon: icon[3],
          map: map,
          category: "PAY"
        });
    }else if (data.isPrivate == 'yes'){
      var marker = new google.maps.Marker({
        position: data.latLng,
        icon: icon[1],
        map: map,
        category: "PRIVATE"
      });
    }else{
      var marker = new google.maps.Marker({
        position: data.latLng,
        icon: icon[0],
        map: map,
        title: data.crime,
        category: data.crime
      });

    }
      gMarkers.push(marker);
    })


    filterMarkers = function (category) {
      for (var i = 0; i < markersData.length; i++) {
        marker = gMarkers[i];
        if (marker.category == category || category.length === 0) {
          marker.setVisible(true);
        }
        else {
          marker.setVisible(false);
        }
      }
    }
  }








$(document).ready(function(){
  console.log("READY")
  // base URI
window.initMap()
  //Map
  console.log("initMap called")
})