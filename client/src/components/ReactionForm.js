
import React, {useState} from 'react'

function ReactionForm({onAddReaction}){

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
          fetch("/reactions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: content
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

  
    return(
        <div className="formContainer">
          <section className="form">
            <div className="center">
	            
              <h2>Comment on a Poo</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="content"
                  name="content"
                  placeholder="Comment"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

              

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