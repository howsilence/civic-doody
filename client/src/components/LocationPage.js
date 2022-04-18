import React, {useEffect, useState} from 'react'
import LocationForm from './LocationForm';
import LocationTable from './LocationTable';



function LocationPage({locations, handleDelete, handleAddLocation}){


    // const [locReactions, setLocReactions] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:4000/reactions/")
    //       .then((r) => r.json())
    //       .then((reactionsArray) => {
    //         setLocReactions(reactionsArray);
    //       });
    //   }, []);
    
    //   console.log(locReactions, "locReactions console log")
    // handleAddReaction={setLocReactions} reactions={locReactions}




    return(
        <div>
            <LocationTable locations={locations} handleDelete={handleDelete}  ></LocationTable>
            <LocationForm locations={locations} onAddLocation={handleAddLocation}></LocationForm>
        </div>
    )
}

export default LocationPage;