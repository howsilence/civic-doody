import React, {useMemo, useState, useEffect, useRef} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

  //this styles the map -- could move this to .css file
  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

 
function Map({locations, handleDelete}){
  //centers the map on flatiron
  // const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);
  //options for the map
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[]);
  //sets the piece of the map as selected
  const [ selected, setSelected ] = useState({});
  //sets the current location of the user as state
  const [ currentPosition, setCurrentPosition ] = useState({})
  // sets ref for the markers
  const markerRef = useRef(null);
  console.log(locations,  "locations prop")
  console.log(currentPosition,  "Position onLoad")

  // converts geolocator position into lat long
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };


  // fetches current user's position through google maps geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  },[])
 
  //sets state for the currently clicked icon
  const onSelect = item => {
      setSelected(item);
      console.log(selected, "selected Object")
    }
    

    const onMarkerDragEnd = (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setCurrentPosition({ lat, lng})
      console.log(currentPosition, "marker drag setPosition")
    };


      return (
          <LoadScript
            googleMapsApiKey="AIzaSyAqrlzhy6dWslfaHwhGbn1a6eYNzOOnVV4"
            mapIds={['80829c3ba6592d3f']}
          >
            <GoogleMap
              
              mapContainerStyle={containerStyle}
              mapContainerClassName="map-container"
              draggable={true}
              center={currentPosition}
              zoom={17}
              options={options}
              
            >
            {<>
              {
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            ref={() => markerRef}
            draggable={true} />
          }
          {
            locations.map(item => {
              const LatLng = {
                lat: item.lat,
                lng: item.lng
              }
              return (
                <InfoWindow 
                key={item.id}
                label={item.name}  
                position={LatLng}
                clickable={true}
                onClick={() => onSelect(item)}> 
                  <div className="infowindow">
                    <p>{item.name}</p>
                    <img src='../assets/emojipoo.svg' className="small-image" alt="poo"/>
                    <p>Lat/Lng: {item.lat},{item.lng}</p>
                    <p>Description: {item.reactions.content}</p>
                    <button onClick={handleDelete}>Resolve</button>
                    <button>React</button>
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
//working infowindow
/* <InfoWindow 
              key={item.id}
              label={item.name}  
              position={LatLng}
              clickable={true}
              onClick={() => onSelect(item)}
              
              ><div className="infowindow">
              <p>{selected.name}</p>
              <img src='../assets/emojipoo.svg' className="small-image" alt="poo"/>
              <p>Latitude: {selected.lat}</p>
              <p>Longitude: {selected.lng}</p>
              <p>Description: {selected.name}</p>
            </div></InfoWindow>
              ) */

              // <Marker 
              // key={item.id} 
              // postion={LatLng}
              // onClick={() => onSelect(item)}
              // label={item.name}
              //  />

export default React.memo(Map);