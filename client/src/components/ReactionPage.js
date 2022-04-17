import React, { useEffect, useState } from "react";
import ReactionForm from "./ReactionForm";
import ReactionList from "./ReactionList";

function ReactionPage() {
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users/:user_id/reactions")
      .then((r) => r.json())
      .then((reactionsArray) => {
        setReactions(reactionsArray);
      });
  }, []);

  function handleAddReaction(newReaction) {
    const updatedReactionsArray = [...reactions, newReaction];
    setReactions(updatedReactionsArray);
  }

//   function handleDeleteReactions(id) {
//     const updatedReactionsArray = reactions.filter((item) => item.id !== id);
//     setReactions(updatedReactionsArray);
//   }

  function handleDeleteReactions(e){
    const updatedReactions = reactions.filter(item => {
      return item.id !== e.item.id
      })
    setReactions(updatedReactions)
  }



  return (
    <div>
      <ReactionForm onAddReaction={handleAddReaction} />
      <ReactionList
        reactions={reactions}
        onDeleteReaction={handleDeleteReactions}
        
      />
    </div>
  );
}

export default ReactionPage;