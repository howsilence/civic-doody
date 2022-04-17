// import React, { useState } from "react";

// function ReactionCard({ reaction, onDeleteReaction }) {
//   const { id, content } = reaction;

//   function handleDeleteClick() {
//     fetch(`http://localhost:4000/users/:user_id/reactions/:id`, {
//       method: "DELETE",
//     }); 

//     onDeleteReaction(id);
//   }


//   return (
//       <div>
//         {reaction.map(item => {
//             return (<>
//             <p>{item.content}</p>
//             <button onClick={handleDeleteClick}>Delete</button>
//             </>
//         )}) 
//         }
//       </div>
//   );
// }

// export default ReactionCard;