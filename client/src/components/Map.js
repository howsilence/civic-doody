import React from 'react'
import { GoogleMap, LoadScript} from '@react-google-maps/api';

  const containerStyle = {
    width: '400px',
    height: '400px'
    };

    const center = {
        lat: 40.7053, 
        lng: -74.0139
    };

    const mapId = "80829c3ba6592d3f"


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

  // const school = new google.maps.Marker({
  //       position: {lat:40.7053 , lng:-74.0139 },
  //       map,
  //       title: "Doody",
  //       icon:{
  //         url: "./public/assets/emojipoo.svg",
  //         scaledSize: new google.maps.Size(38, 31)
  //       }
  
  //     })

  const markers = []
      return (
        <LoadScript
          googleMapsApiKey="AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            
          >
            { /* Child components, such as markers, info windows, etc. */ 
         }
            <></>
          </GoogleMap>
        </LoadScript>
      )
}

export default React.memo(Map);