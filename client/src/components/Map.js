import React, {useMemo, useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle} from '@react-google-maps/api';


  const containerStyle = {
    width: '100%',
    height: '100vh'
    };

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
  const center = useMemo(() => ({  lat: 40.7053, lng: -74.0139}),[]);
  const options = useMemo(() =>({ disableDefaultUI: true, clickableIcons: false, mapId: '80829c3ba6592d3f'}),[]);
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({})

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
 
  const onSelect = item => {
      setSelected(item);
    }

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
              />
            }
             {/* {
            locations.map(item => {
              return (
              <Marker key={item.name} position={(LatLng = (item.lat + item.lng))} onClick={() => onSelect(item)}/>
              )
            })
           } */}
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


export default React.memo(Map);