
import React, {useState} from 'react'

function ReactionForm({onAddReaction, locations, user}){

  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
          fetch("/reactions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: content,
              user_id: user.id,
              location_id: location
            }),
          }).then((r) => {
              setIsLoading(false);
              r.json().then((data) => onAddReaction(data))
      })}

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
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  {locations.map(item => <option key={item.name} value={item.id}>{item.name}</option>)}
                </select>
                 
                <button className="formSubmit" type="submit">{isLoading ? "Loading.." : "Add Comment"}</button>
               
              </form>
            </div>
          </section>
        </div>
    )
}

export default ReactionForm;