import React from 'react'
import LocationPage from './LocationPage';
import ReactionPage from './ReactionPage';

function CombinedLocReac({locations}){

    // function handleAddLocReaction(){
    
    // }





    return(
        <div>
            <LocationPage locations={locations}></LocationPage>
            <ReactionPage ></ReactionPage>
        </div>
    )
}

export default CombinedLocReac;