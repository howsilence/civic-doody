import React, {useState} from "react";


function ReactionList({ reactions, onDeleteReaction }) {
    // console.log(reactions)
    // const { id, content } = reactions;
    // function handleDelete() {
    //   fetch(`http://localhost:4000/users/:user_id/reactions/:id`, {
    //     method: "DELETE",
    //   }); 
  
    //   onDeleteReaction(id);
    // }
 

    function handleDelete(e) {
        const id = e.target.id
        fetch(`http://localhost:4000/reactions/` + id, {
          method: "DELETE",
        })
        .then(resp => resp.json())
         .then(() => onDeleteReaction(e)) 
    
        // onDeleteReaction(e);
      }
    
   
  




    
//   return (
//     <ul className="cards">
//       {reactions.map((item) => 
//           <ReactionCard
//             key={item.id}
//             reaction={item.content}
//             onDeleteReaction={onDeleteReaction}
//         >
//             {/* <p>{item.content}</p> */}
//         </ReactionCard>
       
//       )}
//     </ul>
//   );


return(
    <div>
        {reactions.map((reaction) =>
            <div>
                <p key={reaction.id}>{reaction.content}, {reaction.location_id.name},{reaction.lng}</p>
                <button>Reply</button><button onClick={handleDelete} id={reaction.id}>Delete Comment</button>
            </div>
        )}
    </div>
)
}

export default ReactionList;