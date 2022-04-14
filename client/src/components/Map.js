import React, {useMemo, useState, useEffect, useRef} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

  //this styles the map -- could move this to .css file
  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

    //hard coded test for markers
    // const places = [
    //   {
    //     name: "Location 1",
    //     location: { 
    //       lat: 40.7053,
    //       lng: -74.0131 
    //     },
    //   },
    //   {
    //     name: "Location 2",
    //     location: { 
    //       lat: 40.7053,
    //       lng: -74.0134
    //     },
    //   },
    //   {
    //     name: "Location 3",
    //     location: { 
    //       lat: 40.7053,
    //       lng: -74.0130
    //     },
    //   },
    //   {
    //     name: "Location 4",
    //     location: { 
    //       lat: 40.7053,
    //       lng: -74.0135
    //     },
    //   },
    //   {
    //     name: "Location 5",
    //     location: { 
    //       lat: 40.7053,
    //       lng: -74.0139
    //     },
    //   }
    // ];
    
  
 
function Map({locations}){
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
  console.log(currentPosition)

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
    }

    const onMarkerDragEnd = (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setCurrentPosition({ lat, lng})
      console.log(currentPosition)
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
              // center={currentPosition.lat ? currentPosition : center}
              center={currentPosition}
              zoom={17}
              options={options}
              
            >
            {<>
              {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            ref={() => markerRef}
            draggable={true} /> :
            null
          }
          {
            locations.map(item => {
              const LatLng = {
                lat: item.lat,
                lng: item.lng
              }
              return (
              <Marker  
              key={item.id}  
              position={LatLng} 
              onClick={() => onSelect(item)}
              label={LatLng.toString()}
              />
              )
            })
          }
         {
            selected.item ?
            (
              <InfoWindow
              position={selected.item}
              onCloseClick={() => setSelected({})}
            >
              <div className="infowindow">
                <p>{selected.name}</p>
                <img src='client/public/assets/emojipoo.svg' className="small-image" alt="rental"/>
                <p>Latitude: {selected.lat}</p>
                <p>Longitude: {selected.lng}</p>
                <p>Description: {selected.name}</p>
              </div>
            </InfoWindow>
            ) : null
          }
               
          </>}

          </GoogleMap>
        </LoadScript>
        
      )
}



export default React.memo(Map);