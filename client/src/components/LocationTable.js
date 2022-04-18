import React, { useState } from "react";

function LocationTable({locations, handleDelete, handleAddReaction, reactions}){
    
    console.log(reactions)
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
  
      function handleSubmit(e) {
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
                // location_id: locationID
              }),
            }).then((r) => {
                setIsLoading(false);
                if (r.ok){
                r.json().then((data) => handleAddReaction(data))
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
          });
        }


    // function handleChange(e) {
    //         this.setState({ [e.target.name]: e.target.value });
    //     }



    return(
        <div>
            {locations.map((location) =>
                <div>
                    <p key={location.id}>{location.name}, {location.lat},{location.lng}</p>
                    <button onClick={handleDelete} id={location.id}>Resolve</button>
                    <form onSubmit={handleSubmit}>
                        <input
                         type="text"
                         className="content"
                         name="content"
                         placeholder="Comment"
                         value={content}
                         onChange={(e) => setContent(e.target.id.value)}>
                        </input>
                        <button className="formSubmit" type="submit" id={location.id}>{isLoading ? "Loading.." : "Add Comment"}</button>
                        <span>{errors.map((err) => (<span key={err}>{err}</span>))}</span>
                    </form>
                </div>
            )}
            {/* {reactions.map(reaction => <p>{reaction.content}</p>)} */}
        </div>
    )
}

export default LocationTable;