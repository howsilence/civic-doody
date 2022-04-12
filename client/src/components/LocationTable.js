import React from "react";

function LocationTable({locations}){



    function handleDelete(e){
        fetch("/resolved", { method: "DELETE" })
    }





    return(
        <div>
            {locations.map((location) =>
                <a><p key={location.name}>{location.name}, {location.lat},{location.lng}</p>
                <button>React</button><button>Resolve</button></a>
            )}
        </div>
    )
}

export default LocationTable;