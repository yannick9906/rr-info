function initMap() {
    var myLatLng = {lat: 50, lng: 8};

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 8
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        draggable: true,
        title: 'Mein Ort'
    });
}