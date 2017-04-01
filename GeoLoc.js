
<!DOCTYPE html>
<html>

<script> type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXYoKG3KD5cLscL4MasNCz18qL4bAdi5M&callback=initMap">
  
var geocoder = new google.maps.Geocoder();
//var address = "new york";
var address = document.getElementId("Address");

geocoder.geocode({ 'address' : address}, function(result, status){
if(status == google.maps.GeocoderStatus.OK){
  var myLat = results[0].geometry.location.lat();
  var myLong = results[0].geomtry.location.lng();
	alert("latitude" + myLat)
	alert("Longtitude" + myLong);;
}
else{
  alert("Not found");
}
});

</script>
    
</html>
