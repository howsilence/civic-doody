import React from 'react'
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
    };

    const center = {
        lat: 40.7053, 
        lng: 74.0139
    };



function Map(){
    // const [map, setMap] = useState("")
//     // const apiKey = "AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs"
//     const mapId = "80829c3ba6592d3f"
// //begin actual code:
//     function initMap() {
//         new google.maps.Map(document.getElementById("map"), {
//         mapId: mapId,
//         center: { lat: 40.70, lng: 74.01 },
//         zoom: 12,
//     });
//     }
  

      return (
        <LoadScript
          googleMapsApiKey="AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      )
}

export default Map;