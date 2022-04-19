import React, {useState} from "react";


function ReactionList({ reactions, onDeleteReaction }) {
  
 
    function handleDelete(e) {
        let id = e.target.id
        fetch('http://localhost:4000/reactions/' + id, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => onDeleteReaction(e)) 
    }

    console.log(reactions)

return(
    <div>
        {reactions.map((reaction) =>
            <div>
                <p key={reaction.id}>{reaction.content}</p>
                <button onClick={handleDelete} id={reaction.id}>Delete Comment</button>
            </div>
        )}
    </div>
)
}

export default ReactionList;