import React from 'react'


function Map(){

    const apiKey = "AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs"
    const mapId = "80829c3ba6592d3f"
//begin actual code:
    function initMap() {
        new google.maps.Map(document.getElementById("map"), {
        mapId: mapId,
        center: { lat: 40.70, lng: 74.01 },
        zoom: 12,
    });
    }

    initMap



    return(
        <div className="map">
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs&callback=initMap&v=weekly"
                async
            >

            </script>
        </div>
    )
}

export default Map