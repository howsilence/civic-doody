import React from "react";

function LocationTable({locations, handleDelete}){








    return(
        <div>
            {locations.map((location) =>
                <div><p key={location.id}>{location.name}, {location.lat},{location.lng}</p>
                <button>Comment</button><button onClick={handleDelete} id={location.id}>Resolve</button></div>
            )}
        </div>
    )
}

export default LocationTable;