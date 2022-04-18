
import React, {useState} from 'react'

function ReactionForm({onAddReaction, locations}){

  const [content, setContent] = useState("");
  const [locationID, setLocationId] = useState(null)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
      // const locationID = e.target.id
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
          fetch("/locations/:location_id/reactions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: content,
              location: locationID
            }),
          }).then((r) => {
              setIsLoading(false);
              if (r.ok){
              r.json().then((data) => onAddReaction(data))
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
        });
      }

      // /locations/:location_id/reactions(.:format)
    return(
        <div className="formContainer">
          <section className="form">
            <div className="center">
	            
              <h2>Comment on a Poo</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  className="content"
                  name="content"
                  placeholder="Comment"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                 <input type="text" list="location-Ids" />
                          <datalist id="location-Ids">
                            {locations.map(
                            (item) => <option key={item.id} onChange={(e) => setLocationId(e.target.value)} value={locationID}>{item.name}</option>
                            )}
                          </datalist>


                <button className="formSubmit" type="submit">{isLoading ? "Loading.." : "Add Comment"}</button>
               

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

export default ReactionForm;