import React, { useEffect, useState } from "react";
import ReactionForm from "./ReactionForm";
import ReactionList from "./ReactionList";

function ReactionPage({locations}) {
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

  function handleDeleteReactions(e){
    const updatedReactionsArray = reactions.filter(item => {
      return item.id !== e.item.id
      })
    setReactions(updatedReactionsArray)
  }



  return (
    <div>
      
      <ReactionList
        reactions={reactions}
        onDeleteReaction={handleDeleteReactions}
      />
      
      <ReactionForm locations={locations} onAddReaction={handleAddReaction} />
    </div>
  );
}

export default ReactionPage;