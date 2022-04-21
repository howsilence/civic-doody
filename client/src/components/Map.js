import React, {useMemo, useState, useEffect, useRef} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

  //this styles the map -- could move this to .css file
  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

 
function Map({locations, handleDelete, toggle, setToggle}){
  //centers the map on flatiron
  const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);

  const codedMarker = useMemo(() => ({  lat: 40.704978735779115, lng: -74.01362373247149}),[]);
  //options for the map
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: 'ffba16a32e78594c'}),[]);
  
  const optionsDark = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[]);

  //sets the current location of the user as state
  const [ currentPosition, setCurrentPosition ] = useState({})
  // sets ref for the markers
  const markerRef = useRef(null);

  


  // converts geolocator position into lat long
  // success = a position object which contains current position that is made up of lat and lng
  const success = position => {
    // console.log("start position callback")
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
    // console.log("end position callback")
  };
  

  // fetches current user's position through google maps geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);   
  },[])
 
  //grabs the value of the "YOU" marker and converts it to lat long
    const onMarkerDragEnd = (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setCurrentPosition({ lat, lng})
      //i want to pass this value to maplocationform so that it can be submitted as a new location
      console.log(currentPosition, "onMarkerDragEnd value")
    };

    // replace in loadscript and options
    // light mode 'ffba16a32e78594c'
    // dark mode '80829c3ba6592d3f'
      return (
          <LoadScript
            googleMapsApiKey={"AIzaSyAqrlzhy6dWslfaHwhGbn1a6eYNzOOnVV4"}
            mapIds={(toggle) ? ['80829c3ba6592d3f'] : ['ffba16a32e78594c']}
          >
            
            <GoogleMap
              mapContainerStyle={containerStyle}
              mapContainerClassName="map-container"
              center={center}
              zoom={14}
              options={(toggle) ? optionsDark : options}
            >
            {<>
              {
                <Marker
                  // position={currentPosition}
                  position={codedMarker}
                  onDragEnd={(e) => onMarkerDragEnd(e)}
                  ref={() => markerRef}
                  label="YOU"
                  draggable={true}
                  // onClick={console.log(currentPosition)}
                  />
                }
                {locations.map(item => {
                  const LatLng = {
                  lat: item.lat,
                  lng: item.lng
                  }
                return (
                <InfoWindow 
                  key={item.id}
                  label={item.name}  
                  position={LatLng}
                  > 
                    <div className="infowindow">
                      <p>{item.name}</p>
                      <img src='../assets/emojipoo.svg' className="small-image" alt="poo"/>
                      <p>Lat/Lng: {item.lat},{item.lng}</p>
                      {/* <p>Description: </p> */}
                      <button id={item.id} onClick={handleDelete}>Resolve</button>
                    </div>
                </InfoWindow>
                )
              })
            }
        
               
          </>}

          </GoogleMap>
        </LoadScript>
        
      )
}

export default React.memo(Map);