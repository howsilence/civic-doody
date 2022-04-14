import React, {useMemo, useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle} from '@react-google-maps/api';

  //this styles the map -- could move this to .css file
  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

    //hard coded test for markers
    const places = [
      {
        name: "Location 1",
        location: { 
          lat: 40.7053,
          lng: -74.0131 
        },
      },
      {
        name: "Location 2",
        location: { 
          lat: 40.7053,
          lng: -74.0134
        },
      },
      {
        name: "Location 3",
        location: { 
          lat: 40.7053,
          lng: -74.0130
        },
      },
      {
        name: "Location 4",
        location: { 
          lat: 40.7053,
          lng: -74.0135
        },
      },
      {
        name: "Location 5",
        location: { 
          lat: 40.7053,
          lng: -74.0139
        },
      }
    ];
    
  
 
function Map({locations}){
  //centers the map on flatiron
  const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);
  //options for the map
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[]);
  //sets the piece of the map as selected
  const [ selected, setSelected ] = useState({});
  //sets the current location of the user as state
  const [ currentPosition, setCurrentPosition ] = useState({})

  // converts geolocator position into lat long
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  // const success = useMemo((position) => ({ 
  //   const currentPosition = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  // }))
  // fetches current user's position through google maps geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
 
  //sets state for the currently clicked icon
  const onSelect = item => {
      setSelected(item);
    }


    console.log(locations);

      return (
          <LoadScript
            googleMapsApiKey="AIzaSyAqrlzhy6dWslfaHwhGbn1a6eYNzOOnVV4"
            mapIds={['80829c3ba6592d3f']}
          >
            <GoogleMap
              
              mapContainerStyle={containerStyle}
              mapContainerClassName="map-container"
              center={currentPosition.lat ? currentPosition : center}
              zoom={17}
              options={options}
            >
            {<>
            
             {
              <Circle
              position={currentPosition.lat ? currentPosition : center}
              radius={1500}
              options={defaultOptions}
              />
            }
             {
            locations.map(item => {
              const LatLng = {
                lat: item.lat,
                lng: item.lng
              }
              return (
              <Marker key={item.name} position={LatLng} onClick={() => onSelect(item)}/>
              )
            })
           }
            {
            places.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
           }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
              
              
             
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