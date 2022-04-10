// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// ​
// const MapContainer = () => {
//   // courtesy of (https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d)
//     //step 1 render google map
//   const mapStyles = {        
//     height: "100vh",
//     width: "100%"};
  
//   const defaultCenter = {
//     lat: 41.3851, lng: 2.1734
//   }

//   //step 2 adding clickable markers
//   const locations = [
//     {
//       name: "Location 1",
//       location: { 
//         lat: 41.3954,
//         lng: 2.162 
//       },
//     },
//     {
//       name: "Location 2",
//       location: { 
//         lat: 41.3917,
//         lng: 2.1649
//       },
//     },
//     {
//       name: "Location 3",
//       location: { 
//         lat: 41.3773,
//         lng: 2.1585
//       },
//     },
//     {
//       name: "Location 4",
//       location: { 
//         lat: 41.3797,
//         lng: 2.1682
//       },
//     },
//     {
//       name: "Location 5",
//       location: { 
//         lat: 41.4055,
//         lng: 2.1915
//       },
//     }
//   ];

//   //step 3 adding info windows
//   const [ selected, setSelected ] = useState({});
  
//   const onSelect = item => {
//     setSelected(item);
//   }

//   //step 4 dynamic marker using geolocation
//   const [ currentPosition, setCurrentPosition ] = useState({});
  
//   const success = position => {
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     }
//     setCurrentPosition(currentPosition);
//   };
  
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success);
//   })
  

//   //step5 draggable markers
//   const onMarkerDragEnd = (e) => {
//     const lat = e.latLng.lat();
//     const lng = e.latLng.lng();
//     setCurrentPosition({ lat, lng})
//   };



//   return (
//      <LoadScript
//        googleMapsApiKey='AIzaSyCLkYEQ8R10b5_KgzFHhUKZMkaN3KkjBHs'>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={defaultCenter}
//           {
//             currentPosition.lat &&
//             ( 
//               <Marker position={currentPosition}
//             ) 
//           }
//           {
//             locations.map(item => {
//               return (
//               <Marker key={item.name} 
//                 position={item.location}
//                 onClick={() => onSelect(item)}
//               />
//               )
//             })
//          }
//         {
//             selected.location && 
//             (
//               <InfoWindow
//               position={selected.location}
//               clickable={true}
//               onCloseClick={() => setSelected({})}
//             >
//               <p>{selected.name}</p>
//             </InfoWindow>
//             )
//          }
//         />
//      </LoadScript>
//   )
// }
// ​
// export default MapContainer;