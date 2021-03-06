
import React, {useState} from 'react'

function LocationForm({handleAddLocation}){

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
 

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lat: lat,
          lng: lng,
        }),
      })
        .then((r) => r.json())
        .then((newLocation) => handleAddLocation(newLocation));
    }

  
    return(
        <div className="formContainer">
          <section className="form">
            <div className="center">
	            
              <h2>Report A Poo</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="latlng"
                  name="lat"
                  placeholder="Latitude"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />

                <input
                  type="text"
                  className="latlng"
                  name="lng"
                  placeholder="Longitude"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Location Name/Address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <button className="formSubmit" type="submit">Add New</button>
               

              </form>
            </div>
          </section>
        </div>
    )
}

export default LocationForm;