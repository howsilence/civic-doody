import React from "react";

function LocationTable({locations, handleDelete}){



    // function handleDelete(e){
    //     fetch("/resolved", { method: "DELETE" })
    // }
  





    return(
        <div>
            {locations.map((location) =>
                <div><p key={location.name}>{location.name}, {location.lat},{location.lng}</p>
                <button>React</button><button onClick={handleDelete} id={location.id}>Resolve</button></div>
            )}
        </div>
    )
}

export default LocationTable;