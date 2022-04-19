import React, {useMemo, useState, useEffect, useRef} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

  //this styles the map -- could move this to .css file
  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

 
function Map({locations, handleDelete}){
  //centers the map on flatiron
  const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);
  //options for the map
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[]);
  
  //sets the current location of the user as state
  const [ currentPosition, setCurrentPosition ] = useState({})
  // sets ref for the markers
  const markerRef = useRef(null);
  // console.log(locations,  "locations prop")


  // converts geolocator position into lat long
  //success = a position object which contains current position that is made up of lat and lng
  const success = position => {
    console.log("start position callback")
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
    console.log("end position callback")
  };
  

  // fetches current user's position through google maps geolocation
  useEffect(() => {
    // console.log("loaded")
    navigator.geolocation.getCurrentPosition(success);
    console.log(success, "Geolocation: success loaded");
    
  },[])
 
  //grabs the value of the "YOU" marker and converts it to lat long
    const onMarkerDragEnd = (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setCurrentPosition({ lat, lng})
      //i want to pass this value to maplocationform so that it can be submitted as a new location
      console.log(currentPosition, "onMarkerDragEnd value")
    };


      return (
          <LoadScript
            googleMapsApiKey={"AIzaSyAqrlzhy6dWslfaHwhGbn1a6eYNzOOnVV4"}
            mapIds={['80829c3ba6592d3f']}
          >
            
            <GoogleMap
              mapContainerStyle={containerStyle}
              mapContainerClassName="map-container"
              center={currentPosition.lat ? currentPosition : center}
              zoom={14}
              options={options}
            >
            {<>
              {
                <Marker
                  position={currentPosition}
                  // position={center}
                  onDragEnd={(e) => onMarkerDragEnd(e)}
                  ref={() => markerRef}
                  label="YOU"
                  draggable={true}
                  size={14}
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
                      <p>Description: </p>
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