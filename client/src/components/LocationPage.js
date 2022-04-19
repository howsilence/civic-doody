import React from 'react'
import LocationForm from './LocationForm';
import LocationTable from './LocationTable';



function LocationPage({locations, handleDelete, handleAddLocation}){

    //need a delete location function here

    return(
        <div>
            <LocationTable locations={locations} handleDelete={handleDelete} />
            <LocationForm locations={locations} handleAddLocation={handleAddLocation} />
        </div>
    )
}

export default LocationPage;