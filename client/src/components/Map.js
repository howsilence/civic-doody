import React, {useMemo} from 'react';
import { GoogleMap, LoadScript, Marker, Circle, MarkerClusterer} from '@react-google-maps/api';


  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

    // const latLngLiteral = google.maps.latLngLiteral
  
 
function Map({array, setState}){
  const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[])

//   <MarkerClusterer>
//   {(clusterer) =>
//     array.map((location) => (
//       <Marker
//         key={location.lat + location.lng}
//         position={location}
//         clusterer={clusterer}

//       />
//     ))
//   }
// </MarkerClusterer>

      return (
          <LoadScript
            googleMapsApiKey="AIzaSyAqrlzhy6dWslfaHwhGbn1a6eYNzOOnVV4"
            mapIds={['80829c3ba6592d3f']}
          >
            <GoogleMap
              
              mapContainerStyle={containerStyle}
              mapContainerClassName="map-container"
              center={center}
              zoom={17}
              options={options}
            >{<>
             /* Child components, such as markers, info windows, etc. */ 
              <Marker position={center} onClick={setState} />
              <Circle center={center} raidus={1500} options={closeOptions} />
              
             
              </>}
            </GoogleMap>
          </LoadScript>
        
      )
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

export default React.memo(Map);