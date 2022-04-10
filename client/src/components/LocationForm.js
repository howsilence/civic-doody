
import React, {useState} from 'react'

function LocationForm({}){

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
 
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function takeData(locationObj){
    console.log(locationObj)
    // console.log(user)
  }
  


    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
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
          }).then((r) => {
              setIsLoading(false);
              if (r.ok){
              r.json().then((data) => takeData(data))
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
        });
      }

  
    return(
        <div className="formContainer">
          <section className="form">
            <div className="center">
	            
              <h2>Create Location</h2>
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
                  placeholder="Location Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <button className="formSubmit" type="submit">{isLoading ? "Loading.." : "Add New"}</button>
               

                <span>
                  {errors.map((err) => (
                    <span key={err}>{err}</span>
                  ))}
                </span>

              </form>
            </div>
          </section>
        </div>
    )
}

export default LocationForm;