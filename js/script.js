
function initMap() {
  var align = {lat:41.891745,lng: -87.607467};
  var map = new google.maps.Map(document.getElementById('map'),
   {
     zoom: 14,
     center: align,
     mapTypeId: google.maps.MapTypeId.Map,
     mapTypeControlOptions: {
       position: google.maps.ControlPosition.BOTTOM_CENTER }
   });
  var marker = new google.maps.Marker({position: align, map: map});
}
window.addEventListener('load', initMap);
